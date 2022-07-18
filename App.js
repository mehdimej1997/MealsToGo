import React from "react";
import { StatusBar as StatusBarExpo } from "expo-status-bar";
import RestaurantsScreen from "./src/features/restaurants/screens/restaurant.screen";
import Map from "./src/features/restaurants/screens/map.screen";
import Settings from "./src/features/restaurants/screens/settings.screen";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/themes";
import {
  useFonts as useOswald,
  Oswald_400Regular,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts as useLato, Lato_400Regular } from "@expo-google-fonts/lato";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const [oswaldLoaded] = useOswald({
    Oswald_400Regular,
    Oswald_700Bold,
  });
  const [latoLoaded] = useLato({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }

  const Tab = createBottomTabNavigator();

  const TAB_ICONS = {
    Restaurants: "restaurant-outline",
    Map: "map-outline",
    Settings: "settings-outline",
  };

  const handleScreenTabBar = ({ route }) => {
    const iconName = TAB_ICONS[route.name];

    return {
      tabBarIcon: ({ size, color }) => (
        <Ionicons name={iconName} size={size} color={color} />
      ),
      headerShown: false,
      tabBarActiveTintColor: "tomato",
      tabBarInactiveTintColor: "gray",
    };
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <NavigationContainer>
          <Tab.Navigator screenOptions={handleScreenTabBar}>
            <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Settings} />
          </Tab.Navigator>
        </NavigationContainer>
        <StatusBarExpo style="auto" />
      </ThemeProvider>
    </>
  );
}
