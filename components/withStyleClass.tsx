import { getStyleProps } from "@/theme/styles";

export type StyleClassProps = {
  className?: string;
};

export default function withStyleClass<Props extends object>(Component: React.ComponentType<Props>) {
  function WrapperComponent(props: Props & StyleClassProps) {
    const { className, ...rest } = props;
    const styleProps = getStyleProps(className, (rest as any).style);

    return <Component {...rest as Props} {...styleProps} />;
  }
  
  WrapperComponent.displayName = Component.displayName;

  return WrapperComponent;
}