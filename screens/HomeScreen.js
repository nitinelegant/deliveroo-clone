import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-red-500">HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;
