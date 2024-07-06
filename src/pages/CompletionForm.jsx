// import React, { useState } from 'react';
// import axios from 'axios';
// import { Navigate, redirect, useLocation, useNavigate } from 'react-router-dom';

// const CompletionForm = ({ requestId }) => {
//   const [formData, setFormData] = useState({
//     amount: '',
//     description: ''
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);

//   const navigate = useNavigate();
//   const sitelocation = useLocation();
//   const id = sitelocation.pathname.split("/")[2];

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(null);

//     try {
//       const response = await axios.put(`/requests/complete/${id}`, formData);
//       setSuccess('Request completed successfully');
//       console.log('Response Data:', response.data);
// 	  navigate("/professional-home")
//     } catch (err) {
//       setError('An error occurred while completing the request.');
//       console.error(err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
//         <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Completion Form</h2>

//         <div className="mb-4">
//           <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-700">Amount</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={formData.amount}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             required
//           />
//         </div>

//         <div className="mb-6">
//           <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Description</label>
//           <textarea
//             id="description"
//             name="description"
//             value={formData.description}
//             onChange={handleChange}
//             className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             rows="4"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           disabled={loading}
//         >
//           {loading ? 'Submitting...' : 'Submit'}
//         </button>

//         {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
//         {success && <p className="mt-4 text-sm text-green-600">{success}</p>}
//       </form>
//     </div>
//   );
// };

// export default CompletionForm;


import React, { useState } from 'react';
// import axiosInstance from '../utils/axiosInstance'; // Assuming you have axiosInstance configured
import { axiosInstance } from '../config';
import { useLocation, useNavigate } from 'react-router-dom';

const CompletionForm = ({ requestId }) => {
  const [formData, setFormData] = useState({
    amount: '',
    description: ''
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const navigate = useNavigate();
  const sitelocation = useLocation();
  const id = sitelocation.pathname.split("/")[2];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const response = await axiosInstance.put(`/requests/complete/${id}`, formData);
      setSuccess('Request completed successfully');
      console.log('Response Data:', response.data);
      navigate("/professional-home");
    } catch (err) {
      setError('An error occurred while completing the request.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="w-full max-w-sm p-8 bg-white rounded-lg shadow-md">
        <h2 className="mb-6 text-2xl font-semibold text-center text-gray-800">Completion Form</h2>

        <div className="mb-4">
          <label htmlFor="amount" className="block mb-2 text-sm font-medium text-gray-700">Amount</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>

        <div className="mb-6">
          <label htmlFor="description" className="block mb-2 text-sm font-medium text-gray-700">Description</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            rows="4"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          disabled={loading}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        {error && <p className="mt-4 text-sm text-red-600">{error}</p>}
        {success && <p className="mt-4 text-sm text-green-600">{success}</p>}
      </form>
    </div>
  );
};

export default CompletionForm;
