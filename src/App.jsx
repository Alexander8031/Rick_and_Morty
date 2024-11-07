import { Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <>
      <Button type="primary" onClick={() => console.log("Check")}>
        LOAD MORE
      </Button>
      <Button type="secondary" onClick={() => console.log("CheckOne")}>
        Characters
      </Button>
      <Button type="secondary" onClick={() => console.log("CheckTwo")}>
        Locations
      </Button>
      <Button type="secondary" onClick={() => console.log("CheckThree")}>
        Episodes
      </Button>
      {/* <Routes>
        <Route path="/" element={<Layout />}>
          {<Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="input" element={<Input />} /> }
        </Route>
      </Routes> */}
    </>
  );
}

export default App;
