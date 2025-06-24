import * as React from "react";
import { SafeAreaView } from "react-native";
import { BottomNavigation, Icon } from "react-native-paper";
import HomeRoute from "../router/home-route";
import WatchRoute from "../router/watch-route";
import CategoryRoute from "../router/category-route";
import DocumentsRoute from "../router/docuemtns-route";
import Colors from "../theme/colors";
import { Home } from "lucide-react-native";
import { Text } from "~/components/ui/text";

const BottomTabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "home",
      title: "الرئيسية",
      focusedIcon: "home",
      unfocusedIcon: "home",
    },
    {
      key: "watch",
      title: "شاهد",
      focusedIcon: "monitor-screenshot",
      unfocusedIcon: "monitor-screenshot",
    },
    {
      key: "category",
      title: "الاصناف",
      focusedIcon: "grid-large",
      unfocusedIcon: "grid-large",
    },
    {
      key: "documents",
      title: "الوثائق",
      focusedIcon: "file-document-outline",
      unfocusedIcon: "file-document-outline",
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    watch: WatchRoute,
    category: CategoryRoute,
    documents: DocumentsRoute,
  });

  const renderIcon = ({ route, focused, color }) => {
    const iconColor = focused ? "white" : "#999";

    if (focused) {
      return <Icon source={route.focusedIcon} size={24} color={iconColor} />;
    }
    return <Icon source={route.unfocusedIcon} size={25} color={iconColor} />;
  };

  const renderLabel = ({ route }) => {
    return <Text className="text-center text-md">{route.title}</Text>;
  };

  return (
    
      <BottomNavigation
        navigationState={{ index, routes }}
        sceneAnimationType="shifting"
        barStyle={{
          backgroundColor: "white",
          borderTopColor: "#eee",
          borderTopWidth: 1,
          zIndex : 10,
          
        }}
        activeIndicatorStyle={{ backgroundColor: Colors.gold }}
        renderIcon={renderIcon}
        renderLabel={renderLabel}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    
  );
};

export default BottomTabs;
