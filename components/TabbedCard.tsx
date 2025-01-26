/**
 * portfolio
 * TabbedCard.tsx
 * created: 28/12/2024
 * Fuad Mohd. Firoz
 *
 * @format
 */

import React from 'react';

import Text from './Text';
import View, { ViewProps } from './View';

interface Props extends ViewProps {
  containerClassName?: string;
  title?: string;
}

const TabbedCard: React.FC<Props> = ({ containerClassName, title, ...props }) => {
  return (
    <View className={`align-stretch justify-center ${containerClassName}`}>
      <View className="row align-center rad-tr-lg overflow-hidden">
        <Text className="text-font-Pathway width-35% pl-lg color-black" numberOfLines={1}>{title}</Text>
        <View className="width-65% bl-30-transparent br-0-transparent bb-40-primary" />
      </View>
      <View className="pa-md bg-color-primary rad-aa-lg rad-tr-none" {...props} />
    </View>
  );
};

export default TabbedCard;
