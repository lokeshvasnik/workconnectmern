import { Suspense, lazy } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useState, useEffect } from "react";
import UserContext from "./context/UserContext";
import axios from "axios";
import Loader from "./components/UI/Loader";
import Navbar from "./components/shared/Navbar";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const CreateJobs = lazy(() => import("./pages/CreateJob"));
const Profile = lazy(() => import("./pages/Profile"));
const LoginPage = lazy(() => import("./pages/Login"));
const RegisterPage = lazy(() => import("./pages/Register"));
const EmailPage = lazy(() => import("./pages/EmailPage"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const UploadJobs = lazy(() => import("./pages/UploadJobs"));

import AppLayout from "./components/UI/AppLayout";
const App = () => {
  const [userData, setUserData] = useState({
    token: undefined,
    user: undefined,
  });

  console.log(userData);
  useEffect(() => {
    const checkLoggedIn = async () => {
      let token = localStorage.getItem("auth-token");
      if (token === null) {
        localStorage.setItem("auth-token", "");
        token = "";
      }
      const tokenResponse = await axios.post(
        `${import.meta.env.VITE_API_URL}/tokenIsValid`,
        null,
        { headers: { "x-auth-token": token } },
      );
      if (tokenResponse.data) {
        const userRes = await axios.get("http://localhost:3000/", {
          headers: { "x-auth-token": token },
        });
        setUserData({
          token,
          user: userRes.data,
        });
      }
    };
    checkLoggedIn();
  }, []);

  const handleLogout = () => {
    console.log("Logout");
    // Clear user data from state
    setUserData({
      token: undefined,
      user: undefined,
    });
    // Clear token from localStorage
    localStorage.setItem("auth-token", "");
    // Redirect to the login page
  };

  return (
    <UserContext.Provider value={{ userData, setUserData }}>
      <Router>
        <Navbar handleLogout={handleLogout} />
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Set the root route to Home (landing page) */}
            <Route index element={<Home />} />
            <Route element={<AppLayout />}>
              {/* Define protected pages under /app/ */}
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="uploads" element={<UploadJobs />} />
              <Route path="create" element={<CreateJobs />} />
              <Route path="profile" element={<Profile />} />
            </Route>

            {/* Define non-protected routes */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/email" element={<EmailPage />} />
            <Route path="/forgot" element={<ForgotPassword />} />
            <Route path="/update" element={<UpdatePassword />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Router>
    </UserContext.Provider>
  );
};

export default App;
