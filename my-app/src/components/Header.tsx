'use client';
import { Burger, Button, Drawer, Flex, Stack, Text, Title } from '@mantine/core';
import { useDisclosure, useMediaQuery } from '@mantine/hooks';
import { IconBrandGithubFilled, IconBrandLinkedinFilled, IconDownload } from '@tabler/icons-react';
import Link from 'next/link';
import classes from "./Header.module.css"
export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure();
  const isSmallScreen = useMediaQuery('(max-width: 768px)'); // Ajustez selon vos besoins

  return (
    <header>
      {!isSmallScreen && (

        <Flex justify="space-between" my="xl" align="center" mb={100} >
          <Link href="/">
            <Title order={2}>Cécile LECERF</Title>
          </Link>
          <Flex gap="xl">
            <Link href="/projects" className={classes.linkDesktop}>
              Réalisations
            </Link>
            <Link href="/skills" className={classes.linkDesktop}>
              Compétences
            </Link>
            <Link href="/career" className={classes.linkDesktop}>
              Parcours
            </Link>
          </Flex>
          <Flex gap="md" align="center">
            <Link href="#" style={{ height: "30px" }}>
              <IconBrandGithubFilled size="100%" />
            </Link>
            <Link href="#" style={{ height: "30px" }}>
              <IconBrandLinkedinFilled size="100%" />
            </Link>
            <a href="/CV - Cécile LECERF.pdf" download>
              <Button color="indigo" leftSection={<IconDownload />}>Télécharger mon CV</Button>
            </a>
          </Flex>
        </Flex>
      )}
      {isSmallScreen && (

        <Flex justify="space-between" my="xl" align="center" mb={100} >
          <Link href="/">
            <Title>Cécile LECERF</Title>
          </Link>

          <Burger
            opened={opened}
            onClick={toggle}
            aria-label="Toggle navigation"
          />

          <Drawer opened={opened} onClose={close} position="right" size="xs">
            {/* Drawer content */}
            <Stack>
              <Link href="/projects" className={classes.linkDesktop}>
                Réalisations
              </Link>
              <Link href="/skills" className={classes.linkDesktop}>
                Compétences
              </Link>
              <Link href="/career" className={classes.linkDesktop}>
                Parcours
              </Link>
              <Flex gap="sm">
                <Link href="#" style={{ height: "30px" }}>
                  <IconBrandGithubFilled size="100%" />
                </Link>
                <Link href="#" style={{ height: "30px" }}>
                  <IconBrandLinkedinFilled size="100%" />
                </Link>
              </Flex>
              <a href="/CV - Cécile LECERF.pdf" download>
                <Button color="indigo" leftSection={<IconDownload />}>Télécharger mon CV</Button>
              </a>
            </Stack>
          </Drawer>
        </Flex>
      )}
    </header>
  );
};
