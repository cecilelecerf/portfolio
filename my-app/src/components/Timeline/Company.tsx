import { compagny } from '@/data/company';
import { Timeline, Text, TimelineItem, Button } from '@mantine/core';
import Link from 'next/link';
export const Company = () => {
  return (
    <Timeline
      active={compagny.length}
      bulletSize={45}
      lineWidth={2}
      maw={700}
      color="violet.1"
    >
      {compagny.map((comp, key) => (
        <TimelineItem
          bullet={<Text c="dark">{comp.year}</Text>}
          title={comp.label}
          key={key}
        >
          <Text c="dimmed" size="sm">
            {comp.company_name}
          </Text>
          <Text>{comp.description}</Text>
          <Text size="xs">{comp.time}</Text>
          <Link href={`/projects/${comp.id_project}`}>
            <Button my="md" leftSection={'->'}>
              Voir le projet
            </Button>
          </Link>
        </TimelineItem>
      ))}
    </Timeline>
  );
};
