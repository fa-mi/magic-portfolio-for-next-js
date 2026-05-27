import React from "react";
import { Flex, Heading, Text, Button } from "@/once-ui/components";
import AnimateIn from "@/app/about/components/AnimateIn";
import { HiEnvelope, HiMapPin } from "react-icons/hi2";
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import styles from "@/app/components/ExperienceJourney.module.scss";

const violet = "#8b5cf6";
const violetLight = "#a78bfa";
const indigo = "#6366f1";

const timeline = [
  {
    period: "2026",
    role: "Co-Founder",
    company: "Digital Pocket ID (DiPo)",
    description:
      "Co-founded a smart personal finance app helping users manage money and make smarter financial decisions effortlessly.",
  },
  {
    period: "2023 - Present",
    role: "Junior Manager",
    company: "PT. Bank Rakyat Indonesia",
    description:
      "Built streaming data pipelines for the One Single Truth platform and led business process reengineering for card management systems.",
  },
  {
    period: "2021 - 2022",
    role: "Backend Developer",
    company: "PT. Bank Mandiri",
    description:
      "Developed the virtual card feature in the Livin' by Mandiri super app.",
  },
  {
    period: "2020 - 2021",
    role: "IT Developer",
    company: "PT. Trias Sentosa",
    description:
      "Engineered end-to-end SAP/ABAP solutions and integrated transactional data into Power BI for real-time analytics.",
  },
];

const contacts = [
  { icon: HiEnvelope, label: "fahmi.aquinas@gmail.com", href: "mailto:fahmi.aquinas@gmail.com" },
  { icon: HiMapPin, label: "Jakarta, Indonesia", href: undefined },
  { icon: FaLinkedin, label: "linkedin.com/in/fahmi-aquinas", href: "https://www.linkedin.com/in/fahmi-aquinas/" },
  { icon: FaGithub, label: "github.com/fahmi-aquinas", href: "https://github.com/fahmi-aquinas" },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <Flex alignItems="center" gap="8">
      <span
        style={{
          width: "7px",
          height: "7px",
          borderRadius: "50%",
          background: violetLight,
          boxShadow: `0 0 8px ${violet}`,
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
        {children}
      </Text>
    </Flex>
  );
}

function SpaceDecor() {
  return (
    <div aria-hidden className={styles.spaceDecor}>
      <div className={styles.glow} />
      <div className={styles.planetWrap}>
        <div className={styles.planet} />
        <div className={styles.ring} />
      </div>
      <span className={styles.star} style={{ top: "16%", left: "10%" }} />
      <span
        className={styles.star}
        style={{ top: "58%", left: "26%", animationDelay: "1.2s" }}
      />
      <span
        className={styles.star}
        style={{ top: "34%", right: "4%", animationDelay: "0.6s" }}
      />
    </div>
  );
}

export function ExperienceJourney() {
  return (
    <Flex
      fillWidth
      direction="row"
      mobileDirection="column"
      gap="xl"
      alignItems="flex-start"
    >
      {/* LEFT: timeline */}
      <Flex flex={6} direction="column" gap="l" style={{ minWidth: 0 }}>
        <AnimateIn>
          <Flex direction="column" gap="8">
            <Eyebrow>Experience</Eyebrow>
            <Heading as="h2" variant="display-strong-s">
              My Professional Journey
            </Heading>
          </Flex>
        </AnimateIn>

        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <AnimateIn key={item.company} delay={index * 0.08}>
              <div className={styles.timelineItem}>
                <span className={styles.dot} />
                <Flex direction="column" gap="4" paddingBottom="l">
                  <Text variant="label-default-s" onBackground="neutral-weak">
                    {item.period}
                  </Text>
                  <Text variant="heading-strong-m">{item.role}</Text>
                  <Text
                    variant="body-default-s"
                    style={{ color: violetLight, fontWeight: 500 }}
                  >
                    {item.company}
                  </Text>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {item.description}
                  </Text>
                </Flex>
              </div>
            </AnimateIn>
          ))}
        </div>

        <Flex>
          <Button
            href="/about"
            variant="secondary"
            size="s"
            suffixIcon="arrowUpRight"
            data-border="rounded"
          >
            View Full Experience
          </Button>
        </Flex>
      </Flex>

      {/* RIGHT: contact card */}
      <Flex flex={5} fillWidth style={{ minWidth: 0 }}>
        <AnimateIn delay={0.1}>
          <Flex
            id="contact"
            direction="column"
            fillWidth
            gap="m"
            padding="xl"
            className="clay"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <SpaceDecor />
            <Flex
              direction="column"
              gap="m"
              style={{ position: "relative", zIndex: 1 }}
            >
              <Eyebrow>Let&apos;s Work Together</Eyebrow>
              <Heading as="h2" variant="display-strong-s">
                I&apos;m Open for Opportunities!
              </Heading>
              <Text variant="body-default-m" onBackground="neutral-weak">
                I&apos;m currently available for freelance projects or full-time
                opportunities.
              </Text>
              <Flex paddingTop="4">
                <Button
                  href="mailto:fahmi.aquinas@gmail.com"
                  variant="primary"
                  size="m"
                  suffixIcon="arrowUpRight"
                  data-border="rounded"
                  style={{
                    background: `linear-gradient(135deg, ${indigo} 0%, ${violet} 100%)`,
                    border: "none",
                    boxShadow: "0 12px 30px -10px rgba(139, 92, 246, 0.6)",
                  }}
                >
                  Get In Touch
                </Button>
              </Flex>
              <Flex
                direction="column"
                gap="12"
                paddingTop="m"
                marginTop="8"
                style={{ borderTop: "1px solid var(--neutral-alpha-weak)" }}
              >
                {contacts.map((c) => {
                  const Icon = c.icon;
                  const content = (
                    <Flex alignItems="center" gap="12">
                      <Icon size={16} color={violetLight} />
                      <Text variant="body-default-s" onBackground="neutral-weak">
                        {c.label}
                      </Text>
                    </Flex>
                  );
                  return c.href ? (
                    <a
                      key={c.label}
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none" }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={c.label}>{content}</div>
                  );
                })}
              </Flex>
            </Flex>
          </Flex>
        </AnimateIn>
      </Flex>
    </Flex>
  );
}
