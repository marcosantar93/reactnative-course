import React from "react";
import { StyleSheet, Text, View, Button, Image } from "react-native";

import BodyText from "../components/BodyText"
import TitleText from "../components/TitleText"

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The game is over!</TitleText>
      <Image source={require("../assets/success.png")}/>
      <BodyText>Number of rounds: {props.guessRounds}</BodyText>
      <BodyText>The number entered was: {props.userNumber}</BodyText>
      <Button title="NEW GAME" onPress={props.onRestart} />
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

export default GameOverScreen;
