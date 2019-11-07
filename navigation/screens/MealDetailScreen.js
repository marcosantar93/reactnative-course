import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const MealDetailScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The MealDetailScreen!</Text>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack(); // available in other navigators besides stack
        }}
      />
      <Button
        title="Pop"
        onPress={() => {
          props.navigation.pop();
        }}
      />
      <Button
        title="Pop to top"
        onPress={() => {
          props.navigation.popToTop();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealDetailScreen;
