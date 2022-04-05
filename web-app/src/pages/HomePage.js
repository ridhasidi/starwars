import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import { fetchMovies } from "../store/actionCreators/moviesAction";
import ErrorPage from "./ErrorPage";
import LoadingPage from "./LoadingPage";

export default function HomePage() {
  const { movies, loading, error } = useSelector((state) => state.moviesReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  if (loading) {
    return <LoadingPage />;
  }
  if (error) {
    return <ErrorPage />;
  }
  return (
    <section className="w-full bg-gray-900 min-h-screen justify-center">
      <div className="pt-5 pb-3 flex justify-center">
        <Link to={"/"} className="text-center text-amber-400 hover:text-amber-500 p-4 m-6 text-6xl font-semibold">
          Star Wars
        </Link>
      </div>
      <div className="flex w-full flex-wrap justify-center px-3 ">
        {movies.map((e, index) => {
          return <MovieCard key={index} movie={e} />;
        })}
      </div>
    </section>
  );
}
