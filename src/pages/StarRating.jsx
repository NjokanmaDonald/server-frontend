// import React, { useState } from "react";
// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";

// const StarRating = () => {
//   const [rating, setRating] = useState(0);
//   const sitelocation = useLocation();
//   const id = sitelocation.pathname.split("/")[2];
//   const navigate = useNavigate();

//   const handleRatingChange = (value) => {
//     setRating(value);
//   };

//   const handleRatingSubmit = async () => {
//     try {
//       const response = await axios.post(`/professional/${id}/rate`, { rating });
//       console.log("Rating submitted:", response.data);
//       navigate("/");
//       // Optionally, update UI or show success message
//     } catch (error) {
//       console.error("Error submitting rating:", error.response.data);
//       // Handle error: show error message to user
//     }
//   };

//   const renderStars = () => {
//     const stars = [];
//     for (let i = 1; i <= 5; i++) {
//       stars.push(
//         <span
//           key={i}
//           className={`cursor-pointer text-4xl ${
//             i <= rating ? "text-yellow-500" : "text-gray-300"
//           } transition-colors duration-300`}
//           onClick={() => handleRatingChange(i)}
//         >
//           ★
//         </span>
//       );
//     }
//     return stars;
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
//         <div className="flex mb-4">{renderStars()}</div>
//         <button
//           className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
//           onClick={handleRatingSubmit}
//         >
//           Send
//         </button>
//       </div>
//     </div>
//   );
// };

// export default StarRating;


import React, { useState } from "react";
// import axiosInstance from "../axiosInstance"; // Import axiosInstance
import { axiosInstance } from "../config";
import { useLocation, useNavigate } from "react-router-dom";

const StarRating = () => {
  const [rating, setRating] = useState(0);
  const sitelocation = useLocation();
  const id = sitelocation.pathname.split("/")[2];
  const navigate = useNavigate();

  const handleRatingChange = (value) => {
    setRating(value);
  };

  const handleRatingSubmit = async () => {
    try {
      const response = await axiosInstance.post(`/professional/${id}/rate`, { rating });
      console.log("Rating submitted:", response.data);
      navigate("/");
      // Optionally, update UI or show success message
    } catch (error) {
      console.error("Error submitting rating:", error.response.data);
      // Handle error: show error message to user
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`cursor-pointer text-4xl ${
            i <= rating ? "text-yellow-500" : "text-gray-300"
          } transition-colors duration-300`}
          onClick={() => handleRatingChange(i)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
        <div className="flex mb-4">{renderStars()}</div>
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={handleRatingSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default StarRating;
