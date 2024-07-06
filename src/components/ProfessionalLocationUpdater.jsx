// import React, { useEffect, useState } from "react";
// import axios from "axios";

// function ProfessionalLocationUpdater({ providerId }) {
//   const [latitude, setLatitude] = useState(null);
//   const [longitude, setLongitude] = useState(null);

//   useEffect(() => {
//     const watchId = navigator.geolocation.watchPosition(
//       (position) => {
//         const { latitude, longitude } = position.coords;
//         setLatitude(latitude);
//         setLongitude(longitude);
//         // Send updated location to server
//         sendLocationToServer(providerId, latitude, longitude);
//       },
//       (error) => {
//         console.error("Error getting location:", error);
//       }
//     );

//     return () => {
//       navigator.geolocation.clearWatch(watchId);
//     };
//   }, [providerId]); // Include providerId in the dependency array to re-trigger effect when it changes

//   const sendLocationToServer = async (id, latitude, longitude) => {
//     try {
//       await axios.put(`/professional/${id}/location`, { latitude, longitude });
//       console.log('Location updated successfully');
//     } catch (error) {
//       console.error('Error updating location:', error);
//     }
//   };

//   return (
//     <div>
//       {/* Display or use the latitude and longitude */}
//       Latitude: {latitude}, Longitude: {longitude}
//     </div>
//   );
// }

// export default ProfessionalLocationUpdater;

import React, { useEffect, useState } from "react";
// import { axiosInstance } from "../axiosInstance"; // Import your axios instance
import { axiosInstance } from "../config";

function ProfessionalLocationUpdater({ providerId }) {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useEffect(() => {
    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        // Send updated location to server using axiosInstance
        sendLocationToServer(providerId, latitude, longitude);
      },
      (error) => {
        console.error("Error getting location:", error);
      }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
    };
  }, [providerId]); // Include providerId in the dependency array to re-trigger effect when it changes

  const sendLocationToServer = async (id, latitude, longitude) => {
    try {
      await axiosInstance.put(`/professional/${id}/location`, { latitude, longitude });
      console.log('Location updated successfully');
    } catch (error) {
      console.error('Error updating location:', error);
    }
  };

  return (
    <div>
      {/* Display or use the latitude and longitude */}
      Latitude: {latitude}, Longitude: {longitude}
    </div>
  );
}

export default ProfessionalLocationUpdater;
