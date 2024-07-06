// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import Single from "../components/Single";
// import { useLoadScript } from "@react-google-maps/api";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import {
//   Combobox,
//   ComboboxInput,
//   ComboboxPopover,
//   ComboboxList,
//   ComboboxOption,
// } from "@reach/combobox";
// import "@reach/combobox/styles.css";
// import { useLocation } from "react-router-dom";

// const libraries = ["places"];

// const Workers = () => {
//   const { user } = useContext(AuthContext);
//   const [professional, setProfessional] = useState([]);
//   const [info, setInfo] = useState("");
//   const [show, setShow] = useState(false);
//   const [location, setLocation] = useState({ lat: null, lng: null });
//   const { isLoaded } = useLoadScript({
//     googleMapsApiKey: "AIzaSyBR0QVeS5rmGkPm4bbUEg1pzEaTiIa9cic",
//     libraries: libraries,
//   });

//   const sitelocation = useLocation();
//   const id = sitelocation.pathname.split("/")[2];

//   const handleLocationSelect = async (address) => {
//     const results = await getGeocode({ address });
//     const { lat, lng } = await getLatLng(results[0]);
//     setLocation({ lat, lng });
//   };

//   useEffect(() => {
//     const getProfessionals = async () => {
//       try {
//         let res;
//         if (location.lat && location.lng) {
//           res = await axios.get(`/professional/nearby`, {
//             params: {
//               latitude: location.lat,
//               longitude: location.lng,
//               maxDistance: 10,
//               profession: id, // Add profession to the query params
//             },
//           });
//         } else {
//           res = await axios.get(`/professional`, {
//             params: { profession: id },
//           });
//         }
//         setProfessional(res.data);
//       } catch (err) {
//         console.error("Error fetching professionals:", err);
//       }
//     };
//     getProfessionals();
//   }, [id, location.lat, location.lng]);

//   const PlacesAutoComplete = () => {
//     const {
//       ready,
//       value,
//       setValue,
//       suggestions: { status, data },
//       clearSuggestions,
//     } = usePlacesAutocomplete();

//     const handleSelect = async (address) => {
//       setValue(address, false);
//       clearSuggestions();
//       handleLocationSelect(address);
//     };

//     return (
//       <Combobox onSelect={handleSelect}>
//         <ComboboxInput
//           value={value}
//           onChange={(e) => setValue(e.target.value)}
//           disabled={!ready}
//           placeholder="Enter an address"
//           className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full max-w-md mx-auto sm:max-w-full"
//         />
//         <ComboboxPopover>
//           <ComboboxList>
//             {status === "OK" &&
//               data.map(({ place_id, description }) => (
//                 <ComboboxOption key={place_id} value={description} />
//               ))}
//           </ComboboxList>
//         </ComboboxPopover>
//       </Combobox>
//     );
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="flex items-center justify-center mt-6">
//         <div className="w-full px-4 sm:max-w-4xl mx-auto">
//           {!isLoaded ? (
//             <h3 className="text-center text-gray-500">Loading...</h3>
//           ) : (
//             <PlacesAutoComplete />
//           )}
//         </div>
//       </div>

//       <div className="flex flex-col justify-center p-4 mt-6 w-full max-w-4xl mx-auto space-y-4">
//         {professional.map((p) => (
//           <div
//             className="flex items-center justify-between border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer"
//             key={p._id}
//             onClick={() => {
//               setInfo(p._id);
//               setShow(true);
//             }}
//           >
//             <div className="flex items-center">
//               <img
//                 src={p.profilePicture}
//                 className="w-20 h-20 m-2 rounded-full object-cover"
//                 alt={`${p.firstname} ${p.lastname}`}
//               />
//               <div className="flex flex-col ml-4">
//                 <h3 className="text-lg font-semibold">{p.firstname} {p.lastname}</h3>
//                 <h3 className="text-sm text-gray-500">{p.profession}</h3>
//                 <h3 className="text-sm text-gray-400">4a Davies Street off University Lagos</h3>
//                 <h3 className="text-sm text-yellow-500">⭐⭐⭐⭐</h3>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="sticky bottom-0 z-50 bg-white">
//         {show && <Single info={info} showState={[show, setShow]} />}
//       </div>
//     </>
//   );
// };

// export default Workers;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import axiosInstance from "../axiosInstance"; // Import axiosInstance
import { axiosInstance } from "../config";
import { AuthContext } from "../context/AuthContext";
import Single from "../components/Single";
import { useLoadScript } from "@react-google-maps/api";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import {
  Combobox,
  ComboboxInput,
  ComboboxPopover,
  ComboboxList,
  ComboboxOption,
} from "@reach/combobox";
import "@reach/combobox/styles.css";
import { useLocation } from "react-router-dom";

const libraries = ["places"];

const Workers = () => {
  const { user } = useContext(AuthContext);
  const [professional, setProfessional] = useState([]);
  const [info, setInfo] = useState("");
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState({ lat: null, lng: null });
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "Your_Google_Maps_API_Key",
    libraries: libraries,
  });

  const sitelocation = useLocation();
  const id = sitelocation.pathname.split("/")[2];

  const handleLocationSelect = async (address) => {
    const results = await getGeocode({ address });
    const { lat, lng } = await getLatLng(results[0]);
    setLocation({ lat, lng });
  };

  useEffect(() => {
    const getProfessionals = async () => {
      try {
        let res;
        if (location.lat && location.lng) {
          res = await axiosInstance.get(`/professional/nearby`, {
            params: {
              latitude: location.lat,
              longitude: location.lng,
              maxDistance: 10,
              profession: id, // Add profession to the query params
            },
          });
        } else {
          res = await axiosInstance.get(`/professional`, {
            params: { profession: id },
          });
        }
        setProfessional(res.data);
      } catch (err) {
        console.error("Error fetching professionals:", err);
      }
    };
    getProfessionals();
  }, [id, location.lat, location.lng]);

  const PlacesAutoComplete = () => {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();

    const handleSelect = async (address) => {
      setValue(address, false);
      clearSuggestions();
      handleLocationSelect(address);
    };

    return (
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={(e) => setValue(e.target.value)}
          disabled={!ready}
          placeholder="Enter an address"
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 w-full max-w-md mx-auto sm:max-w-full"
        />
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
              ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    );
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-6">
        <div className="w-full px-4 sm:max-w-4xl mx-auto">
          {!isLoaded ? (
            <h3 className="text-center text-gray-500">Loading...</h3>
          ) : (
            <PlacesAutoComplete />
          )}
        </div>
      </div>

      <div className="flex flex-col justify-center p-4 mt-6 w-full max-w-4xl mx-auto space-y-4">
        {professional.map((p) => (
          <div
            className="flex items-center justify-between border border-gray-300 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ease-in-out cursor-pointer"
            key={p._id}
            onClick={() => {
              setInfo(p._id);
              setShow(true);
            }}
          >
            <div className="flex items-center">
              <img
                src={p.profilePicture}
                className="w-20 h-20 m-2 rounded-full object-cover"
                alt={`${p.firstname} ${p.lastname}`}
              />
              <div className="flex flex-col ml-4">
                <h3 className="text-lg font-semibold">{p.firstname} {p.lastname}</h3>
                <h3 className="text-sm text-gray-500">{p.profession}</h3>
                <h3 className="text-sm text-gray-400">4a Davies Street off University Lagos</h3>
                <h3 className="text-sm text-yellow-500">⭐⭐⭐⭐</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="sticky bottom-0 z-50 bg-white">
        {show && <Single info={info} showState={[show, setShow]} />}
      </div>
    </>
  );
};

export default Workers;
