import { Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import UserNavBar from "./components/UserNavBar";
import GuestNavBar from "./components/GuestNavBar";
import Event from "./pages/event/Event";
import Home from "./pages/Home";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Profile from "./pages/user/Profile";
import About from "./pages/About";
import Shop from "./pages/Shop";

export const UserContext = React.createContext();

const setCookie = (token) => {
  if (!token) return;
  document.cookie = `authToken=${token}; max-age=86400`;
  console.log("cookie created");
};

const deleteCookie = () => {
  const authToken = document.cookie["authToken"];
  if (!authToken) return;
  document.cookie = `authToken=${authToken}; max-age=-69`;
  console.log("cookie deleted");
};

const App = () => {
  let [user, setUser] = useState(() => null);
  let [username, setUsername] = useState(() => null);
  let [email, setEmail] = useState(() => null);
  let [password, setPassowrd] = useState(() => null);

  const handlUser = (userData) =>
    setUser(() => {
      user = userData;
    });
  const handlUsername = (event) => {
    setUsername(() => event.target.value);
  };
  const handlEmail = (event) => {
    setEmail(() => event.target.value);
  };
  const handlPassword = (event) => {
    setPassowrd(() => event.target.value);
  };

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
      <UserContext.Provider
        value={{
          logout,
          login,
          handlUsername,
          username,
          handlEmail,
          email,
          handlPassword,
          password,
        }}
      >
        {user ? <UserNavBar /> : <GuestNavBar />}
        <div className="bodyContainer flex-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/user">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route path="profile" element={<Profile />} />
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
