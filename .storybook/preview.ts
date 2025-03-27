import { ThemeWrapper } from "./../src/themes/theme-wrapper";
import { CssBaseline } from "@mui/material";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react";

const decorators = [
  withThemeFromJSXProvider({
    defaultTheme: "light",
    Provider: ThemeWrapper,
    GlobalStyles: CssBaseline,
  }),
];

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators,
};

export default preview;
