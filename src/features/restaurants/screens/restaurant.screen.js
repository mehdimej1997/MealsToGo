import React, { useContext } from "react";
import { ActivityIndicator } from "react-native-paper";
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import RestaurantInfoCard from "../components/restautrant-info-card.component";
import styled from "styled-components";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";
import { MaterialIcons } from "@expo/vector-icons";
import { Search } from "../components/search.component";

const IS_ANDROID = Platform.OS === "android";

const IosView = styled(SafeAreaView)`
  flex: 1;
`;

const AndroidView = styled(View)`
  flex: 1;
  padding-top: ${IS_ANDROID ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const CentredContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export default function RestaurantsScreen() {
  const { restaurants, error, isLoading } = useContext(RestaurantsContext);

  return (
    <IosView>
      <AndroidView>
        <Search />
        {!error ? (
          <>
            {isLoading ? (
              <CentredContainer>
                <ActivityIndicator color="tomato" size={"large"} />
              </CentredContainer>
            ) : (
              <FlatList
                data={restaurants}
                renderItem={({ item }) => (
                  <RestaurantInfoCard restaurant={item} />
                )}
                keyExtractor={(item) => item.name}
                // eslint-disable-next-line react-native/no-inline-styles
                contentContainerStyle={{ padding: 16 }}
              />
            )}
          </>
        ) : (
          <CentredContainer>
            <MaterialIcons name="error-outline" size={50} color="tomato" />
            <Text>Not Found</Text>
          </CentredContainer>
        )}
      </AndroidView>
    </IosView>
  );
}
