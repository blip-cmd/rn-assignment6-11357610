// src/CartContext.js
import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const keys = await AsyncStorage.getAllKeys();
        const items = await AsyncStorage.multiGet(keys);
        const cartItems = items
          .filter(item => item[0].startsWith('@cart_'))
          .map(item => JSON.parse(item[1]));
        setCartItems(cartItems);
    
        const total = cartItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
        setTotalPrice(total);
      } catch (e) {
        console.error(e);
      }
    };

    fetchCartItems();
  }, []);

  const addToCart = async (item) => {
    try {
      const cartItem = {
        id: item.id,
        name: item.title,
        description: item.description,
        price: item.price,
        imageKey: item.imageKey,
      };
      const jsonValue = JSON.stringify(cartItem);
      await AsyncStorage.setItem(`@cart_${item.id}`, jsonValue);
      const updatedItems = [...cartItems, cartItem];
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
      setTotalPrice(total);
    } catch (e) {
      console.error(e);
    }
  };

  const removeFromCart = async (id) => {
    try {
      await AsyncStorage.removeItem(`@cart_${id}`);
      const updatedItems = cartItems.filter(item => item.id !== id);
      setCartItems(updatedItems);
      const total = updatedItems.reduce((sum, item) => sum + parseFloat(item.price.replace('$', '')), 0);
      setTotalPrice(total);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;
