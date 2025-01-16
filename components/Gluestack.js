import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Image } from "@/components/ui/image";
import { Text } from "@/components/ui/text";
import { Box } from "@/components/ui/box";
import { Pressable } from "@/components/ui/pressable";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { COUNT } from "../utils";

const Demo = () => {
  return (
    <GluestackUIProvider>
      <HStack className="flex-wrap justify-around p-3">
        {new Array(COUNT).fill(0).map((_, i) => (
          <Pressable
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            className="m-2"
          >
            <Box
              className={`w-[160px] bg-${
                i % 2 === 0 ? "blue-300" : "gray-300"
              } border-gray-700 rounded-md shadow-md`}
            >
              <Image
                className="w-full h-[100px] rounded-t-md"
                source={{ uri: `https://api.images.cat/300/300/${i}` }}
                alt={`Item ${i}`}
              />
              <VStack className="p-3">
                <Text className="text-lg font-bold text-gray-800 mb-2">
                  Item {i} Title
                </Text>
                <Text className="text-sm text-gray-600 mb-3 leading-5">
                  This is a more complex card to test render time. It includes
                  an image, styled text, and multiple nested elements. Each card
                  is rendered individually and dynamically.
                </Text>
                <HStack className="pt-2 border-t border-gray-500 items-center justify-center">
                  <Text className="text-xs font-medium text-gray-700">
                    Footer Content {i}
                  </Text>
                </HStack>
              </VStack>
            </Box>
          </Pressable>
        ))}
      </HStack>
    </GluestackUIProvider>
  );
};

export default Demo;
