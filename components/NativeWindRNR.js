import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import { COUNT } from "../utils";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "~/reuseable/ui/card";
import { Text } from "~/reuseable/ui/text";

const NativeWindRNR = () => {
  return (
    <View className="flex flex-row flex-wrap justify-around">
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => alert(`Item ${i} clicked!`)}
          className="m-2"
        >
          <Card
            className={`w-40 bg-gray-500 rounded-md overflow-hidden shadow-md ${
              i % 2 === 0 ? "bg-blue-500" : "bg-gray-500"
            }`}
          >
            <Image
              source={{ uri: `https://api.images.cat/300/300/${i}` }}
              className="w-full h-24 object-cover"
            />
            <CardHeader>
              <CardTitle>Item {i} Title</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                This is a more complex card to test render time. This card
                includes an image, styled text, and multiple nested elements.
                Each card is rendered dynamically.
              </CardDescription>
            </CardContent>
            <CardFooter className="flex justify-between items-center mt-2 pt-2 border-t border-gray-400">
              <Text className="text-xs text-white">Footer Content {i}</Text>
            </CardFooter>
          </Card>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NativeWindRNR;
