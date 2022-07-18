import { Card } from "react-native-paper";
import styled from "styled-components/native";
import { View } from "react-native";
import { Text } from "../../../components/typography/text.component";

export const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RatingContainer = styled(View)`
  background: ${(props) => props.theme.colors.ui.disabled};
  border-radius: 10px;
`;

export const Row = styled(View)`
  flex-direction: row
  align-items: center;
  justify-content: center;
`;

export const RowContainer = styled(View)`
  flex-direction: row;
  justify-content: space-between;
`;

export const RatingValue = styled(Text)`
  font-family: ${(props) => props.theme.fonts.monospace};
  color: ${(props) => props.theme.colors.ui.primary};
  font-size: ${(props) => props.theme.fontSizes.caption};
  padding-left: 5px;
`;

export const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[4]};
`;

export const RestaurantCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
