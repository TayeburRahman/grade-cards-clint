import { useEffect, useState } from 'react';
import { getStoredCart } from '../fakedb';

const useCart = () => {
    const [cart, setCart] = useState([]);

     useEffect(() => {
        const savedCart = getStoredCart();
        fetch("./Pockmon.json")
        .then(res => res.json())
        .then(products =>{
        if (products.length) {
            const storedCart = [];
            for (const id in savedCart) {
                const addedProduct = products.find(product => product.id === id);
                if (addedProduct) {
                    // set quantity
                    const quantity = savedCart[id];
                    addedProduct.quantity = quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }

        })

    }, [cart]);

    return [cart, setCart];

}

export default useCart;