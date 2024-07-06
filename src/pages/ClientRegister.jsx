// import React, { useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios';

// function ClientRegister() {
//   const navigate = useNavigate();

//   const [firstname, setFirstname] = useState('')
//   const [lastname, setLastname] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [confirmPassword, setConfirmPassword] = useState('')
//   const [country, setCountry] = useState('')
//   const [city, setCity] = useState('')
//   const [phone, setPhone] = useState('')

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     if (password !== confirmPassword) {
//       window.alert('Passwords do not match')
//       return
//     }
//     try {
//       const { data } = await axios.post('/authClient/register', {
//         firstname,
//         lastname,
//         email,
//         password,
//         country,
//         city,
//         phone
//       });
//       navigate("/client-login");
//     } catch (err) {
//       alert('Invalid Credentials')
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={submitHandler}>
//         <div className='flex items-center justify-center mb-4'>
//           <img src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2" className='h-16 w-16 cursor-pointer' alt="Logo" />
//         </div>
//         <h2 className="text-2xl font-bold mb-6 text-center">Register as a Client</h2>
//         <div className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="First Name"
//             id="firstname"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setFirstname(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             id="lastname"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setLastname(e.target.value)}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             id="confirmpassword"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Country"
//             id="country"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setCountry(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="City"
//             id="city"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setCity(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Phone"
//             id="phone"
//             className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//             onChange={(e) => setPhone(e.target.value)}
//           />
//           <button className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300" type='submit'>
//             Register
//           </button>
//           <p className='text-sm mt-4 text-center'><Link to="/professional-register" className="text-blue-500 hover:underline">Register as professional</Link></p>
//           <p className='text-sm mt-2 text-center'><Link to="/client-login" className="text-blue-500 hover:underline">Already have an account? Login</Link></p>
//         </div>
//       </form>
//     </div>
//   )
// }

// export default ClientRegister

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axiosInstance from '../utils/axiosInstance'; // Assuming you have axiosInstance configured
import { axiosInstance } from '../config';

function ClientRegister() {
  const navigate = useNavigate();

  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      window.alert('Passwords do not match');
      return;
    }
    try {
      const { data } = await axiosInstance.post('/authClient/register', {
        firstname,
        lastname,
        email,
        password,
        country,
        city,
        phone,
      });
      navigate('/client-login');
    } catch (err) {
      alert('Invalid Credentials');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md" onSubmit={submitHandler}>
        <div className="flex items-center justify-center mb-4">
          <img
            src="https://www.zarla.com/images/zarla-s-1x1-2400x2400-20211119-wwrwkmmjcm7hh3wfkvcc.png?crop=1:1,smart&width=250&dpr=2"
            className="h-16 w-16 cursor-pointer"
            alt="Logo"
          />
        </div>
        <h2 className="text-2xl font-bold mb-6 text-center">Register as a Client</h2>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="First Name"
            id="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Last Name"
            id="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Country"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="City"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="text"
            placeholder="Phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="h-12 px-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="w-full bg-blue-500 text-white font-bold py-3 rounded-lg hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
          <p className="text-sm mt-4 text-center">
            <Link to="/professional-register" className="text-blue-500 hover:underline">
              Register as professional
            </Link>
          </p>
          <p className="text-sm mt-2 text-center">
            <Link to="/client-login" className="text-blue-500 hover:underline">
              Already have an account? Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
}

export default ClientRegister;
