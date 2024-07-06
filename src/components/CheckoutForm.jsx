// import React, { useState } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { axiosInstance } from "../config";
// import { useNavigate } from "react-router-dom";

// const CheckoutForm = ({ amount, description, requestId, client, professionalId }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate()

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     try {
//       // Create a payment intent on the server
//       const { data } = await axios.post(
//         "http://localhost:8800/api/stripe/create-payment-intent",
//         { amount, description }
//       );

//       const clientSecret = data.clientSecret;

//       // Confirm the card payment on the client
//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             name: `${client}`, // You can add more billing details here
//           },
//         },
//       });

//       if (result.error) {
//         setError(result.error.message);
//       } else {
//         if (result.paymentIntent.status === "succeeded") {
//           setSuccess(true);
//           await axios.put('http://localhost:8800/api/requests/update-status', { requestId, status: 'payed' });
//           navigate(`/rating/${professionalId}`)
//         }
//       }
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div className="p-4 border border-gray-300 rounded-md">
//           <CardElement className="p-2" />
//         </div>
//         <button
//           type="submit"
//           disabled={!stripe || loading}
//           className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//         >
//           {loading ? "Processing..." : "Pay"}
//         </button>
//       </form>
//       {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
//       {success && (
//         <div className="mt-4 text-sm text-green-600">Payment Successful!</div>
//       )}
//     </div>
//   );
// };

// export default CheckoutForm;

import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { axiosInstance } from "../config"; // Adjust the path as per your project structure
import { useNavigate } from "react-router-dom";

const CheckoutForm = ({ amount, description, requestId, client, professionalId }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      // Create a payment intent on the server using axiosInstance
      const { data } = await axiosInstance.post("/api/stripe/create-payment-intent", {
        amount,
        description,
      });

      const clientSecret = data.clientSecret;

      // Confirm the card payment on the client
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: `${client}`, // You can add more billing details here
          },
        },
      });

      if (result.error) {
        setError(result.error.message);
      } else {
        if (result.paymentIntent.status === "succeeded") {
          setSuccess(true);
          await axiosInstance.put("/api/requests/update-status", { requestId, status: 'payed' });
          navigate(`/rating/${professionalId}`);
        }
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="p-4 border border-gray-300 rounded-md">
          <CardElement className="p-2" />
        </div>
        <button
          type="submit"
          disabled={!stripe || loading}
          className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {loading ? "Processing..." : "Pay"}
        </button>
      </form>
      {error && <div className="mt-4 text-sm text-red-600">{error}</div>}
      {success && (
        <div className="mt-4 text-sm text-green-600">Payment Successful!</div>
      )}
    </div>
  );
};

export default CheckoutForm;
