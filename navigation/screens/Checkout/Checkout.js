import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../Header/simple_header";
import Address from "./Address";
import Bag from "./Bag";
import Payment from "./Payment";

const Checkout = (props) => {
  const [screens, setScreen] = useState(0);

  const orderConfirmedScreen= ()=>props.navigation.navigate("OrderConfirmed");
  const screenSet = (num) => {
    console.log("Call: " + num);
    setScreen(num);
  };
  useEffect(() => {
    // let content = <Bag screenSet={screenSet} />;
    // // screenSet();
    // if (screens == 0) {
    //   return (content = <Bag screenSet={screenSet} />);
    // } else if (screens == 1) {
    //   return (content = <Address screenSet={screenSet} />);
    // } else if (screens == 2) {
    //   return (content = <Payment screenSet={screenSet} />);
    // }
  }, [screens]);

  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader
        headerTitle={"Checkout"}
        clickHandler={() => props.navigation.goBack()}
        placement={"left"}
      />
      <View style={styles.progressStepperLayoutStyle}>
        <View style={styles.progressStepperStyle}>
          <View style={styles.selectLineStyle} />

          <Text style={styles.selectTextStyle}>Bag</Text>
        </View>
        <View style={styles.progressStepperStyle}>
          <View
            style={
              screens === 1||screens===2 ? styles.selectLineStyle : styles.unSelectLineStyle
            }
          />
          <Text
            style={
              screens === 1||screens===2 ? styles.selectTextStyle : styles.unSelectTextStyle
            }
          >
            Address
          </Text>
        </View>
        <View style={styles.progressStepperStyle}>
          <View
            style={
              screens === 2 ? styles.selectLineStyle : styles.unSelectLineStyle
            }
          />
          <Text
            style={
              screens === 2 ? styles.selectTextStyle : styles.unSelectTextStyle
            }
          >
            Payment
          </Text>
        </View>
      </View>

      <View style={styles.contentStyle}>
        {screens == 0 ? (
          <Bag screenSet={screenSet}/>
        ) : screens == 1 ? (
          <Address screenSet={screenSet}/>
        ) : screens == 2 ? (
          <Payment screenSet={orderConfirmedScreen}/>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  progressStepperLayoutStyle: {
    backgroundColor: "white",
    paddingVertical: heightPercentageToDP(2),
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: heightPercentageToDP(1),
    elevation: 2,
  },
  progressStepperStyle: {
    // flex:0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectLineStyle: {
    backgroundColor: "#04A48E",
    width: widthPercentageToDP(10),
    marginRight: 10,
    height: 1,
  },
  selectTextStyle: {
    fontFamily: "whitney-semi-bold",
    fontSize: heightPercentageToDP(2),
    color: "black",
  },
  unSelectLineStyle: {
    backgroundColor: "#C5C5C5",

    width: widthPercentageToDP(10),
    marginRight: 10,
    height: 1,
  },
  unSelectTextStyle: {
    fontFamily: "whitney-medium",
    color: "#C5C5C5",
    fontSize: heightPercentageToDP(2),
  },
  contentStyle: {
    flex: 1,
    // marginVertical:10,
  },
});

export default Checkout;
