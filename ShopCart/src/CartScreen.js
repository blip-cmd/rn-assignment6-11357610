import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';


const CartScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome!</Text>
            <Text>These are the Items You Selected</Text>
        </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CartScreen;