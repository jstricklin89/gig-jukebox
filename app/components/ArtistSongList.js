import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { List, ListItem, Icon } from "react-native-elements";

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

  render() {
    const { sl } = this.state;
    return sl.length > 0 ? (
      <List containerStyle={{ width: 700, marginLeft: 35 }}>
        {sl.map(song => {
          return (
            <ListItem
              key={song.name}
              title={song.name}
              subtitle={song.artist}
              rightTitle={song.genre}
              leftIcon={{ name: "music-note" }}
              rightIcon={
                <Icon
                  name="add-circle"
                  color="#009933"
                  onPress={() => this.props.handlePressSongList(song)}
                />
              }
            />
          );
        })}
      </List>
    ) : null;
  }
}
