import { ImageStyle, StyleProp, StyleSheet, TextStyle, ViewStyle } from "react-native";

import { BORDER_RADIUS_REGEX, BORDER_REGEX, getBorder } from "./border";
import { COLOR_REGEX, getColor } from "./colors";
import { FLEX_REGEX, getFlexStyles } from "./flex";
import { isPlatform } from "./responsive";
import { DIMENSION_REGEX, GAPS_REGEX, getDimension, getGap, getSpacing, SPACING_REGEX } from "./spacing";
import { getTextStyles, TEXT_REGEX, textStyle } from "./textStyles";

type AnyStyle = StyleProp<ViewStyle | TextStyle | ImageStyle>;

const classes: { [key: string]: AnyStyle } = {
  fill: { flex: 1 },
  center: { alignItems: 'center', justifyContent: 'center' },
  row: { flexDirection: 'row' },
  'space-between': { justifyContent: 'space-between' },
  bold: { fontWeight: 'bold' },
  italic: { fontStyle: 'italic' },
  underline: { textDecorationStyle: 'solid', textDecorationColor: 'white' },
  hide: { display: 'none' },
};

const getClass = (classKey: string): AnyStyle => {
  let [platform, key] = classKey.split(':');

  /**
   * android:style will apply the style only on android
   * !android:style will apply the style on all platforms except android
   */
  if (platform && key) {
    let shouldApply = true;
    if (platform.includes('!')) {
      shouldApply = false;
      platform = platform.replace('!', '');
    }
    if ((!isPlatform(platform as any) && shouldApply) || (isPlatform(platform as any) && !shouldApply)) {
      return {};
    }
  } else {
    key = classKey;
  }

  if (key in classes) {
    return classes[key];
  }

  if (key in textStyle) {
    return { fontFamily: 'Pathway', ...textStyle[key] }
  }

  let keyPattern = key.match(DIMENSION_REGEX);
  if (keyPattern) {
    return getDimension(keyPattern.slice(1));
  }
  keyPattern = key.match(SPACING_REGEX);
  if (keyPattern) {
    return getSpacing(keyPattern.slice(1));
  }
  keyPattern = key.match(GAPS_REGEX);
  if (keyPattern) {
    return getGap(keyPattern.slice(1));
  }
  keyPattern = key.match(BORDER_REGEX) || key.match(BORDER_RADIUS_REGEX);
  if (keyPattern) {
    return getBorder(keyPattern.slice(1));
  }
  keyPattern = key.match(COLOR_REGEX);
  if (keyPattern) {
    return getColor(keyPattern.slice(1));
  }
  keyPattern = key.match(TEXT_REGEX);
  if (keyPattern) {
    return getTextStyles(keyPattern.slice(1));
  }
  keyPattern = key.match(FLEX_REGEX);
  if (keyPattern) {
    return getFlexStyles(keyPattern.slice(1));
  }

  return {};
};

const getClasses = (classNames?: string) => {
  if (classNames && typeof classNames === 'string') {
    const classes = classNames.split(' ');
    return classes.map((className) => {
      const _class = getClass(className);
      // console.log('class', className, _class);
      return _class;
    });
  }
};

export const getStyleProps = <T extends AnyStyle>(classNames?: string, styles?: T): { style?: T } => {
  const style = getClasses(classNames);

  if (style && style?.length) {
    return { style: StyleSheet.compose(style as T, styles) as T };
  }

  return { style: styles };
};
