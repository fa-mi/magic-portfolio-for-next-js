import { Avatar, Button, Flex, Grid, Heading, Icon, LetterFx, SmartImage, Tag, Text } from '@/once-ui/components';
import { person, about, social, baseURL } from '@/app/resources'
import TableOfContents from '@/app/about/components/TableOfContents';
import { TiltCard } from '@/app/components';
import styles from '@/app/about/about.module.scss'
import AnimateIn, { AvatarMotion } from '@/app/about/components/AnimateIn';
import CollapsibleAchievements from '@/app/about/components/CollapsibleAchievements';

export function generateMetadata() {
	const title = about.title;
	const description = about.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

const structure = [
    { 
        title: about.intro.title,
        display: about.intro.display,
        items: []
    },
    { 
        title: about.studies.title,
        display: about.studies.display,
        items: about.studies.institutions.map(institution => institution.name)
    },
    {
        title: about.work.title,
        display: about.work.display,
        items: about.work.experiences.map(experience => experience.company)
    },
    {
        title: about.technical.title,
        display: about.technical.display,
        items: about.technical.skills.map(skill => skill.title)
    },
    {
        title: about.achievements.title,
        display: about.achievements.display,
        items: about.achievements.skills.map(skill => skill.title)
    },
]

function SectionEyebrow({ children }: { children: React.ReactNode }) {
    return (
        <Text
            variant="label-default-s"
            onBackground="accent-weak"
            style={{ textTransform: 'uppercase', letterSpacing: '0.14em' }}>
            {children}
        </Text>
    );
}

function AccentDot() {
    return (
        <span
            style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: 'var(--accent-solid-strong)',
                boxShadow: '0 0 8px var(--accent-solid-medium)',
                flexShrink: 0,
            }}
        />
    );
}

