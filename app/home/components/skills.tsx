import Image from "@/components/Image";
import ActionButton from "@/components/Pressable";
import Text from "@/components/Text";

export default function Skills({ className }: { className?: string }) {
  return (
    <ActionButton light className={className}>
      <Image asset="SkillsIcon" className="width-50% height-50%" resizeMode="contain" />
      <Text className="small">Skills</Text>
    </ActionButton>
  );
}
