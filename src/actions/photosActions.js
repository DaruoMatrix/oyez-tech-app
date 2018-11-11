import {
    ADD_WISHLIST,
    FETCH_PHOTOS,
    ALL_WISHLIST
} from './types';



export const addWishlist = photoData => dispatch => {
    console.log('function called')
    dispatch({
        type: ADD_WISHLIST,
        payload: photoData
    });

}

export const fetchPhotos = () => dispatch => {
    console.log('actions')
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(photos => dispatch({
            type: FETCH_PHOTOS,
            payload: photos
        }));
}


export const storeWishlist = (wishlist,item) => dispatch => {

    let list = [];
    list = wishlist;
    list.push(item);
        dispatch({
            type: ALL_WISHLIST,
            payload: list
        })


}