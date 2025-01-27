import React, { useEffect, useState } from "react";
import style from "./carrosel.module.css"

const Carrosel = () =>{
    const [count, setCount] = useState(1);
    const [transicaoPausada, setTransicaoPausada] = useState(true)

    const proximaImg = () =>{
        setCount(prevCount => (prevCount >= 3 ? 1 : prevCount + 1)); //verifica o count atual, se for maior que 3, ele retorna 1, se não retorna count + 1
    }

    const mudaSlide = (slide) =>{
        setCount(slide)
        setTransicaoPausada(false)

        setTimeout(() =>{
            setTransicaoPausada(true)
        }, 3000)
    }

    useEffect(() =>{
        if(transicaoPausada){
            const intervalId = setInterval(() =>{ //retorna o id para parar o intervalo
                proximaImg()
            }, 5000)
    
            return () => clearInterval(intervalId) //para o intervalo ao desmontar o component   
        }
    }, [transicaoPausada])

    return(
        <div className={style.slider}>{/* carrosel */}
            <div className={ `${style.sliderContent}` }>
                <input type="radio" name="btn-radio" id="radio1" />{/* ponte entre o css e javascript */}
                <input type="radio" name="btn-radio" id="radio2" />
                <input type="radio" name="btn-radio" id="radio3" />

                <div className={`${style.slideBox}  ${count === 1 ? style.foco : style.foraFoco} ${count === 1 ? style.semTransicao : ""}`}>{/* card do slide */}
                    <img className={style.imgDesktop} src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="slide1"/>
                    <img className={style.imgMobile} src="https://img.freepik.com/vetores-gratis/modelo-de-exibicao-com-smartphone_79603-1240.jpg" alt="slide1"/>
                </div>

                <div className={`${style.slideBox}  ${count === 2 ? style.foco : style.foraFoco}`}>
                    <img className={style.imgDesktop} src="https://img.freepik.com/fotos-gratis/uma-pintura-de-um-lago-de-montanha-com-uma-montanha-ao-fundo_188544-9126.jpg" alt="slide1"/>
                    <img className={style.imgMobile} src="https://img.freepik.com/vetores-gratis/modelo-de-exibicao-com-smartphone_79603-1240.jpg" alt="slide2"/>
               </div>

                <div className={`${style.slideBox}  ${count === 3 ? style.foco : style.foraFoco}`}>
                    <img className={style.imgDesktop} src="https://plus.unsplash.com/premium_photo-1686729237226-0f2edb1e8970?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8JTIzd2FsbHBhcGVyfGVufDB8fDB8fHww" alt="slide1"/>
                    <img className={style.imgMobile} src="https://img.freepik.com/vetores-gratis/modelo-de-exibicao-com-smartphone_79603-1240.jpg" alt="slide3"/>
               </div>

               <div className={`${style.slideBox}   ${count === 4 ? style.semTransicao : ""}`}>{/* card do slide */}
                    <img className={style.imgDesktop} src="https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg" alt="slide1"/>
                    <img className={style.imgMobile} src="https://img.freepik.com/vetores-gratis/modelo-de-exibicao-com-smartphone_79603-1240.jpg" alt="slide1"/>
                </div>

                <div className={style.navAuto}>{/* bolinhas que indicam o slide mudam automaticamente */}
                    <div className={count === 1 ? style.active: ''}></div>
                    <div className={count === 2 ? style.active: ''}></div>
                    <div className={count === 3 ? style.active: ''}></div>
                </div>

                <div className={style.navManual}>{/* bolinhas que indicam o slide mudam automaticamente */}
                    <label htmlFor="radio1" className={style.manualBtn} onClick={() => mudaSlide(1)}></label>
                    <label htmlFor="radio2" className={style.manualBtn} onClick={() => mudaSlide(2)}></label>
                    <label htmlFor="radio3" className={style.manualBtn} onClick={() => mudaSlide(3)}></label>
                </div>

            </div>
        </div>
    )
}

export default Carrosel