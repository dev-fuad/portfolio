
import { render } from '@testing-library/react-native';

import { pallete } from '@/theme/colors';

import Screen from '../Screen';

describe('Screen component', () => {
  it('renders correctly with default props', () => {
    const { getByTestId } = render(<Screen testID="screen" />);
    const screen = getByTestId('screen');
    expect(screen).toBeTruthy();
  });

  it('applies default styles', () => {
    const screen = render(<Screen testID="screen" />);
    
    expect(screen.root.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({
        flex: 1,
        backgroundColor: pallete.white,
      }),
    ]));
  });

  it('applies containerProps styles', () => {
    const containerProps = { style: { padding: 10 } };
    const screen = render(<Screen testID="screen" containerProps={containerProps} />);

    expect(screen.root.props.style).toEqual(expect.arrayContaining([
      expect.objectContaining({
        flex: 1,
        backgroundColor: pallete.white,
      }),
      expect.objectContaining({
        padding: 10,
      }),
    ]));
  });

  it('passes props to the View component', () => {
    const { getByTestId } = render(<Screen testID="screen" accessibilityLabel="test-label" />);
    const view = getByTestId('screen').findByProps({ accessibilityLabel: 'test-label' });
    expect(view).toBeTruthy();
  });
});