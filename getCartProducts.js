export const getCartProductFromLS = () => {
    let cardProducts = localStorage.getItem('cartProductsLS');

    if(!cardProducts) {
        return [];
    }
    cardProducts = JSON.parse(cardProducts);
    return cardProducts;
}