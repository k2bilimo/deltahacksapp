import React from 'react';
import logo from './logo.svg';
import './App.css';
import DesktopContainer from './newscreen';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Pillform from './PillForm';
import{Segment,Responsive, Visibility, Menu} from 'semantic-ui-react'
import MenuBar from "./MenuBar";
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

function App() {
  return (
    <Router>
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={true}
          onBottomPassedReverse={false}
        ></Visibility>
       <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
              <MenuBar/>
              <Route exact={true} path='/' component={DesktopContainer}/>
              <Route exact={true} path='/a/pill-form' component ={Pillform}/>
            </Segment>
            </Responsive>
    </Router>
  );
}

export default App;
