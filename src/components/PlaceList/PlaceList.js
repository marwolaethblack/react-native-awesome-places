import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from './ListItem';

const PlaceList = (props) =>(
    <View style={styles.placelist}>
        <FlatList
        data={props.places}
        renderItem={(place,i) => {
            console.log(place.item);
            return (
            <ListItem 
            placeName={place.item.placeName}
            deleteHandler={props.deleteHandler}
            index={i}
            />)
        }}
        />
    </View>
)

styles = StyleSheet.create({
    placelist:{
        width: "80%",
    }
    
})

export default PlaceList;