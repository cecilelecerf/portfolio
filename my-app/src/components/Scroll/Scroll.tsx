'use client';

import { projects } from '@/data/project';
import { Box, Flex } from '@mantine/core';
import { useEffect, useState } from 'react';
import { Card } from '../Card/Card';
import classes from './Scroll.module.css';

export const Scroll = ({ inverted }: { inverted?: boolean }) => {
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const diff = inverted ? -e.deltaY : e.deltaY;
      setScroll((s) => {
        if (s > 2050 || s + diff > 2050) {
          s = 2050;
        } else if (s < 0 || s + diff < 0) {
          s = 0;
        } else {
          s = s + diff;
        }
        return s;
      });
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, []);
  const [scroll, setScroll] = useState(0);

  return (
    <Box>
      <Flex
        gap="xl"
        style={{
          transform: `translateX(-${scroll + (inverted ? 30 : 120)}px)`,
          willChange: 'transform',
        }}
        className={classes.root}
      >
        {projects.map((project, i) => (
          <Box w={250} key={i}>

            <Card project={project} step={i} />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};
