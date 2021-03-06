import { Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/HomePage";
import MovieDetail from "./pages/MovieDetail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies/:title" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
