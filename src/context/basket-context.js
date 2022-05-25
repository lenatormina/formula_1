import { createContext, useState } from 'react';

export const BasketContext = createContext();

const BasketContextProvider = ({ children }) => {

  const localBasket = JSON.parse(localStorage.getItem('basket')) || [];
  const [basket, setBasket] = useState( localBasket );

  const addItemBasket = (product, idProduct, size) => {
    if (basket) {
      const index = basket.findIndex(i => i.id === idProduct);
      if (index >= 0) {
        basket[index].sizes.push(size);
        const newBasket = JSON.stringify(basket)
        setBasket(JSON.parse(newBasket));
        localStorage.setItem('basket', newBasket);
        return;
      }
      setBasket([...basket, {...product, sizes: [size]}]);
      localStorage.setItem('basket', JSON.stringify([...basket, {...product, sizes: [size]}]));
    } else {
      setBasket([{...product, sizes: [size]}]);
      localStorage.setItem('basket', JSON.stringify([{...product, sizes: [size]}]));
    }
  }

  const removeItemBasket = (idProduct) => {
    const newBasket = [];
    basket.map((item) => {
      if (item.id !== idProduct) {
        newBasket.push(item);
      }
    })
    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(newBasket));
  }

  const clearBasket = () => {
    setBasket([]);
    localStorage.setItem('basket', JSON.stringify([]));
  }

  return (
    <BasketContext.Provider value={{ basket, addItemBasket, removeItemBasket, clearBasket }}>
      {children}
    </BasketContext.Provider>
  );
};
export default BasketContextProvider;
