import React from "react";
import { IconType } from "react-icons";
import { Flex, Grid, Heading, Text, Tag } from "@/once-ui/components";
import AnimateIn from "@/app/about/components/AnimateIn";
import {
  SiSwift,
  SiDart,
  SiPython,
  SiTypescript,
  SiFlutter,
  SiReact,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMysql,
  SiApachekafka,
} from "react-icons/si";

const violetLight = "#a78bfa";

interface Tech {
  name: string;
  icon: IconType;
  color: string;
}

interface Category {
  title: string;
  techs?: Tech[];
  tags?: string[];
}

const categories: Category[] = [
  {
    title: "Languages",
    techs: [
      { name: "Swift", icon: SiSwift, color: "#F05138" },
      { name: "Dart", icon: SiDart, color: "#0175C2" },
      { name: "Python", icon: SiPython, color: "#3776AB" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
  },
  {
    title: "Mobile & Cloud",
    techs: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    ],
  },
  {
    title: "Data & Databases",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#ffffff" },
    ],
  },
  {
    title: "Business & Analytics",
    tags: [
      "Business Analysis",
      "Business Intelligence",
      "Power BI",
      "SAP / ABAP",
      "Machine Learning",
      "Problem Solving",
    ],
  },
];

export function SkillsShowcase() {
  return (
    <Flex id="skills" direction="column" fillWidth gap="l">
      <AnimateIn>
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
              My Skills
            </Text>
          </Flex>
          <Heading as="h2" variant="display-strong-s">
            Skills &amp; Technologies
          </Heading>
          <Text variant="body-default-m" onBackground="neutral-weak">
            Beyond engineering — I work across data, analytics, and business
            analysis to deliver complete solutions.
          </Text>
        </Flex>
      </AnimateIn>

      <Grid
        fillWidth
        columns="repeat(4, 1fr)"
        tabletColumns="2col"
        mobileColumns="1col"
        gap="m"
      >
        {categories.map((category, index) => (
          <AnimateIn key={category.title} delay={index * 0.06}>
            <Flex
              direction="column"
              fillWidth
              fillHeight
              gap="m"
              padding="l"
              className="clay"
            >
              <Text variant="heading-strong-m">{category.title}</Text>
              {category.techs && (
                <Flex gap="12" wrap>
                  {category.techs.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <Flex
                        key={tech.name}
                        alignItems="center"
                        justifyContent="center"
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--neutral-alpha-weak)",
                        }}
                      >
                        <Icon size={24} color={tech.color} title={tech.name} />
                      </Flex>
                    );
                  })}
                </Flex>
              )}
              {category.tags && (
                <Flex gap="8" wrap>
                  {category.tags.map((tag) => (
                    <Tag key={tag} size="m">
                      {tag}
                    </Tag>
                  ))}
                </Flex>
              )}
            </Flex>
          </AnimateIn>
        ))}
      </Grid>
    </Flex>
  );
}
