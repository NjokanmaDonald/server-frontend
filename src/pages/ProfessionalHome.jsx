// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import ProfessionalNavbar from "../components/ProfessionalNavbar";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import SingleP from "../components/SingleP";

// function ProfessionalHome() {
//   const { professional } = useContext(AuthContext);
//   const [data, setData] = useState();
//   const [requestId, setRequestId] = useState();
//   const [clientId, setClientId] = useState();
//   const [show, setShow] = useState(false);
//   const [client, setClient] = useState();

//   const createChat = async (clientId) => {
//     try {
//       const response = await axios.post("/chat", {
//         clientParticipant: clientId,
//         professionalParticipant: professional._id,
//       });
//       // Redirect to chat page with necessary parameters
//       if (response.data.success) {
//         const chatId = response.data.chat._id; // Assuming you have the chat ID in the response
//         window.location.href = `/chat/${chatId}`;
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get("/requests", {
//           params: {
//             professionalId: professional._id,
//           },
//         });
//         setData(res.data);
//       } catch (err) {}
//     };
//     getData();
//   }, [data]);

//   return (
//     <>
//       <ProfessionalNavbar />
//       <div>
//         <table className="w-screen border-collapse">
//           <thead>
//             <tr className="m-4">
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
//                 Client
//               </th>
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
//                 Time
//               </th>
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
//                 Date
//               </th>
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
//                 Status
//               </th>
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]"></th>
//             </tr>
//           </thead>

//           <tbody>
//             {data?.map((d) => {
//               return (
//                 <tr
//                   className="mt-2 hover:scale-10 mb-4 hover:border-2 cursor-pointer"
//                   key={d._id}
//                   onClick={({}) => {
//                     setShow(true);
//                     setRequestId(d._id);
//                     setClientId(d.clientId);
//                   }}
//                 >
//                   <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
//                     {d.client}
//                   </td>
//                   <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
//                     {d.createdAt.substring(11, 16)}
//                   </td>
//                   <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
//                     {d.createdAt.substring(0, 10)}
//                   </td>
//                   <>
//                     {d.status === "pending" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[yellow]">
//                         {d.status}
//                       </td>
//                     ) : d.status === "cancelled" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[red]">
//                         {d.status}
//                       </td>
//                     ) : d.status === "accepted" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[green]">
//                         {d.status}
//                       </td>
//                     ) : d.status === "completed" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[#3737c4]">
//                         {d.status}
//                       </td>
//                     ): d.status === "payed" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[#3737c4]">
//                         {d.status}
//                       </td>
//                     )
//                      : d.status === "denied" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[red]">
//                         {d.status}
//                       </td>
//                     ) : null}
//                   </>
//                   {d.status === "accepted" && (
//                     <td>
//                       <ChatOutlinedIcon
//                         onMouseEnter={() => setClient(d.clientId)}
//                         onMouseLeave={() => setClient()}
//                         onClick={() => createChat(d.clientId)}
//                       />
//                     </td>
//                   )}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         <div className="sticky z-[999] bg-[white] bottom-0">
//           {show && (
//             <SingleP
//               clientId={clientId}
//               requestId={requestId}
//               showState={[show, setShow]}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default ProfessionalHome;


import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import axiosInstance from "../axiosInstance"; // Import axiosInstance
import { axiosInstance } from "../config";
import { AuthContext } from "../context/AuthContext";
import ProfessionalNavbar from "../components/ProfessionalNavbar";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SingleP from "../components/SingleP";

function ProfessionalHome() {
  const { professional } = useContext(AuthContext);
  const [data, setData] = useState([]);
  const [requestId, setRequestId] = useState(null);
  const [clientId, setClientId] = useState(null);
  const [show, setShow] = useState(false);
  const [client, setClient] = useState(null);

  const createChat = async (clientId) => {
    try {
      const response = await axiosInstance.post("/chat", {
        clientParticipant: clientId,
        professionalParticipant: professional._id,
      });
      // Redirect to chat page with necessary parameters
      if (response.data.success) {
        const chatId = response.data.chat._id; // Assuming you have the chat ID in the response
        window.location.href = `/chat/${chatId}`;
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axiosInstance.get("/requests", {
          params: {
            professionalId: professional._id,
          },
        });
        setData(res.data);
      } catch (err) {
        console.error("Error fetching requests:", err);
      }
    };
    getData();
  }, [professional._id]);

  return (
    <>
      <ProfessionalNavbar />
      <div>
        <table className="w-screen border-collapse">
          <thead>
            <tr className="m-4">
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
                Client
              </th>
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
                Time
              </th>
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
                Date
              </th>
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
                Status
              </th>
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]"></th>
            </tr>
          </thead>

          <tbody>
            {data.map((d) => (
              <tr
                className="mt-2 hover:scale-10 mb-4 hover:border-2 cursor-pointer"
                key={d._id}
                onClick={() => {
                  setShow(true);
                  setRequestId(d._id);
                  setClientId(d.clientId);
                }}
              >
                <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                  {d.client}
                </td>
                <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                  {d.createdAt.substring(11, 16)}
                </td>
                <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                  {d.createdAt.substring(0, 10)}
                </td>
                <td className={`border-solid border-[#ddd] px-3 py-3 text-[12px] ${
                  d.status === "pending"
                    ? "text-yellow-500"
                    : d.status === "cancelled"
                    ? "text-red-500"
                    : d.status === "accepted"
                    ? "text-green-500"
                    : d.status === "completed"
                    ? "text-indigo-500"
                    : d.status === "payed"
                    ? "text-indigo-500"
                    : d.status === "denied"
                    ? "text-red-500"
                    : ""
                }`}>
                  {d.status}
                </td>
                {d.status === "accepted" && (
                  <td>
                    <ChatOutlinedIcon
                      onMouseEnter={() => setClient(d.clientId)}
                      onMouseLeave={() => setClient(null)}
                      onClick={() => createChat(d.clientId)}
                    />
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="sticky z-[999] bg-white bottom-0">
          {show && (
            <SingleP
              clientId={clientId}
              requestId={requestId}
              showState={[show, setShow]}
            />
          )}
        </div>
      </div>
    </>
  );
}

export default ProfessionalHome;
