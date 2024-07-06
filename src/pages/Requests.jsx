// import React, { useContext, useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import axios from "axios";
// import { AuthContext } from "../context/AuthContext";
// import ProfessionalNavbar from "../components/ProfessionalNavbar";
// import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
// import SingleP from "../components/SingleP";
// import { Link } from "react-router-dom";
// import Single from "../components/Single";
// import RequestSingle from "../components/RequestSingle";

// function Requests() {
//   const { user } = useContext(AuthContext);
//   const [data, setData] = useState();
//   const [info, setInfo] = useState();
//   const [requestId, setRequestId] = useState();
//   const [clientId, setClientId] = useState();
//   const [show, setShow] = useState(false);
//   const [pro, setPro] = useState();

//   const createChat = async (professionalId) => {
//     try {
//       const response = await axios.post("/chat", {
//         clientParticipant: user._id,
//         professionalParticipant: professionalId,
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
//             clientId: user._id,
//           },
//         });
//         setData(res.data);
//       } catch (err) {}
//     };
//     getData();
//   }, [data]);

//   return (
//     <>
//       <Navbar />
//       <div>
//         <table className="w-screen border-collapse">
//           <thead>
//             <tr className="m-4">
//               <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
//                 Professional
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
//                     setInfo(d.professionalId);
//                     setRequestId(d._id);
//                     setClientId(d.clientId);
//                   }}
//                 >
//                   <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
//                     {d.professional}
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
//                     ) : d.status === "payed" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[#3737c4]">
//                         {d.status}
//                       </td>
//                     ): d.status === "denied" ? (
//                       <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[red]">
//                         {d.status}
//                       </td>
//                     ) : null}
//                   </>

//                   {d.status === "accepted" && (
//                     <td>
//                       <ChatOutlinedIcon
//                         onMouseEnter={() => setPro(d.professionalId)}
//                         onMouseLeave={() => setPro()}
//                         onClick={() => createChat(d.professionalId)}
//                       />
//                     </td>
//                   )}
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         <div className="sticky z-[999] bg-[white] bottom-0">
//           {show && <Single info={info} showState={[show, setShow]} />}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Requests;

import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import axiosInstance from "../axiosInstance"; // Import axiosInstance
import { AuthContext } from "../context/AuthContext";
import { axiosInstance } from "../config";
import ProfessionalNavbar from "../components/ProfessionalNavbar";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import SingleP from "../components/SingleP";
import { Link } from "react-router-dom";
import Single from "../components/Single";
import RequestSingle from "../components/RequestSingle";

function Requests() {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState();
  const [info, setInfo] = useState();
  const [requestId, setRequestId] = useState();
  const [clientId, setClientId] = useState();
  const [show, setShow] = useState(false);
  const [pro, setPro] = useState();

  const createChat = async (professionalId) => {
    try {
      const response = await axiosInstance.post("/chat", {
        clientParticipant: user._id,
        professionalParticipant: professionalId,
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
            clientId: user._id,
          },
        });
        setData(res.data);
      } catch (err) {}
    };
    getData();
  }, [data]);

  return (
    <>
      <Navbar />
      <div>
        <table className="w-screen border-collapse">
          <thead>
            <tr className="m-4">
              <th className="border-solid border-[#ddd] text-left bg-[#04AA6D] text-[white] px-3 py-3 text-[12px]">
                Professional
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
            {data?.map((d) => {
              return (
                <tr
                  className="mt-2 hover:scale-10 mb-4 hover:border-2 cursor-pointer"
                  key={d._id}
                  onClick={() => {
                    setShow(true);
                    setInfo(d.professionalId);
                    setRequestId(d._id);
                    setClientId(d.clientId);
                  }}
                >
                  <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                    {d.professional}
                  </td>
                  <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                    {d.createdAt.substring(11, 16)}
                  </td>
                  <td className="border-solid border-[#ddd] px-3 py-3 text-[12px]">
                    {d.createdAt.substring(0, 10)}
                  </td>
                  <>
                    {d.status === "pending" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[yellow]">
                        {d.status}
                      </td>
                    ) : d.status === "cancelled" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[red]">
                        {d.status}
                      </td>
                    ) : d.status === "accepted" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[green]">
                        {d.status}
                      </td>
                    ) : d.status === "completed" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[#3737c4]">
                        {d.status}
                      </td>
                    ) : d.status === "payed" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[#3737c4]">
                        {d.status}
                      </td>
                    ) : d.status === "denied" ? (
                      <td className="border-solid border-[#ddd] px-3 py-3 text-[12px] text-[red]">
                        {d.status}
                      </td>
                    ) : null}
                  </>

                  {d.status === "accepted" && (
                    <td>
                      <ChatOutlinedIcon
                        onMouseEnter={() => setPro(d.professionalId)}
                        onMouseLeave={() => setPro()}
                        onClick={() => createChat(d.professionalId)}
                      />
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>

        <div className="sticky z-[999] bg-[white] bottom-0">
          {show && <SingleP info={info} showState={[show, setShow]} />}
        </div>
      </div>
    </>
  );
}

export default Requests;
