import { useLocation } from "react-router-dom";

export default function MovieDetail() {
  const { state } = useLocation();
  // console.log(state);
  return (
    <section>
      <h1>Movie Detail</h1>
    </section>
  );
}
