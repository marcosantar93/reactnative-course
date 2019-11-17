import React from "react";
import { View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
import { CATEGORIES } from "../data/dummy-data";
import DefaultText from "../components/DefalutText";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const availableMeals = useSelector(state => state.meals.filteredMeals);

  const displayedMeals = availableMeals.filter(meal =>
    meal.categoryIds.includes(catId)
  );

  if (displayedMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found, maybe check your filters?</DefaultText>
      </View>
    );
  }

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = navData => {
  const catId = navData.navigation.getParam("categoryId");
  const category = CATEGORIES.find(category => category.id === catId);

  return {
    headerTitle: category.title
  };
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default CategoryMealsScreen;
