import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions';

import placeImage from './src/assets/niceplace.jpg'

class App extends React.Component {

 addPlaceHandler = (placeNameFromInput) => {
    this.props.onAddPlace(placeNameFromInput);
  }

  deletePlaceHandler = (key) => {
    this.props.onDeletePlace(key);
  }

  selectPlaceHandler = (key) => {
    this.props.onSelectPlace(key);
  }

  closeModalHandler = () => {
    this.props.onDeselectPlace();
  }
 
  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
        selectedPlace={this.props.selectedPlace}
        deletePlace={this.deletePlaceHandler}
        closeModal={this.closeModalHandler}
         />
        <Text>Awesome Places</Text>
        <PlaceInput addPlaceHandler={this.addPlaceHandler}
         />
        <PlaceList
        places={this.props.places}
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

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
  
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (placeName) => dispatch(addPlace(placeName)),
    onDeletePlace: (key) => dispatch(deletePlace(key)),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(App);
