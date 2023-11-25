import React from "react";
import { useAuth } from "./context/authContext.jsx";
import { Navigate, Outlet } from "react-router-dom";
export function ProtectedRoute() {
  const { loading, isAuthenticated } = useAuth();

  if (loading) return <h1>loading...</h1>;

  if (!loading && !isAuthenticated) return <Navigate to="/login" replace />;

  return <Outlet />;
}
