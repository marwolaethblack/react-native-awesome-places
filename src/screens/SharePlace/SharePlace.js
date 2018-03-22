import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, Button, Image } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import PickImage from '../../components/PickImage/PickImage';
import PickLocation from '../../components/PickLocation/PickLocation';


class SharePlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavEvent);
        console.log(this.props.navigator);
    }

    state = {
        placeName: ""
    }

    placeNameChangeHandler = (val) => {
        this.setState({
            placeName: val
        });
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
                    <HeadingText>Share a place with us!</HeadingText>
                    <PickImage />
                    <PickLocation />
                    <PlaceInput placeName={this.state.placeName} placeNameChangeHandler={this.placeNameChangeHandler}/>
                    <View style={styles.button}>
                        <Button title="Share the Place!" onPress={() => this.props.addPlaceHandler(this.state.placeName)} />
                    </View>
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

    previewImage: {
        width: "100%",
        height: "100%"
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