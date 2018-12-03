import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import CuratorArtistLogin from "../components/CuratorArtistLogin";
import CuratorArtistSignup from "../components/CuratorArtistSignup";
import deviceStorage from "../services/DeviceStorage";

export default class CuratorArtistLandingPage extends React.Component {
  state = {
    username: "",
    password: "",
    error: "",
    loading: true,
    signupView: false
  };

  onLoginSubmit = data => {
    console.log(data);
    fetch("http://localhost:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          username: data.username,
          password: data.password
        }
      })
    })
      .then(r => r.json())
      .then(r => {
        console.log(r);
        // deviceStorage.saveItem("id_token", r.jwt);
        // deviceStorage.saveItem("user", r.user);
      })
      .catch(err => console.log(err));
  };

  onSignupSubmit = (data, type) => {
    console.log(data.firstname, type);
    fetch("http://localhost:3000/api/v1/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user: {
          first_name: data.firstname,
          last_name: data.lastname,
          username: data.username,
          password: data.password,
          typeof: type
        }
      })
    })
      .then(r => r.json())
      .then(r => {
        deviceStorage.saveItem("id_token", r.jwt);
        deviceStorage.saveItem("user", r.user);
      })
      .catch(err => console.log(err));
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
