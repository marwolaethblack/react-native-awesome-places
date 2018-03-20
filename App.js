import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

import placeImage from './src/assets/niceplace.jpg'

export default class App extends React.Component {

  state = {
    places: [],
    selectedPlace: null
  };

  addPlaceHandler = (placeNameFromInput) => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          placeName: placeNameFromInput,
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
        }),
        selectedPlace: null
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

  closeModalHandler = () => {
    this.setState(prevState => {
      return {
        selectedPlace: null
      }
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.state.selectedPlace}
        deletePlace={this.deletePlaceHandler}
        closeModal={this.closeModalHandler}
         />
        <Text>Awesome Places</Text>
        <PlaceInput addPlaceHandler={this.addPlaceHandler}
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
