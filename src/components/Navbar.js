import React from "react";
import { Link } from 'react-router-dom';
import { NavStyle } from "./style/Style";
import { ButtonStyle } from "./style/Style";

export default function Navbar() {

    return (
        <NavStyle>
            <Link to="/">
                <ButtonStyle>Home </ButtonStyle>
            </Link>
            <Link to="/about">
                <ButtonStyle>About </ButtonStyle>
            </Link>
            <Link to="/contacts">
                <ButtonStyle>Contacts </ButtonStyle>
            </Link>
        </NavStyle>
    )

}