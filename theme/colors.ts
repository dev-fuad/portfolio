import { ColorValue, TextStyle } from "react-native";

export const pallete = {
  primary: '#8285d3',
  secondary: '#AADBD8',

  orange: '#FFC366',
  pink: '#EFB0FF',

  gray: '#585858',

  white: '#FFFFFF',
  black: '#000000',
  transparent: '#00000000',
};

export const COLOR_REGEX = /^(color|bg-color|border-color)-(.+)$/;

const styles: { [key: string]: keyof TextStyle } = {
  color: 'color',
  'bg-color': 'backgroundColor',
  'border-color': 'borderColor',
};

export const getColor = (matchgroups: string[]) => {
  const [style, value] = matchgroups;

  if (!(style in styles && value in pallete)) {
    return {};
  }

  const styleKey = styles[style];
  const color = pallete[value as keyof typeof pallete] as ColorValue;

  return { [styleKey]: color };
}
