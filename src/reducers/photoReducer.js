import {ADD_WISHLIST,FETCH_PHOTOS,ALL_WISHLIST} from '../actions/types';


const initialState = {
    items:[],
    item:{},
    wishlist:[]
}

export default function(state = initialState,action){
    switch(action.type){
        case ADD_WISHLIST:
        
        return{
            ...state,
            item: action.payload
        }

        case FETCH_PHOTOS:
        return{
            ...state,
            items: action.payload
        }
        case ALL_WISHLIST:
        return{
            ...state,
            wishlist: action.payload
        }

        default:
        return state;
    }

}