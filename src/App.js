import logo from "./logo.svg";
import "./App.css";
import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import Hero from "./components/hero/Hero";
import Header from "./components/Header/Header";
import Trailer from "./components/trailer/Trailer";
import { red } from "@mui/material/colors";
import Reviews from "./components/reviews/Reviews";
import NotFound from "./components/notFound/NotFound";
function App() {
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState([]);
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const res = await api.get("/api/v1/movies");
      console.log(res.data);
      setMovies(res.data);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const getMovieDataById = async (movieId) => {
    try {
      const res = await api.get(`/api/v1/movies/imdb/${movieId}`);
      console.log(res.data);
      setMovie(res.data);
      setReviews(res.data.reviewIds);
    } catch (error) {
      console.error("Error fetching movie data:", error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/home" element={<Home movies={movies} />} />
        <Route path="/trailer/:ytTrailerId" element={<Trailer />} />
        <Route
          path="/reviews/:movieId"
          element={
            <Reviews
              getMovieDataById={getMovieDataById}
              movie={movie}
              reviews={reviews}
              setReviews={setReviews}
            />
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
