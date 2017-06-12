import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
} from 'react-native';
import { TabNavigator } from "react-navigation";

import Login from "./Login"
import Index from "./Index";
import Lokasi from "./Lokasi";
import Tips from "./Tips";
import Profile from "./Profile";
//import Daftar from "./Daftar";

const Home = TabNavigator({
  Index: { screen: Index },
  Lokasi: {screen: Lokasi },
  Tips: { screen: Tips },
  Profile: { screen: Profile },
  //Daftar: { screen: Daftar },
});

export default Home;