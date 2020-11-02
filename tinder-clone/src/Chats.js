import React from "react"
import Chat from './Chat'
import './Chats.css'
function Chats(){
    return (
        <div className="Chats">
            <Chat 
                name= "Sarah"
                message="Hey! how are you"
                timestamp="35 min ago"
                profilePic=""
            />
            <Chat 
                name= "Sarah"
                message="Hey! how are you"
                timestamp="35 min ago"
                profilePic=""
            />
            <Chat 
                name= "Sarah"
                message="Hey! how are you"
                timestamp="35 min ago"
                profilePic=""
            />
            <Chat 
                name= "Sarah"
                message="Hey! how are you"
                timestamp="35 min ago"
                profilePic=""
            />
        </div>
    )
}

export default Chats