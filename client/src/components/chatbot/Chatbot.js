import React, { Component } from "react";
import "./Chatbot.css";

class Chatbot extends Component {
  state = {
    messages: []
  };
  render() {
    return (
      <div className="Chatbot">
        <div id="chatbot" className="Chatbot-flow">
          <h2>ChatBot</h2>
          <input type="text" />
        </div>
      </div>
    );
  }
}

export default Chatbot;
