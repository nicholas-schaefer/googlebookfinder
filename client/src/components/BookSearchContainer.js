import React, { Component } from "react";
import Container from "./Container";
import Row from "./Row";
import Col from "./Col";
import Card from "./Card";
import SearchForm from "./SearchForm";
import BookDetail from "./BookDetail";
import API from "../utils/API";
import {List, ListItem} from "./List";

class BookSearchContainer extends Component {
  state = {
    result: "",
    search: "",

    // title: "",
    // author: "",
    // publisher: "",
    // publishedDate: "",
    // isbnLong: "",
    // googleBookListing: "",
  };

  // When this component mounts, console log what's currently in the MongoDatabase 
  // and populate example search with author Dav Pilkey 
  componentDidMount() {
    this.viewMongoDbData();
    this.searchBooks("Dav+Pilkey");
  };

  viewMongoDbData = () => {
    API.getBooks()
      .then(res => console.log({res}))
      .catch(err => console.log(err));
  };

  searchBooks = query => {
    API.search(query)
      .then(res => this.setState({ result: res.data }))
      .catch(err => console.log(err));
  };

  handleAddSubmit(volumeInfo) {
    console.log(
      `
      ${volumeInfo.title}
      ${volumeInfo.authors[0]}
      ${volumeInfo.publisher}
      ${volumeInfo.publishedDate}
      ${volumeInfo.industryIdentifiers[0].identifier}
      ${volumeInfo.canonicalVolumeLink}
      `
    )
    API.saveBook({
      title: volumeInfo.title,
      author: volumeInfo.authors[0],
      publisher: volumeInfo.publisher,
      publishedDate: volumeInfo.publishedDate,
      isbnLong: volumeInfo.industryIdentifiers[0].identifier,
      googleBookListing: volumeInfo.canonicalVolumeLink
    })
    console.log(volumeInfo)
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
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={"Search for a Book to Begin"}
            >
              {this.state.result ? (
                <BookDetail 
                results={this.state.result.items} 
                onClickAction={this.handleAddSubmit}
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
            <Card heading="Results">
            <List>
                {/* {this.state.books.map(book => ( */}
                  <ListItem>
                    <a href={"/books/URL WILL GO HERE"}>
                      <strong>
                        [TITLE WILL GO HERE] by [AUTHOR WILL GO HERE]
                      </strong>
                    </a>
                    {/* <DeleteBtn /> */}
                  </ListItem>
                {/* ))} */}
              </List>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default BookSearchContainer;
