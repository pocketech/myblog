// Theme
import type { ChakraTheme } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

// Component style overrides
import { Button, Link } from "./components";
// Global style overrides
import { global } from "./global";
// Text style overrides
import { textStyles } from "./styles/textStyles";

export const themeOverrides: Partial<ChakraTheme> = {
  textStyles,
  styles: { global },
  components: {
    Button,
    Link,
  },
};
export const theme = extendTheme(themeOverrides);
