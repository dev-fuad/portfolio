import Portfolio from "@/assets/data.json";
import Screen from "@/components/Screen";
import TabbedCard from "@/components/TabbedCard";
import Text from "@/components/Text";
import View from "@/components/View";

export default function Index() {
  return (
    <Screen className="fill" contentClassName="pa-md web:direction-row gap-lg" scrollable>

      <TabbedCard title="About Me" containerClassName="web:maxWidth-300">
        <Text className="h1 text-font-Nunito">I am</Text>
        <Text className="h1">{Portfolio["contact-info"].name}</Text>
        
        <Text>
          <Text className="h2">A passionate </Text>
          <Text className="h2 text-weight-bold">{Portfolio["contact-info"].role}</Text>
          <Text className="h2">/Epistemophilia</Text>
          <Text className="h2">/Tech Enthusiast</Text>
        </Text>
      </TabbedCard>

      <View className="gap-lg">
        <View className="row gap-lg">
          <View className="web:width-150 width-48% height-100 bg-color-secondary rad-aa-lg" />
          <View className="web:width-150 width-48% height-100 bg-color-primary rad-aa-lg" />
        </View>
        <View className="row justify-space-between web:width-300">
          <View className="width-48% height-100 bg-color-orange rad-aa-lg" />
          <View className="width-48% height-100 bg-color-gray rad-aa-lg" />
        </View>
      </View>
    </Screen>
  );
}
