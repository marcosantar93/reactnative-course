import React from "react";

import { MEALS } from "../data/dummy-data";
import MealList from "../components/MealList";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(meal => meal.categoryIds.includes(catId));

  return <MealList listData={displayedMeals} navigation={props.navigation} />;
};

export default CategoryMealsScreen;
