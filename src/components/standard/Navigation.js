import React, { useState, useContext, useEffect, useRef } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import AccountIcon from "./icons/AccountIcon";
import MainLogo from "../../assets/raise_logo_background_white.png";
import { AccountContext } from "../auth/Accounts";

const Styles = styled.div`
    .navdiv {
        background: rgb(1, 131, 225);
        background: linear-gradient(
            90deg,
            rgba(1, 131, 225, 1) 0%,
            rgba(90, 184, 253, 1) 100%
        );
    }

    .logo:hover {
        cursor: pointer;
    }

    ul {
        list-style-type: none;
        display: inline-block;
        margin: 0;
        padding: 0;
    }

    .navbar {
        height: 80px;
        padding: 0 1rem;
        display: flex;
        justify-content: space-between;
    }

    .nav-item-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-left: 10px;
    }

    .nav-item {
        width: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-left: 10px;
    }

    a {
        color: #f1f1f1;
        font-weight: 500;
        text-decoration: none;
        padding: 10px;
        svg {
            width: 2.5rem;
            height: 2.5rem;
            transition: 0.3s;
            fill: #f1f1f1;
        }
    }

    a:hover {
        cursor: pointer;
    }

    svg:hover {
        fill: #f8f8f8;
        transform: translateY(-2px);
        transition: 0.3s;
    }
`;

const MainNavbar = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { getSession } = useContext(AccountContext);

    useEffect(() => {
        getSession()
            .then(() => {
                setIsLoggedIn(true);
            })
            .catch((err) => {
                console.error(err);
            });
    });
    const Navbar = (props) => {
        return (
            <nav className="navbar">
                <span className="logo">
                    <Link to="/">
                        <img alt="" src={MainLogo} height="60px"></img>
                    </Link>
                </span>
                <span className="navbar-nav">
                    <ul>{props.children}</ul>
                </span>
            </nav>
        );
    };
    const NavItem = (props) => {
        const [open, setOpen] = useState(false);

        const to = props.to;
        const useOutsideAlerter = (ref) => {
            useEffect(() => {
                function handleClickOutside(event) {
                    if (ref.current && !ref.current.contains(event.target)) {
                        setOpen(false);
                    }
                }

                document.addEventListener("mousedown", handleClickOutside);
                return () => {
                    document.removeEventListener(
                        "mousedown",
                        handleClickOutside
                    );
                };
            }, [ref]);
        };
        const dropdownRef = useRef(null);
        useOutsideAlerter(dropdownRef);

        if (!to) {
            return (
                <li className="nav-item" ref={dropdownRef}>
                    <a className="icon-button" onClick={() => setOpen(!open)}>
                        {props.icon}
                    </a>
                    {open && props.children}
                </li>
            );
        }

        if (props.name) {
            return (
                <li className="nav-item">
                    <Link className="nav-item-button" to={props.to}>
                        {props.name}
                    </Link>
                </li>
            );
        }
        return (
            <li className="nav-item">
                <Link className="icon-button" to={props.to}>
                    {props.icon}
                </Link>
            </li>
        );
    };
    return (
        <Styles>
            <div className="navdiv">
                <Navbar>
                    {isLoggedIn ? (
                        <div className="nav-item-container">
                            <div style={{ display: "flex" }}>
                                <NavItem name="About" to="/about"></NavItem>
                                <NavItem name="Videos" to="/videos"></NavItem>
                            </div>
                            <NavItem icon={<AccountIcon />}>
                                <DropdownMenu></DropdownMenu>
                            </NavItem>
                        </div>
                    ) : (
                        <div style={{ display: "flex" }}>
                            <NavItem name="Login" to="/login"></NavItem>
                            <NavItem name="SignUp" to="/signup"></NavItem>
                        </div>
                    )}
                </Navbar>
            </div>
        </Styles>
    );
};

export default MainNavbar;
