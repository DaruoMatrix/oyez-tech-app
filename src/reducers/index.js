import {combineReducers} from 'redux';
import albumsReducer from './albumsReducer';
import photoReducer from './photoReducer';

export default combineReducers({
    albums: albumsReducer,
    photos: photoReducer
});