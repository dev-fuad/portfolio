import { Fragment } from 'react';
import { StyleSheet } from 'react-native';

import { Link, Stack } from 'expo-router';

import Screen from '@/components/Screen';
import Text from '@/components/Text';
import { center, fill } from '@/theme/styles';

export default function NotFoundScreen() {
  return (
    <Fragment>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <Screen style={[fill, center]}>
        <Text className="h2">This screen doesn't exist.</Text>
        <Link href="/" style={styles.link}>
          <Text className="link">Go to home screen!</Text>
        </Link>
      </Screen>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
