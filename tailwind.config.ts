import type { Config } from "tailwindcss";
import tailwindTypography from "@tailwindcss/typography";
import { animation, keyframes, colors, fontFamily, components } from "./src/shared/styles";
import plugin from "tailwindcss/plugin";
import tailwindAnimate from "tailwindcss-animate";
import tailwindContainerQueries from "@tailwindcss/container-queries";

const config: Config = {
  corePlugins: {
    container: false,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: fontFamily,
    extend: {
      colors,
      animation,
      keyframes,
    },
  },
  plugins: [
    tailwindTypography,
    tailwindAnimate,
    tailwindContainerQueries,
    plugin((pluginAPI) => {
      components(pluginAPI);
    }),
  ],
};
export default config;
