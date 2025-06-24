import React, { useRef, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
  Text
} from 'react-native';
import { BlurView } from 'expo-blur';


const { width } = Dimensions.get('window');
const height = width * (9 / 16); // 16:9 ratio

export default function ImgSlider({ images = [] }) {
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);

  const handleScroll = (event) => {
    const scrollX = event.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(scrollX / width);
    setIndex(currentIndex);
  };

  const renderItem = ({ item }) => (
    <TouchableWithoutFeedback>
      <View style={styles.slide}>
        <Image source={{ uri: item.image_source }} style={styles.image} resizeMode="cover" />
      </View>
    </TouchableWithoutFeedback>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        renderItem={renderItem}
        keyExtractor={(_, i) => i.toString()}
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ zIndex: 10 }}
      />

      {/* This BlurView is now fixed above the slider */}
      <BlurView
        intensity={40}
        tint="light"
        style={styles.indexBox}
        pointerEvents="none"
      >
        <Text style={styles.indexText}>{index + 1} / {images.length}</Text>
      </BlurView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
    position: 'relative', // ensure overlay works
  },
  slide: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  indexBox: {
    position: 'absolute',
    top: 10,
    right: 10,
    borderRadius: 12,
    paddingHorizontal: 10,
    paddingVertical: 4,
    overflow: 'hidden',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    zIndex : 1000,
    fontSize : 10
   
  },
  indexText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize : 11
  },
});
