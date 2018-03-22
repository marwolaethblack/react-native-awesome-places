import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/'

class SharePlaceScreen extends Component {
    render() {
        return(
            <View>
                <PlaceInput addPlaceHandler={this.props.addPlaceHandler}/>
            </View>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPlaceHandler: (placeName) => dispatch(addPlace(placeName))
    }
}

export default connect(null, mapDispatchToProps)(SharePlaceScreen);