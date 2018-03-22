import React, { PureComponent } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import DefaultInput from '../UI/DefaultInput/DefaultInput';

const placeInput = (props) => (
                <DefaultInput value={props.placeName}
                           placeholder="An awesome place"
                           onChangeText={(val) => props.placeNameChangeHandler(val)}
                           style={{width: "78%"}}
                />
            )
            
export default placeInput;