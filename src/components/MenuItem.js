import React, { Component } from "react";

export class MenuItem extends Component {
  render() {
    let { item, description, imageUrl, newsUrl } = this.props; //destructuring
    return (
      
        <div className="my-2">
            <a rel="noreferrer" href={newsUrl} target="_blank">
          <div className="card" style={{ width: "12rem" }}>
            <img
              src={
                !imageUrl
                  ? "https://binamehta.com/wp-content/uploads/image-placeholder-300x200.png"
                  : imageUrl
              }
              className="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">{item}</h5>
              <p className="card-text">{description}</p>
            </div>
          </div>
          </a>
        </div>
      
    );
  }
}

export default MenuItem;
