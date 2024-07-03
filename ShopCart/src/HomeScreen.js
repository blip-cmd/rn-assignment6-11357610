// src/HomeScreen.js
import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SafeAreaView, ScrollView } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.button} onPress={() => navigation.toggleDrawer()}>
              <Image source={require('../assets/Menu.png')} />
            </TouchableOpacity>
            <Image source={require('../assets/Logo.png')} style={styles.logo} />
            <View style={styles.icons}>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../assets/Search.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Shopping Cart')}>
                <Image source={require('../assets/shoppingBag.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.section}>
            <Text style={styles.subtitle}>OUR STORY</Text>
            <View style={styles.icons}>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../assets/Listview.png')} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Image source={require('../assets/Filter.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.grid}>
            {[
              { image: require('../assets/dress1.png'), title: 'Office Wear', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress2.png'), title: 'Black', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress3.png'), title: 'Church Wear', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress4.png'), title: 'Lomere', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress5.png'), title: '2IWN', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress6.png'), title: 'Lopo', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress7.png'), title: '2IWN', description: 'reversible angora cardigan', price: '$120' },
              { image: require('../assets/dress3.png'), title: 'lame', description: 'reversible angora cardigan', price: '$120' },
            ].map((item, index) => (
              <View key={index} style={styles.card}>
                <View style={styles.imageContainer}>
                  <Image source={item.image} style={styles.image} />
                  <TouchableOpacity style={styles.addbutton}>
                    <Image source={require('../assets/add_circle.png')} />
                  </TouchableOpacity>
                </View>
                <Text style={styles.itemTitle}>{item.title}</Text>
                <Text style={styles.description}>{item.description}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  scrollViewContainer: {
    flexGrow: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  button: {
    padding: 8,
  },
  logo: {
    width: 120,
    height: 40,
    resizeMode: 'contain',
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  section: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    marginBottom: 16,
  },
  imageContainer: {
    position: 'relative',
  },
  addbutton: {
    position: 'absolute',
    bottom: 8,
    right: 8,
    padding: 8,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'slim',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
  price: {
    fontSize: 20,
    fontWeight: 'slim',
    color: '#FF6347',
    marginTop: 4,
  },
});

export default HomeScreen;
