import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

const PlaceInput = (props) => {
    return(
    <View style={styles.inputs}>
        <TextInput value={props.placeName}
                   placeHolder="An awesome place"
                   onChangeText={(val) => props.textChangedHandler(val)}
                   style={{width: "78%"}}
        />
        <Button title="Add"
                onPress={props.addPlaceHandler}
                style={{width: "20%", maxHeight: "50%"}}
         />
    </View>
    )
}

const styles = StyleSheet.create({
    inputs : {
        width: "80%",
        flexDirection: "row",
        justifyContent: "space-between"
    }
})

export default PlaceInput;