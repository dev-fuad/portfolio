import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { textStyle } from "./textStyles";

type AnyStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

export const fill: ViewStyle = { flex: 1 };
export const center: ViewStyle = { alignItems: 'center', justifyContent: 'center' };

export const spacing: { [key: string]: number | string } = {
  auto: 'auto',
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

const directions: { [key: string]: string } = {
  a: '',
  t: 'Top',
  l: 'Left',
  r: 'Right',
  b: 'Bottom',
  v: 'Vertical',
  h: 'Horizontal',
};

const styles: { [key: string]: keyof ViewStyle } = {
  m: 'margin',
  p: 'padding',
};

const regex = {
  spacing: /^(p|m)(a|t|b|r|l|v|h)-(xs|sm|md|lg|xl|auto)$/gm,
};

const classes: { [key: string]: AnyStyle } = {
  fill,
  center,
};

const getClass = (key: string): AnyStyle => {
  if (key in classes) {
    return classes[key];
  }

  if (key in textStyle) {
    return { fontFamily: 'SpaceMono', ...textStyle[key] }
  }

  if (key.length > 4 && regex.spacing.test(key)) {
    const style = key.at(0)!;
    const direction = key.at(1)!;
    const value = key.substring(3)!;

    const styleKey = `${styles[style]}${directions[direction]}`
    return { [styleKey]: spacing[value] };
  }

  return {};
};

const getClasses = (classNames?: string) => {
  if (classNames && typeof classNames === 'string') {
    const classes = classNames.split(' ');
    return classes.map((className) => getClass(className))
  }
};

export const getStyleProps = <T extends AnyStyle>(classNames?: string, styles?: T): { style?: T } => {
  const style = getClasses(classNames);

  if (style && style?.length) {
    return { style: StyleSheet.compose(style as T, styles) as T };
  }

  return { style: styles };
};
