import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
// import { Button, FormLabel, FormInput } from "react-native-elements";
import CuratorArtistLogin from "../components/CuratorArtistLogin";
import CuratorArtistSignup from "../components/CuratorArtistSignup";
//create login page here, change login background image, toggle from musician to curator, route to correct half of app
export default class CuratorArtistLandingPage extends React.Component {
  state = {
    username: "",
    password: "",
    signupView: false
  };

  // componentDidMount() {
  //   fetch("http://localhost:3000/api/v1/users", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         first_name: "Clark",
  //         last_name: "Stricklin",
  //         username: "cstricklin",
  //         password_digest: "hi",
  //         typeof: "musician"
  //       }
  //     })
  //   })
  //     .then(r => r.json())
  //     .then(console.log);
  // }
  onLoginSubmit = state => {
    console.log(state);
  };

  onSignupSubmit = (state, type) => {
    console.log(state, type);
  };

  onLinkPress = () => {
    const { signupView } = this.state;
    this.setState({ signupView: !signupView });
  };

  render() {
    const { signupView } = this.state;
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.image}
      >
        {signupView ? (
          <CuratorArtistSignup
            onSignupSubmit={this.onSignupSubmit}
            onLoginLinkPress={this.onLinkPress}
          />
        ) : (
          <CuratorArtistLogin
            onLoginSubmit={this.onLoginSubmit}
            onSignupLinkPress={this.onLinkPress}
          />
        )}
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
  }
});
