import React from "react";
import { TamaguiProvider, Stack, Text, YStack, Image } from "tamagui";
import { COUNT } from "../utils";
import config from "../tamagui.config";

const Demo = () => {
  return (
    <TamaguiProvider config={config}>
      <YStack
        display="flex"
        flexDirection="row"
        flexWrap="wrap"
        justifyContent="space-around"
        alignItems="flex-start"
      >
        {new Array(COUNT).fill(0).map((_, i) => (
          <Stack
            key={i}
            width={140}
            justifyContent="center"
            alignItems="center"
            backgroundColor={i % 2 === 0 ? "$blue5" : "$gray5"}
            margin="$2"
            borderRadius="$3"
            shadowColor="$black"
            shadowOffset={{ width: 0, height: 4 }}
            shadowOpacity={0.3}
            shadowRadius={4}
            elevation={5}
            hoverStyle={{
              backgroundColor: "$gray7",
            }}
            pressStyle={{
              backgroundColor: "$lightGray",
            }}
          >
            <Image
              source={{ uri: `https://api.images.cat/300/300/${i}` }}
              width="100%" // Image takes up full width of the card
              height={100}
              borderRadius="$2"
              objectFit="cover"
            />
            <YStack padding="$3">
              <Text
                fontSize="$4"
                fontWeight="bold"
                color="$primary"
                marginBottom="$2"
              >
                Item {i} Title
              </Text>
              <Text
                fontSize="$3"
                lineHeight="$4"
                color="$gray10"
                marginBottom="$3"
              >
                This is a more complex card to test render time. It includes an
                image, styled text, and multiple nested elements. Each card is
                rendered individually and dynamically.
              </Text>
              <YStack
                marginTop="$2"
                paddingVertical="$2"
                borderTopWidth={1}
                borderTopColor="$gray6"
                alignItems="center"
              >
                <Text fontSize="$3" color="$text">
                  Footer Content {i}
                </Text>
              </YStack>
            </YStack>
          </Stack>
        ))}
      </YStack>
    </TamaguiProvider>
  );
};

export default Demo;
