import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class RestroMenu extends Component {
  render() {
    return (
      <div className="container my-2" >
        <h2>Restaurant Menu</h2>
        {/*MenuItem Component added here*/}
        <div className="row">
              <div className="col-md-2">
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" imageUrl="https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800" />
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
        </div>
        <div className="row">
              <div className="col-md-2">
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" imageUrl="https://static.toiimg.com/thumb/84784534.cms?imgsize=468021&width=800&height=800"/>
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
        </div>
      </div>
    );
  }
}

export default RestroMenu;
