import {
  Address,
  RatingContainer,
  Row,
  RowContainer,
  RatingValue,
  RestaurantCard,
  RestaurantCardCover,
} from "./restautrant-info-card.style";
import React from "react";
import star from "../../../../assets/icons/star";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";

import { Text } from "../../../components/typography/text.component";

function RestaurantInfoCard({ restaurant = {} }) {
  const {
    name = "Name",
    photos = "https://picsum.photos/700",
    address = "address",
    isOpen = true,
    rating = 4.5,
    isClosedTemporarily = false,
  } = restaurant;

  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover source={{ uri: photos }} />
      <Card.Content>
        <Text variant="label">{name}</Text>
        <RowContainer>
          <RatingContainer width={50}>
            <Row>
              <SvgXml width={16} height={16} xml={star} />
              <RatingValue>{rating}</RatingValue>
            </Row>
          </RatingContainer>
          {!isClosedTemporarily && (
            <Text variant="caption">{isOpen ? "Open" : "Close"}</Text>
          )}
          {isClosedTemporarily && (
            <Text variant="error">{"Close Temporarily"}</Text>
          )}
        </RowContainer>
        <Address>{address}</Address>
      </Card.Content>
    </RestaurantCard>
  );
}

export default RestaurantInfoCard;
