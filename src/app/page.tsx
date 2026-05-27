import React from "react";

import { Flex } from "@/once-ui/components";
import {
  HeroSection,
  ValueCards,
  FeaturedProjects,
  SkillsShowcase,
  ExperienceJourney,
} from "@/app/components";

import { baseURL, home, person } from "@/app/resources";

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
      type: "website",
      url: `https://${baseURL}`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Home() {
  return (
    <Flex maxWidth="l" fillWidth gap="xl" direction="column">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: home.title,
            description: home.description,
            url: `https://${baseURL}`,
            image: `${baseURL}/og?title=${encodeURIComponent(home.title)}`,
            publisher: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: person.name,
            url: `https://${baseURL}`,
            jobTitle: "Fullstack Developer",
            image: `${baseURL}${person.avatar}`,
            sameAs: [
              "https://github.com/fahmi-aquinas",
              "https://www.linkedin.com/in/fahmi-aquinas/",
            ],
          }),
        }}
      />
      <HeroSection />
      <ValueCards />
      <FeaturedProjects />
      <SkillsShowcase />
      <ExperienceJourney />
    </Flex>
  );
}
