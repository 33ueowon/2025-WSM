import React from "react";


function CartItem({item, updateQuantity, removeFromCart}){
    const {product, quantity} = item;

    const handleIncrease=()=>{
        updateQuantity(product.id, quantity+1);
    };

    const handleDecrease = () =>{
        if(quantity>1){
            updateQuantity(product.id,quantity-1);
        }
    };
    const handleRemove = () =>{
        removeFromCart(product.id);
    };

    const formatPrice = (price) =>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "원";
    };
    
    return(
        <div className="cartItemContainer">
            <div>
                <img src={product.imgUrl} alt={product.name}/>
            </div>

            <div>
                <h3>{product.name}</h3>
                <p>{formatPrice(product.price)}</p>
            </div>
            <div className="quantityControl">
                <button onClick={handleDecrease} disabled={quantity <= 1}>-</button>
                <span>{quantity}</span>
                <button onClick={handleIncrease}>+</button>
            </div>

            <div className="itemPrice">
                <p>{formatPrice(product.price * quantity)}</p>
            </div>
            <button className="removeButton" onClick={handleRemove}>
                <span>delete</span>
            </button>
        
        </div>
        
    )
}
export default CartItem;