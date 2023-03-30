import "./App.css";
import Header from "./components/header/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./pages/home/home";
import Admin from "./pages/admin/admin";
import PostDetail from "./pages/postDetail/postDetail";
import Footer from "./components/footer/footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* NAV */}
        <Nav />
        {/* HEADER */}

        <Routes>
          <Route path="/" element={<Header title="Blog" />}></Route>
          <Route path="/admin" element={<Header title="Adminpanel" />}></Route>
          <Route path="/*" element=""></Route>
        </Routes>
        {/* MAIN */}
        <main>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/post/:id" element={<PostDetail />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
