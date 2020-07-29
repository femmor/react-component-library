import React from 'react';
import { Switch, Route } from "react-router-dom"
import Header from "./components/Navigation/Header"
import './App.css';
import Pages from "./pages"

// Components
import ToastNotification from "./components/ToastNotification"
import Modal from "./components/Modal"
import Tooltips from "./components/Tooltips"
import CountAnimation from "./components/CountAnimation"
import IdleTimerContainer from "./components/IdleTimer"


function App() {
  return (
    <>
      <Header/>
      <Switch>
          <Route component={Pages}  exact path="/"/>
          <Route component={ToastNotification} path="/toast"/>
          <Route component={Modal} path="/modal"/>
          <Route component={CountAnimation} path="/count-animation"/>
          <Route component={Tooltips} path="/tooltips"/>
          <Route component={IdleTimerContainer} path="/idle-timer"/>
      </Switch>
    </>
  );
}

export default App;
