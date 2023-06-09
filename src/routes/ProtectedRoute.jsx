import React from 'react'
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}) {
    const user=JSON.parse(localStorage.getItem("auth"))||null
    return user ? <>{children}</> : <Navigate to="/login" />
}
