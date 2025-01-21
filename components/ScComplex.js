import React from "react";
import { TouchableOpacity, Image } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { COUNT } from "../utils";
import { lightTheme } from "../themes/styled-theme";
const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const StyledBox = styled.View`
  width: 140px;
  background-color: ${(props) =>
    props.even ? props.theme.colors.background : props.theme.colors.gray};
  border-radius: 5px;
  shadow-color: ${(props) => props.theme.colors.black};
  shadow-offset: {
    width: 0px;
    height: 4px;
  }
  shadow-opacity: 0.3;
  shadow-radius: 4px;
  elevation: 5;
  margin-bottom: 10px;
`;

const CardImage = styled.Image`
  width: 100%;
  height: 100px;
  resize-mode: cover;
`;

const CardContent = styled.View`
  padding: ${(props) => props.theme.spacing.s}px;
`;

const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: ${(props) => props.theme.spacing.xs}px;
`;

const CardDescription = styled.Text`
  font-size: 14px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.textSecondary};
  margin-bottom: ${(props) => props.theme.spacing.s}px;
`;

const CardFooter = styled.View`
  margin-top: ${(props) => props.theme.spacing.xs}px;
  padding-vertical: ${(props) => props.theme.spacing.xs}px;
  border-top-width: 1px;
  border-top-color: ${(props) => props.theme.colors.gray};
  align-items: center;
`;

const FooterText = styled.Text`
  font-size: 12px;
  color: ${(props) => props.theme.colors.text};
`;

const StyledComponents = () => {
  return (
    <Container>
      {new Array(COUNT).fill(0).map((_, i) => (
        <TouchableOpacity
          key={i}
          style={{ margin: 5 }}
          onPress={() => alert(`Item ${i} clicked!`)}
        >
          <StyledBox even={i % 2 === 0}>
            <CardImage
              source={{ uri: `https://api.images.cat/300/300/${i}` }}
            />
            <CardContent>
              <CardTitle>Item {i} Title</CardTitle>
              <CardDescription>
                This is a more complex card to test render time. It includes an
                image, styled text, and multiple nested elements. Each card is
                rendered individually and dynamically.
              </CardDescription>
              <CardFooter>
                <FooterText>Footer Content {i}</FooterText>
              </CardFooter>
            </CardContent>
          </StyledBox>
        </TouchableOpacity>
      ))}
    </Container>
  );
};

export default () => (
  <ThemeProvider theme={lightTheme}>
    <StyledComponents />
  </ThemeProvider>
);
