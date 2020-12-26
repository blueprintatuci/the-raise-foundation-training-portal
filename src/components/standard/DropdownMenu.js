import React, {  } from "react";
import styled from "styled-components";
import { Link, Redirect } from "react-router-dom";
import AccountIcon from "./icons/AccountIcon";

const Styles = styled.div`
  .dropdown {
    position: absolute;
    top: 60px;
    right: -90px;
    width: 200px;
    transform: translateX(-45%);
    background-color: #f8f8f8;
    box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    overflow: hidden;
    transition: height 500ms ease;
  }

  .menu {
    width: 100%;
    
  }

  .menu-item {
    height: 50px;
    display: flex;
    align-items: center;
    transition: background 500ms;
    padding: 0.5rem;
    color: #0183e1
  }

  .menu-item .icon-button {
    margin-right: 0.5rem;
    svg {
        width: 1.8rem;
        height: 1.8rem;
        transition: 0.3s;
        fill: #0183e1;
      }
  }

  .menu-item .icon-button:hover {
    filter: none;
  }

  .menu-item:hover {
    background-color: #e2e2e2;
  }

  .icon-right {
    margin-left: auto;
  }
`;

const DropdownMenu = () => {


  const DropdownItem = (props) => {
    const to = props.to;

    if (!to) {
      return (
        <a className="menu-item" onClick={props.onClick}>
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </a>
      );
    } else {
      return (
        <Link to={props.to} className="menu-item">
          <span className="icon-button">{props.leftIcon}</span>
          {props.children}
          <span className="icon-right">{props.rightIcon}</span>
        </Link>
      );
    }
  };

  return (
    <Styles>
      <div className="dropdown">
        <div className="menu">
          <DropdownItem leftIcon={<AccountIcon />}>My Profile</DropdownItem>

          <div
            style={{
              borderTop: "1px solid black",
              paddingTop: "5px",
              marginTop: "5px",
            }}
          ></div>
          <DropdownItem >Logout</DropdownItem>
        </div>
      </div>
    </Styles>
  );
};

export default DropdownMenu;