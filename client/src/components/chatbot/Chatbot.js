import React, { Component } from "react";
import { v4 as uuid } from "uuid";
import Cookies from "universal-cookie";
import Http from "../../utils/Http";
import "./Chatbot.css";
import Message from "./Message";

const cookies = new Cookies();

class Chatbot extends Component {
  messageEnd;
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    if (cookies.get("userID") === undefined) {
      cookies.set("userID", uuid(), { path: "/" });
    }
  }

  componentDidMount() {
    this.sendEventQuery("Welcome");
  }
  componentDidUpdate() {
    this.messageEnd.scrollIntoView({ behaviour: "smooth" });
  }
  handleKeyPress(e) {
    if (e.key === "Enter") {
      if (e.target.value) {
        this.sendTextQuery(e.target.value);
        e.target.value = "";
      }
    }
  }
  async sendTextQuery(text) {
    let says = {
      speak: "me",
      msg: {
        text: {
          text: text
        }
      }
    };
    this.setState({
      messages: [...this.state.messages, says]
    });
    try {
      const response = await Http.post("api/bot/df_text_query", {
        text,
        userID: cookies.get("userID")
      });
      if (response.fulfillmentMessages) {
        for (let msg of response.fulfillmentMessages) {
          says = {
            speak: "bot",
            msg
          };
        }
        this.setState({
          messages: [...this.state.messages, says]
        });
      }
    } catch (error) {
      console.error(error.messages);
    }
  }

  async sendEventQuery(event) {
    let says = {};
    try {
      const response = await Http.post("api/bot/df_event_query", {
        event,
        userID: cookies.get("userID")
      });
      for (let msg of response.fulfillmentMessages) {
        says = {
          speak: "bot",
          msg
        };
      }
      this.setState({
        messages: [...this.state.messages, says]
      });
    } catch (error) {
      console.error(error.messages);
    }
  }

  renderMessages(msg) {
    if (msg.length > 0) {
      return msg.map(m => (
        <Message key={uuid()} speak={m.speak} text={m.msg.text.text} />
      ));
    } else {
      return null;
    }
  }

  render() {
    const { messages } = this.state;
    return (
      <div className="Chatbot">
        <div id="chatbot" className="Chatbot-flow">
          <h4>ChatBot</h4>
          {this.renderMessages(messages)}
          <div
            ref={el => {
              this.messageEnd = el;
            }}
          />
          <input type="text" onKeyPress={this.handleKeyPress} className="Chatbot-input-send" />
        </div>
      </div>
    );
  }
}

export default Chatbot;
