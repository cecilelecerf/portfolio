'use client';
import { Burger, Button, Drawer, Flex, Stack, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import {
  IconBrandGithubFilled,
  IconBrandLinkedinFilled,
  IconDownload,
} from '@tabler/icons-react';
import Link from 'next/link';
import classes from './Header.module.css';

export const Header = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <header className={classes.header}>
      <Flex className={classes.flexDesktop}>
        <Link href="/">
          <Title className={classes.title}>Cécile LECERF</Title>
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
          <Link
            href="https://github.com/cecilelecerf"
            className={classes.iconLink}
            target="_blank"
          >
            <IconBrandGithubFilled size="100%" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/c%C3%A9cile-lecerf-ab1736220/"
            className={classes.iconLink}
            target="_blank"
          >
            <IconBrandLinkedinFilled size="100%" />
          </Link>
          <a href="/CV - Cécile LECERF.pdf" download>
            <Button leftSection={<IconDownload />} color='indigo'>Télécharger mon CV</Button>
          </a>
        </Flex>
      </Flex>

      <Flex className={classes.flexMobile}>
        <Link href="/">
          <Title className={classes.titleMobile}>Cécile LECERF</Title>
        </Link>

        <Burger
          opened={opened}
          onClick={toggle}
          aria-label="Toggle navigation"
          className={classes.burger}
        />

        <Drawer opened={opened} onClose={close} position="right" size="xs">
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
              <Link
                href="https://github.com/cecilelecerf"
                className={classes.iconLink}
                target="_blank"
              >
                <IconBrandGithubFilled size="100%" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/c%C3%A9cile-lecerf-ab1736220/"
                className={classes.iconLink}
                target="_blank"
              >
                <IconBrandLinkedinFilled size="100%" />
              </Link>
            </Flex>
            <a href="/CV - Cécile LECERF.pdf" download>
              <Button
                className={classes.cvButton}
                leftSection={<IconDownload />}
                color='indigo'
              >
                Télécharger mon CV
              </Button>
            </a>
          </Stack>
        </Drawer>
      </Flex>
    </header>
  );
};
