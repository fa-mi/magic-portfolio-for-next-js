'use client';

import React from 'react';
import { Flex, Text } from '@/once-ui/components';
import styles from '@/app/about/about.module.scss';

interface TableOfContentsProps {
    structure: {
        title: string;
        display: boolean;
        items: string[];
    }[];
    about: {
        tableOfContent: {
            display: boolean;
            subItems: boolean;
        };
    };
    // 'fixed' floats at the left edge of wide screens; 'inline' sits sticky in
    // the avatar column on tablets and small laptops, where 'fixed' has no room.
    variant?: 'fixed' | 'inline';
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ structure, about, variant = 'fixed' }) => {
    const inline = variant === 'inline';
    const scrollTo = (id: string, offset: number) => {
        const element = document.getElementById(id);
        if (element) {
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.scrollY - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth',
            });
        }
    };

    if (!about.tableOfContent.display) return null;

    return (
        <Flex
            className={inline ? styles.tocInline : styles.tableOfContents}
            style={inline ? undefined : {
                left: '0',
                top: '50%',
                transform: 'translateY(-50%)',
                whiteSpace: 'nowrap'
            }}
            position={inline ? undefined : 'fixed'}
            paddingLeft={inline ? undefined : '24'}
            gap={inline ? '24' : '32'}
            fillWidth={inline}
            direction="column" hide="s">
            {structure
                .filter(section => section.display)
                .map((section, sectionIndex) => (
                <Flex key={sectionIndex} gap="12" direction="column">
                    <Flex
                        style={{ cursor: 'pointer' }}
                        className={styles.hover}
                        gap="8"
                        alignItems="center"
                        onClick={() => scrollTo(section.title, 80)}>
                        <Flex
                            height="1" width="16"
                            style={{ flexShrink: 0 }}
                            background="neutral-strong">
                        </Flex>
                        <Text>
                            {section.title}
                        </Text>
                    </Flex>
                    {about.tableOfContent.subItems && (
                        <>
                            {section.items.map((item, itemIndex) => (
                                <Flex
                                    key={itemIndex}
                                    style={{ cursor: 'pointer' }}
                                    className={styles.hover}
                                    gap="12" paddingLeft="24"
                                    alignItems="center"
                                    onClick={() => scrollTo(item, 80)}>
                                    <Flex
                                        height="1" width="8"
                                        style={{ flexShrink: 0 }}
                                        background="neutral-strong">
                                    </Flex>
                                    <Text>
                                        {item}
                                    </Text>
                                </Flex>
                            ))}
                        </>
                    )}
                </Flex>
            ))}
        </Flex>
    );
};

export default TableOfContents;