import axios from "axios";
const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyBvrAqrUn3DQqWapuse08m421Df1ZU5ZcU";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKEY);
  }
};
