import React, { Component } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { List, ListItem, Icon } from "react-native-elements";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  ...state.app,
  jls: state.jls
});

class ArtistSongList extends Component {
  componentDidUpdate() {
    // console.log(this.props, "component did update artistsonglist");
  }

  componentDidMount() {
    // console.log(this.props, "component did mount artistsonglist");
  }

  render() {
    const { sl } = this.props;
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

export default connect(mapStateToProps)(ArtistSongList);
