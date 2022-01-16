import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { RestaurantInfo } from "./src/features/restaurants/components/restuarant-info.components";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

//

export default function App() {
  return (
    <>
      <RestaurantsScreen />
      <ExpoStatusBar style="auto" />
    </>
  );
}
