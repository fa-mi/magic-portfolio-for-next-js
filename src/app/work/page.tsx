import { getPosts } from '@/app/utils';
import { Flex, Heading, Text, RevealFx } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';
import { baseURL, person, work } from '../resources';

export function generateMetadata() {
	const title = work.title;
	const description = work.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/work`,
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

export default function Work() {
    let allProjects = getPosts(['src', 'app', 'work', 'projects']);

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
                        '@type': 'CollectionPage',
                        headline: work.title,
                        description: work.description,
                        url: `https://${baseURL}/projects`,
                        image: `${baseURL}/og?title=Design%20Projects`,
                        author: {
                            '@type': 'Person',
                            name: person.name,
                        },
                        hasPart: allProjects.map(project => ({
                            '@type': 'CreativeWork',
                            headline: project.metadata.title,
                            description: project.metadata.summary,
                            url: `https://${baseURL}/projects/${project.slug}`,
                            image: `${baseURL}/${project.metadata.image}`,
                        })),
                    }),
                }}
            />
            <Flex
                fillWidth
                direction="column"
                gap="s"
                paddingX="l"
                paddingTop="l"
                paddingBottom="xl"
            >
                <RevealFx translateY="2">
                    <Text
                        variant="label-default-s"
                        onBackground="accent-weak"
                        style={{ textTransform: "uppercase", letterSpacing: "0.14em" }}
                    >
                        Portfolio
                    </Text>
                </RevealFx>
                <RevealFx translateY="4">
                    <Heading variant="display-strong-l">
                        {work.title}
                    </Heading>
                </RevealFx>
                <RevealFx translateY="8" delay={0.1}>
                    <Text
                        variant="body-default-l"
                        onBackground="neutral-weak"
                        style={{ maxWidth: "52ch" }}
                    >
                        {work.description}
                    </Text>
                </RevealFx>
            </Flex>
            <Projects/>
        </Flex>
    );
}