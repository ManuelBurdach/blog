import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* NAV */}
        <Nav />
        {/* HEADER */}
        <Header />
        {/* MAIN */}
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
