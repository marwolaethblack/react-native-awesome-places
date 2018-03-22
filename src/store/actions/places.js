import * as AT from './actionTypes';

export const addPlace = (placeName) => {
    return {
        type: AT.ADD_PLACE, 
        placeName
    }
}

export const deletePlace = (key) => {
    return {
        type: AT.DELETE_PLACE,
        key
    }
}
