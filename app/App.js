import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button } from "react-native-elements";
import ArtistHomeView from "./components/ArtistHomeView";
import ArtistSongList from "./components/ArtistSongList";
import CuratorArtistLoginSignup from "./containers/CuratorArtistLoginSignup";

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
        <Button
          backgroundColor={"#008cba"}
          icon={{ name: "book" }}
          buttonStyle={{ marginTop: 10 }}
          title="Go To LoginSignup"
          onPress={() => this.props.navigation.navigate("LoginSignup")}
        />
        <Button
          backgroundColor={"#008cba"}
          icon={{ name: "book" }}
          buttonStyle={{ marginTop: 10 }}
          title="Go To DetailHome"
          onPress={() => this.props.navigation.navigate("DetailsScreen")}
        />
        <Button
          backgroundColor={"#008cba"}
          icon={{ name: "book" }}
          buttonStyle={{ marginTop: 10 }}
          title="Go To ArtistHome"
          onPress={() => this.props.navigation.navigate("ArtistHome")}
        />
        <Button
          backgroundColor={"#008cba"}
          icon={{ name: "book" }}
          buttonStyle={{ marginTop: 10 }}
          title="Go To ArtistSongs"
          onPress={() => this.props.navigation.navigate("ArtistSongs")}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          buttonStyle={{ marginTop: 10, marginBottom: 10 }}
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          buttonStyle={{ marginBottom: 10 }}
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          buttonStyle={{ marginBottom: 10 }}
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    DetailsScreen: DetailsScreen,
    ArtistHome: ArtistHomeView,
    ArtistSongs: ArtistSongList,
    LoginSignup: CuratorArtistLoginSignup
  },
  {
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
