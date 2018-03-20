import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

class PlaceInput extends PureComponent {

    state = { placeName: ""}

    render() {
        return(
            <View style={styles.inputs}>
                <TextInput value={this.state.placeName}
                           placeHolder="An awesome place"
                           onChangeText={(val) => this.setState({placeName: val})}
                           style={{width: "78%"}}
                />
                <Button title="Add"
                        onPress={() => this.props.addPlaceHandler(this.state.placeName)}
                        style={{width: "20%", maxHeight: "50%"}}
                 />
            </View>
            )
    }
    
}

const styles = StyleSheet.create({
    inputs : {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default PlaceInput;