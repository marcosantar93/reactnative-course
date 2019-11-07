import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoriesScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoriesScreen!</Text>
      <Button
        title="Go to Meals!"
        onPress={() => {
          props.navigation.navigate({ routeName: "CategoryMeals" });
        }}
      />
      <Button
        title="Go to Meals! Can't go back!"
        onPress={() => {
          props.navigation.replace("CategoryMeals");
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

export default CategoriesScreen;
