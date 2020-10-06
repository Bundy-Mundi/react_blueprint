import React from "react";

const ProductCard = ({ title, price }) => {
    return(
        <div class="max-h-md shadow bg-white p-4">
            <h3 class="text-xl">{title}</h3>
            <p>$ {price}</p>
            <button class="border border-green-500 hover:bg-green-500 px-6 py-2 rounded font-bold">Buy</button>
            <button class="border border-blue-500 hover:bg-blue-500 px-6 py-2 rounded font-bold">Cart</button>
        </div>
    )
};

export default ProductCard;