// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { AuthContext } from "../context/AuthContext";
// import Navbar from "../components/Navbar";
// import SendIcon from "@mui/icons-material/Send";

// function ChatApp() {
//   const { user, professional } = useContext(AuthContext);
//   const location = useLocation();
//   const id = location.pathname.split("/")[2];

//   const [data, setData] = useState("");
//   const [client, setClient] = useState("");
//   const [messages, setMessages] = useState([]);
//   const [content, setContent] = useState("");
//   const [clientInfo, setClientInfo] = useState();
//   const [professionalInfo, setProfessionalInfo] = useState();

//   useEffect(() => {
//     const getMessages = async () => {
//       try {
//         const res = await axios.get(`/message/chat/${id}`);
//         setMessages(res.data);
//       } catch (err) {}
//     };
//     getMessages();
//   }, [id, content, messages]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get(`/chat/${id}`);
//         setData(res.data.professionalParticipant);
//         setClient(res.data.clientParticipant);
//       } catch (err) {}
//     };
//     getData();
//   }, [id]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get(`/client/${client}`);
//         setClientInfo(res.data);
//       } catch (err) {}
//     };
//     getData();
//   }, [client]);

//   useEffect(() => {
//     const getData = async () => {
//       try {
//         const res = await axios.get(`/professional/${data}`);
//         setProfessionalInfo(res.data);
//       } catch (err) {}
//     };
//     getData();
//   }, [data]);

//   const createMessage = async (e) => {
//     // e.preventDefault()
//     try {
//       let sender, receiver;

//       if (user) {
//         sender = user._id;
//       } else if (professional) {
//         sender = professional._id;
//       }

//       if (data) {
//         receiver = data;
//       } else if (client) {
//         receiver = client;
//       }
//       const { response } = await axios.post("/message", {
//         sender,
//         receiver,
//         content,
//         chat: id,
//       });
//       setContent("");
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="relative h-[600px] overflow-x-hidden m-4 overflow-y-auto border border-solid border-[#ccc]">
//         <div className="sticky top-0 h-[60px]  bg-slate-100 ">
//           {professional ? (
//             <div className="flex items-center justify-start p-2">
//               <img
//                 src={clientInfo?.profilePicture}
//                 className="rounded-[50%] h-10"
//               />
//               <h1 className="ml-2 font-semibold text-[20px]">
//                 {clientInfo?.firstname} {clientInfo?.lastname}
//               </h1>
//             </div>
//           ) : (
//             <div className="flex items-center justify-start p-2">
//               <img
//                 src={professionalInfo?.profilePicture}
//                 className="rounded-[50%] h-10"
//               />
//               <h1 className="ml-2 font-semibold text-[20px]">
//                 {professionalInfo?.firstname} {professionalInfo?.lastname}
//               </h1>
//             </div>
//           )}
//         </div>

//         <div className="mt-[2px] mx-2 p-1">
//           {messages?.map((m) => {
//             return (
//               <div key={m._id}>
//                 {user &&
//                   (m.sender === user._id ? (
//                     <div className="flex items-start justify-end mb-4">
//                       <div className="flex flex-col items-end">
//                         <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[180px] break-words">
//                           {m.content}
//                         </div>
//                         <span className="text-xs text-gray-500 mt-1">
//                           {new Date(m.createdAt).toLocaleTimeString([], {
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex items-start mb-4">
//                       <div className="flex flex-col items-start">
//                         <div className="bg-gray-200 text-gray-700 p-3 rounded-lg max-w-[180px] break-words">
//                           {m.content}
//                         </div>
//                         <span className="text-xs text-gray-500 mt-1">
//                           {new Date(m.createdAt).toLocaleTimeString([], {
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   ))}

