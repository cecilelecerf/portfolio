'use client';

import { Button, createTheme, MantineTheme } from '@mantine/core';
import { Barlow } from 'next/font/google';

const barlow = Barlow({
  weight: ['400', '500', '800', '900'],
  subsets: ['latin'],
});

export const theme = createTheme({
  fontFamily: `${barlow.style.fontFamily}, Verdana, sans-serif`,
  fontFamilyMonospace: 'Monaco, Courier, monospace',
  headings: {
    fontFamily: `${barlow.style.fontFamily}, Greycliff CF, sans-serif`,
    fontWeight: '400',
  },
  components: {
    Button: Button.extend({
      defaultProps: {
        variant: 'outline', // Variante par défaut pour tous les boutons
        color: 'black',
      },
    }),
  },
});
