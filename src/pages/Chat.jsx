import React, { useContext, useEffect, useRef, useState } from 'react'
import {io} from "socket.io-client";
import { AuthContext } from '../context/AuthContext';
import axios from 'axios';

function Chat() {
  const APP_HOST = "http://localhost:8800/"
  const socket = useRef()

  const { user } = useContext(AuthContext);
  const [currentUser, setCurrentUser] = useState(user)
  const [contacts, setContacts] = useState()
  const [currentChat, setCurrentChat] = useState()
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setCurrentUser(user);
    console.log(currentUser);
  }, [user]);

  const getContacts = async()=>{
    const contacts = await axios.get('/professional/');
    setContacts(contacts.data)
    setIsLoading(false);
  }

  const handleChatChange = (chat)=>{
    setCurrentChat(chat);
}

  useEffect(()=>{
    if(currentUser){
      socket.current = io(APP_HOST);
      socket.current.emit("add-user", currentUser._id);
    }
  },[currentUser]);

  useEffect(()=>{
    if(currentUser){
      setIsLoading(true);
      getContacts();
    }
  },
  // eslint-disable-next-line
  [currentUser])

  return (
      <div className='container'>
        chat
      </div>
  )
}

export default Chat