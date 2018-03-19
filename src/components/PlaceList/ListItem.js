import React from 'react';
import { TouchableHighlight, Text,View, StyleSheet, Image } from 'react-native';


const ListItem = (props) => {
    return (
        <TouchableHighlight onPress={() => {props.selectHandler(props.listItem.key)}}>
            <View style={styles.listitem}>
                <Image source={props.listItem.image} style={styles.image}/>
                <Text >{props.listItem.placeName}</Text>
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
        flexDirection: "row"
    },

    image: {
        height: 50,
        width: 50,
        marginRight: 5
    }

})

export default ListItem;