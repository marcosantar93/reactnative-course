import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import MealItem from "./MealItem";

const MealList = props => {
  const favoriteMeals = useSelector(state => state.meals.favoriteMeals);

  const renderMealItem = itemData => {
    const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id);
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
            params: { mealId: id, mealTitle: title, isFavorite: isFavorite }
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default MealList;
