import { Pressable as RNPressable, PressableProps as RNPressableProps } from "react-native";

import Animated, { SequencedTransition } from "react-native-reanimated";

import View from "./View";
import withStyleClass, { StyleClassProps } from "./withStyleClass";

export type PressableProps = RNPressableProps & StyleClassProps & {
  light?: boolean;
};

type ArrowProps = {
  light: boolean,
  pressed: boolean,
  hovered: boolean,
};

export const Pressable = withStyleClass(RNPressable);

const AnimatedView = Animated.createAnimatedComponent(View);

const Arrow = ({ light, hovered, pressed }: ArrowProps) => {
  const color = light ? 'white' : 'black';
  const size = hovered || pressed ? 15 : 10;
  const width = hovered || pressed ? 4 : 1;
  let placement = pressed ? undefined : 15;

  const position = `position-absolute top-${placement} right-${placement}`;
  const dimensions = `width-${size} height-${size}`;
  const border = `bt-${width}-${color} br-${width}-${color}`;

  const overlayColor = light ? 'black' : 'white';

  return (
    <View className="absolute-fill center">
      {pressed && <View className={`absolute-fill bg-color-${overlayColor} opacity-0.5`} />}
      <AnimatedView
        layout={SequencedTransition.duration(100)}
        className={`${position} ${dimensions} ${border}`}
      />
    </View>
  );
};

export default function ActionButton({ children, light, ...props }: PressableProps) {
  return (
    <Pressable {...props}>
      {(pressableState) => (
        <>
          {typeof children === 'function' ? children(pressableState) : children}
          <Arrow light={light ?? false} {...pressableState} />
        </>
      )}
    </Pressable>
  );
}
