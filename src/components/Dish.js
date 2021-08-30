import { useState } from 'react'

export default function Dish(props) {
    const { imgSrc, imgAlt, dishTitle, dishDescription, dishPrice } = props.dishData;
    const [dishClass, setDishClass] = useState("opcao");

    return (   
        <div class= {dishClass} onClick={() => setDishClass("opcao_selecionada")}>
            <div class="container-img">
                <img src={imgSrc} alt={imgAlt}/>
            </div>
            <p class="item">{dishTitle}</p>
            <p class="descricao">{dishDescription}</p>
            <p class="preco">{dishPrice}</p>
            <p class="check"></p>
        </div>
    );
}