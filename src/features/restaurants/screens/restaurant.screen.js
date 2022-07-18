import React from "react";
import { Searchbar } from "react-native-paper";
import {
  View,
  SafeAreaView,
  StatusBar,
  Platform,
  FlatList,
} from "react-native";
import RestaurantInfoCard from "../components/restautrant-info-card.component";
import styled from "styled-components";

const IS_ANDROID = Platform.OS === "android";

const IosView = styled(SafeAreaView)`
  flex: 1;
`;

const AndroidView = styled(View)`
  flex: 1;
  padding-top: ${IS_ANDROID ? StatusBar.currentHeight : 0}px;
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const Search = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantsScreen() {
  return (
    <IosView>
      <AndroidView>
        <Search>
          <Searchbar placeholder="Search" />
        </Search>
        <FlatList
          data={[{ name: 1 }, { name: 2 }, { name: 3 }]}
          renderItem={() => <RestaurantInfoCard />}
          keyExtractor={(item) => item.name}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{ padding: 16 }}
        />
      </AndroidView>
    </IosView>
  );
}
