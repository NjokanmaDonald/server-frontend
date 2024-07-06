import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Navigate } from 'react-router-dom'

function ProfessionalRoute({children}) {

	const {professional} = useContext(AuthContext)

  return (
	professional ? children : <Navigate to="/client-login"/>
  )
}

export default ProfessionalRoute