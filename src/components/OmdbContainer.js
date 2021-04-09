import React, { Component } from "react";
import Container from "./Container";
import Card from "./Card";
import About from "./pages/About";
import Discover from "./pages/Discover";
import Search from "./pages/Search";
import API from "../utils/API";

class OmdbContainer extends Component {
  state = {
    result: {},
    search: ""
  };

  componentDidMount() {
    this.searchDogs("Bulldog");
  }

  searchDogs = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDogs(this.state.search);
  };

  render() {
    return (
      <Container>
          <Card>
                <Discover 
                title={this.state.result.Title}
                src={this.state.result.Image}

                
                />
          </Card>
      </Container>
    );
  }
}

export default OmdbContainer;
