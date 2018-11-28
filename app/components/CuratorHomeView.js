import React, { Component } from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import { FormLabel, FormInput, Text, Button } from "react-native-elements";
import ArtistSongList from "./ArtistSongList";
import ArtistJukeboxList from "./ArtistJukeboxList";

export default class CuratorHomeView extends Component {
  state = {
    pin: 0,
    user: 1
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
              <Text style={{ fontSize: 16, marginTop: 10, marginLeft: 20 }}>
                Click any song to add to jukebox:
              </Text>
              <ArtistSongList />
              <ArtistJukeboxList />
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
