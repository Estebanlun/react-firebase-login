import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Register from "./components/Register";
import { AuthProvider } from "./context/authContext";

export default function App() {
  return (
    <div className="bg-slate-300 h-screen text-black flex">
      <AuthProvider>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <ProtectedRoutes>
                <Home />
              </ProtectedRoutes>
            }
          />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}
