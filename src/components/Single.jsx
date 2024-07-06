// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { AuthContext } from "../context/AuthContext";
// import { useNavigate } from "react-router-dom";

// function Single({ info, showState }) {
//   const [professional, setProfessional] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [existingRequest, setExistingRequest] = useState(null);
//   const [requestId, setRequestId] = useState(null);
//   const [show, setShow] = showState;
//   const { user } = useContext(AuthContext);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const getProfessional = async () => {
//       try {
//         const res = await axios.get(`/professional/${info}`);
//         setProfessional(res.data);
//       } catch (err) {
//         console.error("Error fetching professional:", err);
//       }
//     };
//     getProfessional();

//     return () => {
//       setExistingRequest(null);
//     };
//   }, [info]);

//   useEffect(() => {
//     const checkExistingRequest = async () => {
//       try {
//         const response = await axios.get(
//           `/requests?clientId=${user._id}&professionalId=${info}&status=pending&status=accepted`
//         );
//         if (response.data.length > 0) {
//           setExistingRequest(response.data[0]);
//           setRequestId(response.data[0]._id);
//           console.log("Existing Request:", response.data[0]);
//         } else {
//           setExistingRequest(null);
//           setRequestId(null);
//         }
//       } catch (error) {
//         console.error("Error checking existing request:", error);
//         setError("Error checking existing request. Please try again later.");
//       }
//     };
//     checkExistingRequest();

//     return () => {
//       setExistingRequest(null);
//     };
//   }, [user._id, info]);

//   useEffect(() => {
//     const checkCompletedRequest = async () => {
//       try {
//         const response = await axios.post("/requests/check-completed-request", {
//           clientId: user._id,
//         });
//         console.log("Check Completed Request Response:", response);

//         if (
//           response.status === 400 ||
//           response.data.message === "You have an outstanding payment to be made"
//         ) {
//           // Redirect to the payment page with the request ID
//           const requestId = response.data.requestId;
//           window.location.href = `/pay/${requestId}`; // Adjust to your payment page route
//         }
//       } catch (error) {
//         console.error("Error checking completed request:", error);
//         if (error.response && error.response.status === 400) {
//           // Redirect to the payment page
//           const requestId = error.response.data.requestId;
//           window.location.href = `/pay/${requestId}`; // Adjust to your payment page route
//         } else {
//           setError("Error checking completed request. Please try again later.");
//         }
//       }
//     };
//     checkCompletedRequest();
//   }, [user._id, navigate]);

//   const handleSubmit = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.post("/requests/", {
//         clientId: user._id,
//         client: user.firstname + " " + user.lastname,
//         professionalId: info,
//         professional: professional.firstname + " " + professional.lastname,
//       });

//       setLoading(false);
//       setError(null);
//       setExistingRequest(response.data);
//       setRequestId(response.data._id);
//     } catch (error) {
//       console.error("Error creating request:", error);
//       setLoading(false);
//       if (error.response && error.response.status === 400) {
//         // Redirect to the payment page or show a message
//         window.location.href = "/payment-page"; // Adjust to your payment page route
//       } else {
//         setError("Error creating request. Please try again later.");
//       }
//     }
//   };

//   const cancelRequest = async () => {
//     try {
//       await axios.put(`/requests/cancel/${requestId}`);
//       setExistingRequest(null);
//       setRequestId(null);
//     } catch (error) {
//       console.error("Error canceling request:", error);
//       setError("Error canceling request. Please try again later.");
//     }
//   };

//   return (
//     <>
//       <div className="w-full max-w-4xl p-1 border-2 border-solid border-black mx-auto bg-white rounded-lg shadow-lg">
//         <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
//           <div className="flex items-start md:items-center">
//             <img
//               src={professional?.profilePicture}
//               className="w-24 h-28 m-2 object-cover rounded-md"
//               alt={`${professional?.firstname} ${professional?.lastname}`}
//             />
//             <div className="flex flex-col items-start justify-center m-2">
//               <h3 className="text-sm m-0.5 font-bold md:text-lg">
//                 {professional?.firstname} {professional?.lastname}
//               </h3>
//               <h3 className="text-sm m-0.5 font-semibold md:text-lg text-gray-700">
//                 {professional?.profession}
//               </h3>
//               <h3 className="text-sm m-0.5 md:text-base text-gray-500">
//                 4a Davies Street off University Lagos
//               </h3>
//               <h3 className="text-sm m-0.5 md:text-base text-yellow-500">
//                 ⭐⭐⭐⭐⭐
//               </h3>
//               {existingRequest ? (
//                 <button
//                   className="bg-red-500 text-white rounded-md h-8 px-4 mt-2 md:mt-4 md:h-12 md:px-6 hover:bg-red-600 transition duration-300 ease-in-out"
//                   onClick={cancelRequest}
//                 >
//                   Cancel
//                 </button>
//               ) : (
//                 <button
//                   className="bg-orange-500 text-white rounded-md h-8 px-4 mt-2 md:mt-4 md:h-12 md:px-6 hover:bg-orange-600 transition duration-300 ease-in-out"
//                   onClick={handleSubmit}
//                 >
//                   Request
//                 </button>
//               )}
//             </div>
//           </div>
//           <CloseIcon
//             onClick={() => setShow(false)}
//             className="cursor-pointer mt-2 md:mt-0 absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
//           />
//         </div>
//         {error && <p className="text-red-500 mt-2">{error}</p>}
//       </div>
//     </>
//   );
// }

