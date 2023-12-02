import Selection from "./pages/SelectGenre/Selection.jsx";
import Homepage from "./pages/Homepage.jsx/Homepage.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { Route, Routes } from "react-router-dom";
import Entertainment from "./pages/Entertainment/Entertainment.jsx";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Selection />} />
        <Route path="/home" element={<Homepage />} />
        {/* <Route path="/entertainment" element={<Entertainment />} /> */}
      </Routes>
    </>
  );
};

export default App;
