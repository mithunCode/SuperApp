import Entertainment from "./pages/Entertainment/Entertainment.jsx";
import Registration from "./pages/Registration/Registration.jsx";
import { Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/select" element={<Entertainment />} />
      </Routes>
    </>
  );
};

export default App;
