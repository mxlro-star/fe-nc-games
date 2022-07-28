import "./App.css";

import Header from "./components/Header";

import Home from "./components/Home";
import Categories from "./components/Categories";
import Navigation from "./components/Navigation";
import AllReviews from "./components/AllReviews";

import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Navigation />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/reviews" element={<AllReviews />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
