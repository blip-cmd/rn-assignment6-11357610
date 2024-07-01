import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';


const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Home Screen!</Text>
            <Text>These are the Available Products</Text>
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

export default HomeScreen;