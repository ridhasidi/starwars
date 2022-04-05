import { useNavigate } from "react-router-dom";
import MoviePoster from "./MoviePosters";

export default function MovieCard({ movie }) {
  const navigate = useNavigate();
  const clickCard = () => {
    navigate(`movies/${movie.title}`, { state: movie });
  };
  return (
    <div className=" flexw-1/4 mr-6 mb-5 ml-6 mt-5 rounded-lg cursor-pointer items-center" onClick={clickCard}>
      <div className="">
        <MoviePoster title={movie.title} className="w-full rounded overflow-hidden" />
        <h1 className="text-center text-xl my-2 font-bold text-amber-300">{movie.title}</h1>
      </div>
    </div>
  );
}
