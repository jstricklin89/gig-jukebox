import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";

export default class ArtistJukeboxList extends Component {
  state = {
    jl: {},
    jls: [],
    user: 2
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/jukebox_lists")
      .then(r => r.json())
      .then(jlists => {
        let jl = jlists.find(jl => jl.user_id === this.state.user);
        this.setState({ jls: jl.songs, jl });
      });
  }

  render() {
    const { jls, jl } = this.state;
    return jls.length > 0 ? (
      <View>
        <Text style={{ fontSize: 16, textAlign: "center", paddingTop: 10 }}>
          Jukebox
        </Text>
        <List containerStyle={{ width: 400, marginLeft: 200 }}>
          {jls.map(song => {
            return (
              <ListItem
                key={song.name}
                title={song.name}
                subtitle={song.artist}
                rightTitle={song.genre}
                leftIcon={{ name: "music-note" }}
                hideChevron={true}
              />
            );
          })}
        </List>
      </View>
    ) : null;
  }
}
