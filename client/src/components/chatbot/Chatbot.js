import React, { Component } from "react";
import Http from "../../utils/Http";
import "./Chatbot.css";

class Chatbot extends Component {
  state = {
    messages: [],
    text: ""
  };

  handleChange = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = async e => {
    let says = {
      speak: "me",
      msg: {
        text: {
          text: this.state.text
        }
      }
    };
    this.setState({ messages: [...this.state.messages, says] });
    const data = await this.sendMessage(this.state.text);
    console.log(data);
    for (let msg of data.fulfillmentMessages) {
      says = {
        speak: "bot",
        msg
      };
    }
    this.setState({ messages: [...this.state.messages, says] });
    console.log(this.state.messages);
  };
  async sendMessage(text) {
    try {
      const response = await Http.post("api/bot/df_text_query", { text });
      return await response;
    } catch (error) {
      console.error(error.messages);
    }
  }
  render() {
    const { text, messages } = this.state;
    return (
      <div className="Chatbot">
        {text}
        <div id="chatbot" className="Chatbot-flow">
          <h2>ChatBot</h2>
          {messages.map(m => (
            <div>
              <p>{m.speak}</p>
              <p>{m.msg.text.text}</p>
            </div>
          ))}
          <input type="text" onChange={this.handleChange} value={text} />
          <button onClick={this.handleClick}>Send</button>
        </div>
      </div>
    );
  }
}

export default Chatbot;
