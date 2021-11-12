import axios from "axios";

const instance = axios.create({
  baseURL: "https://posist-harshtanwar.herokuapp.com/",
});

export default instance;