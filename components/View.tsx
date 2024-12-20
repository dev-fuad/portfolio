import { View as RNView, ViewProps as RNViewProps } from 'react-native';

import { getStyleProps } from '@/theme/styles';

export interface ViewProps extends RNViewProps {
  className?: string;
}

export default function View({ className, ...props }: ViewProps) {
  return <RNView {...props} {...getStyleProps(className, props.style)} />;
}
