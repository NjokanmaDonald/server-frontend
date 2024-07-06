// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import { CloudinaryContext, Image } from 'cloudinary-react'

// function ProfessionalRegister() {
//   const navigate = useNavigate()

//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [profession, setProfession] = useState('')
//   const [country, setCountry] = useState('')
//   const [city, setCity] = useState('')
//   const [profilePicture, setProfilePicture] = useState(null)
//   const [phone, setPhone] = useState('')
//   const [profilePictureURL, setProfilePictureURL] = useState('')

//   const handleProfilePictureChange = async (e) => {
//     const file = e.target.files[0]
//     if (file) {
//       try {
//         const formData = new FormData()
//         formData.append('file', file)
//         formData.append('upload_preset', 'upload') // Replace with your upload preset
//         const response = await axios.post('https://api.cloudinary.com/v1_1/personal-projectdonaldnjokanma/image/upload', formData)
//         setProfilePictureURL(response.data.secure_url)
//       } catch (err) {
//         console.error('Error uploading image:', err)
//         alert('Failed to upload image')
//       }
//     }
//   }

//   const submitHandler = async (e) => {
//     e.preventDefault()
//     if (password !== confirmPassword) {
//       window.alert('Passwords do not match')
//       return
//     }
//     try {
//       await axios.post('/authProfessional/register', {
//         firstname,
//         lastname,
//         email,
//         password,
//         profession,
//         country,
//         city,
//         profilePicture: profilePictureURL,
//         phone
//       })
//       navigate('/professional-login')
//     } catch (err) {
//       alert('Invalid Credentials')
//     }
//   }

//   return (
//     <CloudinaryContext cloudName="your-cloud-name">
//       <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//         <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={submitHandler}>
//           <div className="flex items-center justify-center mb-4">
//             <img
//               src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2"
//               className="h-16 w-16 cursor-pointer"
//               alt="Logo"
//             />
//           </div>
//           <h2 className="text-2xl font-bold mb-6 text-center">Register as a Professional</h2>
//           <div className="flex flex-col gap-4">
//             <input
//               type="text"
//               placeholder="First Name"
//               id="firstname"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setFirstname(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="Last Name"
//               id="lastname"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setLastname(e.target.value)}
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               id="email"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               id="password"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               id="confirm-password"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <select
//               id="profession"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setProfession(e.target.value)}
//             >
//               <option value="">Select Profession</option>
//               <option value="Carpentry">Carpentry</option>
//               <option value="Plumbing">Plumbing</option>
//               <option value="Electrician">Electrical Works</option>
//               <option value="Cleaning">Cleaning</option>
//               {/* Add more options as needed */}
//             </select>
//             <input
//               type="text"
//               placeholder="Country"
//               id="country"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setCountry(e.target.value)}
//             />
//             <input
//               type="text"
//               placeholder="City"
//               id="city"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setCity(e.target.value)}
//             />
//             <input
//               type="file"
//               placeholder="Profile Picture"
//               id="profile-picture"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={handleProfilePictureChange}
//             />
//             <input
//               type="text"
//               placeholder="Phone"
//               id="phone"
//               className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onChange={(e) => setPhone(e.target.value)}
//             />
//             <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300" type="submit">
//               Register
//             </button>
//             <p className="text-sm mt-4 text-center">
//               <Link to="/client-register" className="text-blue-500 hover:underline">
//                 Register as client
//               </Link>
//             </p>
//             <p className="text-sm mt-2 text-center">
//               <Link to="/professional-login" className="text-blue-500 hover:underline">
//                 Already have an account? Login
//               </Link>
//             </p>
//           </div>
//         </form>
//       </div>
//     </CloudinaryContext>
//   )
// }

// export default ProfessionalRegister


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
