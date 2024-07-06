// import React, { useContext, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import { AuthContext } from '../context/AuthContext'
// import axios from 'axios'

// function ProfessionalLogin() {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: '',
//   })

//   const { loading, error, dispatch } = useContext(AuthContext)
//   const navigate = useNavigate()

//   const handleChange = (e) => {
//     setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }))
//   }

//   const handleClick = async (e) => {
//     e.preventDefault()
//     dispatch({ type: 'LOGIN_PROFESSIONAL_START' })
//     try {
//       const res = await axios.post('/authProfessional/login', credentials)
//       dispatch({ type: 'LOGIN_PROFESSIONAL_SUCCESS', payload: res.data.details })
//       navigate('/professional-home')
//     } catch (err) {
//       dispatch({ type: 'LOGIN_PROFESSIONAL_FAILURE', payload: err.response.data })
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
//         <div className="flex items-center justify-center mb-4">
//           <img
//             src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2"
//             className="h-16 w-16 cursor-pointer"
//             alt="Logo"
//           />
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Professional Login</h2>
//         <div className="flex flex-col gap-4">
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             onChange={handleChange}
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             onChange={handleChange}
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//           />
//           <button
//             className={`w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${
//               loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
//             }`}
//             onClick={handleClick}
//             disabled={loading}
//           >
//             {loading ? 'Logging in...' : 'Login'}
//           </button>
//           {error && <span className="text-red-500 text-sm">{error.message}</span>}

//           <p className="text-sm mt-4 text-center">
//             <Link to="/client-login" className="text-blue-500 hover:underline">
//               Login as client
//             </Link>
//           </p>
//           <p className="text-sm mt-2 text-center">
//             <Link to="/professional-register" className="text-blue-500 hover:underline">
//               Don't have an account? Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ProfessionalLogin


import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
// import axiosInstance from '../axiosInstance'; // Import axiosInstance
import { axiosInstance } from '../config';

function ProfessionalLogin() {
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const { loading, error, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_PROFESSIONAL_START' });
    try {
      const res = await axiosInstance.post('/authProfessional/login', credentials); // Using axiosInstance
      dispatch({ type: 'LOGIN_PROFESSIONAL_SUCCESS', payload: res.data.details });
      navigate('/professional-home');
    } catch (err) {
      dispatch({ type: 'LOGIN_PROFESSIONAL_FAILURE', payload: err.response.data });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2"
            className="h-16 w-16 cursor-pointer"
            alt="Logo"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Professional Login</h2>
        <div className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            id="email"
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            onChange={handleChange}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className={`w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300 ${
              loading ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
            }`}
            onClick={handleClick}
            disabled={loading}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
          {error && <span className="text-red-500 text-sm">{error.message}</span>}

          <p className="text-sm mt-4 text-center">
            <Link to="/client-login" className="text-blue-500 hover:underline">
              Login as client
            </Link>
          </p>
          <p className="text-sm mt-2 text-center">
            <Link to="/professional-register" className="text-blue-500 hover:underline">
              Don't have an account? Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfessionalLogin;
