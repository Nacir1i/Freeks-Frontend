import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosAPI } from "./api/axios";
import UserNavBar from "./components/UserNavBar";
import GuestNavBar from "./components/GuestNavBar";
import Event from "./pages/event/Event";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import About from "./pages/About";
import Shop from "./pages/Shop";

export const UserContext = React.createContext();

const deleteCookie = () => {
  const authToken = document.cookie["authToken"];
  if (!authToken) return;
  document.cookie = `authToken=${authToken}; max-age=-69`;
  console.log("cookie deleted");
};

const setCookie = (token) => {
  deleteCookie();
  if (!token) return;
  document.cookie = `authToken=${token}; max-age=259200`;
  console.log("cookie created");
};

const App = () => {
  let [user, setUser] = useState(null);
  const handlUser = (userData) => setUser(userData);
  const navigate = useNavigate();

  useEffect(() => {
    const cookie = document.cookie;
    if (!cookie) {
      return;
    }
    const fetchUser = async () => {
      try {
        const response = await axiosAPI({
          method: "get",
          url: "user/verifyToken",
        });
        const user = response.data;
        handlUser(user);
      } catch (err) {
        console.error(err);
      }
    };
    fetchUser();
  }, []);

  useEffect(() => {
    const handlNavigate = () => {
      navigate("/");
    };

    handlNavigate();
  }, [user]);

  const login = (user, authToken) => {
    handlUser(user);
    setCookie(authToken);
    console.log("user : ", user);
  };
  const logout = () => {
    handlUser(null);
    deleteCookie();
  };
  return (
    <>
      <UserContext.Provider value={{ logout, login, user }}>
        {user ? <UserNavBar /> : <GuestNavBar />}
        <div className="h-screen w-sreen text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/user">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/about" element={<About />} />
            <Route path="/shop" element={<Shop />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
