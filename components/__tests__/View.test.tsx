import { render } from '@testing-library/react-native';

import View from '@/components/View';

describe('View component', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = render(<View />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('applies className styles correctly', () => {
    const { getByTestId } = render(<View className="test-class" testID="view" />);
    const view = getByTestId('view');
    expect(view.props.style).toBeDefined();
  });

  it('passes other props to RNView', () => {
    const { getByTestId } = render(<View testID="view" accessibilityLabel="test-label" />);
    const view = getByTestId('view');
    expect(view.props.accessibilityLabel).toBe('test-label');
  });
});