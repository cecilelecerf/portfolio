import { useState, useRef, Dispatch, SetStateAction } from 'react';
import {
  Paper,
  Flex,
  Stack,
  Text,
  Center,
  Image,
  Box,
  FloatingIndicator,
  Title,
} from '@mantine/core';
import classes from "../Tabs/Tabs.module.css"
export const DragRight = ({
  isOpen,
  setOpen,
}: {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<'left' | 'right' | null>>;
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
  const [value, setValue] = useState<string | null>('0');
  const [controlsRefs, setControlsRefs] = useState<
    Record<string, HTMLButtonElement | null>
  >({});
  const setControlRef = (val: string) => (node: HTMLButtonElement) => {
    controlsRefs[val] = node;
    setControlsRefs(controlsRefs);
  };
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
    if (start !== null) {
      if (
        e.clientX < 3 * (window.innerWidth / 4) &&
        start > window.innerWidth - 300
      ) {
        setOpen('right');
      } else if (start > window.innerWidth - 500) {
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

  return (
    <Stack
      align="start"
      ref={containerRef}
      pos="absolute"
      top={0}
      right={0}
      style={{
        transform: `translateX(${isOpen ? 0 : 900}px)`,
        transition: isDragging ? 'none' : 'transform 0.3s ease',
        height: '100%',
        cursor: isDragging ? 'grabbing' : 'grab',
        zIndex: 10,
      }}
      onMouseDown={handleMouseDown}
    >
      <Text onClick={() => setOpen((is) => (is === 'right' ? null : 'right'))} bg="white" style={{ borderRadius: "var(--mantine-radius-xl)" }} p="xs" >
        {isOpen ? 'Mes softs skills -> ' : '<- Mes softs skills'}
      </Text>
      <Paper
        shadow="xl"
        p="xl"
        pl={200}
        w={1100}
        h={550}
        style={{
          borderRadius: '10px 0px 0px 10px',
          overflowY: 'scroll',
        }}
        pos="relative"
      >
        <Box pos="absolute" top={0} left={0} w={60} h="100%" bg="blue.1" />
        <Title order={3}>Soft Skills</Title>
        <Text maw={600}>Rigoureuse et toujours animée par une grande motivation, je m'efforce de partager les informations de manière claire et constructive, favorisant ainsi une collaboration efficace au sein de l'équipe.</Text>
      </Paper>
      <Text
        onClick={() => setOpen((is) => (is === 'right' ? null : 'right'))}
        fs="italic"
        c="gray.6"
      >
        {isOpen ? 'Glisser pour fermer' : 'Glisser pour ouvrir'}
      </Text>
    </Stack>
  );
};


