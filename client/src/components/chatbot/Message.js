import React from "react";

const Message = props => (
  <div>
    {props.speak === "bot" && (
      <div className="Chatbot-buble Chatbot-buble-bot Chatbot-buble-bot-color">
        {props.text}
      </div>
    )}
    {props.speak === "me" && (
      <div className="Chatbot-buble Chatbot-buble-user Chatbot-buble-user-color">
        {props.text}
      </div>
    )}
  </div>
);

export default Message;
