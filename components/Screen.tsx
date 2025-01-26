
import { SafeAreaView } from 'react-native-safe-area-context';

import View, { ViewProps } from '@/components/View';
import { pallete } from '@/theme/colors';
import { getStyleProps } from '@/theme/styles';

import ScrollView from './ScrollView';

interface ScreenProps extends ViewProps {
  containerProps?: Omit<ViewProps, 'children'>;
  scrollable?: boolean;
  containerClassName?: string;
  contentClassName?: string;
}

export default function Screen({
  containerProps,
  scrollable,
  containerClassName,
  contentClassName,
  ...props
}: ScreenProps) {
  const styles: ViewProps['style'] = {
    flex: 1,
    backgroundColor: pallete.white,
  };

  const containerStyle = getStyleProps(containerClassName, containerProps?.style).style;

  return <SafeAreaView {...containerProps} style={[styles, containerStyle]}>
    {scrollable
      ? <ScrollView {...props} contentClassName={contentClassName} />
      : <View {...props} />
    }
  </SafeAreaView>
}
