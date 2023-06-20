import { AppContainer } from "./App.styled";
import { Route, Routes } from "react-router-dom";
import SharedLayout from "./SharedLayout";
import Home from "pages/Home";
import Movies from "pages/Movies";
import MovieDetails from "pages/MovieDetails";
import { getMovieReviews } from "services/services";
import Cast from "./Cast";
import Reviews from "./Reviews";
export const App = () => {
  getMovieReviews();
  
  return (
    <AppContainer>
      <Routes>
            <Route path="/" element={<SharedLayout/>}>
                <Route index element={<Home/>} />
                <Route path="movies" element={<Movies />} />
                <Route path="movies/:id" element={<MovieDetails />}>
                    <Route path="cast" element={<Cast/>}/>
                    <Route path="reviews" element={<Reviews/>}/>
                </Route>
            </Route>      
      </Routes>
      


    </AppContainer>
  );
};

