// breakpoints for responsive design

import { Dimensions } from "react-native";

export const Platform = {
  mobile: 300,
  web: 900,
};

export type PlatformKey = keyof typeof Platform;

export const isPlatform = (OS: PlatformKey) => {
  const { width } = Dimensions.get('window');
  
  return width >= Platform[OS];
};
