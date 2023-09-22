import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Spinner from './Spinner';

export class Menu extends Component {
  constructor() {
    super();
    console.log("Hello I am Constructor from RestroMenu Component");
    this.state = {
      memes: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://api.imgflip.com/get_memes?page=-1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log("ihshohsihj", parsedData.data.memes);
    this.setState({ memes: parsedData.data.memes, totalResults: parsedData.memes,
     });
  }

  handlePrevClick = async () => {
    console.log("Previous");
    let url = `https://api.imgflip.com/get_memes?page=${this?.state?.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      page: this?.state?.page - 1,
      memes: parsedData.data.memes,
      loading: false
    });
  };

  handleNextClick = async () => {
    console.log("Next");
    if (!(this?.state?.page + 1 > Math.ceil(this?.state?.totalResults / this.props.pageSize))) {
      let url = `https://api.imgflip.com/get_memes?page=${this?.state?.page + 1}&pageSize=${this.props.pageSize}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({
        page: this?.state?.page + 1,
        memes: parsedData.data.memes, 
        loading: false
      })
  }
}

  render() {
    return (
      <div className="container my-2">
        <h2 className="text-center">Restaurant Menu</h2>
         {this?.state?.loading && <Spinner/>}  {/* Spinner component used */}
        <div className="row">
          {this?.state?.memes?.map((element) => (
            <div className="col-md-2" key={element.id}>
              <MenuItem
                item={element.name ? element.name : ""}
                description={element.width ? element.width : ""}
                imageUrl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this?.state?.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button disabled={this?.state?.page + 1 > Math.ceil(this?.state?.memes / 10)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default Menu;
