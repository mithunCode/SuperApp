import Selection from "./pages/SelectGenre/Selection.jsx";
import Homepage from "./pages/Homepage.jsx/Homepage.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Selection />} />
        <Route path="/home" element={<Homepage />} />
      </Routes>
    </>
  );
};

export default App;
