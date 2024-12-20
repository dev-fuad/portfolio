import { Text as RNText, TextProps as RNTextProps } from 'react-native';

import { getStyleProps } from '@/theme/styles';
import { textStyle } from '@/theme/textStyles';

export type Typography = keyof typeof textStyle;

interface TextProps extends RNTextProps {
  className?: string;
}

export default function Text({ className, ...props }: TextProps) {
  return <RNText {...props} {...getStyleProps(className, props.style)} />
}
