import type { Config } from 'tailwindcss';
import tailwindTypography from '@tailwindcss/typography';
import tailwindAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [tailwindTypography, tailwindAnimate],
};
export default config;
