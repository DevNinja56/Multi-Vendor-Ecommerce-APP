import React, { useEffect, useState } from "react";
import { View, StyleSheet, useWindowDimensions } from "react-native";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Recent from "./components/Recent";
import YouMissed from "./components/YouMissed";
import Colors from "../../Constants/colors";
import SimpleHeader from "../../Components/Header/simple_header";
import httpClients from "../../Redux/utils";
import { useSelector } from "react-redux";
import Loader from "../../Components/Loader";

const NotificationScreen = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const userToken = useSelector((state) => state.user.userToken);

  const getAllNotifications = async () => {
    const res = await httpClients.get("notification/getAll", {
      headers: {
        Authorization: userToken,
      },
    });
    console.log("Data===>" + res.data.data);

    setData(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  const FirstRoute = () => {
    return isLoading ? <Recent /> : <Recent dataList={data.Recent} />;
  };

  const SecondRoute = () => {
    return isLoading ? <YouMissed /> : <YouMissed dataList={data.Earlier} />;
  };

  const renderScene = SceneMap({
    recent: FirstRoute,
    youmissed: SecondRoute,
  });
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.Primary }}
      style={{
        backgroundColor: "white",
      }}
      inactiveColor={"grey"}
      activeColor={Colors.Primary}
    />
  );

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: "recent", title: "Recent" },
    { key: "youmissed", title: "You Missed" },
  ]);

  return (
    <View style={styles.screen}>
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"Notifications"}
      />
      {isLoading ? (
        <Loader color={Colors.Primary} />
      ) : (
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={{ width: layout.width }}
          renderTabBar={renderTabBar}
          style={{
            backgroundColor: "white",
          }}
        />
      )}
      {/* <View
        style={{
          width: "100%",
          flex: 0.04,
          elevation: 4,
          flexDirection: "row",
          backgroundColor: "white",
          padding: 20,
        }}
      >
        <View style={{ flex: 1, overflow: "hidden" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={() => setShowScreen(0)}
          >
            <Text
              style={
                showScreen == 0 ? styles.activeButton : styles.unActiveButton
              }
            >
              Recent
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, overflow: "hidden" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={() => setShowScreen(1)}
          >
            <Text
              style={
                showScreen == 1 ? styles.activeButton : styles.unActiveButton
              }
            >
              You Missed
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ flexGrow: 1, flex: 0.8 }}>
        {content}
      </ScrollView> */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  activeButton: {
    fontFamily: "kepler-bold",
    fontSize: 20,
    color: "#FF2C5E",
    textDecorationLine: "underline",
  },
  unActiveButton: {
    fontFamily: "kepler-bold",
    fontSize: 20,
    color: "#C9C9C9",
  },
});

export default NotificationScreen;
