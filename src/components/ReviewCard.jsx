import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";
import likeIcon from "../assets/like.svg";
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

const mapCategoryToColor = {
  strategy: "red",
  dexterity: "lightblue",
};

export default function ReviewCard({ review }) {
  const categoryColor = mapCategoryToColor[review.category];

  return (
    <div className="review-card">
      <img
        className="review-img"
        src={review.review_img_url}
        alt={review.title}
      />
      <div className="review-card-head">
        <span
          className="review-card-category"
          style={{ background: categoryColor ?? "gray" }}
        >
          {review.category}
        </span>
        <h1>{review.title}</h1>
        <h2>Designed by {review.designer}</h2>
      </div>
      <div className="review-card-body">
        <div>
          Reviewed By <strong>{review.owner}</strong>
          <span> {timeAgo.format(new Date(review.created_at))}</span>
        </div>

        <p>{review.review_body}</p>
        <div className="review-card-tail">
          <span className="review-likes">
            <button className="iconButton">
              <img className="icon" src={likeIcon} alt="Like button."></img>
            </button>
            <span> {review.votes}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
