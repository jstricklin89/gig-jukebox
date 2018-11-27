import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";
import { Button } from "react-native-elements";
import ArtistHomeView from "./components/ArtistHomeView";
import ArtistSongList from "./components/ArtistSongList";
import CuratorArtistLoginSignup from "./containers/CuratorArtistLoginSignup";
import CuratorHomeView from "./components/CuratorHomeView";
//needs to render the login screen that has an option to select if user is musician or curator**

//temporary. renders the 4 buttons to practice routing. needs to be login screen. see comment above
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

//another temp screen that was for route testing purposes
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
//part of react navigator. add all possible routes here and use these keys to route across all app.
const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    DetailsScreen: DetailsScreen,
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
