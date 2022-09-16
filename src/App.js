import { Routes, Route } from "react-router-dom";
import Event from "./pages/Event";
import Home from "./pages/Home";
import User from "./pages/User";
import About from "./pages/About";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/event" element={<Event />} />
      <Route path="/user" element={<User />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  );
};

export default App;
