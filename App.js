import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';

export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
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
        places: prevState.places.concat({placeName: prevState.placeName, key: prevState.placeName})
      }
    })
  }

  deletePlaceHandler = (index) => {

    this.setState(prevState => {
      return {
        places: prevState.places.filter((p, i) => {
          return i != index
        })
      }
    })
  }
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello!{this.state.placeName}</Text>
        <PlaceInput addPlaceHandler={this.addPlaceHandler}
                    placeName={this.state.placeName}
                    textChangedHandler={this.textChangedHandler}
         />
        <PlaceList
        places={this.state.places}
        deleteHandler={this.deletePlaceHandler}
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
