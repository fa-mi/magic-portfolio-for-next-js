"use client";

import React, { useState } from "react";
import { Button, Flex, Text } from "@/once-ui/components";

interface CollapsibleAchievementsProps {
  achievements: React.ReactNode[];
  company: string;
  /** How many items to show before collapsing */
  threshold?: number;
}

export default function CollapsibleAchievements({
  achievements,
  company,
  threshold = 4,
}: CollapsibleAchievementsProps) {
  const [expanded, setExpanded] = useState(false);

  const collapsible = achievements.length > threshold;
  const visible =
    collapsible && !expanded ? achievements.slice(0, threshold) : achievements;

  return (
    <Flex direction="column" gap="12" paddingTop="8">
      <Flex as="ul" direction="column" gap="12">
        {visible.map((achievement, idx) => (
          <Text
            as="li"
            variant="body-default-m"
            onBackground="neutral-weak"
            key={`${company}-${idx}`}
          >
            {achievement}
          </Text>
        ))}
      </Flex>
      {collapsible && (
        <Flex>
          <Button
            size="s"
            variant="tertiary"
            data-border="rounded"
            suffixIcon={expanded ? "chevronUp" : "chevronDown"}
            onClick={() => setExpanded((prev) => !prev)}
          >
            {expanded
              ? "Show less"
              : `Show all ${achievements.length}`}
          </Button>
        </Flex>
      )}
    </Flex>
  );
}
