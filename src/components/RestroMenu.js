import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class RestroMenu extends Component {

  constructor(){
    super();
    console.log("Hello I am Constructor from RestroMenu Component");
    this.state = {
      products: [],
      loading: false,
      page: 1
    }
}

    async componentDidMount(){
      let url = "https://api.imgflip.com/get_memes?page=:1";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({products: parsedData.products})
    }

  render() {
    return (
      <div className="container my-2" >
        <h2>Restaurant Menu</h2>
        {/*MenuItem Component added here*/}
        <div className="row">
                  {this?.state?.products?.map((element) => {
                           return <div className="col-md-2"  key={element.id}>
                                 <MenuItem item={element.name} description={element.width} imageUrl={element.url}/>
                         </div> 
                         })                       
                  }    

                  <div>
                    <div className="container">
                      <button type="button" class="btn btn dark">Previous</button>
                      <button type="button" class="btn btn dark">Next</button>
                    </div>
                  </div>
         
        </div>

      </div>
    );
  }
}

export default RestroMenu;
