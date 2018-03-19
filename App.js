import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends React.Component {

  state = {
    placeName: '',
    places: []
  };

  addPlaceHandler = () => {
    if(this.state.placeName.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        places: prevState.places.concat({placeName: prevState.placeName, key: prevState.placeName})
      }
    })

    console.log(this.state.places);
  }

  deletePlaceHandler = (index) => {
    console.log(index);

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
        <TextInput value={this.state.placeName}
                   placeholder="An awesome place"
                   onChangeText={(val) => this.setState({placeName: val})}
                   style={{width: 300}}
         />
        <Button title="Add" 
                onPress={this.addPlaceHandler}/>
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
