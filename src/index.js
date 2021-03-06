import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css';
import CardDetails from "./CardDetails";
import CardGroup from "./components/CardGroup";
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/details/:id" component={CardDetails} />
      <Route exact path="/CardGroup" component={CardGroup}/>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
