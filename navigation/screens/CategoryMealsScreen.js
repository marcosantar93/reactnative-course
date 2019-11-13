import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealsScreen = props => {
  const renderMealItem = itemData => {
    const {
      title,
      imageUrl,
      duration,
      complexity,
      affordability,
      id
    } = itemData.item;
    return (
      <MealItem
        title={title}
        image={imageUrl}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        onSelectMeal={() => {
          props.navigation.navigate({
            routeName: "MealDetail",
            params: {mealId: id}
          })
        }}
      />
    );
  };

  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

33

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
