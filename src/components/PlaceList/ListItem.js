import React from 'react';
import { TouchableHighlight, Text,View, StyleSheet } from 'react-native';

const ListItem = (props) => {
    return (
        <TouchableHighlight onPress={() => {props.deleteHandler(props.index)}}>
            <View style={styles.listitem}>
                <Text >{props.placeName}</Text>
            </View>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    listitem: {
        backgroundColor: "#EEE",
        width: "100%",
        margin: 3,
        padding: 10,
    },

})

export default ListItem;