import React from 'react';
import './App.css';
import NavMenu from './NavMenu';
import MainCon from './MainCon';


export default class App extends React.Component{
  render() {
    return (
      <div>
        <NavMenu></NavMenu>
        <MainCon></MainCon>
      </div>
    )
  }
};
