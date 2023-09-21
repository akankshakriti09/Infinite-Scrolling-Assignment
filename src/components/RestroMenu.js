import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class RestroMenu extends Component {
  constructor(){
    super();
    console.log("Hello I am Constructor from RestroMenu Component");
    this.state = {
      dishes: this.dishes,
      loading: false
    }
}

  render() {
    return (
      <div className="container my-2" >
        <h2>Restaurant Menu</h2>
        {/*MenuItem Component added here*/}
        <div className="row">
                  {this?.state?.dishes?.map((element) => {
                    return <div className="col-md-4"  key={element.id}>
                        <MenuItem title={element.name} description={element.description} imageUrl={element.image} />
                        <MenuItem item="Burger" description="bguadouD8AEGSBOA" imageUrl="https://via.placeholder.com/150" />
                </div>

                  })}


          
              {/*<div className="col-md-2">
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" imageUrl="https://via.placeholder.com/150" />
              </div>
               <div className="col-md-2">
                <MenuItem item="Pizza" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div> */}
        </div>
        {/* <div className="row">
              <div className="col-md-2">
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" imageUrl="https://via.placeholder.com/150"/>
              </div>
              <div className="col-md-2">
                <MenuItem item="Pizza" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div>
              <div className="col-md-2">
                <MenuItem item="Tea" description="bguadouD8AEGSBOA" />
              </div>
        </div> */}
      </div>
    );
  }
}

export default RestroMenu;
