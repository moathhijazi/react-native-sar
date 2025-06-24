import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  TouchableWithoutFeedback,
} from "react-native";
import { Play, ScreenShare, Watch } from "lucide-react-native";
import { BlurView } from "expo-blur";
import { Text } from "~/components/ui/text";
import { Button } from "~/components/ui/button";
import { Avatar } from "react-native-paper";

const posterSource =
  "https://sar-media-bucket.s3.eu-north-1.amazonaws.com/videos/cover/SAR-(cover_video)-[10:07:31]-684fece3e2f04-uploaded.jpg";

const videoDuration = "07:06"; // example duration, pass as prop if needed

export default function ListedVideo({ onPress, video, tool }) {
  const { width } = useWindowDimensions();
  const height = (width * 9) / 16;

  return (
    <>
      <TouchableWithoutFeedback onPress={onPress} activeOpacity={0.8}>
        <View style={{ width, height }}>
          <Image
            source={{ uri: video?.cover_image }}
            style={{ width, height }}
            resizeMode="cover"
          />
          <BlurView
            intensity={70}
            tint="dark"
            style={{
              position: "absolute",
              bottom: 8,
              left: 8,
              paddingHorizontal: 6,
              paddingVertical: 2,
              borderRadius: 4,
              overflow: "hidden",
            }}
          >
            <View className="flex flex-row items-center">
              <Text className="text-white mr-2">فيديو مقترح</Text>
              <ScreenShare size={18} color={"white"} />
            </View>
          </BlurView>
        </View>
      </TouchableWithoutFeedback>
      <View className="w-full flex flex-row items-center justify-between p-2 border-b border-b-gray-200">
        <View className="flex flex-row items-center">
          <Avatar.Image style={{ backgroundColor : "white" , borderWidth : .17}} source={{ uri: tool?.cover_image }} size={55} />
          <View className="ml-6">
            <Text className="font-medium text-lg">{video?.title}</Text>
            <Text className="text-xs color-gray-800">{tool?.title}</Text>
          </View>
        </View>
        {/* navigate to tool page */}
        <Button className="rounded-full">
          <Text>مشاهدة</Text>
        </Button>
      </View>
    </>
  );
}
