import { TextStyle } from "react-native";

import { colors, pallete } from "@/theme/colors";

export const textStyle: { [key: string]: TextStyle } = {
  h1: { fontSize: 48, color: pallete.primary },
  h2: { fontSize: 22, color: pallete.primary },
  h3: { fontSize: 17, color: colors.light.text },
  body: { fontSize: 15, color: colors.light.text },
  small: { fontSize: 14, color: pallete.primary },
  link: {
    fontSize: 15,
    color: pallete.primary,
    textDecorationColor: pallete.primary,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
} as const;
