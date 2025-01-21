import { ScrollView, Button, Text, View, StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useState } from "react";


import Native from "./components/ReactNative";
import NativeCard from "./components/ReactNativeComplex";
import NativeForm from "./components/NativeForm";



import StyledComponents from "./components/StyledComponents";
import StyledComponentsCard from "./components/ScComplex";
import StyledComponentsForm from "./components/StyledForm";


import Tamagui from "./components/Tamagui";
import TamaguiCard from "./components/TamaguiComplex";
import TamaguiForm from "./components/TamaguiFrom";

import Unistyles from "./components/Unistyles";
import UnistylesCard from "./components/UnistylesComplexCard";
import UnistylesForm from "./components/UnistylesForm";

import NativeWind from "./components/NativeWindBasic";
import NativeWindCard from "./components/NativeWind";

import Gluestack from "./components/GluestackBasic";
import GluestackCard from "./components/Gluestack";
import GluestackForm from "./components/GlueStackForm";

import Reuseable from "./components/RNRBasic";
import ReuseableCard from "./components/NativeWindRNR";
import ReuseableForm from "./components/RNRform";

import Paper from "./components/PaperBasic";
import PaperCard from "./components/Paper";
import PaperForm from "./components/PaperForm";

import UILIB from "./components/RnUiLibBasic";
import UILIBCard from "./components/RnUiLib";
import UILIBForm from "./components/RnUiLibForm";

import TimedRender from "./components/TimedRender";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function App() {
  const [styleType, setStyleType] = useState<string | undefined>(undefined); // Track selected library
  const [componentType, setComponentType] = useState<string>("Basic"); // Track selected component type

  const onStyleTypePress = (type: string) => () => {
    setStyleType(type);
  };

  const onComponentTypePress = (type: string) => () => {
    setComponentType(type); // Update component type on button press
  };

  const dismount = () => {
    setStyleType(undefined);
  };

  const renderStyleLibrary = () => {
    switch (styleType) {
      case "React Native":
        if (componentType === "Card") return <NativeCard />;
        if (componentType === "Form") return <NativeForm />;
        return <Native />;
      case "Styled Components":
        if (componentType === "Card") return <StyledComponentsCard />;
        if (componentType === "Form") return <StyledComponentsForm />;
        return <StyledComponents />;
      case "Tamagui":
        if (componentType === "Card") return <TamaguiCard />;
        if (componentType === "Form") return <TamaguiForm />;
        return <Tamagui />;
      case "NativeWind":
        if (componentType === "Card") return <NativeWindCard />;
        if (componentType === "Form") return  null;
        return <NativeWind />;
      case "Unistyles":
        if (componentType === "Card") return <UnistylesCard />;
        if (componentType === "Form") return <UnistylesForm />;
        return <Unistyles />;
      case "Gluestack":
        if (componentType === "Card") return <GluestackCard />;
        if (componentType === "Form") return <GluestackForm />;
        return <Gluestack />;
      case "Reuseable":
        if (componentType === "Card") return <ReuseableCard />;
        if (componentType === "Form") return <ReuseableForm />;
        return <Reuseable />;
      case "Paper":
        if (componentType === "Card") return <PaperCard />;
        if (componentType === "Form") return <PaperForm />;
        return <Paper />;
      case "UILIB":
        if (componentType === "Card") return <UILIBCard />;
        if (componentType === "Form") return <UILIBForm />;
        return <UILIB />;
      default:
        return null;
    }
  };

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <View style={styles.container}>
        {/* Dismount Button */}
        <View style={styles.topButtons}>
          <Button title="Dismount" onPress={dismount} />
        </View>

        {/* Top Buttons */}
        <View style={styles.topButtons}>
          <Button title="Basic" onPress={onComponentTypePress("Basic")} />
          <Button title="Card" onPress={onComponentTypePress("Card")} />
          {styleType !== 'NativeWind' &&  <Button title="Form" onPress={onComponentTypePress("Form")} /> }
        </View>

        <Text style={styles.text}>Tap a style library to start rendering</Text>
        <ScrollView>
          <Button
            title="React Native"
            onPress={onStyleTypePress("React Native")}
          />
          {componentType !== 'Form' && <Button title="NativeWind" onPress={onStyleTypePress("NativeWind")} /> }
          <Button
            title="Styled Components"
            onPress={onStyleTypePress("Styled Components")}
          />
          <Button title="Tamagui" onPress={onStyleTypePress("Tamagui")} />
          <Button
            title="Unistyles"
            onPress={onStyleTypePress("Unistyles")}
          />
          <Button
            title="Gluestack"
            onPress={onStyleTypePress("Gluestack")}
          />
          <Button
            title="Reuseable"
            onPress={onStyleTypePress("Reuseable")}
          />
          <Button
            title="Paper"
            onPress={onStyleTypePress("Paper")}
          />
          <Button
            title="UI-lib"
            onPress={onStyleTypePress("UILIB")}
          />
        </ScrollView>
        
          <TimedRender key={styleType + componentType}>
            <Text style={styles.text}>
              Rendering with <Text style={styles.bold}>{styleType ?? 'DISMOUNT'}</Text> (
              {componentType})
            </Text>
          </TimedRender>
        
        <ScrollView>{renderStyleLibrary()}</ScrollView>
      </View>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 60,
    backgroundColor: "#fff",
    flex: 1,
  },
  text: {
    marginVertical: 12,
  },
  bold: {
    fontWeight: "bold",
    fontSize: 16,
  },
  topButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginVertical: 10,
  },
});
