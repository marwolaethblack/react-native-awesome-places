import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const defaultInput = props => (
    <TextInput 
     {...props}
     style={[styles.input, props.style]}
    />
);


const styles = StyleSheet.create({
    inputs: {
        width: "100%",
    }
});

export default defaultInput;