export default function About() {
    return (
        <Flex
            fillWidth maxWidth="m"
            direction="column">
            <script
                type="application/ld+json"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'Person',
                        name: person.name,
                        jobTitle: person.role,
                        description: about.intro.description,
                        url: `https://${baseURL}/about`,
                        image: `${baseURL}${person.avatar}`,
                        sameAs: social
                            .filter((item) => item.link && !item.link.startsWith('mailto:')) // Filter out empty links and email links
                            .map((item) => item.link),
                        worksFor: {
                            '@type': 'Organization',
                            name: about.work.experiences[0].company || ''
                        },
                    }),
                }}
            />
            { about.tableOfContent.display && (
                <Flex
                    style={{ left: '0', top: '50%', transform: 'translateY(-50%)' }}
                    position="fixed"
                    paddingLeft="24" gap="32"
                    direction="column" hide="s">
                    <TableOfContents
                        structure={structure}
                        about={about} />
                </Flex>
            )}
            <Flex
                fillWidth
                mobileDirection="column" justifyContent="center">
                { about.avatar.display && (
                    <Flex
                        minWidth="160" paddingX="l" paddingBottom="xl" gap="m"
                        flex={3} direction="column" alignItems="center">
                        <AvatarMotion>
                            <Avatar
                            src={person.avatar}
                            size="xl"/>
                        </AvatarMotion>
                        <Flex
                            gap="8"
                            alignItems="center">
                            <Icon
                                onBackground="accent-weak"
                                name="globe"/>
                            {person.location}
                        </Flex>
                        { person.languages.length > 0 && (
                            <Flex
                                wrap
                                gap="8">
                                {person.languages.map((language, index) => (
                                    <Tag
                                        key={index}
                                        size="l">
                                        {language}
                                    </Tag>
                                ))}
                            </Flex>
                        )}
                    </Flex>
                )}
                <Flex
                    className={styles.blockAlign}
                    fillWidth flex={9} maxWidth={40} direction="column">
                    <Flex
                        id={about.intro.title}
                        fillWidth minHeight="160"
                        direction="column" justifyContent="center"
                        gap="8"
                        marginBottom="m"
                        style={{
                            borderBottom: '1px solid var(--neutral-alpha-weak)',
                            paddingBottom: 'var(--static-space-24)',
                        }}>
                        <AnimateIn>
                            <Flex
                                className={styles.blockAlign}
                                alignItems="center" gap="8"
                                paddingX="12" paddingY="4" radius="full"
                                style={{
                                    border: '1px solid var(--neutral-alpha-weak)',
                                    background: 'var(--surface-background)',
                                    width: 'fit-content',
                                }}>
                                <AccentDot />
                                <Text variant="label-default-s" onBackground="neutral-weak">
                                    Available for new projects
                                </Text>
                            </Flex>
                        </AnimateIn>
                        <AnimateIn delay={0.05}>
                            <Heading
                                className={styles.textAlign}
                                variant="display-strong-xl">
                                {person.name}
                            </Heading>
                        </AnimateIn>
                        <AnimateIn delay={0.1}>
                            <Text
                                className={styles.textAlign}
                                variant="display-default-xs"
                                onBackground="neutral-weak">
                                <LetterFx trigger="instant" speed="medium">
                                    {person.role}
                                </LetterFx>
                            </Text>
                        </AnimateIn>
                        {social.length > 0 && (
                            <AnimateIn delay={0.2}>
                                <Flex
                                    className={styles.blockAlign}
                                    paddingTop="12" gap="8" wrap>
                                    {social.map((item) => (
                                        item.link && (
                                            <Button
                                                key={item.name}
                                                href={item.link}
                                                prefixIcon={item.icon}
                                                label={item.name}
                                                size="s"
                                                variant="tertiary"/>
                                        )
                                    ))}
                                </Flex>
                            </AnimateIn>
                        )}
                    </Flex>

                    { about.intro.display && (
                        <Flex
                            direction="column"
                            textVariant="body-default-l"
                            fillWidth gap="m" marginBottom="xl">
                            {about.intro.description}
                        </Flex>
                    )}

                    { about.studies.display && (
                        <>
                            <AnimateIn>
                                <Flex direction="column" gap="8" marginBottom="m">
                                    <SectionEyebrow>Education</SectionEyebrow>
                                    <Heading
                                        as="h2"
                                        id={about.studies.title}
                                        variant="display-strong-s">
                                        {about.studies.title}
                                    </Heading>
                                </Flex>
                            </AnimateIn>
                            <Flex
                                direction="column"
                                fillWidth gap="m" marginBottom="40">
                                {about.studies.institutions.map((institution, index) => (
                                    <AnimateIn key={`${institution.name}-${index}`} delay={index * 0.08}>
                                        <TiltCard intensity={4}>
                                        <Flex
                                            fillWidth gap="8"
                                            padding="l"
                                            direction="column"
                                            className="clay">
                                            <Flex
                                                fillWidth
                                                justifyContent="space-between"
                                                alignItems="flex-start"
                                                gap="m">
                                                <Text
                                                    id={institution.name}
                                                    variant="heading-strong-l">
                                                    {institution.name}
                                                </Text>
                                                <Tag size="s">{institution.timeframe}</Tag>
                                            </Flex>
                                            <Text
                                                variant="body-default-m"
                                                onBackground="neutral-weak">
                                                {institution.description}
                                            </Text>
                                            {institution.images.length > 0 && (
                                                <Flex
                                                    fillWidth paddingTop="s" gap="12"
                                                    wrap>
                                                    {institution.images.map((image, idx) => (
                                                        <AnimateIn key={idx} y={10}>
                                                            <Flex
                                                                border="neutral-medium"
                                                                borderStyle="solid-1"
                                                                radius="m"
                                                                minWidth={image.width} height={image.height}>
                                                                <SmartImage
                                                                    enlarge
                                                                    radius="m"
                                                                    sizes={image.width.toString()}
                                                                    alt={image.alt}
                                                                    src={image.src}/>
                                                            </Flex>
                                                        </AnimateIn>
                                                    ))}
                                                </Flex>
                                            )}
                                        </Flex>
                                        </TiltCard>
                                    </AnimateIn>
                                ))}
                            </Flex>
                        </>
                    )}

                    { about.work.display && (
                        <>
                            <AnimateIn>
                                <Flex direction="column" gap="8" marginBottom="m">
                                    <SectionEyebrow>Experience</SectionEyebrow>
                                    <Heading
                                        as="h2"
                                        id={about.work.title}
                                        variant="display-strong-s">
                                        {about.work.title}
                                    </Heading>
                                </Flex>
                            </AnimateIn>
                            <Flex
                                direction="column"
                                fillWidth gap="m" marginBottom="40">
                                {about.work.experiences.map((experience, index) => (
                                    <AnimateIn key={`${experience.company}-${index}`} delay={index * 0.08}>
                                        <TiltCard intensity={4}>
                                        <Flex
                                            fillWidth
                                            padding="l"
                                            gap="s"
                                            direction="column"
                                            className="clay">
                                            <Flex
                                                fillWidth
                                                justifyContent="space-between"
                                                alignItems="flex-start"
                                                gap="m">
                                                <Flex direction="column" gap="4">
                                                    <Text
                                                        id={experience.company}
                                                        variant="heading-strong-l">
                                                        {experience.company}
                                                    </Text>
                                                    <Flex alignItems="center" gap="8">
                                                        <AccentDot />
                                                        <Text
                                                            variant="body-default-s"
                                                            onBackground="accent-weak">
                                                            {experience.role}
                                                        </Text>
                                                    </Flex>
                                                </Flex>
                                                <Tag size="s">{experience.timeframe}</Tag>
                                            </Flex>
                                            <CollapsibleAchievements
                                                achievements={experience.achievements}
                                                company={experience.company} />
                                            {experience.images.length > 0 && (
                                                <Flex
                                                    fillWidth paddingTop="m" gap="12"
                                                    wrap>
                                                    {experience.images.map((image, idx) => (
                                                        <AnimateIn key={idx} y={10}>
                                                            <Flex
                                                                border="neutral-medium"
                                                                borderStyle="solid-1"
                                                                radius="m"
                                                                minWidth={image.width} height={image.height}>
                                                                <SmartImage
                                                                    enlarge
                                                                    radius="m"
                                                                    sizes={image.width.toString()}
                                                                    alt={image.alt}
                                                                    src={image.src}/>
                                                            </Flex>
                                                        </AnimateIn>
                                                    ))}
                                                </Flex>
                                            )}
                                        </Flex>
                                        </TiltCard>
                                    </AnimateIn>
                                ))}
                            </Flex>
                        </>
                    )}

                    { about.technical.display && (
                        <>
                            <AnimateIn>
                                <Flex direction="column" gap="8" marginBottom="m">
                                    <SectionEyebrow>Expertise</SectionEyebrow>
                                    <Heading
                                        as="h2"
                                        id={about.technical.title}
                                        variant="display-strong-s">
                                        {about.technical.title}
                                    </Heading>
                                </Flex>
                            </AnimateIn>
                            <Grid
                                fillWidth
                                columns="repeat(2, 1fr)"
                                mobileColumns="1col"
                                gap="m"
                                marginBottom="40">
                                {about.technical.skills.map((skill, index) => (
                                    <AnimateIn key={`${skill.title}-${index}`} delay={index * 0.06}>
                                        <TiltCard intensity={4}>
                                            <Flex
                                                fillWidth fillHeight gap="8"
                                                padding="l"
                                                direction="column"
                                                className="clay">
                                                <Flex alignItems="center" gap="8">
                                                    <AccentDot />
                                                    <Text
                                                        id={skill.title}
                                                        variant="heading-strong-m">
                                                        {skill.title}
                                                    </Text>
                                                </Flex>
                                                <Text
                                                    variant="body-default-s"
                                                    onBackground="neutral-weak">
                                                    {skill.description}
                                                </Text>
                                            </Flex>
                                        </TiltCard>
                                    </AnimateIn>
                                ))}
                            </Grid>
                        </>
                    )}

                    { about.achievements.display && (
                        <>
                            <AnimateIn>
                                <Flex direction="column" gap="8" marginBottom="m">
                                    <SectionEyebrow>Recognition</SectionEyebrow>
                                    <Heading
                                        as="h2"
                                        id={about.achievements.title}
                                        variant="display-strong-s">
                                        {about.achievements.title}
                                    </Heading>
                                </Flex>
                            </AnimateIn>
                            <Flex
                                direction="column"
                                fillWidth gap="m">
                                {about.achievements.skills.map((skill, index) => (
                                    <AnimateIn key={`${skill.title}-${index}`} delay={index * 0.08}>
                                        <TiltCard intensity={4}>
                                        <Flex
                                            fillWidth gap="s"
                                            padding="l"
                                            direction="column"
                                            className="clay">
                                            <Text
                                                variant="heading-strong-l">
                                                {skill.title}
                                            </Text>
                                            {Array.isArray(skill.description) ? (
                                                <Flex direction="column" gap="12">
                                                    {skill.description.map((item, idx) => (
                                                        <Text
                                                            key={idx}
                                                            variant="body-default-m"
                                                            onBackground="neutral-weak">
                                                            {item}
                                                        </Text>
                                                    ))}
                                                </Flex>
                                            ) : (
                                                <Text
                                                    variant="body-default-m"
                                                    onBackground="neutral-weak">
                                                    {skill.description}
                                                </Text>
                                            )}
                                            {skill.images.length > 0 && (
                                                <Flex
                                                    fillWidth paddingTop="s" gap="12"
                                                    wrap>
                                                    {skill.images.map((image, idx) => (
                                                        <AnimateIn key={idx} y={10}>
                                                            <Flex
                                                                border="neutral-medium"
                                                                borderStyle="solid-1"
                                                                radius="m"
                                                                minWidth={image.width} height={image.height}>
                                                                <SmartImage
                                                                    enlarge
                                                                    radius="m"
                                                                    sizes={image.width.toString()}
                                                                    alt={image.alt}
                                                                    src={image.src}/>
                                                            </Flex>
                                                        </AnimateIn>
                                                    ))}
                                                </Flex>
                                            )}
                                        </Flex>
                                        </TiltCard>
                                    </AnimateIn>
                                ))}
                            </Flex>
                        </>
                    )}
                </Flex>
            </Flex>
        </Flex>
    );
}