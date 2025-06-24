import { useEffect, useState, useCallback } from "react";
import { View, RefreshControl, FlatList, ScrollView, Text } from "react-native";
import HomeSkeleton from "../theme/skeleton/main/home-skeleton";
import Header from "../ui/header";
import { useToast } from "../global/context/toast-message-context";
import ListedTool from "../ui/listed-tool";
import { homeRoute } from "../api/api";

export default function HomeRoute() {
  const { showToast } = useToast();
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [tools, setTools] = useState([]);

  const fetchData = async (showLoader = true) => {
    if (showLoader) setLoading(true);
    try {
      const response = await homeRoute();
      if (response.data.status == 200) {
        setTools(response.data.tools);
      } else {
        showToast({
          type: "error",
          text1: "Server error",
          text2: "Something went wrong!",
        });
      }
    } catch (e) {
      showToast({
        type: "error",
        text1: "Server error",
        text2: e?.response?.data?.message || "Unknown error",
      });
    }
    if (showLoader) setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await fetchData(false); // Don't show skeleton during pull-to-refresh
    setRefreshing(false);
  }, []);

  return loading ? (
    <HomeSkeleton />
  ) : (
    <View style={{ backgroundColor : "blue", height : "86.5%" }} >
      <Header title={"الرئيسية"} />
      <View >
        {/* <FlatList
          data={tools}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <ListedTool data={item} />}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          contentContainerStyle={{ paddingBottom: 20 }}

        /> */}
        <ScrollView>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
          <Text className="p-6 bg-red-50">hello world</Text>
        </ScrollView>
      </View>
    </View>
  );
}
