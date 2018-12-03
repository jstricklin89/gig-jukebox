import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

export default class CuratorArtistLogin extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <View>
        <Text style={styles.headerText}>Login</Text>
        <View>
          <FormLabel labelStyle={{ color: "white" }}>Username</FormLabel>
          <FormInput
            inputStyle={{ color: "white" }}
            containerStyle={{ width: 400 }}
            autoCapitalize={"none"}
            autoCorrect={false}
            onChangeText={username => this.setState({ username })}
            ref={input => (this.username = input)}
          />
        </View>
        <View>
          <FormLabel labelStyle={{ color: "white" }}>Password</FormLabel>
          <FormInput
            inputStyle={{ color: "white" }}
            containerStyle={{ width: 400 }}
            autoCapitalize={"none"}
            secureTextEntry={true}
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
            onPress={() => this.props.onLoginSubmit(this.state)}
          />
        </View>
        <Text
          ref={ref => (this.linkRef = ref)}
          style={styles.signupLink}
          onPress={this.props.onSignupLinkPress}
        >
          {"Not registered yet? Click here."}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    textAlign: "center",
    margin: 10,
    color: "white",
    fontWeight: "bold"
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20
  },
  signupLink: {
    color: "rgba(255,255,255,0.6)",
    alignSelf: "center",
    padding: 20
  }
});
