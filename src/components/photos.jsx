import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Photos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: []
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then(res => res.json())
      .then(data => this.setState({ photos: data }));
  }

  cardStyle = {
    width: "18rem",
    float: "left"
  };

  render() {
    const photosById = this.filterPhotoById();

    const photosItem = this.displayPhotos(photosById);

    return (
      <div>

        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
             <Link to='/'> <a>Albums</a></Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Album {this.props.match.params.albumId} photos
            </li>
          </ol>
        </nav>
        {photosItem}
      </div>
    );
  }

  displayPhotos(photosById) {
    return photosById.map(p => (
      <div className="card m-2" style={this.cardStyle} key={p.id}>
        <Link to={`/photo/details/${p.id}`}>
          <img className="card-img-top" src={p.url} alt="Card image cap" />
        </Link>
      </div>
    ));
  }

  filterPhotoById() {
    return this.state.photos.filter(
      p => p.albumId == this.props.match.params.albumId
    );
  }
}
