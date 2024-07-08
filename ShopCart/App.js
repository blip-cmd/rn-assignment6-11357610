// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import { CartProvider } from './src/CartContext';
import 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Available Products" component={HomeScreen} />
      <Drawer.Screen name="Shopping Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
};

const App = () => {
  return (
    <CartProvider>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </CartProvider>
  );
};

export default App;
