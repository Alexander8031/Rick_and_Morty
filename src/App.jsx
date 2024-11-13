import Layout from "./components/Layout/Layout.jsx";
import Header from "./components/Header/header.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./components/HOME/home.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="characters" element={<Home />} />
          {/* <Route path="locations" element={<Counter />} />
          <Route path="Episodes" element={<Input />} /> */}
        </Route>
      </Routes>
  );
}

export default App;
