'use client';
import { useState } from 'react';
import { Box, Button, Flex, Image, Stack, Text } from '@mantine/core';
import { DragLeft } from '@/components/Drag/DragLeft';
import { useMediaQuery } from '@mantine/hooks';
import { AccordionCV } from '@/components/Accordion/Accordion';
import { PictureMe } from '@/components/CV/PictureMe';
import { DragRight } from '@/components/Drag/DragRight';
import Link from 'next/link';

export default function Page() {
  const [open, setOpen] = useState<'left' | 'right' | null>(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

  return (
    <Box
      style={{ position: 'relative', overflowX: 'hidden' }}
      h={!isSmallScreen ? 600 : 'auto'}
    >
      {!isSmallScreen && (
        <DragLeft isOpen={open === 'left'} setOpen={setOpen} />
      )}
      <Stack align="center" h="100%" justify="center" gap="xl">
        <Flex
          gap="md"
          align="center"
          maw={700}
          direction={isSmallScreen ? 'column' : 'row'}
          mx="xl"
        >
          <PictureMe />
          <Box maw={550}>
            <Text fw="bold" fs="italic" size="xl">
              Une petite présentation s{"'"}impose,
            </Text>
            <Text size="xl">
              Alors voilà : Cécile LECERF, Développeuse web depuis maintenant 4
              ans.
            </Text>
            <Flex>
              <Link href="./curriculum-vitae/hard-skills">
                <Button>Découvrir mes hard skills</Button>
              </Link>
              <Button ml="md">Télécharger mon cv</Button>
            </Flex>
          </Box>
        </Flex>
        {isSmallScreen && <AccordionCV />}
      </Stack>
      {!isSmallScreen && (
        <>
          <DragRight isOpen={open === 'right'} setOpen={setOpen} />
        </>
      )}
    </Box>
  );
}
