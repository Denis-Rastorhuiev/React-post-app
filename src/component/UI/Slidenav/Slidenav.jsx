import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../../context";
import logo from "../../../img/Logo.svg"

const Slidenav = () => {


    return (
        <div className={"sidenav"}>
            <div className={"sidenav__links"}>

                <div className={"logo"}>
                    <img draggable="false" alt="logo" src={logo}/>
                    <div className={"logo__text"}>ORB</div>
                </div>
                <Link className={"sidenav__links__link"} to={"/posts"}>Posts</Link>
                <Link className={"sidenav__links__link"} to={"/about"}>About</Link>
            </div>
        </div>
    );
};

export default Slidenav;