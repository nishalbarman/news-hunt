import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Router } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      {/* <BrowserRouter>
        <Router>
          <Route path="/"></Route>
        </Router>
      </BrowserRouter> */}
    </>
  );
}

export default App;
