import React from "react";

function BookDetail(props) {
  return (
    <div className="text-center">
      <img alt={props.title} className="img-fluid" src={props.imageLink} style={{ margin: "0 auto" }} />
      <h3>Title: {props.title}</h3>
      <h3>Authors: {props.authors}</h3>
      <h3>Publisher: {props.publisher}</h3>
      <h3>Published Date: {props.publishedDate}</h3>
      <h3>More Info: {props.moreInfoLink}</h3>
    </div>
  );
}

export default BookDetail;
