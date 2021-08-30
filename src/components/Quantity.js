export default function Quantity (props) {

    return (
        <div class={props.checkClass}>
            <span className="remove_qty" onClick={(action) => props.removeQty(action)}>- </span>
            <span className="qty" > {props.dishAmount} </span>
            <span className="add_qty" onClick={(action) => props.addQty(action)}> +</span>
        </div>
    );
}