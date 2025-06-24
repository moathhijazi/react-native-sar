import React, { useState } from "react";
import {
  View,
  SafeAreaView,
  TouchableWithoutFeedback,
  Image,
  Dimensions,
  StyleSheet,
} from "react-native";
import { X, Play } from "lucide-react-native";
import { VideoView, useVideoPlayer } from "expo-video";
import { BlurView } from "expo-blur";
import VideoIndieSkeleton from "../../theme/skeleton/indies/video-indie-skeleton";
import { Text } from "~/components/ui/text";

const { width } = Dimensions.get("window");
const height = (width * 9) / 16;

export default function VideoScreenContent({ video, tool, close }) {
  const [started, setStarted] = useState(false);
  const [loading, setLoading] = useState(true);

  const player = useVideoPlayer(
    video?.video_source || "https://www.w3schools.com/html/mov_bbb.mp4",
    (player) => {
      if (started) player.play();
    }
  );

  const handlePlay = () => {
    setStarted(true);
    player.play();
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={{ padding: 8 }}>
        <TouchableWithoutFeedback onPress={close}>
          <View
            style={{
              backgroundColor: "#f1f5f9",
              width: 35,
              height: 35,
              borderRadius: 9999,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <X color="#1f2937" size={20} />
          </View>
        </TouchableWithoutFeedback>
      </View>

      {/* Main video container */}
      <View style={{ width: "100%", height, position: "relative" }}>
        {/* Skeleton overlay */}
        {loading && (
          <View style={styles.skeletonContainer}>
            <VideoIndieSkeleton />
          </View>
        )}

        {!started ? (
          <TouchableWithoutFeedback onPress={handlePlay}>
            <View style={{ width: "100%", height }}>
              <Image
                source={{ uri: video?.cover_image }}
                style={{ width: "100%", height }}
                resizeMode="cover"
                onLoadStart={() => setLoading(true)}
                onLoadEnd={() => setLoading(false)}
              />
              <BlurView
                intensity={70}
                tint="dark"
                style={{
                  position: "absolute",
                  top: height / 2 - 40,
                  left: width / 2 - 40,
                  width: 70,
                  height: 70,
                  borderRadius: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <Play color="#fff" size={28} fill={"white"} />
              </BlurView>
            </View>
          </TouchableWithoutFeedback>
        ) : (
          <VideoView
            player={player}
            style={{ width: "100%", height: "100%" }}
            allowsFullscreen
            allowsPictureInPicture
            useNativeControls
            resizeMode="contain"
          />
        )}
      </View>
      {!loading && (
        <View className="p-4">
            <Text className="text-3xl">{video?.title}</Text> 
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  skeletonContainer: {
    ...StyleSheet.absoluteFillObject, // fills parent View absolutely
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 10,
  },
});
