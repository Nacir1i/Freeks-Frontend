import React, { useState, useEffect, lazy, Suspense } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { axiosAPI } from "./api/axios";
import UserNavBar from "./components/UserNavBar";
import GuestNavBar from "./components/GuestNavBar";
import Footer from "./components/Footer";
import Loading from "./components/Loading";
import Home from "./pages/Home";
const Event = lazy(() => import("./pages/event/Event"));
const Login = lazy(() => import("./pages/user/Login"));
const Signup = lazy(() => import("./pages/user/Signup"));
const Shop = lazy(() => import("./pages/Shop"));
const Error = lazy(() => import("./pages/Error"));

export const UserContext = React.createContext();

const deleteAuthToken = () => {
  const authToken = document.cookie["authToken"];
  localStorage.clear();
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
      console.log("test");
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
            <Route
              path="/events"
              element={
                <Suspense fallback={<Loading />}>
                  <Event />
                </Suspense>
              }
            />
            <Route path="/user">
              <Route
                path="login"
                element={
                  <Suspense fallback={<Loading />}>
                    <Login />
                  </Suspense>
                }
              />
              <Route
                path="signup"
                element={
                  <Suspense fallback={<Loading />}>
                    <Signup />
                  </Suspense>
                }
              />
            </Route>
            <Route
              path="/shop"
              element={
                <Suspense fallback={<Loading />}>
                  <Shop />
                </Suspense>
              }
            />
            <Route
              path="*"
              element={
                <Suspense fallback={<Loading />}>
                  <Error />
                </Suspense>
              }
            />
          </Routes>
          <Footer />
        </div>
      </UserContext.Provider>
    </>
  );
};

export default App;
