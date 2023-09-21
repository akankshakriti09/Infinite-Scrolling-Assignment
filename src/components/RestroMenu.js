import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class RestroMenu extends Component {
  render() {
    return (
      <div className="container my-5">
        <h2>Restaurant Menu</h2>
        {/*MenuItem Component added here col-md-5 */}
        <div className="row">
              <div className="col-md-2">
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" />
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
                <MenuItem item="Burger" description="bguadouD8AEGSBOA" />
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
