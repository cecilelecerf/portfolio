import { Card, CardSection, Title } from '@mantine/core';
import { ReactNode } from 'react';

export const Card_CV = ({
  title,
  color,
  children,
  id,
}: {
  title: string;
  color: string;
  children: ReactNode;
  id: string;
}) => (
  <Card shadow="sm" p="xl" h="100%" w="100%" radius="xl" id={id}>
    <CardSection
      bg={color}
      p="xs"
      mb="md"
      style={(theme) => ({ borderRadius: theme.radius.lg })}
    >
      <Title ta="center" order={2} c="white" fw="bold">
        {title}
      </Title>
    </CardSection>
    {children}
  </Card>
);
