import { useNavigate } from "react-router-dom";

export default function MovieCard({ movie }) {
  // console.log(movie);
  const navigate = useNavigate();
  const clickCard = () => {
    navigate(`movies/${movie.title}`, { state: movie });
  };
  return (
    <div className="w-1/4 bg-gray-100 mr-6 mb-5 ml-6 mt-5 rounded cursor-pointer" onClick={clickCard}>
      <h1>{movie.title}</h1>
      <p>Director: {movie.director}</p>
      <p>Producers: {movie.producer}</p>
      <p>Release date: {movie["release_date"]}</p>
    </div>
  );
}
