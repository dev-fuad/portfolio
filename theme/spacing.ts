import { ViewStyle } from "react-native";

/**
 * Use Spacing and Gaps in your styles
 * p -> padding
 * m -> margin
 * a -> all
 * t -> top
 * b -> bottom
 * r -> right
 * l -> left
 * v -> vertical
 * h -> horizontal
 * gap -> gap
 * gap-x -> columnGap
 * gap-y -> rowGap
 * 
 * e.g. pa-xs -> padding: 8
 * e.g. mt-md -> margin-top: 16
 * e.g. gap-xs -> gap: 8
 * e.g. width-xs -> width: 8
 * e.g. height-15 -> height: 15
 * e.g. width-10% -> width: 10%
 */

export const DIMENSION_REGEX = /^(width|height|minWidth|minHeight|maxWidth|maxHeight)-(.+)$/;
export const SPACING_REGEX = /^(p|m)(a|t|b|r|l|v|h)-(xs|sm|md|lg|xl|auto)$/;
export const GAPS_REGEX = /^(gap|gap-x|gap-y)-(xs|sm|md|lg|xl)$/;

export const spacing: { [key: string]: number | string } = {
  auto: 'auto',
  none: 0,
  xs: 8,
  sm: 12,
  md: 16,
  lg: 20,
  xl: 24,
};

export const directions: { [key: string]: string } = {
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
  gap: 'gap',
  'gap-x': 'columnGap',
  'gap-y': 'rowGap',
};

export const getDimension = (matchGroups: string[]) => {
  const [styleKey, value] = matchGroups;

  let valueAmount = spacing[value] ?? value;
  if (!styleKey || !valueAmount) return {};
  if (!value.includes('%') && !isNaN(parseInt(value))) {
    valueAmount = parseInt(value);
  }
  return { [styleKey]: valueAmount };
};

export const getSpacing = (matchGroups: string[]) => {
  const [style, direction, value] = matchGroups;

  let styleKey = styles[style];
  if (!styleKey) return {};
  const styleDirection = directions[direction];
  if (styleDirection) {
    styleKey += styleDirection;
  }
  const valueAmount = spacing[value];
  if (!valueAmount) return {};
  return { [styleKey]: valueAmount };
};

export const getGap = (matchGroups: string[]) => {
  const [style, value] = matchGroups;

  const styleKey = styles[style];
  const valueAmount = spacing[value];
  if (!styleKey || !valueAmount) return {};
  return { [styleKey]: valueAmount };
};
