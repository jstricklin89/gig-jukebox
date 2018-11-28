import React from "react";
import { createStackNavigator, createAppContainer } from "react-navigation";
import ArtistHomeView from "./components/ArtistHomeView";
import ArtistSongList from "./components/ArtistSongList";
import CuratorArtistLoginSignup from "./containers/CuratorArtistLoginSignup";
import CuratorHomeView from "./components/CuratorHomeView";

//part of react navigator. add all possible routes here and use these keys to route across entire app.
const RootStack = createStackNavigator(
  {
    ArtistHome: ArtistHomeView,
    ArtistSongs: ArtistSongList,
    LoginSignup: CuratorArtistLoginSignup,
    CuratorHome: CuratorHomeView
  },
  {
    initialRouteName: "LoginSignup"
  }
);

//wrapper for navigator/routes
const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
