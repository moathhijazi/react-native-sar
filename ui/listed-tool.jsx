import { View, Text, TouchableWithoutFeedback } from "react-native";
import React, { useEffect } from "react";
import Img from "./media/img-design";
import ImgSlider from "./media/img-slider";

export default function ListedTool({ data }) {
  return (
    <View>
      <View
        style={{ flex: 1 }}
        className="flex flex-row justify-center items-center"
      >
        <ImgSlider images={data.images} />
      </View>
      <Text>{data.title}</Text>
    </View>
  );
}
