import axios from "axios";

const api = {};
export default api;

api.getReviews = axios({
  method: "get",
  url: "https://games-review-board.herokuapp.com/api/reviews/",
});
