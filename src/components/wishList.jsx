import React, { Component } from "react";
import { connect } from "react-redux";
import { addWishlist,storeWishlist } from "../actions/photosActions";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
class WishList extends Component {


  state = {
    wishlist: []
  };


  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
    if (nextProps.newPhoto) {
      this.state.wishlist.unshift(nextProps.newPhoto);
    }
    console.log("wishlist", this.state.wishlist);
  }

  onChangeRoute() {
    this.props.history.goBack();
  }

  cardStyle = {
    width: "18rem",
    float: 'left'
  };
  render() {

    const photoItem = this.displayWishlist();

    console.log("wishlist", this.state.wishlist);

    return (
      <div>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/" className="btn btn-outline-info">
                Go to the albums
              </Link>
            </li>
          </ol>
        </nav>
      
          {photoItem} 
        
          
        
      </div>
    );
  }

  displayWishlist() {
    return this.props.wishlist.map(p => (<div className="card m-2" style={this.cardStyle} key={p.id}>
      <img className="card-img-top" src={p.url} alt="Card image cap" />
      <div className="card-body">
        <h5 className="card-title">{p.title}</h5>
        <a className="card-text" href={p.thumbnailUrl}>
          thumbnail link
        </a>
        <br />
        <br />
      </div>
    </div>));
  }
}
WishList.propTypes = {
  addWishlist: PropTypes.func.isRequired,
  newPhoto: PropTypes.object,
  wishlist: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  newPhoto: state.photos.item,
  wishlist: state.photos.wishlist
});

export default connect(
  mapStateToProps,
  { addWishlist,storeWishlist }
)(WishList);
