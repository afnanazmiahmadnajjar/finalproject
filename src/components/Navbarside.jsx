import React, { Component } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { AiOutlineUser } from "react-icons/ai";
import { GrTask } from "react-icons/gr";
import { TbCurrencyDollar } from "react-icons/tb";
import { RiHomeFill } from "react-icons/ri";

import { NavLink } from "react-router-dom";
import "../style/Navbarside.css";
class Navbarside extends Component {
  constructor() {
    super();
    this.menuItem = [
      {
        path: "/",
        name: "Home",
        icon: <RiHomeFill />,
      },
      {
        path: "/profile",
        name: "profile",
        icon: <AiOutlineUser />,
      },
      {
        path: "/StudyFeeAcount",
        name: "StudyFeeAcount",
        icon: <TbCurrencyDollar />,
      },
      {
        path: "/CoursesResult",
        name: "CoursesResult",
        icon: <GrTask />,
      },
    ];
  }
  render() {
    return (
      <div className="container">
        <div className="sidebar">
          <div className="topSection">
            <h1 className="logo">logo</h1>

            <div className="bars">
              <FiAlignJustify />
            </div>
          </div>
          {this.menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="Link"
              activeClassName="active"
            >
              <div className="icon">{item.icon}</div>
              <div className="link_text">{item.name}</div>
            </NavLink>
          ))}
        </div>
      </div>
    );
  }
}

export default Navbarside;
