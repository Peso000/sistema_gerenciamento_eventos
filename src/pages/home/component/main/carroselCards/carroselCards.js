import React from "react";
import style from "./carroselCards.module.css"
import Card from "./card/card";

const CarroselCards = () =>{
    return(
        <div className={style.areaCarrosel}> 
            <div className={style.areaBotao}>
                <button className={style.setaEsquerda}><img src="/img/deixei.png" alt="seta-direita"></img></button>
            </div>

            <div className={style.carrosel}>
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={true}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
                <Card 
                    caminho="https://st3.depositphotos.com/1005145/15351/i/450/depositphotos_153516954-stock-photo-summer-landscape-with-flowers-in.jpg"
                    alt="img-card"
                    titulo="Workshop"
                    local="Curitiba"
                    estaEmFoco={false}
                />
            </div>

            <div className={style.areaBotao}>
                <button className={style.setaDireita}><img src="/img/deixei.png" className={style.imgDireita} alt="seta-esquerda"></img></button>
            </div>
        </div>
    )
}

export default CarroselCards