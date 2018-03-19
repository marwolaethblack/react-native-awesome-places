import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from './ListItem';

const PlaceList = (props) =>(
    <View style={styles.placelist}>
        <FlatList
        data={props.places}
        renderItem={({item, index}) => {
            return (
            <ListItem 
            placeName={item.placeName}
            deleteHandler={props.deleteHandler}
            index={index}
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