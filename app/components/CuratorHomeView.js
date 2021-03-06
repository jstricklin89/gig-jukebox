import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { FormLabel, FormInput, Text, Button } from "react-native-elements";
import ArtistSongList from "./ArtistSongList";
import ArtistJukeboxList from "./ArtistJukeboxList";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.app,
  jls: state.jls
});

class CuratorHomeView extends Component {
  state = {
    pin: 0,
    user: 2,
    jlid: 1
  };

  handlePressSongList = song => {
    const { jl } = this.props;
    console.log(song.id, jl.id);
    fetch("http://localhost:3000/api/v1/jukebox_list_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.id_token
      },
      body: JSON.stringify({
        jukebox_list_song: {
          jukebox_list_id: jl.id,
          song_id: song.id
        }
      })
    });
  };

  handlePressJukeboxList = song => {
    const { jl } = this.props;
    fetch(`http://localhost:3000/api/v1/jukebox_list_songs/${song.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + this.props.id_token
      },
      body: JSON.stringify({
        jukebox_list_id: jl.id,
        song_id: song.id
      })
    });
  };

  render() {
    const { pin, user } = this.state;
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.image}
      >
        <View>
          <View>
            <FormLabel labelStyle={{ color: "white" }}>Artist PIN</FormLabel>
            <FormInput
              inputStyle={{
                color: "white",
                backgroundColor: "black",
                width: 70,
                textAlign: "center"
              }}
              containerStyle={{ width: 70 }}
              onChangeText={pin => this.setState({ pin: parseInt(pin) })}
              ref={input => (this.artist = input)}
            />
          </View>
          {pin === user || this.props.typeof === "musician" ? (
            <View>
              <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 40 }}>
                Click any song to add to jukebox:
              </Text>
              <ArtistSongList handlePressSongList={this.handlePressSongList} />
              <ArtistJukeboxList
                handlePressJukeboxList={this.handlePressJukeboxList}
              />
            </View>
          ) : null}
        </View>
      </ImageBackground>
    );
  }
}

export default connect(mapStateToProps)(CuratorHomeView);

const styles = StyleSheet.create({
  image: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  title: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
