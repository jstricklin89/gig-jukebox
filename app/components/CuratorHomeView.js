import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { FormLabel, FormInput, Text, Button } from "react-native-elements";
import ArtistSongList from "./ArtistSongList";
import ArtistJukeboxList from "./ArtistJukeboxList";

export default class CuratorHomeView extends Component {
  state = {
    pin: 0,
    user: 1,
    jlid: 1
  };

  handlePressSongList = song => {
    const { jlid } = this.state;
    fetch("http://localhost:3000/api/v1/jukebox_list_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        jukebox_list_id: jlid,
        song_id: song.id
      })
    });
  };

  handlePressJukeboxList = song => {
    const { jlid } = this.state;
    fetch(`http://localhost:3000/api/v1/jukebox_list_songs/${song.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        jukebox_list_id: jlid,
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
          <Text
            style={{
              textAlign: "left",
              marginTop: 10,
              marginLeft: 20,
              fontSize: 20
            }}
          >
            Find Artist by PIN:
          </Text>
          <View>
            <FormLabel labelStyle={{ color: "white" }}>Artist PIN</FormLabel>
            <FormInput
              inputStyle={{ color: "white" }}
              containerStyle={{ width: 80 }}
              onChangeText={pin => this.setState({ pin: parseInt(pin) })}
              ref={input => (this.artist = input)}
            />
          </View>
          {pin === user ? (
            <View>
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