//                 {professional &&
//                   (m.sender === professional._id ? (
//                     <div className="flex items-start justify-end mb-4">
//                       <div className="flex flex-col items-end">
//                         <div className="bg-blue-500 text-white p-3 rounded-lg max-w-[180px] break-words">
//                           {m.content}
//                         </div>
//                         <span className="text-xs text-gray-500 mt-1">
//                           {new Date(m.createdAt).toLocaleTimeString([], {
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   ) : (
//                     <div className="flex items-start mb-4">
//                       <div className="flex flex-col items-start">
//                         <div className="bg-gray-200 text-gray-700 p-3 rounded-lg max-w-[180px] break-words">
//                           {m.content}
//                         </div>
//                         <span className="text-xs text-gray-500 mt-1">
//                           {new Date(m.createdAt).toLocaleTimeString([], {
//                             hour: "2-digit",
//                             minute: "2-digit",
//                           })}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//               </div>
//             );
//           })}
//           <div className="sticky bottom-0 flex items-center justify-center mb-1 bg-[white]">
//             <input
//               value={content}
//               onChange={(e) => setContent(e.target.value)}
//               className="border border-black h-[30px] w-[250px] rounded mr-1 p-1"
//             />
//             <button onClick={createMessage}>
//               <SendIcon />
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default ChatApp;


import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
// import { axiosInstance } from "../axiosInstance"; // Import your axios instance
import { axiosInstance } from "../config";

function ChatApp() {
  const { user, professional } = useContext(AuthContext);
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [messages, setMessages] = useState([]);
  const [content, setContent] = useState("");
  const [clientInfo, setClientInfo] = useState(null);
  const [professionalInfo, setProfessionalInfo] = useState(null);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axiosInstance.get(`/message/chat/${id}`);
        setMessages(res.data);
      } catch (err) {
        console.error("Error fetching messages:", err);
      }
    };
    getMessages();
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axiosInstance.get(`/chat/${id}`);
        const { professionalParticipant, clientParticipant } = res.data;
        
        if (professional) {
          const clientRes = await axiosInstance.get(`/client/${clientParticipant}`);
          setClientInfo(clientRes.data);
          setProfessionalInfo(professionalParticipant);
        } else {
          const professionalRes = await axiosInstance.get(`/professional/${professionalParticipant}`);
          setProfessionalInfo(professionalRes.data);
          setClientInfo(clientParticipant);
        }
      } catch (err) {
        console.error("Error fetching chat data:", err);
      }
    };
    fetchData();
  }, [id, professional]);

  const createMessage = async () => {
    try {
      let sender, receiver;

      if (user) {
        sender = user._id;
        receiver = professionalInfo?._id || clientInfo?._id;
      } else if (professional) {
        sender = professional._id;
        receiver = clientInfo?._id;
      }

      const response = await axiosInstance.post("/message", {
        sender,
        receiver,
        content,
        chat: id,
      });

      setMessages([...messages, response.data]);
      setContent("");
    } catch (error) {
      console.error("Error creating message:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="relative h-[600px] overflow-x-hidden m-4 overflow-y-auto border border-solid border-[#ccc]">
        <div className="sticky top-0 h-[60px]  bg-slate-100 ">
          {professional ? (
            <div className="flex items-center justify-start p-2">
              <img
                src={clientInfo?.profilePicture}
                className="rounded-[50%] h-10"
                alt={`${clientInfo?.firstname} ${clientInfo?.lastname}`}
              />
              <h1 className="ml-2 font-semibold text-[20px]">
                {clientInfo?.firstname} {clientInfo?.lastname}
              </h1>
            </div>
          ) : (
            <div className="flex items-center justify-start p-2">
              <img
                src={professionalInfo?.profilePicture}
                className="rounded-[50%] h-10"
                alt={`${professionalInfo?.firstname} ${professionalInfo?.lastname}`}
              />
              <h1 className="ml-2 font-semibold text-[20px]">
                {professionalInfo?.firstname} {professionalInfo?.lastname}
              </h1>
            </div>
          )}
        </div>

        <div className="mt-[2px] mx-2 p-1">
          {messages?.map((m) => (
            <div key={m._id} className={`flex items-start ${m.sender === (user?._id || professional?._id) ? "justify-end mb-4" : "mb-4"}`}>
              <div className={`flex flex-col items-${m.sender === (user?._id || professional?._id) ? "end" : "start"}`}>
                <div className={`bg-${m.sender === (user?._id || professional?._id) ? "blue-500" : "gray-200"} text-white text-${m.sender === (user?._id || professional?._id) ? "blue-500" : "gray-200"} p-3 rounded-lg max-w-[180px] break-words`}>
                  {m.content}
                </div>
                <span className="text-xs text-gray-500 mt-1">
                  {new Date(m.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            </div>
          ))}
          <div className="sticky bottom-0 flex items-center justify-center mb-1 bg-[white]">
            <input
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="border border-black h-[30px] w-[250px] rounded mr-1 p-1"
            />
            <button onClick={createMessage}>
              <SendIcon />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChatApp;
