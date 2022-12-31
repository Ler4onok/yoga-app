import React from "react";
// router
import { Routes, Route, Navigate } from "react-router-dom";
// components
import { ProtectedRoute } from "./auth/ProtectedRoute";
// pages
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/AboutUs";
import { Events } from "./pages/events/Events";
import { Profile } from "./pages/profile/Profile";
// auth pages
import { Login } from "./auth/Login";
import { Register } from "./auth/Register";

/**
 * Routes handling
 */
// todo: add not found
export const useRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
                path="/"
                exact
                element={
                    <ProtectedRoute>
                        <Home />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about-us"
                exact
                element={
                    <ProtectedRoute>
                        <AboutUs />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/events"
                exact
                element={
                    <ProtectedRoute>
                        <Events />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/profile"
                exact
                element={
                    <ProtectedRoute>
                        <Profile />
                    </ProtectedRoute>
                }
            />

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
