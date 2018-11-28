import React, { Component } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import {
  FormLabel,
  FormInput,
  Header,
  Text,
  Button
} from "react-native-elements";

export default class ArtistHomeView extends Component {
  state = {
    artistName: "",
    songName: "",
    genre: "",
    songList: 1,
    userId: 1 //change this once redux is added
  };

  //executes after "add song" button has been pressed to add or find song
  addNewSong = () => {
    const { artistName, songName, genre } = this.state;

    fetch("http://localhost:3000/api/v1/songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        name: songName,
        genre: genre,
        artist: artistName
      })
    })
      .then(r => r.json())
      .then(song => this.addSongToList(song));
  };
  //executes after addNewSong is complete to also add to song list
  addSongToList = song => {
    const { songList } = this.state;
    console.warn(song.id, songList);
    fetch("http://localhost:3000/api/v1/song_list_songs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      },
      body: JSON.stringify({
        song_list_id: songList,
        song_id: song.id
      })
    })
      .then(() => this.clearAllInputs())
      .then(() => alert("Added song to your list!"));
  };

  clearAllInputs = () => {
    this.artist.clearText();
    this.song.clearText();
    this.genre.clearText();
  };

  render() {
    return (
      <ImageBackground
        source={require("../assets/bkgnd-img.jpg")}
        style={styles.image}
      >
        <View>
          {/* <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{
            text: "Artist Home Page",
            style: { color: "#fff" }
          }}
          rightComponent={{ icon: "home", color: "#fff" }}
        /> */}
          <View>
            <Text h4 style={{ textAlign: "center" }}>
              Add a new song to your list
            </Text>
            <View style={{ width: 600 }}>
              <FormLabel labelStyle={{ color: "white" }}>Artist Name</FormLabel>
              <FormInput
                inputStyle={{ color: "white" }}
                onChangeText={artistName => this.setState({ artistName })}
                ref={input => (this.artist = input)}
              />
            </View>
            <View style={{ width: 600 }}>
              <FormLabel labelStyle={{ color: "white" }}>Song Name</FormLabel>
              <FormInput
                inputStyle={{ color: "white" }}
                onChangeText={songName => this.setState({ songName })}
                ref={input => (this.song = input)}
              />
            </View>
            <View style={{ width: 600 }}>
              <FormLabel labelStyle={{ color: "white" }}>Genre</FormLabel>
              <FormInput
                inputStyle={{ color: "white" }}
                labelStyle={{ color: "white" }}
                onChangeText={genre => this.setState({ genre })}
                ref={input => (this.genre = input)}
              />
            </View>
            <Button
              backgroundColor={"#008cba"}
              icon={{ name: "music-note" }}
              buttonStyle={{ marginTop: 10 }}
              title="Add Song"
              onPress={() => this.addNewSong()}
            />
            <Button
              backgroundColor={"#008cba"}
              icon={{ name: "featured-play-list" }}
              buttonStyle={{ marginTop: 10 }}
              title="View Song List"
              onPress={() => this.props.navigation.navigate("ArtistSongs")}
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
  }
});
