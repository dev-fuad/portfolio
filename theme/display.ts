import { ViewStyle } from "react-native";

export const DISPLAY_REGEX = /^(position|top|right|bottom|left|overflow|aspect-ratio|opacity)-(.+)$/;

export const getDisplayStyles = (matchGroups: string[]) => {
  const [style, value] = matchGroups;

  if (style === 'position') {
    return { position: value as ViewStyle['position'] };
  }

  if ([ 'top', 'right', 'bottom', 'left' ].includes(style)) {
    return { [style]: isNaN(parseFloat(value)) ? undefined : parseFloat(value) };
  }

  if (style === 'overflow') {
    return { overflow: value as 'visible' | 'hidden' | undefined };
  }

  if (style === 'aspect-ratio') {
    return { aspectRatio: parseFloat(value) ?? undefined };
  }

  if (style === 'opacity') {
    return { opacity: parseFloat(value) ?? undefined };
  }

  return {};
};
