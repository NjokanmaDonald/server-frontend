// import React, { useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "../components/CheckoutForm";
// import { useLocation, useParams } from "react-router-dom";
// import axios from "axios";

// const stripePromise = loadStripe(
//   "pk_test_51Jk3wFHiK2EieueLIjDTY1I7CjjdpU61uVNHaMZt1zmy4rMmZlQdK3H9Cm1jXKryBfYliMrooyelX5YJk701m6sF00j2WHTrgO"
// );

// function Pay() {
//   const [amount, setAmount] = useState()
//   const [client, setClient] = useState()
//   const [professionalId, setProfessonalId] = useState()
//   const sitelocation = useLocation();
//   const id = sitelocation.pathname.split("/")[2];

//   useEffect(() => {
//     const getRequestAmount = async () => {
//       try{
//         const res = await axios.get(`/requests/${id}`);
//         setAmount(res.data.amount)
//         setClient(res.data.client)
//         setProfessonalId(res.data.professionalId)
//       }catch (err) {
//         console.error("Error fetching request:", err);
//       }
//     }
//     getRequestAmount()
//   }, [id])

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//         <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//           <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">
//             Insert Card Details
//           </h1>
//           <CheckoutForm amount={amount} description="Test Payment" requestId={id} client={client} professionalId={professionalId}/>
//         </div>
//       </div>
//     </Elements>
//   );
// }

// export default Pay;

import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";
import { useLocation } from "react-router-dom";
// import axiosInstance from '../utils/axiosInstance'; // Assuming you have axiosInstance configured
import { axiosInstance } from "../config";

const stripePromise = loadStripe(
  "pk_test_51Jk3wFHiK2EieueLIjDTY1I7CjjdpU61uVNHaMZt1zmy4rMmZlQdK3H9Cm1jXKryBfYliMrooyelX5YJk701m6sF00j2WHTrgO"
);

function Pay() {
  const [amount, setAmount] = useState();
  const [client, setClient] = useState();
  const [professionalId, setProfessionalId] = useState();
  const sitelocation = useLocation();
  const id = sitelocation.pathname.split("/")[2];

  useEffect(() => {
    const getRequestData = async () => {
      try {
        const response = await axiosInstance.get(`/requests/${id}`);
        const { amount, client, professionalId } = response.data;
        setAmount(amount);
        setClient(client);
        setProfessionalId(professionalId);
      } catch (err) {
        console.error("Error fetching request:", err);
      }
    };
    getRequestData();
  }, [id]);

  return (
    <Elements stripe={stripePromise}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
          <h1 className="mb-6 text-3xl font-semibold text-center text-gray-800">
            Insert Card Details
          </h1>
          <CheckoutForm
            amount={amount}
            description="Test Payment"
            requestId={id}
            client={client}
            professionalId={professionalId}
          />
        </div>
      </div>
    </Elements>
  );
}

export default Pay;
