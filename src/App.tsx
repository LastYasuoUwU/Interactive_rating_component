import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RatingPage from "./Pages/RatingPage";
import ThankPage from "./Pages/ThankPage";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<RatingPage />} />
          <Route
            path="/ThankYouForRate/:selectedValue"
            element={<ThankPage />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
