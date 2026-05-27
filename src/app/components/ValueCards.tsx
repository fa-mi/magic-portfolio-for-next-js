import React from "react";
import { Flex, Grid, Text } from "@/once-ui/components";
import AnimateIn from "@/app/about/components/AnimateIn";
import {
  HiServerStack,
  HiCircleStack,
  HiPresentationChartLine,
  HiRocketLaunch,
} from "react-icons/hi2";

const violetLight = "#a78bfa";

const values = [
  {
    icon: HiServerStack,
    title: "Engineering",
    description:
      "I design robust, scalable backend systems and APIs with clean architecture.",
  },
  {
    icon: HiCircleStack,
    title: "Data & Databases",
    description:
      "I model and optimize databases and build data pipelines that turn raw data into insight.",
  },
  {
    icon: HiPresentationChartLine,
    title: "Business Analysis",
    description:
      "I translate complex business processes into clear requirements and effective solutions.",
  },
  {
    icon: HiRocketLaunch,
    title: "Always Learning",
    description:
      "I continuously explore new technologies — from BI and ML to enterprise systems.",
  },
];

export function ValueCards() {
  return (
    <AnimateIn>
      <Grid
        fillWidth
        columns="repeat(4, 1fr)"
        tabletColumns="2col"
        mobileColumns="1col"
        gap="0"
        radius="l"
        style={{
          border: "1px solid var(--neutral-alpha-weak)",
          background: "var(--surface-background)",
          overflow: "hidden",
        }}
      >
        {values.map((v, i) => {
          const Icon = v.icon;
          return (
            <Flex
              key={v.title}
              direction="column"
              gap="12"
              padding="l"
              style={{
                borderLeft:
                  i === 0
                    ? "none"
                    : "1px solid var(--neutral-alpha-weak)",
              }}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                style={{
                  width: "44px",
                  height: "44px",
                  borderRadius: "12px",
                  background: "rgba(139, 92, 246, 0.12)",
                  border: "1px solid rgba(139, 92, 246, 0.25)",
                }}
              >
                <Icon size={22} color={violetLight} />
              </Flex>
              <Text variant="heading-strong-m">{v.title}</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">
                {v.description}
              </Text>
            </Flex>
          );
        })}
      </Grid>
    </AnimateIn>
  );
}
