import {FETCH_ALBUMS} from '../actions/types';



export const fetchAlbums = ()=>dispatch=>{
        fetch("https://jsonplaceholder.typicode.com/albums")
        .then(res => res.json())
        .then(albums => dispatch({
            type:FETCH_ALBUMS,
            payload: albums
        }));
        
    }

