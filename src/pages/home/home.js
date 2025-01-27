import React, { Fragment } from "react";

import Header from "../../components/header/header";
import Carrosel from "./component/carrosel/carrosel"
import Main from "./component/main/main";

const Home = () =>{
    return(
        <>
            <Header titulo="Home"/>
            <Carrosel />
            <Main />
        </>
    )
}

export default Home;