import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

export default class App extends React.Component {

  state = {
    placeName: ''
  };
 
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello! {this.state.placeName}</Text>
        <TextInput value={this.state.placeName}
                   placeholder="An awesome place"
                   onChangeText={(val) => this.setState({placeName: val})}
                   style={{width: 300}}
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
    justifyContent: 'center',
  },
});
