import { forwardRef, PropsWithoutRef } from "react";

import { getStyleProps } from "@/theme/styles";

export type StyleClassProps = {
  className?: string;
};

export default function withStyleClass<Props extends object>(Component: React.ComponentType<Props>) {
  function WrapperComponent(props: PropsWithoutRef<Props & StyleClassProps>, ref: React.Ref<React.ComponentType<Props>>) {
    const { className, ...rest } = props;
    const styleProps = getStyleProps(className, (rest as any).style);

    return <Component ref={ref} {...rest as Props} {...styleProps} />;
  }
  
  WrapperComponent.displayName = Component.displayName;

  return forwardRef(WrapperComponent);
}
