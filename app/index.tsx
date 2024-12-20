import Portfolio from "@/assets/data.json";
import Screen from "@/components/Screen";
import Text from "@/components/Text";

export default function Index() {
  return (
    <Screen className="fill pa-md">
      <Text className="h1">{Portfolio["contact-info"].name}</Text>
      <Text className="h2">{Portfolio["contact-info"].role}</Text>
    </Screen>
  );
}
