import axios from "axios";

const api = {};
export default api;

api.getReviews = axios({
  method: "get",
  url: "http://localhost:9090/api/reviews",
});
