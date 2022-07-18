import { SafeAreaView, Platform, StatusBar } from "react-native";
import styled from "styled-components/native";

const IS_ANDROID = Platform.OS === "android";

export const SafeAreaComponent = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${IS_ANDROID ? StatusBar.currentHeight : 0}px;
`;
