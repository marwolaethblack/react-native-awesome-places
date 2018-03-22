import React, { Component } from 'react';
import { View, Image, Button, StyleSheet } from 'react-native';
import placeImage from '../../assets/niceplace.jpg';

class PickImage extends Component {
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.placeholder}>
                    <Image style={styles.previewImage} source={placeImage}/>
                </View>
                <View style={styles.button}>
                    <Button title="Pick Image" onPress={() => alert("To be done")} />
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

    previewImage: {
        width: "100%",
        height: "100%"
    },

    button: {
        margin: 8
    }
})

export default PickImage;