import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import UserContext from '../UserContext'

const ProtectedRoute = ({ children }) => {
  const { loggedInUser } = useContext(UserContext)

  if (!loggedInUser) {
    return <Navigate to="/login" />
  }

  return children
}

export default ProtectedRoute
