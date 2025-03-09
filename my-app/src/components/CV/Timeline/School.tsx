import { Timeline, Text, TimelineItem } from '@mantine/core';

export const School = () => {
  return (
    <Timeline active={1} bulletSize={45} lineWidth={2} color="violet.2">
      <TimelineItem
        bullet={<Text fw="bold">2021</Text>}
        title="Bachelor Concepteur Développeur d'Application (CDA)"
      >
        <Text c="dimmed" size="sm">
          My Digital School
        </Text>
        <Text>
          2 ans - Développement web, Web Design, Création numérique, Marketing,
          Gestion de projet
        </Text>
        <Text>1 ans - Développement web</Text>
        <Text size="xs" mt={4}>
          2021-2024
        </Text>
      </TimelineItem>

      <TimelineItem
        bullet={<Text fw="bold">2024</Text>}
        title="Mastère en ingénieurie du web"
      >
        <Text c="dimmed" size="sm">
          Ecole Supérieur de Génie Informatique - ESGI
        </Text>
        <Text>2 ans - Développement web</Text>
        <Text size="xs" mt={4}>
          2024-2026
        </Text>
      </TimelineItem>
    </Timeline>
  );
};
