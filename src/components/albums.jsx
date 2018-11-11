import React, { Component } from "react";
import {  Link } from "react-router-dom";
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {fetchAlbums} from '../actions/albumsActions';
 class Albums extends Component {

    componentWillMount(){
      this.props.fetchAlbums();
    }

  cardStyle = {
    width: "18rem",
    float: "left",
    height: 170,

  };
  buttonStyle = {
    display: "block",

    position: "absolute",
    bottom: 0,
    marginBottom: 10
  };

  titleStyle ={
      color:'black',
      textDecoration: 'none',
    
    
  }


  render() {
    const albumItems = this.displayAllAlbums();
    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/wishlist" className="btn btn-outline-info">Go to the wishlist</Link>
            </li>
          </ol>
        </nav>

        {albumItems}
      </div>
    );
  }

   displayAllAlbums() {
     return this.props.albums.map(album => (<div key={album.id} className="card m-2" style={this.cardStyle}>
       <div className="card-body">
         <h5>Title of the album :</h5>
         <Link to={`/photos/${album.id}`} style={this.titleStyle}> <p>{album.title}</p> </Link>
 

       </div>
     </div>));
   }
}

Albums.propTypes = {
  fetchAlbums : PropTypes.func.isRequired,
  albums: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
  albums : state.albums.items
})
export default connect(mapStateToProps,{fetchAlbums})(Albums);

