import React, { Component } from 'react';
import {Link} from 'react-router-dom';

const NavBar = ()=>{
    return ( 
        <nav className="navbar navbar-light bg-light">
     
        <a className="navbar-brand">
          <img src="http://www.oyez.fr/wp-content/uploads/2016/09/logo_oyez_black2.png" width="30" height="30" className="d-inline-block align-top" alt=""/>
          Oyez application
        </a>
      </nav> );
};

 
export default NavBar;