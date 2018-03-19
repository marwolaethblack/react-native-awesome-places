import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/niceplace.jpg'

export default class App extends React.Component {

  state = {
    placeName: '',
    places: [],
    selectedPlace: null
  };

  textChangedHandler = (val) => {
    this.setState(prevState => {
      return {
        placeName: val
      }
    })
  }

  addPlaceHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          placeName: prevState.placeName, 
          key: Math.random(),
          image: placeImage
        })
      }
    })
  }

  deletePlaceHandler = (key) => {

    this.setState(prevState => {
      return {
        places: prevState.places.filter((p) => {
          return p.key !== key
        })
      }
    })
  }

  selectPlaceHandler = (key) => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(p => {
          return p.key === key;
        })
      }
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} />
        <Text>Awesome Places</Text>
        <PlaceInput addPlaceHandler={this.addPlaceHandler}
                    placeName={this.state.placeName}
                    textChangedHandler={this.textChangedHandler}
         />
        <PlaceList
        places={this.state.places}
        selectHandler={this.selectPlaceHandler}
         />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
