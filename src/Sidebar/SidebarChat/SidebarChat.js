import React, { useEffect, useState } from 'react';
import "./SidebarChat.css";
import { Avatar } from '@material-ui/core';

function SidebarChat({ addNewChat }) {
    // State declaration
    const [seed, setSeed] = useState('');

    // Process state values
    // useEffect method fires when the component loads    
    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))
    }, [])

    const createChat = () => {
        const roomName = prompt('Please enter a room name to chat');

        if(roomName) {
            // Got the room name...
        }

    };

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChat__info">
                <h2>Room name</h2>
                <p>Last message...</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat
