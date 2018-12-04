import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Button, FormLabel, FormInput } from "react-native-elements";

export default class CuratorArtistSignup extends React.Component {
  state = {
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    typeof: ""
  };

  render() {
    return (
      <View>
        <Text style={styles.headerText}>Signup</Text>
        <View>
          <FormLabel labelStyle={{ color: "white" }}>First Name</FormLabel>
          <FormInput
            inputStyle={{ color: "white" }}
            containerStyle={{ width: 500 }}
            onChangeText={firstname => this.setState({ firstname })}
            ref={input => (this.firstname = input)}
          />
        </View>
        <View>
          <FormLabel labelStyle={{ color: "white" }}>Last Name</FormLabel>
          <FormInput
            inputStyle={{ color: "white" }}
            containerStyle={{ width: 500 }}
            onChangeText={lastname => this.setState({ lastname })}
            ref={input => (this.lastname = input)}
          />
        </View>
        <View>
          <FormLabel labelStyle={{ color: "white" }}>Username</FormLabel>
          <FormInput
            inputStyle={{ color: "white" }}
            containerStyle={{ width: 500 }}
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
            containerStyle={{ width: 500 }}
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
              title="Signup as a Musician"
              onPress={this.props.guestMusician}
            />
          </View>
          <View>
            <Button
              raised
              icon={{ name: "account-circle" }}
              title="Signup as a Curator"
              onPress={this.props.guestCurator}
            />
          </View>
        </View>
        <Text
          ref={ref => (this.linkRef = ref)}
          style={styles.signupLink}
          onPress={this.props.onLoginLinkPress}
        >
          {"Already have a login? Click here."}
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
