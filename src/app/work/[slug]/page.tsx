import { notFound } from 'next/navigation'
import { CustomMDX } from '@/app/components/mdx'
import { formatDate, getPosts } from '@/app/utils'
import { AvatarGroup, Button, Flex, Heading, SmartImage, Text } from '@/once-ui/components'
import { baseURL, person } from '@/app/resources';
import ScrollReveal from '../components/ScrollReveal';

interface WorkParams {
    params: {
        slug: string;
    };
}

export async function generateStaticParams() {
	let posts = getPosts(['src', 'app', 'work', 'projects']);

	return posts.map((post) => ({
		slug: post.slug,
	}))
}

export function generateMetadata({ params }: WorkParams) {
	let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params.slug)
	
	if (!post) {
		return
	}

	let {
		title,
		publishedAt: publishedTime,
		summary: description,
		images,
		image,
		team,
	} = post.metadata
	let ogImage = image
		? `https://${baseURL}${image}`
		: `https://${baseURL}/og?title=${title}`;

	return {
		title,
		description,
		images,
		team,
		openGraph: {
			title,
			description,
			type: 'article',
			publishedTime,
			url: `https://${baseURL}/work/${post.slug}`,
			images: [
				{
					url: ogImage,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	}
}

export default function Project({ params }: WorkParams) {
	let post = getPosts(['src', 'app', 'work', 'projects']).find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const avatars = post.metadata.team?.map((person) => ({
        src: person.avatar,
    })) || [];

	const isComingSoon = (date?: string) => {
  if (!date) return true;
  return date.toLowerCase().includes("coming");
};

	const projectLink = (post.metadata as Record<string, unknown>).link as string | undefined;
	const isAppStore = projectLink?.includes("apps.apple.com");

	return (
		<Flex as="section"
			fillWidth maxWidth="m"
			direction="column" alignItems="center"
			gap="l">
			<script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'BlogPosting',
						headline: post.metadata.title,
						datePublished:
						isComingSoon(post.metadata.publishedAt)
							? undefined
							: post.metadata.publishedAt,
						dateModified:
						isComingSoon(post.metadata.publishedAt)
							? undefined
							: post.metadata.publishedAt,
						description: post.metadata.summary,
						image: post.metadata.image
							? `https://${baseURL}${post.metadata.image}`
							: `https://${baseURL}/og?title=${post.metadata.title}`,
							url: `https://${baseURL}/work/${post.slug}`,
						author: {
							'@type': 'Person',
							name: person.name,
						},
					}),
				}}
			/>
			<Flex
				fillWidth maxWidth="xs" gap="16"
				direction="column">
				<Button
					href="/work"
					variant="tertiary"
					size="s"
					prefixIcon="chevronLeft">
					Projects
				</Button>
				<Flex direction="column" gap="12">
					<Heading
						variant="display-strong-s">
						{post.metadata.title}
					</Heading>
					{projectLink && (
						<Flex gap="12" alignItems="center">
							{isAppStore && (
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: "5px",
										background: "rgba(16, 185, 129, 0.1)",
										border: "1px solid rgba(16, 185, 129, 0.4)",
										borderRadius: "999px",
										padding: "3px 12px",
									}}
								>
									<span
										style={{
											width: "6px",
											height: "6px",
											borderRadius: "50%",
											background: "#10b981",
											boxShadow: "0 0 6px #10b981",
											display: "inline-block",
										}}
									/>
									<span style={{ fontSize: "0.72rem", fontWeight: 600, color: "#10b981", letterSpacing: "0.06em" }}>
										LIVE
									</span>
								</div>
							)}
							<Button
								href={projectLink}
								variant="secondary"
								size="s"
								suffixIcon="arrowUpRight"
								data-border="rounded">
								{isAppStore ? "Download on App Store" : "Visit Website"}
							</Button>
						</Flex>
					)}
				</Flex>
			</Flex>
			{post.metadata.images.length > 0 && (
				<SmartImage
					aspectRatio="16 / 9"
					radius="m"
					alt="image"
					src={post.metadata.images[0]}/>
			)}
			<Flex style={{margin: 'auto'}}
				as="article"
				maxWidth="xs" fillWidth
				direction="column">
				<Flex
					gap="12" marginBottom="24"
					alignItems="center">
					{ post.metadata.team && (
						<AvatarGroup
							reverseOrder
							avatars={avatars}
							size="m"/>
					)}
					<Text variant="body-default-s" onBackground="neutral-weak">
						{isComingSoon(post.metadata.publishedAt)
							? "Coming Soon"
							: formatDate(post.metadata.publishedAt)}
					</Text>
				</Flex>
				<ScrollReveal>
					<CustomMDX source={post.content} />
				</ScrollReveal>
			</Flex>
		</Flex>
	)
}