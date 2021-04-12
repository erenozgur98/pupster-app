import React, { Component } from "react";
import API from '../utils/API';
import Alert from '../components/Alert';
import SearchResults from '../components/SearchResults';
import SearchForm from '../components/SearchForm';
import Container from '../components/Container';

class Search extends Component {
  state = {
    search: '',
    breeds: [],
    results: [],
    error: ''
  }

  componentDidMount() {
    API.getBaseBreedsList()
      .then(res => this.setState({ breeds: res.data.message }))
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ search: e.target.value });
  }

  handleFormSubmit = e => {
    e.preventDefault();
    API.getDogsOfBreed()
      .then(res => {
        if (res.data.status === "error") {
          throw new Error(res.data.message);
        }
        this.setState({ results: res.data.message, error: '' });
      })
      .catch(err => this.setState({ error: err.message }));

  }

  render() {
    return (
      <div>
         <Container style={{ minHeight: "80%" }}>
          <h1 className="text-center">Search By Breed!</h1>
          <Alert
            type="danger"
            style={{ opacity: this.state.error ? 1 : 0, marginBottom: 10 }}
          >
            {this.state.error}
          </Alert>
          <SearchForm
            handleFormSubmit={this.handleFormSubmit}
            handleInputChange={this.handleInputChange}
            breeds={this.state.breeds}
          />
          <SearchResults results={this.state.results} />
        </Container>
      </div>
    )
  }
}


export default Search;
