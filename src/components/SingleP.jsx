
// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import CloseIcon from "@mui/icons-material/Close";
// import { Link } from "react-router-dom";

// function SingleP({ clientId, requestId, showState }) {
//   const [client, setClient] = useState();
//   const [request, setRequest] = useState();
//   const [show, setShow] = showState;

//   useEffect(() => {
//     const getClient = async () => {
//       try {
//         const res = await axios.get(`/client/${clientId}`);
//         setClient(res.data);
//       } catch (err) {}
//     };
//     getClient();
//   }, [clientId, client]);

//   useEffect(() => {
//     const getRequest = async () => {
//       try {
//         const res = await axios.get(`/requests/${requestId}`);
//         setRequest(res.data);
//       } catch (err) {}
//     };
//     getRequest();
//   }, [requestId, request]);

//   const acceptRequest = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/requests/${requestId}/${clientId}`);
//     } catch (err) {}
//   };

//   const denyRequest = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/requests/deny/${requestId}/${clientId}`);
//     } catch (err) {}
//   };

//   const cancelRequest = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/requests/cancel/${requestId}`);
//     } catch (err) {}
//   };

//   const completeRequest = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.put(`/requests/complete/${requestId}`);
//     } catch (err) {}
//   };

//   return (
//     <div className="w-full max-w-4xl p-4 border-2 border-solid border-black mx-auto bg-white rounded-lg shadow-lg">
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
//         <div className="flex items-start md:items-center">
//           <img
//             src={client?.profilePicture}
//             className="w-24 h-28 m-2 object-cover rounded-md"
//             alt={`${client?.firstname} ${client?.lastname}`}
//           />
//           <div className="flex flex-col items-start justify-center m-2">
//             <h3 className="text-sm m-0.5 font-bold md:text-lg">
//               {client?.firstname} {client?.lastname}
//             </h3>
//             <h3 className="text-sm m-0.5 font-semibold md:text-lg text-gray-700">
//               {client?.profession}
//             </h3>
//             <h3 className="text-sm m-0.5 md:text-base text-gray-500">
//               4a Davies Street off University Lagos
//             </h3>
//             <h3 className="text-sm m-0.5 md:text-base text-yellow-500">⭐⭐⭐⭐</h3>

//             {request?.status === "accepted" && (
//               <div className="flex mt-2 md:mt-4 space-x-4">
//                 <button
//                   className="bg-red-500 text-white rounded-md h-8 px-4 hover:bg-red-600 transition duration-300 ease-in-out"
//                   onClick={cancelRequest}
//                 >
//                   Cancel
//                 </button>

//                 <button
//                   className="bg-green-500 text-white rounded-md h-8 px-4 hover:bg-green-600 transition duration-300 ease-in-out"
//                   onClick={completeRequest}
//                 >
//                   <Link to={`/completion-form/${requestId}`} className="text-white">
//                     Completed
//                   </Link>
//                 </button>
//               </div>
//             )}

//             {request?.status === "pending" && (
//               <div className="flex mt-2 md:mt-4 space-x-4">
//                 <button
//                   className="bg-orange-500 text-white rounded-md h-8 px-4 hover:bg-orange-600 transition duration-300 ease-in-out"
//                   onClick={acceptRequest}
//                 >
//                   Accept
//                 </button>

//                 <button
//                   className="bg-red-500 text-white rounded-md h-8 px-4 hover:bg-red-600 transition duration-300 ease-in-out"
//                   onClick={denyRequest}
//                 >
//                   Deny
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//         <CloseIcon
//           onClick={() => setShow(false)}
//           className="cursor-pointer mt-2 md:mt-0 absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
//         />
//       </div>
//     </div>
//   );
// }

// export default SingleP;

import axios from "axios";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from "react-router-dom";
// import { axiosInstance } from "../axiosInstance"; // Import your axios instance
import { axiosInstance } from "../config";

