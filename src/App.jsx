import Layout from "./components/Layout/Layout.jsx";
import { Route, Routes } from "react-router-dom";
import Characters from "./components/Characters/characters.jsx";
import Locations from "./components/Locations/locations.jsx";
import Episodes from "./components/Episodes/episodes.jsx";
import LocationCharacters from "./components/LocationCharacters/locationCharacters.jsx";
import EpisodesCharacters from "./components/EpisodesCharacters/EpisodesCharacters.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="characters" element={<Characters />} />
          <Route path="locations" element={<Locations />} />
          <Route path="episodes" element={<Episodes />} />
          <Route path="locations/:locationId" element={<LocationCharacters />} />
          <Route path="episodes/:episodesId" element={<EpisodesCharacters />} />
        </Route>
      </Routes>
  );
}

export default App;
