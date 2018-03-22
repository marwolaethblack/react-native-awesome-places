import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput from '../../components/PlaceInput/PlaceInput';
import { addPlace } from '../../store/actions/'

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