import React from "react";
// router
import { Routes, Route, Navigate } from "react-router-dom";
// components
import { ProtectedRoute } from "./auth/ProtectedRoute";
// pages
import { HomePage } from "./pages/HomePage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { Events } from "./pages/Events";
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
                        <HomePage />
                    </ProtectedRoute>
                }
            />
            <Route
                path="/about-us"
                exact
                element={
                    <ProtectedRoute>
                        <AboutUsPage />
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

            <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
    );
};
