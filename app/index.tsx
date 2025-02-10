import Portfolio from "@/assets/data.json";
import Carousel from "@/components/Carousel";
import Image from "@/components/Image";
import ActionButton from "@/components/Pressable";
import Screen from "@/components/Screen";
import TabbedCard from "@/components/TabbedCard";
import Text from "@/components/Text";
import View from "@/components/View";

import Experience from "./home/components/experience";
import Projects from "./home/components/projects";

export default function Index() {
  return (
    <Screen className="fill" contentClassName="web:center grow-1" scrollable>

      <View className="pa-md web:direction-row gap-lg">
        <TabbedCard title="About Me" containerClassName="web:width-350">
          <View className="align-end mt-sm">
            <View className="width-80% aspect-ratio-1 center rad-aa-150 bt-3-white br-3-white">
              <View className="height-97% width-97% center rad-aa-150 bb-3-white bt-3-white">
                <Image asset="MyPic" className="height-97% width-97% rad-aa-115" />
              </View>
            </View>
          </View>

          <Text className="h1">I'm</Text>
          <Text className="h1 text-weight-bold">{Portfolio["contact-info"]['first-name']}</Text>
          <Text className="h2 text-weight-bold">{Portfolio["contact-info"]['last-name']}</Text>

          {/* <Text>
            <Text className="h2">A passionate </Text>
            <Text className="h2 text-weight-bold">{Portfolio["contact-info"].role}</Text>
            <Text className="h2"> / Epistemophilia</Text>
            <Text className="h2"> / Tech Enthusiast</Text>
          </Text> */}
        </TabbedCard>

        <View className="gap-lg">
          <View className="row justify-center ph-sm">
            <Text className="h1 web:text-size-72 text-weight-bold color-black">P o r t f o l i o</Text>
            <View className="width-20 height-20 bt-8-black br-8-black" />
          </View>

          <View className="fill gap-lg">
            <View className="fill web:row wrap-wrap gap-lg">
              <ActionButton light className="web:width-360 !web:width-100% !web:aspect-ratio-1.6 bg-color-primary rad-aa-lg overflow-hidden">
                <Carousel />
              </ActionButton>
              <View className="width-120 rad-aa-lg overflow-hidden !web:hide">
                <Experience />
                <Projects />
              </View>
            </View>

            <View className="fill row gap-lg web:hide">
              <View className="width-120 rad-aa-lg overflow-hidden">
                <Experience />
                <Projects />
              </View>
              <ActionButton light className="fill height-70vw bg-color-gray rad-aa-lg" />
            </View>

            <View className="row gap-lg height-135 align-stretch">
              <ActionButton light className="width-32% bg-color-gray rad-aa-lg !web:hide" />
              <View className="web:width-60% !web:width-100% !web:height-120 row bg-color-black rad-aa-lg">
                <View className="flex-4" />
                <ActionButton className="flex-6 bg-color-orange rad-aa-lg" />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
