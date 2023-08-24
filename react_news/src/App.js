import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Container from "./Components/container/Container";
import HomePage from "./Components/homepage/HomePage";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route
            exact path="/"
            element={
              <Container>
                <HomePage />
              </Container>
            }></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
