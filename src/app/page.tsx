import React from 'react';

import { Heading, Flex, Text, Button,  Avatar, RevealFx, SmartImage } from '@/once-ui/components';
import { Projects } from '@/app/work/components/Projects';

import { about, baseURL, home, newsletter, person, routes, } from '@/app/resources'
import { Posts } from '@/app/blog/components/Posts';

export function generateMetadata() {
	const title = home.title;
	const description = home.description;
	const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}`,
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

export default function Home() {
	return (
		<Flex
			maxWidth="m" fillWidth gap="xl"
			direction="column" alignItems="center">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebPage',
						name: home.title,
						description: home.description,
						url: `https://${baseURL}`,
						image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
						publisher: {
							'@type': 'Person',
							name: person.name,
							image: {
								'@type': 'ImageObject',
								url: `${baseURL}${person.avatar}`,
							},
						},
					}),
				}}
			/>
			<Flex
				fillWidth
				direction="column"
				paddingY="l" gap="m">
				
					<Flex
						direction="column"
						fillWidth maxWidth="s" gap="m">
						<RevealFx translateY="4">
							<Heading
								wrap="balance"
								variant="display-strong-l">
								{home.headline}
							</Heading>
						</RevealFx>
						<RevealFx translateY="8" delay={0.2}>
							<Text
								wrap="balance"
								onBackground="neutral-weak"
								variant="body-default-l">
								{home.subline}
							</Text>
						</RevealFx>
						<RevealFx translateY="12" delay={0.4}>
							<Button
								data-border="rounded"
								href="/about"
								variant="tertiary"
								suffixIcon="chevronRight"
								size="m">
								<Flex
									gap="8"
									alignItems="center">
									{about.avatar.display && (
										<Avatar
											style={{marginLeft: '-0.75rem', marginRight: '0.25rem'}}
											src={person.avatar}
											size="m"/>
										)}
										About me
								</Flex>
							</Button>
						</RevealFx>
					</Flex>
			</Flex>

			{ !about.technical.display && (
                        <>
							<RevealFx translateY="12" delay={0.6}>
								<Heading
									as="h2"
									variant="display-strong-s" marginBottom="40">
									Skill & Expertise
								</Heading>
							</RevealFx>
							<RevealFx translateY="16" delay={0.8}>
								<Flex
									direction="column"
									fillWidth gap="l">
									{about.technical.skills.map((skill, index) => (
										<Flex
											key={`${skill}-${index}`}
											fillWidth gap="4"
											direction="column">
												<Text
													variant="heading-strong-l">
													{skill.title}
												</Text>
												<Text
													variant="body-default-m"
													onBackground="neutral-weak">
													{skill.description}
												</Text>
												{skill.images.length > 0 && (
													<Flex
														fillWidth paddingTop="m" gap="12"
														wrap>
														{skill.images.map((image, index) => (
																<Flex
																key={index}
																border="neutral-medium"
																borderStyle="solid-1"
																radius="m"
																minWidth={image.width} height={image.height}>
																<SmartImage
																	enlarge
																	radius="m"
																	sizes={image.width.toString()}
																	alt={image.alt}
																	isLoading = {false}
																	src={image.src}/>
																</Flex>
														))}
													</Flex>
												)}
										</Flex>
									))}
								</Flex>
							</RevealFx>
                        </>
                    )}
		</Flex>
	);
}
