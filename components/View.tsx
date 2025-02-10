import { View as RNView, ViewProps as RNViewProps } from 'react-native';

import withStyleClass, { StyleClassProps } from './withStyleClass';

export type ViewProps = RNViewProps & StyleClassProps;

const View = withStyleClass(RNView);

export default View;
