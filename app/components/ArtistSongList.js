import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { List, ListItem } from "react-native-elements";

export default class ArtistSongList extends Component {
  state = {
    sl: [],
    user: 1
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/song_lists")
      .then(r => r.json())
      .then(slists => {
        let sl = slists.find(sl => sl.user_id === this.state.user);
        this.setState({ sl: sl.songs });
      });
  }

  handlePressListSong = song => {
    debugger;
  };

  render() {
    const { sl } = this.state;
    return sl.length > 0 ? (
      <List>
        {sl.map(song => {
          return (
            <ListItem
              key={song.name}
              title={song.name}
              subtitle={song.artist}
              rightTitle={song.genre}
              leftIcon={{ name: "music-note" }}
              onPress={this.handlePressListSong(song)}
              hideChevron={true}
            />
          );
        })}
      </List>
    ) : null;
  }
}
