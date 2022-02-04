import React from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Chat = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <button className="logoutbutton" onClick={() => navigate(-1)}>
        Back to the Home Page
      </button>
      <div className="chat-window">
        <div className="chat-header">
          <p>Live Chat Application</p>
        </div>
        <div className="chat-body">
          <div className="message">
            <div>
              <div className="message-content">
                <p>how are you</p>
              </div>
              <div className="message-meta">
                <p id="time">time</p>
                <p id="author">name</p>
              </div>
            </div>
          </div>
        </div>
        <div className="chat-footer">
          <input type="text" placeholder="message" />
          <button>&#9658;</button>
        </div>
      </div>
    </>
  );
};

export default Chat;
