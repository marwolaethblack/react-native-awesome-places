import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

const customButton = props => {

    const content = (
     <View style={[styles.button, { backgroundColor: props.color }, props.styles]}>
        <Text>{props.children}</Text>
    </View>);

    if(Platform.OS === 'android') {
        return (
        <TouchableNativeFeedback onPress={props.onPress}>
            {content}
        </TouchableNativeFeedback>
        );
    }

    return (
    <TouchableOpacity onPress={props.onPress}>
        {content}
    </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
    }
});

export default customButton;