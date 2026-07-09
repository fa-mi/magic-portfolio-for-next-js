import React from "react";
import {
  Flex,
  Heading,
  Text,
  Button,
  IconButton,
  RevealFx,
  LetterFx,
} from "@/once-ui/components";
import { person } from "@/app/resources";

const violet = "#8b5cf6";
const violetLight = "#a78bfa";
const indigo = "#6366f1";
const nameGradient = `linear-gradient(100deg, ${violetLight} 0%, ${indigo} 70%, ${violetLight} 100%)`;
const buttonGradient = `linear-gradient(135deg, ${indigo} 0%, ${violet} 100%)`;

const heroSocials: { icon: string; href: string; label: string }[] = [
  { icon: "github", href: "https://github.com/fahmi-aquinas", label: "GitHub" },
  {
    icon: "linkedin",
    href: "https://www.linkedin.com/in/fahmi-aquinas/",
    label: "LinkedIn",
  },
  { icon: "email", href: "mailto:fahmi.aquinas@gmail.com", label: "Email" },
  { icon: "code", href: "/work", label: "Projects" },
];

function CodeSnippet() {
  const key = { color: violetLight };
  const str = { color: "#6ee7b7" };
  const dim = { color: "var(--neutral-on-background-weak)" };
  return (
    <div
      style={{
        fontFamily: "var(--font-code, monospace)",
        fontSize: "0.8rem",
        lineHeight: 1.7,
        background: "rgba(13, 13, 20, 0.82)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: `1px solid rgba(139, 92, 246, 0.28)`,
        borderRadius: "16px",
        padding: "16px 18px",
        boxShadow: "0 18px 40px -16px rgba(99, 102, 241, 0.45)",
        whiteSpace: "pre",
      }}
    >
      <div>
        <span style={key}>const</span>
        <span style={dim}> fahmi = {"{"}</span>
      </div>
      <div>
        <span style={dim}>{"  "}role: </span>
        <span style={str}>&apos;Engineer & Analyst&apos;</span>
        <span style={dim}>,</span>
      </div>
      <div>
        <span style={dim}>{"  "}skills: [</span>
        <span style={str}>&apos;Backend&apos;</span>
        <span style={dim}>, </span>
        <span style={str}>&apos;Databases&apos;</span>
        <span style={dim}>,</span>
      </div>
      <div>
        <span style={dim}>{"    "}</span>
        <span style={str}>&apos;Business Analysis&apos;</span>
        <span style={dim}>],</span>
      </div>
      <div>
        <span style={dim}>{"}"};</span>
      </div>
    </div>
  );
}

export function HeroSection() {
  return (
    <Flex
      fillWidth
      direction="row"
      mobileDirection="column"
      alignItems="center"
      justifyContent="space-between"
      gap="xl"
      paddingTop="xl"
      paddingBottom="l"
    >
      {/* LEFT */}
      <Flex
        flex={6}
        direction="column"
        gap="m"
        style={{ minWidth: "0" }}
      >
        <RevealFx translateY="2">
          <Flex direction="column" gap="8">
            <a
              href="https://apps.apple.com/id/app/digital-pocket-id/id6762365322"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <Flex
                alignItems="center"
                gap="8"
                paddingX="12"
                paddingY="4"
                radius="full"
                style={{
                  border: "1px solid rgba(16, 185, 129, 0.4)",
                  background: "rgba(16, 185, 129, 0.08)",
                  width: "fit-content",
                  cursor: "pointer",
                  transition: "background 0.2s",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "#10b981",
                    boxShadow: "0 0 8px #10b981",
                  }}
                />
                <Text
                  variant="label-default-s"
                  style={{
                    color: "#10b981",
                    letterSpacing: "0.06em",
                  }}
                >
                  DiPo is now live on the App Store →
                </Text>
              </Flex>
            </a>
            <Flex
              alignItems="center"
              gap="8"
              paddingX="12"
              paddingY="4"
              radius="full"
              style={{
                border: "1px solid rgba(139, 92, 246, 0.35)",
                background: "rgba(139, 92, 246, 0.08)",
                width: "fit-content",
              }}
            >
              <span
                style={{
                  width: "8px",
                  height: "8px",
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
                <LetterFx trigger="instant" speed="medium">
                  {person.role}
                </LetterFx>
              </Text>
            </Flex>
          </Flex>
        </RevealFx>

        <RevealFx translateY="4">
          <Heading
            variant="display-strong-xl"
            style={{ lineHeight: 1.05 }}
          >
            Hi, I&apos;m
            <br />
            Fahmi{" "}
            <span
              style={{
                background: nameGradient,
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              {person.lastName}
            </span>
          </Heading>
        </RevealFx>

        <RevealFx translateY="8" delay={0.1}>
          <Text
            variant="body-default-xl"
            onBackground="neutral-weak"
            style={{ maxWidth: "46ch" }}
          >
            I build reliable digital products and data platforms — bridging
            engineering, databases, and business analysis to turn complex
            requirements into simple solutions.
          </Text>
        </RevealFx>

        <RevealFx translateY="12" delay={0.2}>
          <Flex gap="12" alignItems="center" wrap paddingTop="8">
            <Button
              href="/work"
              variant="primary"
              size="m"
              suffixIcon="arrowUpRight"
              data-border="rounded"
              style={{
                background: buttonGradient,
                border: "none",
                boxShadow: "0 12px 30px -10px rgba(139, 92, 246, 0.6)",
              }}
            >
              View My Work
            </Button>
            <Button
              href="mailto:fahmi.aquinas@gmail.com"
              variant="secondary"
              size="m"
              prefixIcon="email"
              data-border="rounded"
            >
              Get in Touch
            </Button>
          </Flex>
        </RevealFx>

        <RevealFx translateY="12" delay={0.3}>
          <Flex direction="column" gap="12" paddingTop="16">
            <Text variant="label-default-s" onBackground="neutral-weak">
              Find me on
            </Text>
            <Flex gap="8">
              {heroSocials.map((s) => (
                <IconButton
                  key={s.label}
                  icon={s.icon}
                  href={s.href}
                  tooltip={s.label}
                  variant="secondary"
                  size="l"
                />
              ))}
            </Flex>
          </Flex>
        </RevealFx>
      </Flex>

      {/* RIGHT */}
      <Flex
        flex={5}
        justifyContent="center"
        fillWidth
        style={{ minWidth: "0" }}
      >
        <RevealFx translateY="8" delay={0.15}>
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "420px",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                inset: "-12%",
                background: `radial-gradient(circle at 60% 38%, rgba(139, 92, 246, 0.5) 0%, rgba(99, 102, 241, 0.18) 40%, transparent 68%)`,
                filter: "blur(36px)",
                zIndex: 0,
              }}
            />
            {/* photo */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                aspectRatio: "4 / 5",
                borderRadius: "24px",
                overflow: "hidden",
                border: "1px solid rgba(139, 92, 246, 0.3)",
                boxShadow: "0 30px 70px -24px rgba(0, 0, 0, 0.7)",
              }}
            >
              <img
                src={person.avatar}
                alt={person.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "center 25%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(8, 8, 14, 0.6) 100%)",
                }}
              />
            </div>
            {/* code card */}
            <div
              style={{
                position: "absolute",
                right: "-4%",
                bottom: "-7%",
                zIndex: 2,
                width: "max-content",
              }}
            >
              <CodeSnippet />
            </div>
          </div>
        </RevealFx>
      </Flex>
    </Flex>
  );
}
