import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Button } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavEvent);
        console.log(this.props.navigator);
    }

    onNavEvent = (e) => {
        console.log(e);
        if(e.type === "NavBarButtonPress") {
            if(e.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                })
            }
        }
    }

    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Text>Share a place with us!</Text>
                    <View style={styles.placeholder}>
                        <Text>Image Preview</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Pick Image" />
                    </View>
                    <View style={styles.placeholder}>
                        <Text>Map</Text>
                    </View>
                    <View style={styles.button}>
                        <Button title="Locate me" />
                    </View>
                    <DefaultInput placeholder="Place Name" style={{width: "100%"}} />
                    <View style={styles.button}>
                        <Button title="Add" />
                    </View>
                    <PlaceInput addPlaceHandler={this.props.addPlaceHandler}/>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center"
    },

    placeholder: {
        borderWidth: 1,
        backgroundColor: "#eee",
        borderColor: "black",
        width: "80%",
        height: 150
    },

    button: {
        margin: 8
    }
});

const mapDispatchToProps = (dispatch) => {
    return {
        addPlaceHandler: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);