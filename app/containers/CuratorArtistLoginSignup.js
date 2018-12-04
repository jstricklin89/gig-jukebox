import React from "react";
import { StyleSheet, ImageBackground } from "react-native";
import CuratorArtistLogin from "../components/CuratorArtistLogin";
import CuratorArtistSignup from "../components/CuratorArtistSignup";
import { connect } from "react-redux";
import { test, login } from "../actions/actionCreators";

const mapDispatchToProps = dispatch => ({
  test: () => dispatch(test()),
  login: data => dispatch(login(data))
});

const mapStateToProps = state => ({
  ...state.app,
  jls: state.jls
});

class CuratorArtistLandingPage extends React.Component {
  componentDidUpdate = () => {
    // console.log("CuratorArtistLandingPage did updata", this.props);
  };
  //fetch all songLists to store in state
  // fetchSongLists = () => {
  //   fetch("http://localhost:3000/api/v1/song_lists", {
  //     headers: {
  //       Authorization: "Bearer " + this.props.id_token
  //     }
  //   })
  //     .then(r => r.json())
  //     .then(slists => {
  //       let sl = slists.find(sl => sl.user_id === this.props.id);
  //       this.setState({ sl: sl.songs });
  //     });
  // };
  //fetch all jukeboxLists to store in state
  // fetchJukeboxLists = () => {
  //   fetch("http://localhost:3000/api/v1/jukebox_lists", {
  //     headers: {
  //       Authorization: "Bearer " + this.props.id_token
  //     }
  //   })
  //     .then(r => r.json())
  //     .then(jlists => {
  //       let jl = jlists.find(jl => jl.user_id === this.props.user);
  //       this.setState({ jls: jl.songs, jl });
  //     });
  // };
  //runs when login page submit button is pressed
  // onLoginSubmit = data => {
  //   fetch("http://localhost:3000/api/v1/login", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //       Accept: "application/json"
  //     },
  //     body: JSON.stringify({
  //       user: {
  //         username: data.username,
  //         password: data.password
  //       }
  //     })
  //   })
  //     .then(r => r.json())
  //     .then(r => {
  //       this.setState({
  //         id_token: r.jwt,
  //         id: r.user.id,
  //         typeof: r.user.typeof,
  //         username: r.user.username
  //       });
  //     })
  //     .then(this.fetchSongLists)
  //     .then(this.fetchJukeboxLists)
  //     .then(this.props.navigation.navigate("CuratorHome"));
  // };

  onSignupSubmit = (data, type) => {
    // console.log(data.firstname, type);
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
                .then(() => this.props.navigation.navigate("CuratorHome"));
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
