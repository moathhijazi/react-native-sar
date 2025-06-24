import React, { useRef, useState } from "react";
import {
  ScrollView,
  View,
  Dimensions,
  StyleSheet,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Image,
} from "react-native";

import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";

const { width, height } = Dimensions.get("window");

// Dummy slides for now
const FirstSlide = () => (
  <View style={styles.slide}>
    <Image
      resizeMode="center"
      style={{ height: 500 }}
      source={require("../../assets/pic/welcome-one.png")}
    />
    <Text className="text-4xl font-bold">مرحبا بك</Text>
  </View>
);
const SecondSlide = () => (
  <View style={styles.slide}>
    <Image
      resizeMode="center"
      style={{ height: 500 }}
      source={require("../../assets/pic/welcome-two.png")}
    />
    <Text className="text-4xl font-bold text-center">من هنا يمكنك مشاهدة المعدات
وما تتضمن المركبات</Text>
  </View>
);
const ThirdSlide = () => (
  <View style={styles.slide}>
    <Image
      resizeMode="center"
      style={{ height: 500 }}
      source={require("../../assets/pic/welcome-three.png")}
    />
    <Text className="text-4xl font-bold text-center"> بالاضافة الى شروحات
 عن اغلب المعدات المستخدمة</Text>
  </View>
);

const slides = [FirstSlide, SecondSlide, ThirdSlide];

export default function FirstOpenProvider({final}) {
  const scrollRef = useRef(null);
  const [index, setIndex] = useState(0);

  const scrollToNextPage = () => {
    if (index < slides.length - 1) {
      scrollRef.current?.scrollTo({ x: width * (index + 1), animated: true });
    } else {
        final(true)
      console.log("Finished onboarding");
    }
  };

  const handleScrollEnd = (e) => {
    const pageIndex = Math.round(e.nativeEvent.contentOffset.x / width);
    setIndex(pageIndex);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        ref={scrollRef}
        onMomentumScrollEnd={handleScrollEnd}
        showsHorizontalScrollIndicator={false}
        style={styles.scrollContainer}
      >
        {slides.map((Slide, i) => (
          <View key={i} style={styles.page}>
            <Slide />
          </View>
        ))}
      </ScrollView>

      {/* Bottom Button */}
      <View style={styles.buttonContainer}>
        <Button onPress={scrollToNextPage}>
          <Text className="text-white">
            {index === slides.length - 1 ? "ابدأ" : "متابعة"}
          </Text>
        </Button>
      </View>

      {/* Dots */}
      <View style={styles.dots}>
        {slides.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index ? styles.activeDot : styles.inactiveDot,
            ]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flexGrow: 0,
    height: height * 0.85,
  },
  page: {
    width,
    height: height * 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  slide: {
    justifyContent: "center",
    alignItems: "center",
    width: width * 0.9,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",

    marginTop : -20 , 
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  activeDot: {
    backgroundColor: "#000",
  },
  inactiveDot: {
    backgroundColor: "#ccc",
  },
  buttonContainer: {
    paddingHorizontal: 20,
    marginBottom: 40,
  },
});
