import React, { Component } from 'react';

import './App.css';
import Albums from './components/albums'
import Photos from './components/photos'
import NavBar from './components/navbar';
import Error from './components/Error';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PhotoDetails from './components/photoDetail';
import WishList from './components/wishList';
import store from './store'
import {Provider} from 'react-redux';
class App extends Component {


  render() {
    

    return (
      <Provider store={store}>
      <div className="App">
      <NavBar/>
        <BrowserRouter>
    
        <Switch>
        <Route path='/' component={Albums} exact />
        <Route path='/wishlist' component={WishList} />
        <Route path='/photos/:albumId' component={Photos} />
        <Route path='/photo/details/:photoId' component={PhotoDetails} />
        <Route  component={Error} />
        </Switch>
      
        </BrowserRouter>
      </div>
      </Provider>
    );
  }
}

export default App;
