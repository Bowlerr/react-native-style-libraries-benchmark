import React from "react";
import { TouchableOpacity, Image, View, Text } from "react-native";
import { COUNT } from "../utils";

const NativeWind = () => {
  return (
    <View className="flex flex-row flex-wrap justify-around">
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          className="m-2"
        >
          <View
            className={`w-40 bg-gray-500 rounded-md overflow-hidden shadow-md ${
              i % 2 === 0 ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            <Image
              source={{ uri: `https://api.images.cat/300/300/${i}` }}
              className="w-full h-24 object-cover"
            />
            <View className="p-3">
              <Text className="text-lg font-bold text-blue-300 mb-1">
                Item {i} Title
              </Text>
              <Text className="text-sm leading-5 text-gray-200 mb-2">
                This is a more complex card to test render time. It includes an
                image, styled text, and multiple nested elements. Each card is
                rendered individually and dynamically.
              </Text>
              <View className="mt-1 pt-1 border-t border-gray-400 items-center">
                <Text className="text-xs text-white">Footer Content {i}</Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NativeWind;
