import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlaceScreen extends Component {
    constructor(props) {
        super(props);
        this.props.navigator.setOnNavigatorEvent(this.onNavEvent);
    }

    onNavEvent = (e) => {
        if(e.type === "NavBarButtonPress") {
            if(e.id === "sideDrawerToggle") {
                this.props.navigator.toggleDrawer({
                    side: "left",
                })
            }
        }
    }

    selectHandler = key => {
        const selPlace = this.props.places.find(p => p.key === key);

        this.props.navigator.push({
            screen: "awesome-places.PlaceDetailScreen",
            title: selPlace.placeName,
            passProps: {
                selectedPlace: selPlace
            }
        })
    }

    render() {
        return(
            <View>
                <PlaceList 
                places={this.props.places} 
                selectHandler={this.selectHandler} />
            </View>
        )
    }
}

const mapStateToProps = state => {
     return {
         places: state.places.places
     }
}

export default connect(mapStateToProps)(FindPlaceScreen);