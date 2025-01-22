import { useState, useRef, Dispatch, SetStateAction } from 'react';
import { Paper, Title, Flex, Stack, Text, Box, useMantineTheme } from '@mantine/core';
import { Company } from '../Timeline/Company';
import { School } from '../Timeline/School';

export const DragLeft = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<'left' | 'right' | null>>;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [start, setStart] = useState<number | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStart(e.clientX);
    document.body.style.userSelect = 'none';
  };

  const handleMouseMove = () => {
    if (!isDragging || !containerRef.current) return;
  };

  const handleMouseUp = (e: MouseEvent) => {
    setIsDragging(false);
    // open
    if (start !== null) {
      if (e.clientX > window.innerWidth / 4 && start < 300) {
        setOpen('left');
        // close
      } else if (start < 300) {
        setOpen(null);
      }
    }
    setStart(null);

    document.body.style.userSelect = '';
    containerRef.current = null;
  };

  if (typeof window !== 'undefined') {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    } else {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    }
  }
  const theme = useMantineTheme()

  return (
    <Stack
      align="end"
      ref={containerRef}
      pos="absolute"
      top={0}
      left={0}
      style={{
        transform: `translateX(${isOpen ? 0 : -900}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease',
        height: '100%',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 10,
      }}
      onMouseDown={handleMouseDown}
    >
      <Text onClick={() => setOpen((is) => (is === 'left' ? null : 'left'))}>
        {isOpen ? '<- Mon parcours' : 'Mon parcours ->'}
      </Text>
      <Paper
        shadow="xl"
        p="xl"
        pr={200}
        h={550}
        w={1100}
        style={{
          borderRadius: '0px 10px 10px 0px',
          overflowY: 'scroll',
          borderRightStyle: "solid",
          borderRightWidth: "60px",
          borderRightColor: theme.colors.pink[1]


        }}
        pos='relative'
      >
        <Flex align="center" mb={100} gap="lg">
          <Title order={3} w={150}>
            Professionnels
          </Title>
          <Company />
        </Flex>
        <Flex align="center" mt="xl" gap="lg">
          <Title order={3} w={150}>
            Scolaire
          </Title>
          <School />
        </Flex>
      </Paper>
      <Text
        onClick={() => setOpen((is) => (is === 'left' ? null : 'left'))}
        fs="italic"
        c="gray.6"
      >
        {isOpen ? 'Glisser pour fermer' : 'Glisser pour ouvrir'}
      </Text>
    </Stack>
  );
};
