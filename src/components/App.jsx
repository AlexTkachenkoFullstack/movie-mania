import { AppContainer } from "./App.styled";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
export const App = () => {
  return (
    <AppContainer>
      <Routes>
            <Route path="/" element={<Home/>} />
           <Route path="movies" element={<Movies />} />
           <Route path="movies/:id" element={<MovieDetails/>} />

      </Routes>
      


    </AppContainer>
  );
};

