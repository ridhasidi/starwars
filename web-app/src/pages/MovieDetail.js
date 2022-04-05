import { useLocation } from "react-router-dom";
import MoviePoster from "../components/MoviePosters";
import { swapDate } from "../helpers/swapDate";

export default function MovieDetail() {
  const { state } = useLocation();

  // console.log(state.characters);
  return (
    <section className="w-full bg-gray-900 min-h-screen justify-center">
      <div className="pt-5 pb-3 flex justify-center">
        <div className="mb-6">
          <h1 className="text-center text-amber-400 pt-4 mt-6 mb-2 text-4xl font-semibold">{state.title}</h1>
          <p className="text-center text-amber-200 text-sm">Release date: {swapDate(state["release_date"])}</p>
          <p className="text-center text-amber-200  text-sm">Producer(s): {state.producer}</p>
          <p className="text-center text-amber-200">Director: {state.director}</p>
        </div>
      </div>
      <div className="flex w-full justify-center px-3 ">
        <div className="mx-2">
          <MoviePoster title={state.title} />
        </div>
        <div className="mx-2 md:w-1/2 lg:w-1/3">
          <p className="text-amber-100 text-lg">{state["opening_crawl"]}</p>
        </div>
      </div>
    </section>
  );
}
