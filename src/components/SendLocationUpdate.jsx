// // sendLocationUpdate.js
// import axios from 'axios';

// const sendLocationUpdate = async (professionalId, latitude, longitude) => {
//     try {
//         await axios.post('/professional/update-location', {
//             professionalId,
//             latitude,
//             longitude
//         });
//         console.log('Location update sent to server');
//     } catch (error) {
//         console.error('Error sending location update:', error);
//     }
// };

// export default sendLocationUpdate;

// import { axiosInstance } from './axiosInstance'; // Import your axios instance
import { axiosInstance } from "../config";

const sendLocationUpdate = async (professionalId, latitude, longitude) => {
    try {
        await axiosInstance.post('/professional/update-location', {
            professionalId,
            latitude,
            longitude
        });
        console.log('Location update sent to server');
    } catch (error) {
        console.error('Error sending location update:', error);
    }
};

export default sendLocationUpdate;
