import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <span>
        <Link to="/">Home</Link>
      </span>
      <span>
        <Link to="/reviews">Reviews</Link>
      </span>
      <span>
        <Link to="/categories">Categories</Link>
      </span>
    </nav>
  );
}
