import React from "react";
import { Searchbar } from "react-native-paper";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
} from "react-native";
import { RestaurantInfo } from "../components/restuarant-info.components";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar placeholder="restaurants..." />
    </View>
    <View style={styles.list}>
      <RestaurantInfo />
    </View>
  </SafeAreaView>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // StatusBar.currentHeight fills the approritae screensize
    marginTop: StatusBar.currentHeight,
  },
  search: {
    padding: 20,
  },
  list: {
    flex: 1,
    padding: 16,
    backgroundColor: "blue",
  },
});
