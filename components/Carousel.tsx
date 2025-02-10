import React, { useEffect } from "react";

import { FadeIn, FadeOut } from "react-native-reanimated";

import Image, { AnimatedImage, ImageProps } from "./Image";
import View from "./View";

function ImageSlide({ asset, source }: Pick<ImageProps, "asset" | "source">) {
  return (
    <Image asset={asset} source={source} className="absolute-fill width-360 height-250" resizeMode="contain" />
  );
};

const assets = ['Paperless', 'Portfolio', 'AireHealth', 'Lexicon'] as ImageProps['asset'][];

export default function Carousel() {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((curr) => (curr + 1) % assets.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View className="fill bg-color-black rad-aa-lg">
      {assets.map((asset, index) => (
        <AnimatedImage
          key={asset}
          asset={asset}
          className={`absolute-fill width-360 height-250 ${index === currentSlide ? '' : 'hide'}`}
          resizeMode="contain"
          entering={FadeIn}
          exiting={FadeOut}
        />
      ))}
    </View>
  );
}

export const Slide = {
  Image: ImageSlide,
};
