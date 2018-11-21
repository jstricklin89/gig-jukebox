import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, ListItem } from "react-native-elements";

export default class ArtistSongList extends Component {
  state = {
    sl: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/api/v1/song_lists")
      .then(r => r.json())
      .then(sl => this.setState({ sl }));
  }

  render() {
    const { sl } = this.state;
    return (
      <List>
        {sl.map(sl => {
          return sl.songs.map(song => {
            return (
              <ListItem
                key={song.name}
                title={song.name}
                // subtitle={song.artist}
                // rightTitle={song.genre}
                leftIcon={{ name: "music-note" }}
              />
            );
          });
        })}
      </List>
    );
  }
}
//   const list = [
//     {
//       title: "Appointments",
//       icon: "av-timer"
//     },
//     {
//       title: "Trips",
//       icon: "flight-takeoff"
//     }
//   ];
//   return (
//     <List>
//       {list.map(item => (
//         <ListItem
//           key={item.title}
//           title={item.title}
//           leftIcon={{ name: item.icon }}
//         />
//       ))}
//     </List>
//   );
// }
