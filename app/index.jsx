import { Text, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-teal-300 text-5xl font-pblack">
        Edit app/index.tsx to edit this freaking screen.
      </Text>
      <Link href="/profile" style={{ color: "blue" }}>
        {" "}
        Go to profile
      </Link>
    </View>
  );
}
