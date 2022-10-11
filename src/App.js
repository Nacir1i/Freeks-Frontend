import { Routes, Route, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { axiosAPI } from "./api/axios";
import UserNavBar from "./components/UserNavBar";
import GuestNavBar from "./components/GuestNavBar";
import Home from "./pages/Home";
import Event from "./pages/event/Event";
import Login from "./pages/user/Login";
import Signup from "./pages/user/Signup";
import Shop from "./pages/Shop";
import Error from "./pages/Error";

export const UserContext = React.createContext();

const deleteAuthToken = () => {
  const authToken = document.cookie["authToken"];
  localStorage.clear();
  if (!authToken) return;
  document.cookie = `authToken=${authToken}; max-age=-69`;
  console.log("cookie deleted");
};

const setAuthToken = (token) => {
  deleteAuthToken();
  if (!token) return;
  document.cookie = `authToken=${token}; max-age=259200`;
  localStorage.setItem("authToken", token);
  console.log("cookie created");
};

const App = () => {
  let [user, setUser] = useState(null);
  const handlUser = (userData) => setUser(userData);
  const navigate = useNavigate();
  const handlNavigate = () => {
    navigate("/");
  };

  useEffect(() => {
    const authToken = localStorage.getItem("authToken");
    if (authToken) {
      const fetchUser = async () => {
        try {
          const response = await axiosAPI({
            method: "get",
            headers: {
              authorization: `Bearer ${authToken}`,
            },
            url: "user/verifyHeaderToken",
          });
          const user = response.data;
          handlUser(user);
        } catch (err) {
          console.error(err);
        }
      };
      fetchUser();
    }
  }, []);

  const login = (user, authToken) => {
    handlUser(user);
    setAuthToken(authToken);
    handlNavigate();
  };
  const logout = () => {
    handlUser(null);
    deleteAuthToken();
    handlNavigate();
  };

  return (
    <>
      <UserContext.Provider value={{ logout, login, user }}>
        {user ? <UserNavBar /> : <GuestNavBar />}
        <div className="h-screen w-sreen text-white">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/events" element={<Event />} />
            <Route path="/user">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route path="/shop" element={<Shop />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
