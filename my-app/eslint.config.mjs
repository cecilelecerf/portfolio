import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends(
    'next/core-web-vitals',
    'next/typescript',
    'plugin:@typescript-eslint/recommended', // Support TypeScript
    'plugin:prettier/recommended', // Intègre Prettier
  ),
  {
    rules: {
      'react/react-in-jsx-scope': 'off', // Inutile avec Next.js
      'prettier/prettier': 'error', // Erreur sur conflits Prettier
    },
  },
];

export default eslintConfig;
