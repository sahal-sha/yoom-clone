
import { useEffect } from 'react';
import useGetMessages from '../../hooks/useGetMessages'
import MessageSkeleton from '../skeleton/MessageSkeleton';

import Message from './Message'
import { useRef } from 'react';
import useListenMessages from '../../hooks/useListenMessages';



const Chatting = () => {
  const { messages, loading } = useGetMessages();
  useListenMessages()
  const lastMessagRef = useRef();
  useEffect(()=>{
    setTimeout(()=> {
    lastMessagRef.current?.scrollIntoView({ behavior: "smooth"});
  },100);
  },[messages]);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message)=>(
        <div key={message._id}
        ref={lastMessagRef}
        
        >
        <Message key={message._id} message={message} /> 
        </div>
        
        ))}

        {loading && [...Array(3)].map((_, idx)=> <MessageSkeleton key={idx}/>)}
        {!loading && messages.length === 0 && (
          <p className='text-center'>Send a message to start the conversation</p>
        )}
    
    </div>
  )
  
}

export default Chatting