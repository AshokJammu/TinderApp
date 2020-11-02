import { Avatar } from "@material-ui/core";
import SelectInput from "@material-ui/core/Select/SelectInput";
import React, { useState } from "react";
import "./ChatScreen.css";

function ChatScreen() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    {
      name: "Ellen",
      image: "",
      message: "Whats up",
    },
    {
      name: "Ellen",
      image: "",
      message: "Hows it going",
    },
    {
      message: "Hi! How are ypu Ellen!",
    },
  ]);

  const handleSend = (e) => {
    e.preventDefault();
    setMessages([...messages, { message: input }]);
    setInput("");
  };
  return (
    <div className="chatScreen">
      <p className="chatScreen_timestamp">You matched with ellen</p>
      {messages.map((item) => {
        return item.name ? (
          <div className="chatScreen_message">
            <Avatar
              className="chatScreen_image"
              alt={item.name}
              src={item.image}
            />
            <p className="chatScreen_text">{item.message}</p>
          </div>
        ) : (
          <div className="chatScreen_message">
            <p className="chatScreen_textUser">{item.message}</p>
          </div>
        );
      })}

      <form className="chatScreen_input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen_inputField"
          placeholder="Type a message..."
          type="text"
        />
        <button
          onClick={handleSend}
          type="submit"
          className="chatScreen_inputButton"
        >
          send
        </button>
      </form>
    </div>
  );
}

export default ChatScreen;
