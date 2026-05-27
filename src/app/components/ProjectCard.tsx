"use client";

import { AvatarGroup, Flex, Heading, SmartLink, Text } from "@/once-ui/components";
import { useEffect, useState } from "react";
import ParallaxImage from "./ParallaxImage";
import { TiltCard } from "./TiltCard";

interface ProjectCardProps {
    href: string;
    images: string[];
    title: string;
    content: string;
    description: string;
    avatars: { src: string }[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    href,
    images = [],
    title,
    content,
    description,
    avatars
}) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [visible, setVisible] = useState(false);

    // 🔥 trigger animation on mount
    useEffect(() => {
        const timer = setTimeout(() => setVisible(true), 150);
        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = () => {
        if (images.length > 1) {
            setVisible(false); // reset animation
            setTimeout(() => {
                setActiveIndex((prev) => (prev + 1) % images.length);
                setVisible(true);
            }, 200);
        }
    };

    const descriptionItems = description?.split("\n") || [];

    return (
        <TiltCard className="clay" intensity={5}>
        <Flex
            fillWidth
            direction="column"
            style={{
                borderRadius: '24px',
                overflow: 'hidden',
            }}
            className="project-card"
        >

            {/* 🔥 HERO IMAGE */}
            <Flex
                onClick={handleImageClick}
                style={{
                    position: 'relative',
                    cursor: images.length > 1 ? 'pointer' : 'default',
                    overflow: 'hidden',
                    borderRadius: '24px',
                    transform: 'translateZ(40px)',
                }}
            >
                <ParallaxImage src={images[activeIndex]} />
            </Flex>

            {/* 🔥 CONTENT */}
            <Flex
                direction="column"
                padding="l"
                gap="s"
            >
                {/* 🔥 Title (fade in) */}
                <div
                    style={{
                        opacity: visible ? 1 : 0,
                        transform: visible ? "translateY(0)" : "translateY(20px)",
                        transition: "all 0.5s ease",
                    }}
                >
                    <Heading
                        as="h2"
                        variant="display-strong-s"
                        style={{ letterSpacing: '-0.02em' }}
                    >
                        {title}
                    </Heading>
                </div>

                {/* 🔥 Description (stagger) */}
                {descriptionItems.length > 0 && (
                    <Flex direction="column" gap="xs">
                        {descriptionItems.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    opacity: visible ? 1 : 0,
                                    transform: visible ? "translateY(0)" : "translateY(16px)",
                                    transition: `all 0.5s ease ${i * 0.08}s`,
                                }}
                            >
                                <Text
                                    variant="body-default-m"
                                    onBackground="neutral-weak"
                                    style={{ maxWidth: '600px' }}
                                >
                                    {item}
                                </Text>
                            </div>
                        ))}
                    </Flex>
                )}

                {/* 🔥 Footer */}
                <Flex
                    fillWidth
                    justifyContent="space-between"
                    alignItems="center"
                    marginTop="s"
                >
                    {/* avatars stagger */}
                    {avatars?.length > 0 && (
                        <Flex gap="4">
                            {avatars.map((avatar, i) => (
                                <div
                                    key={i}
                                    style={{
                                        opacity: visible ? 1 : 0,
                                        transform: visible ? "translateY(0)" : "translateY(10px)",
                                        transition: `all 0.4s ease ${i * 0.05}s`,
                                    }}
                                >
                                    <img
                                        src={avatar.src}
                                        style={{
                                            width: 32,
                                            height: 32,
                                            borderRadius: "50%",
                                        }}
                                    />
                                </div>
                            ))}
                        </Flex>
                    )}

                    {/* CTA */}
                    <div
                        style={{
                            opacity: visible ? 1 : 0,
                            transform: visible ? "translateY(0)" : "translateY(10px)",
                            transition: "all 0.5s ease 0.2s",
                        }}
                    >
                        <SmartLink href={href}>
                            <Text
                                variant="body-default-m"
                                style={{
                                    fontWeight: 500,
                                    opacity: 0.8,
                                }}
                            >
                                View Project →
                            </Text>
                        </SmartLink>
                    </div>
                </Flex>
            </Flex>
        </Flex>
        </TiltCard>
    );
};