// export default Single;


import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
// import { axiosInstance } from "../axiosInstance"; // Import your axios instance
import { axiosInstance } from "../config";

function Single({ info, showState }) {
  const [professional, setProfessional] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [existingRequest, setExistingRequest] = useState(null);
  const [requestId, setRequestId] = useState(null);
  const [show, setShow] = showState;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    const getProfessional = async () => {
      try {
        const res = await axiosInstance.get(`/professional/${info}`);
        setProfessional(res.data);
      } catch (err) {
        console.error("Error fetching professional:", err);
      }
    };
    getProfessional();

    return () => {
      setExistingRequest(null);
    };
  }, [info]);

  useEffect(() => {
    const checkExistingRequest = async () => {
      try {
        const response = await axiosInstance.get(
          `/requests?clientId=${user._id}&professionalId=${info}&status=pending&status=accepted`
        );
        if (response.data.length > 0) {
          setExistingRequest(response.data[0]);
          setRequestId(response.data[0]._id);
          console.log("Existing Request:", response.data[0]);
        } else {
          setExistingRequest(null);
          setRequestId(null);
        }
      } catch (error) {
        console.error("Error checking existing request:", error);
        setError("Error checking existing request. Please try again later.");
      }
    };
    checkExistingRequest();

    return () => {
      setExistingRequest(null);
    };
  }, [user._id, info]);

  useEffect(() => {
    const checkCompletedRequest = async () => {
      try {
        const response = await axiosInstance.post("/requests/check-completed-request", {
          clientId: user._id,
        });
        console.log("Check Completed Request Response:", response);

        if (
          response.status === 400 ||
          response.data.message === "You have an outstanding payment to be made"
        ) {
          // Redirect to the payment page with the request ID
          const requestId = response.data.requestId;
          window.location.href = `/pay/${requestId}`; // Adjust to your payment page route
        }
      } catch (error) {
        console.error("Error checking completed request:", error);
        if (error.response && error.response.status === 400) {
          // Redirect to the payment page
          const requestId = error.response.data.requestId;
          window.location.href = `/pay/${requestId}`; // Adjust to your payment page route
        } else {
          setError("Error checking completed request. Please try again later.");
        }
      }
    };
    checkCompletedRequest();
  }, [user._id, navigate]);

  const handleSubmit = async () => {
    try {
      setLoading(true);
      const response = await axiosInstance.post("/requests/", {
        clientId: user._id,
        client: user.firstname + " " + user.lastname,
        professionalId: info,
        professional: professional.firstname + " " + professional.lastname,
      });

      setLoading(false);
      setError(null);
      setExistingRequest(response.data);
      setRequestId(response.data._id);
    } catch (error) {
      console.error("Error creating request:", error);
      setLoading(false);
      if (error.response && error.response.status === 400) {
        // Redirect to the payment page or show a message
        window.location.href = "/payment-page"; // Adjust to your payment page route
      } else {
        setError("Error creating request. Please try again later.");
      }
    }
  };

  const cancelRequest = async () => {
    try {
      await axiosInstance.put(`/requests/cancel/${requestId}`);
      setExistingRequest(null);
      setRequestId(null);
    } catch (error) {
      console.error("Error canceling request:", error);
      setError("Error canceling request. Please try again later.");
    }
  };

  return (
    <>
      <div className="w-full max-w-4xl p-1 border-2 border-solid border-black mx-auto bg-white rounded-lg shadow-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
          <div className="flex items-start md:items-center">
            <img
              src={professional?.profilePicture}
              className="w-24 h-28 m-2 object-cover rounded-md"
              alt={`${professional?.firstname} ${professional?.lastname}`}
            />
            <div className="flex flex-col items-start justify-center m-2">
              <h3 className="text-sm m-0.5 font-bold md:text-lg">
                {professional?.firstname} {professional?.lastname}
              </h3>
              <h3 className="text-sm m-0.5 font-semibold md:text-lg text-gray-700">
                {professional?.profession}
              </h3>
              <h3 className="text-sm m-0.5 md:text-base text-gray-500">
                4a Davies Street off University Lagos
              </h3>
              <h3 className="text-sm m-0.5 md:text-base text-yellow-500">
                ⭐⭐⭐⭐⭐
              </h3>
              {existingRequest ? (
                <button
                  className="bg-red-500 text-white rounded-md h-8 px-4 mt-2 md:mt-4 md:h-12 md:px-6 hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={cancelRequest}
                >
                  Cancel
                </button>
              ) : (
                <button
                  className="bg-orange-500 text-white rounded-md h-8 px-4 mt-2 md:mt-4 md:h-12 md:px-6 hover:bg-orange-600 transition duration-300 ease-in-out"
                  onClick={handleSubmit}
                >
                  Request
                </button>
              )}
            </div>
          </div>
          <CloseIcon
            onClick={() => setShow(false)}
            className="cursor-pointer mt-2 md:mt-0 absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
          />
        </div>
        {error && <p className="text-red-500 mt-2">{error}</p>}
      </div>
    </>
  );
}

export default Single;
