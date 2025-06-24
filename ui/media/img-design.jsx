import { View, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function Img({ source }) {
  return (
    <View style={styles.container}>
      <Image source={{uri : source}} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 16 / 9, // 9:16 vertical ratio
    display : "flex" , 
    justifyContent : "center" , 
    alignItems : "center",

  },
  image: {
    width: '100%',
    height: '100%',
    
  },
});
