import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <section className="w-full bg-neutral-700 min-h-screen justify-center">
      <div className="pt-5 pb-3">
        <Link to={"/"} className="text-amber-400  hover:text-amber-500 p-4 m-6 text-4xl font-semibold">
          Starwars
        </Link>
      </div>
      <div className="flex w-full flex-wrap justify-center px-3 "></div>
    </section>
  );
}
