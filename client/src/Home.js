import React from "react";
import { useNavigate } from "react-router-dom";

const Home = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <div>
        <div className="App">
          <div className="joinChatContainer">
            <h1> Join a chat</h1>
            <input type="text" name="name" placeholder="Username" />

            <input type="text" name="number" placeholder="Room" />
            <button onClick={() => navigate("/Chattab")}>Join A Room</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
