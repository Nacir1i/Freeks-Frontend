import { Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
import Event from "./pages/event/Event";
import Home from "./pages/Home";
import User from "./pages/user/Profile";
import About from "./pages/About";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="bodyContainer flex-center">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Event />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
