import React, { Component } from "react";
import { connect } from "react-redux";
import { addWishlist, fetchPhotos,storeWishlist } from "../actions/photosActions";
import PropTypes from "prop-types";
import {  Link } from "react-router-dom";


class PhotoDetails extends Component {

  constuctor() {

      this.routeChange = this.routeChange.bind(this);
     }

  componentWillMount(){
    this.props.fetchPhotos();
  }

  routeChange(){
    let path = `wishlist`;
    this.props.history.push(path);
    }

  onClick(photo){
    console.log('clicked :',photo);
    this.props.addWishlist(photo);
    this.props.storeWishlist(this.props.wishlist,photo)
  } 

  cardStyle = {
    width: "18rem",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center"
  };

  handleGoBack= () => {
    this.props.history.goBack();
  }
  render() {
    console.log(this.props)

    const photoById = this.getPhoto();
  
    

    const photoItem = this.photoItem(photoById);

    return (
      <div>
<nav aria-label="breadcrumb">
  <ol className="breadcrumb">
    <li className="breadcrumb-item"><Link to='/'><a>Albums</a></Link></li>
    <li className="breadcrumb-item"><Link to={this.handleGoBack}><a onClick={this.handleGoBack}>Photos</a></Link></li>
    <li className="breadcrumb-item active" aria-current="page">Photo detail</li>
  </ol>
</nav>

        {photoItem}
      </div>
    );
  }

  photoItem(photoById) {
    return photoById.map(p => (<div className="card" style={this.cardStyle} key={p.id}>
      <img className="card-img-top" src={p.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <a className="card-text" href={p.thumbnailUrl}>
          thumbnail link
        </a>
        <br />
        <br />

        <button onClick={() => this.onClick(p)} className="btn btn-outline-info">
          Add to wishlist
        </button> <br/><br/>
        <Link to="/wishlist" className="btn btn-outline-danger">Go to the wishlist</Link>
      </div>
    </div>));
  }

  getPhoto() {
    const photoId = this.props.match.params.photoId;
    const photoById = this.props.photos.filter(p => p.id == photoId);
    return photoById;
  }
}


  PhotoDetails.propTypes = {
  addWishlist: PropTypes.func.isRequired,
  fetchPhotos: PropTypes.func.isRequired,
  wishlist: PropTypes.array.isRequired
}; 
const mapStateToProps = state => ({
  photos: state.photos.items,
  wishlist: state.photos.wishlist
});
export default connect(
  mapStateToProps,
  { addWishlist, fetchPhotos,storeWishlist }
)(PhotoDetails);
