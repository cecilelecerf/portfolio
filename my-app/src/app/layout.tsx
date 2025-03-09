import type { Metadata } from 'next';
import './globals.css';
import '@mantine/core/styles.css';
import {
  Box,
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';

import { theme } from '../../theme';
import { Header } from '@/components/Header';

export const metadata: Metadata = {
  title:
    'Portfolio de Cécile – Développeuse Web & Créatrice de Solutions Innovantes',
  description:
    "Explorez le portfolio de Cécile, une développeuse web passionnée par la création de sites et d'applications modernes. Découvrez mes projets, compétences et réalisations dans le développement frontend et backend.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" {...mantineHtmlProps} style={{ height: '100%' }}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <Box px={{ base: 20, sm: 100 }} pb="xl">
            <Header />
            <main>{children}</main>
          </Box>
        </MantineProvider>
      </body>
    </html>
  );
}
