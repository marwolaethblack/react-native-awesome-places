import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import configureStore from './src/store/store';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace'
import FindPlaceScreen from './src/screens/FindPlace/FindPlace'
import PlaceDetailScreen from './src/components/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';
//Register Screens 

const store = configureStore();

Navigation.registerComponent("awesome-places.AuthScreen",
  () => AuthScreen, store, Provider
);

Navigation.registerComponent("awesome-places.SharePlaceScreen", 
() => SharePlaceScreen, store, Provider );

Navigation.registerComponent("awesome-places.FindPlaceScreen", 
() => FindPlaceScreen, store, Provider );

Navigation.registerComponent("awesome-places.PlaceDetailScreen",
  () => PlaceDetailScreen, store, Provider );

Navigation.registerComponent("awesome-places.SideDrawerScreen", 
() => SideDrawerScreen );

Navigation.startSingleScreenApp({
  screen: {
    screen: "awesome-places.AuthScreen",
    title: "Login"
  }
})
 
//Start an App
  