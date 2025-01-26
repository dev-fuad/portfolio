import { TextStyle } from "react-native";

import { pallete } from "@/theme/colors";

const FontFamily = {
  Nunito: 'Nunito' as TextStyle['fontFamily'],
  Pathway: 'Pathway' as TextStyle['fontFamily'],
};

const FontSize = {
  xl: 48 as TextStyle['fontSize'],
  lg: 36 as TextStyle['fontSize'],
  md: 28 as TextStyle['fontSize'],
  sm: 24 as TextStyle['fontSize'],
  xs: 20 as TextStyle['fontSize'],
};

const FontWeight = {
  regular: 400 as TextStyle['fontWeight'],
  bold: 700 as TextStyle['fontWeight'],
};

export const textStyle: { [key: string]: TextStyle } = {
  h1: { fontFamily: FontFamily.Pathway, fontSize: FontSize.xl, color: pallete.white },
  h2: { fontFamily: FontFamily.Nunito, fontSize: FontSize.lg, color: pallete.white },
  h3: { fontFamily: FontFamily.Nunito, fontSize: FontSize.md, color: pallete.white },
  body: { fontFamily: FontFamily.Nunito, fontSize: FontSize.sm, color: pallete.white },
  small: { fontFamily: FontFamily.Nunito, fontSize: FontSize.xs, color: pallete.white },
  link: {
    fontFamily: FontFamily.Nunito,
    fontSize: FontSize.sm,
    color: pallete.primary,
    textDecorationColor: pallete.primary,
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
} as const;

const align = [
  'left',
  'center',
  'right',
  'justify',
];

const verticalAlign = [
  'top',
  'middle',
  'right',
  'justify',
];

export const TEXT_REGEX = /^text-(font|size|weight|align|valign)-(.+)$/;

export const getTextStyles = (matchgroups: string[]) => {
  const attribute = matchgroups[0];
  if (attribute === 'font') {
    return { fontFamily: FontFamily[matchgroups[1] as keyof typeof FontFamily] ?? FontFamily.Nunito };
  }
  if (attribute === 'size') {
    return { fontSize: FontSize[matchgroups[1] as keyof typeof FontSize] ?? FontSize.md };
  }
  if (attribute === 'weight') {
    return { fontWeight: FontWeight[matchgroups[1] as keyof typeof FontWeight] ?? FontWeight.regular };
  }
  if (attribute === 'align' && align.includes(matchgroups[1])) {
    return { textAlign: matchgroups[1] as TextStyle['textAlign'] };
  }
  if (attribute === 'valign' && verticalAlign.includes(matchgroups[1])) {
    return { textAlignVertical: matchgroups[1] as TextStyle['textAlignVertical'] };
  }

  return {};
}
