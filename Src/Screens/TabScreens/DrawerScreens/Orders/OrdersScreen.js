import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  useWindowDimensions,
  ActivityIndicator
} from "react-native";
import SimpleHeader from "../../../../Components/Header/simple_header";
import DeliveredScreen from "./DeliveredScreen";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import Colors from "../../../../Constants/colors";
import { heightPercentageToDP } from "react-native-responsive-screen";
import HttpClients from "../../../../Redux/utils";
import Loader from '../../../../Components/Loader'

const OrdersScreen = (props) => {
  const detailsSCreen = () => {
    props.navigation.navigate('Order Details');
  };

  const [isLoading, setLoading] = useState(true);
  const [orderData, setOrderData] = useState();
  const [pendingData, setPendingData] = useState();
  const [cancelledData, setCancelledData] = useState();

  useEffect(() => {
    // console.log("Call");
    getDelieverdOrderData();
    getPendingOrderData();
    getCancelledOrderData();

  }, []);


  const getDelieverdOrderData = async () => {
    const res = await HttpClients.get("order/getAll/?status=delieverd");
    console.log(res.data.status);
    if (res.data.status === "success") {
      console.log(res.data.data);
      setOrderData(res.data.data);
      setLoading(false);
    } else {
      console.log("no data available");
      setLoading(false);
    }
  };


  const getPendingOrderData = async () => {
    const res = await HttpClients.get("order/getAll/?status=pending");
    console.log(res.data.status);
    if (res.data.status === "success") {
      console.log(res.data.data);
      setPendingData(res.data.data);
      setLoading(false);
    } else {
      console.log("no data available");
      setLoading(false);
    }
  };


  const getCancelledOrderData = async () => {
    const res = await HttpClients.get("order/getAll/?status=canceled");
    console.log(res.data.status);
    if (res.data.status === "success") {
      console.log(res.data.data);
      setCancelledData(res.data.data);
      setLoading(false);
    } else {
      console.log("no data available");
      setLoading(false);
    }
  };

  let content = <DeliveredScreen />;

  const FirstRoute = () => <DeliveredScreen detailsSCreen={detailsSCreen} data={orderData} />;

  const SecondRoute = () => <DeliveredScreen detailsSCreen={detailsSCreen} data={pendingData} />;

  const ThirdRoute = () => <DeliveredScreen detailsSCreen={detailsSCreen} data={cancelledData} />;

  const renderScene = SceneMap({
    delivered: FirstRoute,
    pending: SecondRoute,
    cancelled: ThirdRoute,
  });

  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: Colors.Primary }}
      labelStyle={{
        fontSize: heightPercentageToDP(2),
        fontFamily: 'whitney-semi-bold'

      }}
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
    { key: "delivered", title: "Delivered" },
    { key: "pending", title: "Pending" },
    { key: "cancelled", title: "Cancelled" },
  ]);

  // if (showScreen == 0) {
  //   content = <Recent />;
  // } else {
  //   content = <YouMissed />;
  // }
  return (
    <View style={styles.screen}>
      <SimpleHeader clickHandler={() => props.navigation.goBack()} headerTitle={'Orders'} />

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

      {isLoading &&
        <Loader
          color={"FF3E6C"}
        />
      }
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
              Delivered
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
              Pending
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 1, overflow: "hidden" }}>
          <TouchableOpacity
            style={{ width: "100%", height: "100%", alignItems: "center" }}
            onPress={() => setShowScreen(2)}
          >
            <Text
              style={
                showScreen == 2 ? styles.activeButton : styles.unActiveButton
              }
            >
              Cancelled
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

export default OrdersScreen;
