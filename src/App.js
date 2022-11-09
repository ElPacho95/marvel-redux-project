import Header from "./Main/Header";
import CharacterCards from "./Main/CharacterCards";
import ComicCards from "./Main/ComicCards";
import { Route, Routes } from "react-router-dom";
import Comic from "./Main/Comic";
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<CharacterCards />} />
        <Route path="comics" element={<ComicCards />} />
        <Route path="/comic/:idComic" element={<Comic />} />
      </Routes>
    </div>
  );
};

export default App;
