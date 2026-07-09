import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  Tag,
  SmartLink,
} from "@/once-ui/components";
import { TiltCard } from "@/app/components/TiltCard";
import AnimateIn from "@/app/about/components/AnimateIn";

const violetLight = "#a78bfa";

interface Project {
  company: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
  image?: string;
  appStoreUrl?: string;
  isLive?: boolean;
}

const projects: Project[] = [
  {
    company: "Digital Pocket ID",
    title: "Digital Pocket ID (DiPo)",
    description:
      "Co-founded a smart personal finance iOS app with AI-powered budgeting, debt tracking, and saving goals. Now live on the App Store.",
    tags: ["Swift", "SwiftUI", "Firebase", "iOS"],
    href: "/work/dipo",
    image: "/images/projects/dipo/PortofolioMeetDiPo.png",
    appStoreUrl: "https://apps.apple.com/id/app/digital-pocket-id/id6762365322",
    isLive: true,
  },
  {
    company: "Bank Rakyat Indonesia",
    title: "BRI — Data & Card Systems",
    description:
      "Streaming data pipelines for the One Single Truth platform, card management systems, and business process reengineering (CardPro).",
    tags: ["Apache Kafka", "SQL", "Business Analysis", "Card Systems"],
    href: "/work/bri",
    image: "/images/projects/work/bri/cardpro.png",
  },
  {
    company: "Ayo Kreasi Bersama",
    title: "Tax Affiliate Platform",
    description:
      "Freelance fullstack build of a tax affiliate registration platform with dedicated user and admin panels.",
    tags: ["Fullstack", "Web", "Admin Panel"],
    href: "/work/ayocpns",
    image: "/images/projects/work/ayocpns/admin-panel.jpg",
  },
  {
    company: "Bank Mandiri",
    title: "Virtual Card on Livin'",
    description:
      "Backend development of the virtual card feature inside the Livin' by Mandiri super app.",
    tags: ["Backend", "Virtual Card", "API"],
    href: "/work/mandiri",
    image: "/images/projects/work/mandiri/virtual-card.jpeg",
  },
  {
    company: "Trias Sentosa",
    title: "SAP/ABAP & Power BI",
    description:
      "End-to-end SAP/ABAP solutions and integration of transactional data into Power BI for real-time analytics.",
    tags: ["SAP", "ABAP", "Power BI"],
    href: "/work/trias",
    image: "/images/projects/work/trias/zolap.png",
  },
];

function ProjectThumb({ image, title }: { image?: string; title: string }) {
  if (image) {
    return (
      <img
        src={image}
        alt={title}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    );
  }
  return (
    <Flex
      fillWidth
      fillHeight
      alignItems="center"
      justifyContent="center"
      style={{
        background:
          "linear-gradient(135deg, rgba(99,102,241,0.35) 0%, rgba(139,92,246,0.18) 50%, rgba(8,8,14,0.6) 100%)",
      }}
    >
      <Text variant="display-strong-s" style={{ color: "rgba(255,255,255,0.85)" }}>
        {title.split(" ")[0]}
      </Text>
    </Flex>
  );
}

export function FeaturedProjects() {
  return (
    <Flex id="projects" direction="column" fillWidth gap="l">
      <AnimateIn>
        <Flex
          fillWidth
          justifyContent="space-between"
          alignItems="flex-end"
          gap="m"
          wrap
        >
          <Flex direction="column" gap="8">
            <Flex alignItems="center" gap="8">
              <span
                style={{
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: violetLight,
                  boxShadow: "0 0 8px #8b5cf6",
                }}
              />
              <Text
                variant="label-default-s"
                style={{
                  color: violetLight,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                }}
              >
                Featured Projects
              </Text>
            </Flex>
            <Heading as="h2" variant="display-strong-s">
              Things I&apos;ve Built
            </Heading>
            <Text variant="body-default-s" onBackground="neutral-weak">
              A summary of the companies and products I&apos;ve worked on — swipe to explore.
            </Text>
          </Flex>
          <Button
            href="/work"
            variant="secondary"
            size="s"
            suffixIcon="arrowUpRight"
            data-border="rounded"
          >
            View All Projects
          </Button>
        </Flex>
      </AnimateIn>

      <div
        style={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          paddingBottom: "12px",
          scrollSnapType: "x mandatory",
          alignItems: "stretch",
        }}
      >
        {projects.map((project) => (
          <div
            key={project.title}
            style={{
              flex: "0 0 auto",
              width: "360px",
              maxWidth: "85vw",
              scrollSnapAlign: "start",
              display: "flex",
            }}
          >
            <TiltCard intensity={4} style={{ width: "100%", display: "flex" }}>
              <Flex
                direction="column"
                fillWidth
                fillHeight
                className="clay"
                style={{
                  overflow: "hidden",
                  ...(project.isLive
                    ? { border: "1px solid rgba(139, 92, 246, 0.5)", boxShadow: "0 0 24px -8px rgba(139, 92, 246, 0.4)" }
                    : {}),
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 10",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <ProjectThumb image={project.image} title={project.title} />
                  {project.isLive && (
                    <div
                      style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                        background: "rgba(16, 185, 129, 0.15)",
                        border: "1px solid rgba(16, 185, 129, 0.5)",
                        borderRadius: "999px",
                        padding: "3px 10px",
                        backdropFilter: "blur(8px)",
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
                      <span
                        style={{
                          fontSize: "0.68rem",
                          fontWeight: 600,
                          color: "#10b981",
                          letterSpacing: "0.08em",
                          textTransform: "uppercase",
                        }}
                      >
                        Live on App Store
                      </span>
                    </div>
                  )}
                </div>
                <Flex direction="column" gap="12" padding="l" fillHeight>
                  <Text
                    variant="label-default-s"
                    style={{ color: violetLight, letterSpacing: "0.04em" }}
                  >
                    {project.company}
                  </Text>
                  <Heading as="h3" variant="heading-strong-l">
                    {project.title}
                  </Heading>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {project.description}
                  </Text>
                  <Flex gap="8" wrap paddingTop="4">
                    {project.tags.map((tag) => (
                      <Tag key={tag} size="s">
                        {tag}
                      </Tag>
                    ))}
                  </Flex>
                  <Flex gap="12" style={{ marginTop: "auto", paddingTop: "8px" }} wrap>
                    <SmartLink href={project.href}>
                      <Flex alignItems="center" gap="4">
                        <Text
                          variant="body-default-s"
                          style={{ color: violetLight, fontWeight: 500 }}
                        >
                          View Case Study
                        </Text>
                        <Text style={{ color: violetLight }}>↗</Text>
                      </Flex>
                    </SmartLink>
                    {project.appStoreUrl && (
                      <SmartLink href={project.appStoreUrl}>
                        <Flex alignItems="center" gap="4">
                          <Text
                            variant="body-default-s"
                            style={{ color: "#10b981", fontWeight: 500 }}
                          >
                            App Store
                          </Text>
                          <Text style={{ color: "#10b981" }}>↗</Text>
                        </Flex>
                      </SmartLink>
                    )}
                  </Flex>
                </Flex>
              </Flex>
            </TiltCard>
          </div>
        ))}
      </div>
    </Flex>
  );
}
