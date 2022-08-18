import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/home";
import Details from "./components/details/details";
import Popular from "./components/details/popular";
import Info from "./components/details/info";
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:name" element={<Details />} />
        <Route path="/popular/:name" element={<Popular />} />
        <Route path="/info/:name" element={<Info />} />
      </Routes>
    </Router>
  );
};
export default App;
