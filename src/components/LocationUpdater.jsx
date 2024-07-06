// import React, { useEffect, useContext } from 'react';
// import axios from 'axios';
// import { AuthContext } from '../context/AuthContext';

// const LocationUpdater = () => {
//   const { professional } = useContext(AuthContext);

//   useEffect(() => {
//     const sendLocationUpdate = async (professionalId, latitude, longitude) => {
//       try {
//         await axios.post('/professional/update-location', {
//           professionalId: professional._id,
//           latitude,
//           longitude,
//         });
//         console.log('Location update sent to server');
//       } catch (error) {
//         console.error('Error sending location update:', error);
//       }
//     };

//     const updateLocation = () => {
//       if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             sendLocationUpdate(professional._id, latitude, longitude);
//           },
//           (error) => {
//             console.error('Error getting location:', error);
//           }
//         );
//       } else {
//         console.error('Geolocation is not supported by this browser.');
//       }
//     };

//     if (professional) {
//       updateLocation();
//       const intervalId = setInterval(updateLocation, 60000); // Update location every 60 seconds

//       return () => clearInterval(intervalId); // Clean up interval on component unmount
//     }
//   }, [professional]);

//   return null; // This component doesn't render anything
// };

// export default LocationUpdater;

import React, { useEffect, useContext } from 'react';
import { axiosInstance } from '../config'; // Import your axios instance
import { AuthContext } from '../context/AuthContext';

const LocationUpdater = () => {
  const { professional } = useContext(AuthContext);

  useEffect(() => {
    const sendLocationUpdate = async (professionalId, latitude, longitude) => {
      try {
        await axiosInstance.post('/professional/update-location', {
          professionalId,
          latitude,
          longitude,
        });
        console.log('Location update sent to server');
      } catch (error) {
        console.error('Error sending location update:', error);
      }
    };

    const updateLocation = () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            sendLocationUpdate(professional._id, latitude, longitude);
          },
          (error) => {
            console.error('Error getting location:', error);
          }
        );
      } else {
        console.error('Geolocation is not supported by this browser.');
      }
    };

    if (professional) {
      updateLocation();
      const intervalId = setInterval(updateLocation, 60000); // Update location every 60 seconds

      return () => clearInterval(intervalId); // Clean up interval on component unmount
    }
  }, [professional]);

  return null; // This component doesn't render anything
};

export default LocationUpdater;
