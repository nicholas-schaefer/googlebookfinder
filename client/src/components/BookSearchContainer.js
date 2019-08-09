import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import API from "../utils/API";

class BookSearchContainer extends Component {
  state = {
    result: "",
    search: ""
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    this.searchBooks("dav+pilkey");
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res => console.log({res}))
      .catch(err => console.log(err));
  };

  searchBooks = query => {
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

  // When the form is submitted, search the Google Books API for the value of `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    alert(this.state.search);
    this.searchBooks(this.state.search);
  };

  render() {
    console.log(this.state.result.items);
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={"Search for a Book to Begin"}
            >
              {this.state.result ? (
                <BookDetail results={this.state.result.items} />
              ) : (
                <h3>No Results to Display</h3>
              )}
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookSearchContainer;
