import * as AT from '../actions/actionTypes';
import placeImage from '../../assets/niceplace.jpg';

const initialState = {
    places: [],
    selectedPlace: null
};

const placesReducer = (state = initialState, action) => {
    switch (action.type) {

        case AT.ADD_PLACE: {

            if (action.placeName.trim() === "") {
                return state;
            }

            return {
                ...state,
                places: state.places.concat({
                    placeName: action.placeName,
                    key: Math.random(),
                    image: placeImage
                })
            }
        }

        case AT.DELETE_PLACE: {
            return {
                ...state,
                places: state.places.filter((p) => {
                    return p.key !== action.key
                }),
                selectedPlace: null
            }
        }

        default:
            return state;
    }

}

export default placesReducer