import React from "react";
import "./NavMenu.css";
export default class NavMenu extends React.Component {
  render() {
    return (
      <header className="shadow fixed">
        <div style={{ position: "relative" }}>
          <span className="web-title">鲜果</span>
          <span className="fa fa-navicon switch" />
        </div>
        <nav>
          <ul>
            <li className="nav-item active" id="MainCon">
              总览
            </li>
            <li className="nav-item" id="IT">
              IT
            </li>
            <li className="nav-item" id="Digital">
              数码
            </li>
            <li className="nav-item" id="Software">
              软件
            </li>
            <li className="nav-item" id="Game">
              游戏
            </li>
            <li className="nav-item" id="iOS">
              iOS
            </li>
            <li className="nav-item" id="Android">
              安卓
            </li>
            <li className="nav-item" id="System">
              系统
            </li>
            <li className="nav-item" id="Intelligence">
              智能
            </li>
            <li className="nav-item" id="Science">
              科学
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
