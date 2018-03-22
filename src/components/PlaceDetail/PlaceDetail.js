import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { connect } from 'react-redux';
import { deletePlace } from '../../store/actions';

class PlaceDetail extends Component{

    deletePlaceHandler = () => {
         this.props.deletePlace(this.props.selectedPlace.key);
         this.props.navigator.pop();
    }

    render() {
        return (
            <View style={styles.container}>
                 <View>
                    <Image style={styles.image} source={this.props.selectedPlace.image}/>
                    <Text style={styles.text}>{this.props.selectedPlace.placeName}</Text>
                </View>
                <TouchableOpacity onPress={this.deletePlaceHandler}>
                     <View style={styles.deleteButton}>
                        <Icon name="md-trash" size={30} color="red" />
                    </View>
                 </TouchableOpacity>
            </View>
        )
    }  
}

const styles = StyleSheet.create({
    container: {
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
    },

    deleteButton: {
        alignItems: "center"
    }
})

const mapDispatchToProps = dispatch => {
    return {
        deletePlace: (key) => {
            dispatch(deletePlace(key));
        }
    }
}

export default connect(null, mapDispatchToProps)(PlaceDetail);