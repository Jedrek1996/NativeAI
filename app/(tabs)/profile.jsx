import { View, Text, FlatList, Image, RefreshControl } from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import SearchInput from "../../components/SearchInput";
import Trending from "../../components/Trending";
import EmptyState from "../../components/EmptyState";
import { searchPosts } from "../../lib/appwrite";
import useAppwrite from "../../lib/useAppwrite";
import VideoCard from "../../components/VideoCard";
import { useLocalSearchParams } from "expo-router";

const Profile = () => {
  const { query } = useLocalSearchParams();
  const { data: posts, refetch } = useAppwrite(() => searchPosts(query));

  useEffect(() => {
    refetch();
  }, [query]);
  return (
    <SafeAreaView className="bg-primary h-full">
      <FlatList
        data={posts}
        keyExtractor={(item) => item.$id}
        renderItem={({ item }) => (
          <VideoCard
            title={item.title}
            videoUrl={item.video}
            thumbnail={item.thumbnail}
            creatorName={item.creator.username}
            avatar={item.creator.avatar}
            prompt={item.prompt}
          />
        )}
        ListHeaderComponent={() => {
          return (
            <View className="my-6 px-4">
              <Text className="font-pmedium text-sm text-gray-100">
                Search Results
              </Text>
              <Text className="text-2xl font-psemibold text-white">
                {query}
              </Text>

              <View className="mt-6 mb-8">
                <SearchInput initialQuery={query} />
              </View>
            </View>
          );
        }}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <EmptyState
              title="No Videos Found"
              subtitle="No videos found for this search input"
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
