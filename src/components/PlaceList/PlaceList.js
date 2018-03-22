import React from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import ListItem from './ListItem';

const PlaceList = (props) => (
    <View style={styles.placelist}>
        <FlatList
        data={props.places}
        renderItem={({item, index}) => {
            return (
            <ListItem 
            listItem={item}
            selectHandler={props.selectHandler}
            />)
        }}
        />
    </View>
)

styles = StyleSheet.create({
    placelist:{
        width: "100%",
    }
    
})

export default PlaceList;