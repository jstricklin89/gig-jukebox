import React from "react";
import { Alert, StyleSheet, View, Text, ImageBackground } from "react-native";
import { Button } from "react-native-elements";

export default class CuratorArtistLandingPage extends React.Component {
  _onPressButton() {
    Alert.alert("You tapped the button!");
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.container}
      >
        <View style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.headerText}>
              Setting background image in react native application
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button
              raised
              icon={{ name: "cached" }}
              title="Press Me"
              onPress={this._onPressButton}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    width: null,
    height: null
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  buttonContainer: {
    margin: 20
  }
});
