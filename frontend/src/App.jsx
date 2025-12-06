import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// general
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import SignUpPage from "./components/SignUp/SignUp";
// route protection
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import RoleRoute from "./components/ProtectedRoute/RoleRoute";
import SelfProtectedRoute from "./components/ProtectedRoute/SelfProtectedRoute";
import MyProfile from "./components/Profiles/MyProfile";
import UserPage from "./components/User/User";
import AdminPage from "./components/User/AdminPage";
import Onboarding from "./components/SignUp/Onboarding";
// error pages
import NotFound from "./components/NotFound/NotFound";
import Unauthorized from "./components/NotFound/Unauthorized";

function App() {
  return (
    <>
      <Router>
        <Header />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} exact />
            <Route path="/sign-up" element={<SignUpPage />} />
            <Route
              path="/profile/:userID"
              element={
                <SelfProtectedRoute>
                  <MyProfile />
                </SelfProtectedRoute>
              }
            />
            <Route
              path="/user"
              element={
                <ProtectedRoute>
                  <UserPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="profile/:adminID/manager"
              element={
                <RoleRoute allowed={["ceo", "manager"]}>
                  <AdminPage />
                </RoleRoute>
              }
            />
            <Route
              path="profile/:ceoID/ceo"
              element={
                <RoleRoute allowed={"ceo"}>
                  <AdminPage />
                </RoleRoute>
              }
            />
            <Route
              path="profile/ceo/newUser"
              element={
                <RoleRoute allowed={"ceo"}>
                  <Onboarding />
                </RoleRoute>
              }
            />
            <Route path="/unauthorized" element={<Unauthorized />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </Router>
    </>
  );
}

export default App;
