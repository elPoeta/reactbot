import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Shop from "./shop/Shop";
import About from "./pages/About";
import Header from "./Header";
import Chatbot from "./chatbot/Chatbot";

import('./App.css');

const App = () => (
  <div>
    <BrowserRouter>
      <div>
        <Header />
        <div className="App-container">
          <Route exact path="/" component={Landing} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/about" component={About} />
          <Chatbot />
        </div>
      </div>
    </BrowserRouter>
  </div>
);

export default App;
