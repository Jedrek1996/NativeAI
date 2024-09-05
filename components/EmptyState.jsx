import { View, Text, Image } from "react-native";
import React from "react";
import { router } from "expo-router";
import { images } from "../constants";
import Homepagebutton from "./HomepageButton";

const EmptyState = ({ title, subtitle }) => {
  return (
    <View className="justify-center items-center px-4 flex-1 w-full">
      <Image
        source={images.empty}
        className="w-[270px] h-[215px]"
        resizeMode="contain"
      />
      <Text className="text-xl font-psemibold text-white text-center mt-2 ">
        {title}
      </Text>
      <Text className="font-pmedium text-sm text-gray-100">{subtitle}</Text>
      <Homepagebutton
        title="Create video"
        handlePress={() => router.push("/create")}
        containerStyles="w-full my-5"
      />
    </View>
  );
};

export default EmptyState;
