import React from "react";
import { Alert, StyleSheet, View, ImageBackground, Text } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";
//create login page here, change login background image, toggle from musician to curator, route to correct half of app
export default class CuratorArtistLandingPage extends React.Component {
  state = {
    username: "",
    password: ""
  };

  _onPressButton() {
    Alert.alert("Please use guest account");
  }

  render() {
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.image}
      >
        <View>
          <Text style={styles.headerText}>Login</Text>
          <View>
            <FormLabel labelStyle={{ color: "white" }}>Username</FormLabel>
            <FormInput
              inputStyle={{ color: "white" }}
              defaultValue={"Use Guest Account Below"}
              containerStyle={{ width: 400 }}
              onChangeText={username => this.setState({ username })}
              ref={input => (this.username = input)}
            />
          </View>
          <View>
            <FormLabel labelStyle={{ color: "white" }}>Password</FormLabel>
            <FormInput
              inputStyle={{ color: "white" }}
              defaultValue={"Use Guest Account Below"}
              containerStyle={{ width: 400 }}
              onChangeText={password => this.setState({ password })}
              ref={input => (this.password = input)}
            />
          </View>
          <View style={styles.buttonContainer}>
            <View>
              <Button
                raised
                icon={{ name: "account-box" }}
                title="Guest Musician"
                onPress={() => this.props.navigation.navigate("ArtistHome")}
              />
            </View>
            <View>
              <Button
                raised
                icon={{ name: "account-circle" }}
                title="Guest Curator"
                onPress={() => this.props.navigation.navigate("CuratorHome")}
              />
            </View>
          </View>
          <View>
            <Button
              raised
              icon={{ name: "library-music" }}
              title="Submit"
              onPress={this._onPressButton}
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: null,
    height: null,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  },
  button: {
    // margin: 20
  }
});
