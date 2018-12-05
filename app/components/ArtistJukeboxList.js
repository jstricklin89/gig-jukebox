import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import { List, ListItem, Button, Icon } from "react-native-elements";
import { fetchSongLists } from "../actions/actionCreators";
import { connect } from "react-redux";

const mapStateToProps = state => {
  console.log(state, "map state jbl state.jls");
  return {
    // jl: state.app.jl,
    // user: state.app.id,
    jls: state.jls
  };
};

const mapDispatchToProps = dispatch => ({
  songlists: () => dispatch(fetchSongLists())
});

class ArtistJukeboxList extends Component {
  state = {
    jl: {},
    jls: [],
    user: 2
  };

  // updateJukebox = () => {
  //   fetch("http://localhost:3000/api/v1/jukebox_lists")
  //     .then(r => r.json())
  //     .then(jlists => {
  //       let jl = jlists.find(jl => jl.user_id === this.state.user);
  //       this.setState({ jls: jl.songs, jl });
  //     });
  // };

  render() {
    const { jls } = this.props;
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
                rightIcon={
                  <Icon
                    name="delete-forever"
                    color="#B22222"
                    onPress={() => this.props.handlePressJukeboxList(song)}
                  />
                }
              />
            );
          })}
        </List>
        <Button
          backgroundColor={"#008cba"}
          icon={{ name: "music-video" }}
          buttonStyle={{ marginTop: 10, width: 400, marginLeft: 185 }}
          title="Update Jukebox"
          onPress={this.props.songlists}
        />
      </View>
    ) : null;
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArtistJukeboxList);
