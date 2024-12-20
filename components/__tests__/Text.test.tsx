
import { render } from '@testing-library/react-native';

import Text from '@/components/Text';

describe('Text component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Text>Test Text</Text>);
    expect(getByText('Test Text')).toBeTruthy();
  });

  it('applies custom className styles', () => {
    const { getByText } = render(<Text className="custom-class">Styled Text</Text>);
    const textElement = getByText('Styled Text');
    expect(textElement.props.style).toBeDefined();
  });

  it('passes additional props to the RNText component', () => {
    const { getByText } = render(<Text accessibilityLabel="test-label">Accessible Text</Text>);
    const textElement = getByText('Accessible Text');
    expect(textElement.props.accessibilityLabel).toBe('test-label');
  });
});