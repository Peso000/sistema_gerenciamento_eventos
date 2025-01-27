import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login/login";
import Home from "./pages/home/home";
import Cadastro from "./pages/cadastro/cadastro";
import UserProvider from "./context/userContext";
import RecuperacaoSenha from "./pages/recuperacaoSenha/recuperacaoSenha";

function App() {
  return (
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/codigo" element={<RecuperacaoSenha />} >

            </Route>
          </Routes>
        </UserProvider>
      </BrowserRouter> 
  );
}

export default App;
