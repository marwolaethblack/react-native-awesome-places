import React from 'react';
import { Text, StyleSheet } from 'react-native';

const mainText = props => (
    <Text
     style={[styles.mainText, props.style]}
    >
    {props.children} 
    </Text>
)


const styles = StyleSheet.create({
    mainText: {
        fontSize: 22
    },
})

export default mainText;