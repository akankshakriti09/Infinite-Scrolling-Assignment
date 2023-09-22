import React, { Component } from "react";
import MenuItem from "./MenuItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export class Menu extends Component {
  static defaultProps = {
    limit: 10,
  };

  static propTypes = {
    limit: PropTypes.number,
  };

  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0, //by default totalResults is zero
    };
  }

  //Creating function for updating new list
  async updateList(pageNo) {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4401ff58ad148098bd0c93dc05b26a5&page=${this.state.page}&pageSize=${this.props.limit}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  async componentDidMount() {
    this.updateList(); //calling function
  }

  handlePrevClick = async () => {
    console.log("Previous");
    this.setState({ page: this.state.page - 1 });
    this.updateList(); //calling function to reload prevous 10 list
  };

  handleNextClick = async () => {
    console.log("Next");
    this.setState({ page: this.state.page + 1 });
    this.updateList(); //calling function to reload next 10 list
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a4401ff58ad148098bd0c93dc05b26a5&page=${this.state.page}&pageSize=${this.props.limit}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parsedData.articles), //concatenate articles data
      totalResults: parsedData.totalResults,
    });
  };

  render() {
    return (
      <>
      
        <h2 className="text-center" style={{ margin: "30px 0px" }}>
          News Channel List
        </h2>

    
        {this.state.loading && <Spinner />}

        {/* Adding Infinite scroll component */}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Spinner />} //Adding spinner loader
        >
          <div className="container" >
            <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
              {this?.state?.articles?.map((element, index) => (
                <div className="col-2" key={index}>
                  <MenuItem
                    item={element.source.name ? element.source.name : ""}
                    title={element.title ? element.title : ""}
                    description={element.description ? element.description : ""}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

export default Menu;
