import React, { Fragment } from "react";

import Header from "../../components/header/header";
import Carrosel from "../../components/carrosel/carrosel"
import Main from "../../components/main/main";

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