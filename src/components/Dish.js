import { useState } from 'react'
import Quantity from './Quantity';

export default function Dish(props) {
    const { imgSrc, imgAlt, dishTitle, dishDescription, dishPrice } = props.dishData;
    const [dishClass, setDishClass] = useState("opcao");
    const [checkClass, setCheckClass] = useState("check");
    const [dishAmount, setDishAmount] = useState(1);

    function removeQty() {
        if (dishAmount <= 1) {
            setDishClass("opcao")
            setCheckClass("check")
            console.log(dishAmount)
            setDishAmount(0)
        } else {
            setDishAmount(dishAmount - 1);
        }
    }

    function addQty() {
        setDishAmount(dishAmount + 1);
    }

    return (   
        <div class= {dishClass} onClick={() => {setDishClass("opcao_selecionada");
            setCheckClass("check_selecionado");}}>
            <div class="container-img">
                <img src={imgSrc} alt={imgAlt}/>
            </div>
            <p class="item">{dishTitle}</p>
            <p class="descricao">{dishDescription}</p>
            <p class="preco">{dishPrice}</p>
            <Quantity checkClass={checkClass} dishAmount={dishAmount} removeQty={removeQty} addQty={addQty} />
        </div>
    );
}