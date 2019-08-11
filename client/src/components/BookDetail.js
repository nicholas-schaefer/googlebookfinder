import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      {props.results.map(result => (
        <div key ={result.volumeInfo.industryIdentifiers[0].identifier}>
          <h3>Title: {result.volumeInfo.title}</h3>
          <h3>Author: {result.volumeInfo.authors}</h3>
          <h3>Publisher: {result.volumeInfo.publisher}</h3>
          <h3>Published Date: {result.volumeInfo.publishedDate}</h3>
          <h3>ISBN 13: {result.volumeInfo.industryIdentifiers[0].identifier}</h3>
          <h3><a href={result.volumeInfo.canonicalVolumeLink} target ="blank">More Info</a></h3>
          <span 
            onClick={()=> {props.onClickAction(result.volumeInfo)}}
            className="btn btn-secondary"
            role="button"
            tabIndex="0">
            SAVE ME
          </span>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default BookDetail;


// "industryIdentifiers": [
//   {
//    "type": "ISBN_13",
//    "identifier": "9781338459418"


// title={this.state.result.items[0].volumeInfo.title}
// authors={this.state.result.items[0].volumeInfo.authors[0]}
// publisher={this.state.result.items[0].volumeInfo.publisher}
// publishedDate={this.state.result.items[0].volumeInfo.publishedDate}
// moreInfoLink={this.state.result.items[0].volumeInfo.canonicalVolumeLink}
// imageLink={this.state.result.items[0].volumeInfo.imageLinks.smallThumbnail}