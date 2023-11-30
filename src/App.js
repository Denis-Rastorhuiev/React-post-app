import React, {useEffect, useState} from "react";
import {BrowserRouter} from "react-router-dom";
import Slidenav from "./component/UI/Slidenav/Slidenav";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";

function App() {
    const [isAuth,setIsAuth] = useState(false)
    const [isLoading,setIsLoading] = useState(true)

    useEffect(()=>{
        if(localStorage.getItem("auth")){
            setIsAuth(true)
        }
        setIsLoading(false)
    },[])

    return (
        <AuthContext.Provider value={{
            isAuth,
            setIsAuth,
            isLoading
        }}>
            <BrowserRouter>
                <div className="wrapper">
                    <Slidenav/>
                    <AppRouter/>
                </div>
            </BrowserRouter>
        </AuthContext.Provider>
  );
}
export default App;
