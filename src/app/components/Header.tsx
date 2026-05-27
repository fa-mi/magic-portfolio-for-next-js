"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { Flex, Button } from "@/once-ui/components";
import styles from "@/app/components/Header.module.scss";

const violet = "#8b5cf6";
const violetLight = "#a78bfa";
const indigo = "#6366f1";

const navItems: { label: string; href: string }[] = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const Header = () => {
  const pathname = usePathname() ?? "";

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href.startsWith("/#")) return false;
    return pathname.startsWith(href);
  };

  return (
    <Flex
      as="header"
      className={styles.position}
      zIndex={9}
      fillWidth
      paddingY="16"
      paddingX="l"
      justifyContent="center"
      style={{
        position: "sticky",
        top: 0,
        background: "rgba(8, 8, 14, 0.6)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid var(--neutral-alpha-weak)",
      }}
    >
      <Flex
        fillWidth
        maxWidth="l"
        alignItems="center"
        justifyContent="space-between"
        gap="m"
      >
        {/* Logo */}
        <Link href="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-family-heading)",
              fontWeight: 700,
              fontSize: "1.5rem",
              letterSpacing: "-0.02em",
              color: "var(--neutral-on-background-strong)",
            }}
          >
            FA
            <span style={{ color: violetLight }}>.</span>
          </span>
        </Link>

        {/* Nav */}
        <Flex hide="s" gap="4" alignItems="center">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={styles.navLink}
                style={{
                  position: "relative",
                  padding: "8px 12px",
                  fontSize: "0.9rem",
                  color: active
                    ? "var(--neutral-on-background-strong)"
                    : "var(--neutral-on-background-weak)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {item.label}
                {active && (
                  <span
                    style={{
                      position: "absolute",
                      left: "12px",
                      right: "12px",
                      bottom: "2px",
                      height: "2px",
                      borderRadius: "2px",
                      background: violetLight,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </Flex>

        {/* CTA */}
        <Button
          href="/#contact"
          variant="primary"
          size="s"
          suffixIcon="arrowUpRight"
          data-border="rounded"
          style={{
            background: `linear-gradient(135deg, ${indigo} 0%, ${violet} 100%)`,
            border: "none",
            boxShadow: "0 10px 24px -10px rgba(139, 92, 246, 0.6)",
          }}
        >
          Let&apos;s Talk
        </Button>
      </Flex>
    </Flex>
  );
};
