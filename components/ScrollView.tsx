import { ScrollView as RNScrollView, ScrollViewProps as RNScrollViewProps } from "react-native";

import { getStyleProps } from "@/theme/styles";

export interface ScrollViewProps extends RNScrollViewProps {
  className?: string;
  contentClassName?: string;
}

export default function ScrollView({
  className,
  contentClassName,
  ...props
}: ScrollViewProps) {
  const styles = getStyleProps(contentClassName, props.contentContainerStyle).style;
  return (
    <RNScrollView
      {...props}
      {...getStyleProps(className, props.style)}
      contentContainerStyle={styles}
    />
  );
}
