import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceList from '../../components/PlaceList/PlaceList';


class FindPlaceScreen extends Component {
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