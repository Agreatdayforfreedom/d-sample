import { BrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Us from "./pages/Us";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/us" element={<Us />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
