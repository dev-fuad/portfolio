import React from "react";
import { Image as RNImage, ImageProps as RNImageProps } from "react-native";

import Animated from "react-native-reanimated";

import withStyleClass, { StyleClassProps } from "./withStyleClass";

const Assets = {
  MyPic: require("@/assets/images/Me cropped.png"),
  Paperless: require("@/assets/images/apps/paperless.png"),
  Portfolio: require("@/assets/images/apps/class-styled.png"),
  AireHealth: require("@/assets/images/apps/airehealth.png"),
  Lexicon: require("@/assets/images/apps/Lexicon.png"),
};

export type ImageProps = RNImageProps & StyleClassProps & {
  asset?: keyof typeof Assets;
};

function Image({ asset, ...props }: ImageProps, ref: React.Ref<RNImage>) {
  if (asset && asset in Assets) {
    props.source = Assets[asset];
  }

  return <RNImage ref={ref} {...props} />;
}

const RefImage = React.forwardRef<RNImage, ImageProps>(Image);
export const StyledImage = withStyleClass(RefImage);

export const AnimatedImage = Animated.createAnimatedComponent(StyledImage);

export default withStyleClass(Image);
