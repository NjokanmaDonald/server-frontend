import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ClientRoute({children}) {

	const {user} = useContext(AuthContext)
  return (
		user ? children : <Navigate to="/client-login"/>
  )
}

export default ClientRoute