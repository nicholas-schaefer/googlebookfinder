import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const AUTHORSEARCH = "inauthor:"
const ORDERING = "&orderBy=newest"
const MAXRESULTS = "&maxResults=40"
const APIKEY = "&key=AIzaSyBvrAqrUn3DQqWapuse08m421Df1ZU5ZcU";

export default {
  search: function(query) {
    return axios.get(`${BASEURL}${AUTHORSEARCH}${query}${ORDERING}${MAXRESULTS}${APIKEY}`);
  }
};
