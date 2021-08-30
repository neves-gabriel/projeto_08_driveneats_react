import Dish from "./Dish";

export default function Categories(props) {
    
    return (   
        <div class="barra">
            <p class="titulo">{props.categoryTitle}</p>
            <div class="opcoes">
                {props.dishesData.map((dishData) => <Dish
                    dishData={dishData}
                />)}
            </div>
        </div>

    );
}