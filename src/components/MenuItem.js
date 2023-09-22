import React, { Component } from 'react'

export class MenuItem extends Component {
    
  render() {
    let {item, description, imageUrl} = this.props; //destructuring 
    return (
      <div className="my-2">
            <div className="card" style={{width: "12rem"}}>
              <img src= {imageUrl} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{item}</h5>
                        <p className="card-text">{description}</p>
                    </div>
            </div>
      </div>
    )
  }
}

export default MenuItem;
