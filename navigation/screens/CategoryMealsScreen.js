import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const CategoryMealsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The CategoryMealsScreen!</Text>
      <Button
        title="Go to Meal Detail! (navigate)"
        onPress={() => {
          props.navigation.navigate({ routeName: "MealDetail" });
        }}
      />
      <Button
        title="Go to Meal Detail! (push)"
        onPress={() => {
          props.navigation.push("MealDetail");
        }}
      />
      <Button
        title="Replace with myself"
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

export default CategoryMealsScreen;
