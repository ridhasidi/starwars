export default function MoviePoster({ title }) {
  if (title === "A New Hope") {
    return (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/en/8/87/StarWarsMoviePoster1977.jpg" alt={title} />
      </>
    );
  }
  if (title === "The Empire Strikes Back") {
    return (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/en/3/3f/The_Empire_Strikes_Back_%281980_film%29.jpg" alt={title} />
      </>
    );
  }
  if (title === "Return of the Jedi") {
    return (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/en/b/b2/ReturnOfTheJediPoster1983.jpg" alt={title} />
      </>
    );
  }
  if (title === "The Phantom Menace") {
    return (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/en/4/40/Star_Wars_Phantom_Menace_poster.jpg" alt={title} />
      </>
    );
  }
  if (title === "Attack of the Clones") {
    return (
      <>
        <img className="w-full h-1/2" src="https://upload.wikimedia.org/wikipedia/en/3/32/Star_Wars_-_Episode_II_Attack_of_the_Clones_%28movie_poster%29.jpg" alt={title} />
      </>
    );
  }
  if (title === "Revenge of the Sith") {
    return (
      <>
        <img src="https://upload.wikimedia.org/wikipedia/en/9/93/Star_Wars_Episode_III_Revenge_of_the_Sith_poster.jpg" alt={title} />
      </>
    );
  }
}
