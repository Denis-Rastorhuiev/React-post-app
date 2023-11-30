import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import {AuthContext} from "../context";
import MyLoaded from "./UI/Loader/MyLoaded";

const AppRouter = () => {
    const {isAuth,isLoading} = useContext(AuthContext);
    if(isLoading){
        return <MyLoaded/>
    }
    return (
        isAuth
        ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        key={route.path}
                        path={route.path}
                        element={<route.component/>}
                    />
                )}
                <Route path="*" element={<Navigate to={"/posts"}/>}/>
                {/*<Route path="/error" element={<Error/>}/>*/}
                {/*<Route path="*" element={<Navigate to={"/error"}/>}/>*/}
            </Routes>
        :
        <Routes>
            {publicRoutes.map(route =>
                <Route
                    key={route.path}
                    path={route.path}
                    element={<route.component/>}
                />
            )}
            <Route path="*" element={<Navigate to={"/login"}/>}/>
        </Routes>

    );
};

export default AppRouter;