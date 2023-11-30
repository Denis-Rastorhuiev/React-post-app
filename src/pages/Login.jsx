import React, {useContext} from 'react';
import MyInput from "../component/UI/input/MyInput";
import MyButton from "../component/UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth,setIsAuth} = useContext(AuthContext)

    const login = (event) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem("auth","true")
    }

    return (
        <div className={"App loginPage"}>
            <h1>Page for login</h1>
            <form onSubmit={login}>
                <MyInput className={"addInput"} type={"text"} placeholder={"Enter login"}></MyInput>
                <MyInput className={"addInput"} type={"text"} placeholder={"Enter password"}></MyInput>
                <MyButton className={"addBtn"}>Enter</MyButton>
            </form>
        </div>
    );
};

export default Login;