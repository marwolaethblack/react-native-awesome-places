import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, Image } from 'react-native';

const PlaceDetail = (props) => {

    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.image} source={props.selectedPlace.image}/>
                <Text>{props.selectedPlace.placeName}</Text>
            </View>
        )
    }

    console.log(props.selectedPlace);

    return (
        <Modal visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modal}>
                {modalContent}
                <View>
                    <Button title="Delete" color="red"/>
                    <Button title="Close"/>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modal: {
        margin: 22
    },

    image: {
        width: "100%",
        height: 200
    }
})

export default PlaceDetail;