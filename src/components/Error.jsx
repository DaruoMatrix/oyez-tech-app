import React, { Component } from "react";
import '../error.css';
import {Link} from 'react-router-dom';
const Error = () => {
  return (
<div id="notfound">
		<div className="notfound">
			<div className="notfound-404">
				<h1>Oops!</h1>
				<h2>404 - The Page can't be found</h2>
			</div>
			<Link to='/'><a>Go TO Homepage</a></Link>
		</div>
	</div>
  );
};

export default Error;
