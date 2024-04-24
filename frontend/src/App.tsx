import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Signup } from "./page/Signup";
import { Signin } from "./page/Signin";
import { Blog } from "./page/Blog";
import { Blogs } from "./page/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Signin" element={<Signin />}></Route>
          <Route path="/blog/:id" element={<Blog />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
