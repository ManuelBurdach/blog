import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* NAV */}
        <Nav />
        {/* HEADER */}
        <Header />
        {/* MAIN */}
        <Routes>
          <Route path="/" element={<h1>Home</h1>}></Route>
          <Route path="/admin" element={<h1>Admin</h1>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
