import ActionButton from "@/components/Pressable";
import Text from "@/components/Text";

export default function Experience() {
  return (
    <ActionButton className="fill bg-color-secondary center">
      <Text>
        <Text className="h2 bold color-black">10+</Text>
        <Text className="small color-black"> yrs</Text>
      </Text>
      <Text className="small color-black">Experience</Text>
    </ActionButton>
  );
}
