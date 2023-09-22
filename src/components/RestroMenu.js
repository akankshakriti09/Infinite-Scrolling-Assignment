import React, { Component } from "react";
import MenuItem from "./MenuItem";

export class RestroMenu extends Component {

  constructor(){
    super();
    console.log("Hello I am Constructor from RestroMenu Component");
    this.state = {
      memes: [],
      loading: false,
      page: 1
    }
}

    async componentDidMount(){
      let url = "https://api.imgflip.com/get_memes?page=:1";
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({memes: parsedData.memes})
    }

    handlePrevClick = async ()=>{
      console.log("Previous");
      let url = `https://api.imgflip.com/get_memes?page=${this.state.page - 1 }`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page - 1,
        memes: parsedData.memes
      })
    }

    handleNextClick = async ()=>{
      console.log("Next");
      let url = `https://api.imgflip.com/get_memes?page=${this.state.page + 1 }`;
      let data = await fetch(url);
      let parsedData = await data.json()
      console.log(parsedData);
      this.setState({
        page: this.state.page + 1,
        memes: parsedData.memes
      })
    }

  render() {
    return (
      <div className="container my-2" >
        <h2>Restaurant Menu</h2>
        {/*MenuItem Component added here*/}
        <div className="row">
                  {this?.state?.memes?.map((element) => {
                           return <div className="col-md-2"  key={element.id}>
                                 <MenuItem item={element.name} description={element.width} imageUrl={element.url}/>
                         </div> 
                         })                       
                  }    

                  <div>
                    <div className="container d-flex justify-content-between">
                      <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                      <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr; </button>
                    </div>
                  </div>
         
        </div>

      </div>
    );
  }
}

export default RestroMenu;
