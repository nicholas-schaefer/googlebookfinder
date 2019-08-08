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
    this.searchBooks("inauthor:dav+pilkey&orderBy=newest");
  }

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
                <BookDetail
                title={this.state.result.items[0].volumeInfo.title}
                authors={this.state.result.items[0].volumeInfo.authors[0]}
                publisher={this.state.result.items[0].volumeInfo.publisher}
                publishedDate={this.state.result.items[0].volumeInfo.publishedDate}
                moreInfoLink={this.state.result.items[0].volumeInfo.canonicalVolumeLink}
                imageLink={this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}
                // released={JSON.stringify(this.state.result.items[0].id)}
                // released={this.state.result.items[0].volumeInfo.title}
                // director={this.state.result}
                  // title={this.state.result.Title}
                  // src={this.state.result.Poster}
                  // director={this.state.result.Director}
                  // genre={this.state.result.Genre}
                  // released={this.state.result.Released}
                />
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
