import React from "react";
import { IconType } from "react-icons";
import { Flex, Grid, Heading, Text, Tag } from "@/once-ui/components";
import AnimateIn from "@/app/about/components/AnimateIn";
import {
  SiSwift,
  SiDart,
  SiPython,
  SiTypescript,
  SiGo,
  SiPhp,
  SiFlutter,
  SiReact,
  SiSupabase,
  SiFirebase,
  SiSpringboot,
  SiPostgresql,
  SiMysql,
  SiApachekafka,
  SiSap,
} from "react-icons/si";

const violetLight = "#a78bfa";

interface Tech {
  name: string;
  icon?: IconType;
  img?: string;
  color?: string;
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
      { name: "Go", icon: SiGo, color: "#00ADD8" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
    ],
  },
  {
    title: "App & Backend",
    techs: [
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "React Native", icon: SiReact, color: "#61DAFB" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "SwiftUI", img: "/images/logos/swiftui.svg" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Supabase", icon: SiSupabase, color: "#3FCF8E" },
    ],
    tags: ["REST API"],
  },
  {
    title: "Data & Databases",
    techs: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "Oracle", img: "/images/logos/oracle.svg" },
      { name: "SQL Server", img: "/images/logos/sqlserver.svg" },
      { name: "DB2", img: "/images/logos/db2.svg" },
      { name: "Apache Kafka", icon: SiApachekafka, color: "#ffffff" },
    ],
    tags: ["SQL", "ETL / Data Pipeline"],
  },
  {
    title: "Business & Analytics",
    techs: [
      { name: "SAP", icon: SiSap, color: "#3AA9DC" },
      { name: "Power BI", img: "/images/logos/powerbi.svg" },
    ],
    tags: [
      "Business Analysis",
      "Business Intelligence",
      "Machine Learning",
      "ABAP",
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
                        title={tech.name}
                        style={{
                          width: "48px",
                          height: "48px",
                          borderRadius: "12px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--neutral-alpha-weak)",
                        }}
                      >
                        {Icon ? (
                          <Icon size={24} color={tech.color} title={tech.name} />
                        ) : (
                          <img
                            src={tech.img}
                            alt={tech.name}
                            style={{
                              width: "26px",
                              height: "26px",
                              objectFit: "contain",
                            }}
                          />
                        )}
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
