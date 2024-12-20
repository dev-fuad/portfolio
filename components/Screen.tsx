import { SafeAreaView } from 'react-native-safe-area-context';

import View, { ViewProps } from '@/components/View';
import { colors } from '@/theme/colors';

interface ScreenProps extends ViewProps {
  containerProps?: Omit<ViewProps, 'children'>;
}

export default function Screen({ containerProps, ...props }: ScreenProps) {
  const styles: ViewProps['style'] = {
    flex: 1,
    backgroundColor: colors.light.background,
  };

  return <SafeAreaView {...containerProps} style={[styles, containerProps?.style]}>
    <View {...props} />
  </SafeAreaView>
}