function SingleP({ clientId, requestId, showState }) {
  const [client, setClient] = useState(null);
  const [request, setRequest] = useState(null);
  const [show, setShow] = showState;

  useEffect(() => {
    const getClient = async () => {
      try {
        const res = await axiosInstance.get(`/client/${clientId}`);
        setClient(res.data);
      } catch (err) {
        console.error("Error fetching client:", err);
      }
    };
    if (clientId) {
      getClient();
    }
  }, [clientId]);

  useEffect(() => {
    const getRequest = async () => {
      try {
        const res = await axiosInstance.get(`/requests/${requestId}`);
        setRequest(res.data);
      } catch (err) {
        console.error("Error fetching request:", err);
      }
    };
    if (requestId) {
      getRequest();
    }
  }, [requestId]);

  const acceptRequest = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/requests/${requestId}/${clientId}`);
      // Optionally update request status locally
      setRequest({ ...request, status: "accepted" });
    } catch (err) {
      console.error("Error accepting request:", err);
    }
  };

  const denyRequest = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/requests/deny/${requestId}/${clientId}`);
      // Optionally update request status locally
      setRequest({ ...request, status: "denied" });
    } catch (err) {
      console.error("Error denying request:", err);
    }
  };

  const cancelRequest = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/requests/cancel/${requestId}`);
      // Optionally update request status locally
      setRequest({ ...request, status: "canceled" });
    } catch (err) {
      console.error("Error canceling request:", err);
    }
  };

  const completeRequest = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.put(`/requests/complete/${requestId}`);
      // Optionally update request status locally
      setRequest({ ...request, status: "completed" });
    } catch (err) {
      console.error("Error completing request:", err);
    }
  };

  return (
    <div className="w-full max-w-4xl p-4 border-2 border-solid border-black mx-auto bg-white rounded-lg shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center relative">
        <div className="flex items-start md:items-center">
          <img
            src={client?.profilePicture}
            className="w-24 h-28 m-2 object-cover rounded-md"
            alt={`${client?.firstname} ${client?.lastname}`}
          />
          <div className="flex flex-col items-start justify-center m-2">
            <h3 className="text-sm m-0.5 font-bold md:text-lg">
              {client?.firstname} {client?.lastname}
            </h3>
            <h3 className="text-sm m-0.5 font-semibold md:text-lg text-gray-700">
              {client?.profession}
            </h3>
            <h3 className="text-sm m-0.5 md:text-base text-gray-500">
              4a Davies Street off University Lagos
            </h3>
            <h3 className="text-sm m-0.5 md:text-base text-yellow-500">⭐⭐⭐⭐</h3>

            {request?.status === "accepted" && (
              <div className="flex mt-2 md:mt-4 space-x-4">
                <button
                  className="bg-red-500 text-white rounded-md h-8 px-4 hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={cancelRequest}
                >
                  Cancel
                </button>

                <button
                  className="bg-green-500 text-white rounded-md h-8 px-4 hover:bg-green-600 transition duration-300 ease-in-out"
                  onClick={completeRequest}
                >
                  <Link to={`/completion-form/${requestId}`} className="text-white">
                    Completed
                  </Link>
                </button>
              </div>
            )}

            {request?.status === "pending" && (
              <div className="flex mt-2 md:mt-4 space-x-4">
                <button
                  className="bg-orange-500 text-white rounded-md h-8 px-4 hover:bg-orange-600 transition duration-300 ease-in-out"
                  onClick={acceptRequest}
                >
                  Accept
                </button>

                <button
                  className="bg-red-500 text-white rounded-md h-8 px-4 hover:bg-red-600 transition duration-300 ease-in-out"
                  onClick={denyRequest}
                >
                  Deny
                </button>
              </div>
            )}
          </div>
        </div>
        <CloseIcon
          onClick={() => setShow(false)}
          className="cursor-pointer mt-2 md:mt-0 absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default SingleP;
