import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Modal, Image } from 'react-native';

const PlaceDetail = (props) => {

    let modalContent = null;

    if(props.selectedPlace) {
        modalContent = (
            <View>
                <Image style={styles.image} source={props.selectedPlace.image}/>
                <Text style={styles.text}>{props.selectedPlace.placeName}</Text>
            </View>
        )
    }

    console.log(props.selectedPlace);

    return (
        <Modal visible={props.selectedPlace !== null} 
        animationType="slide" 
        onRequestClose={props.closeModal}>
            <View style={styles.modal}>
                {modalContent}
                <View>
                    <Button 
                    title="Delete" 
                    color="red" 
                    onPress={() => {props.deletePlace(props.selectedPlace.key)}}/>
                    <Button title="Close" onPress={props.closeModal}/>
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
    },
    text: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    }
})

export default PlaceDetail;