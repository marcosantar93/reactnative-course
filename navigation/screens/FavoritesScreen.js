import React from "react";
import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  return (
    <MealList listData={MEALS} navigation={props.navigation} />
  );
};

FavoritesScreen.navigationOptions = navData => ({
  headerTitle: "Your Favorites!",
  headerLeft: (
    <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item
        title="Menu"
        iconName="ios-menu"
        onPress={() => {
          navData.navigation.toggleDrawer();
        }}
      />
    </HeaderButtons>
  )
});

export default FavoritesScreen;
