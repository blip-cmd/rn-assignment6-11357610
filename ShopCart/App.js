// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './src/HomeScreen';
import CartScreen from './src/CartScreen';
import { SafeAreaView } from 'react-native-safe-area-context';


const Stack = createStackNavigator(); // need  to uninstall
const Drawer = createDrawerNavigator();

//Why won't this work? But i rather have to store it as a  const and call it in App like a component
// function MyDrawer() {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Available Products" component={HomeScreen} />
//       <Drawer.Screen name="Shopping Cart" component={CartScreen} />
//     </Drawer.Navigator>
// );


function MyDrawer() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Available Products" component={HomeScreen} />
      <Drawer.Screen name="Shopping Cart" component={CartScreen} />
    </Drawer.Navigator>
  );
}

function App(){
    return (
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

export default App;
