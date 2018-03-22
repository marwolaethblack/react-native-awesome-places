import React, { Component } from 'react';
import { View, Image, Button, StyleSheet, Text } from 'react-native';

class PickLocation extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Text>Map</Text>
                 </View>
                <View style={styles.button}>
                     <Button title="Locate me" onPress={() => alert("To be done")}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "center"
    },

    placeholder: {
        borderWidth: 1,
        backgroundColor: "#eee",
        borderColor: "black",
        width: "80%",
        height: 150
    },

    button: {
        margin: 8
    }
})

export default PickLocation;