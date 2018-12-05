import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import CuratorArtistLogin from "../components/CuratorArtistLogin";
import CuratorArtistSignup from "../components/CuratorArtistSignup";
import { connect } from "react-redux";
import {
  test,
  login,
  fetchJukeboxLists,
  fetchSongLists
} from "../actions/actionCreators";

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(test()),
  login: data => dispatch(login(data)),
  fetchSongLists: () => dispatch(fetchSongLists()),
  fetchJukeboxLists: () => dispatch(fetchJukeboxLists())
});

const mapStateToProps = state => ({
  ...state.app,
  jls: state.jls
});

class CuratorArtistLandingPage extends React.Component {
  onSignupSubmit = (data, type) => {
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
        this.setState({
          id_token: r.jwt,
          id: r.user.id,
          typeof: r.user.typeof,
          username: r.user.username
        });
      })
      .then(this.fetchSongLists)
      .then(this.fetchJukeboxLists)
      .then(this.props.navigation.navigate("CuratorHome"));
  };

  onLinkPress = () => {
    const { signupView } = this.props;
    this.setState({ signupView: !signupView });
  };

  render() {
    const { signupView } = this.props;
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.image}
      >
        {signupView ? (
          <CuratorArtistSignup
            passedState={this.props}
            onLoginLinkPress={this.onLinkPress}
            guestMusician={this.onSignupSubmit}
            guestCurator={this.onSignupSubmit}
          />
        ) : (
          <CuratorArtistLogin
            passedState={this.props}
            onLoginSubmit={data => {
              this.props
                .login(data)
                .then(() => {
                  this.props.fetchSongLists();
                })
                .then(() => {
                  this.props.fetchJukeboxLists();
                })
                .then(() => this.props.navigation.navigate("ArtistHome"));
            }}
            onSignupLinkPress={this.onLinkPress}
            guestMusician={() => this.props.navigation.navigate("ArtistHome")} //need to add method to login guest
            guestCurator={() => this.props.navigation.navigate("CuratorHome")}
          />
        )}
      </ImageBackground>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CuratorArtistLandingPage);

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
