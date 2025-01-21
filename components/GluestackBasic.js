import React from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { Box } from "@/components/ui/box";
import { Text } from "@/components/ui/text";
import { Pressable } from "@/components/ui/pressable";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { COUNT } from "../utils";

const Gluestack = () => {
  return (
    <GluestackUIProvider>
      <HStack className="flex-wrap justify-around">
        {new Array(COUNT).fill(0).map((_, i) => (
          <Pressable
            key={i}
            onPress={() => alert(`Item ${i} clicked!`)}
            className="m-2"
          >
            <Box
              className={`w-40 border-2 border-red-500 rounded-md ${
                i % 2 === 0 ? "bg-blue-500" : "bg-gray-500"
              }`}
            >
              <VStack className="p-3 items-center">
                <Text className="text-lg font-bold text-white mb-1">
                  Item {i}
                </Text>
                <Text className="text-sm text-white leading-5">
                  This is static content
                </Text>
              </VStack>
            </Box>
          </Pressable>
        ))}
      </HStack>
    </GluestackUIProvider>
  );
};

export default Gluestack;
