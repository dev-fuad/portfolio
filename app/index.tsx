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
import Skills from "./home/components/skills";

export default function Index() {
  return (
    <Screen className="fill" contentClassName="web:center grow-1" scrollable>

      <View className="pa-md web:direction-row gap-lg">
        <TabbedCard title="About Me" containerClassName="web:width-350">
          <View className="align-end mt-sm">
            <View className="width-80% aspect-ratio-1 center rad-aa-150">
              <View className="absolute-fill top-20% right-20% bottom-20% left-20% rad-aa-150 ba-3-white" />
              <View className="absolute-fill top-35% right-35% bottom-35% left-35% rad-aa-150 bg-color-pink" />
              <Image asset="MyPic" className="width-100% height-100% aspect-ratio-1 rad-aa-115" resizeMode="contain" />
            </View>
          </View>

          <Text className="h1 mt--20">I'm</Text>
          <Text className="h1 text-weight-bold">{Portfolio["contact-info"]['first-name']}</Text>
          <Text className="h2 text-weight-bold">{Portfolio["contact-info"]['last-name']}</Text>

          <View className="row align-center gap-sm">
            <Text className="link text-size-xs">{Portfolio["contact-info"]['email']}</Text>
            <Image asset="EmailIcon" className="mt-5 width-15 height-15" />
          </View>

          <View className="position-absolute bottom-100 right-20 height-80 aspect-ratio-1 bt-3-black br-3-black rad-aa-40">
            <View className="fill center ma-5 rad-aa-35 bg-color-black">
              <View className="height-lg aspect-ratio-1 rad-aa-35 bg-color-white" />
            </View>
          </View>

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
              <Skills className="fill pa-xs gap-md height-70vw bg-color-gray rad-aa-lg center" />
            </View>

            <View className="row gap-lg height-135 align-stretch">
              <Skills className="width-32% bg-color-gray rad-aa-lg !web:hide center gap-xs" />
              <View className="web:width-60% !web:width-100% !web:height-120 row bg-color-black rad-aa-lg">
                <View className="flex-4 center">
                  <Image
                    asset="AchievementsIcon"
                    className="width-65% height-65% aspect-ratio-1 rad-aa-lg"
                    resizeMode="contain"
                  />
                </View>
                <ActionButton className="flex-6 bg-color-orange rad-aa-lg center">
                  <Text className="h2 text-weight-bold color-black">3</Text>
                  <Text className="small color-black">Awards</Text>
                </ActionButton>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Screen>
  );
}
