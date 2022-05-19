import React, { useEffect, useState } from "react";
import { StyleSheet, View, SafeAreaView, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../../Components/Header/simple_header";

import Address from "./Address";
import Bag from "./Bag";
import Payment from "./Payment";
import { Fonts } from "../../Constants/fonts";

const Checkout = (props) => {
  const [screens, setScreen] = useState(0);

  const orderConfirmedScreen = () =>
    props.navigation.navigate("OrderConfirmed");
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
        headerTitle={"Cart"}
        clickHandler={() => props.navigation.goBack()}
        placement={"left"}
      />
      <View style={{backgroundColor:"white"}}>
      <View style={styles.progressStepperLayoutStyle}>
        <View style={styles.progressStepperStyle}>
          <View style={styles.selectLineStyle} />
          <View style={styles.outline}>
            <View
              style={[
                styles.circle,
                {
                  backgroundColor: "#282828",
                },
              ]}
            />
          </View>
          <Text style={styles.selectTextStyle}>Bag</Text>
        </View>
        <View style={styles.progressStepperStyle}>
          <View
            style={
              screens === 1 || screens === 2
                ? styles.selectLineStyle
                : styles.unSelectLineStyle
            }
          />
          {screens === 1 || screens === 2 ? (
            <View style={styles.outline}>
              <View
                style={[
                  styles.circle,
                  {
                    backgroundColor:
                      screens === 1 || screens === 2 ? "#282828" : "#C5C5C5",
                  },
                ]}
              />
            </View>
          ) : (
            <View
              style={[styles.circle, { 
                marginLeft: widthPercentageToDP(-2.5),
                backgroundColor:
                screens === 1 || screens === 2 ? "#282828" : "#C5C5C5", 
              }]}
            />
          )}
          <Text
            style={
              screens === 1 || screens === 2
                ? styles.selectTextStyle
                : styles.unSelectTextStyle
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
          {screens === 2 ? (
            <View style={styles.outline}>
              <View style={[styles.circle,{
                 backgroundColor: screens === 2 ? "#282828" : "#C5C5C5",
              }]} />
            </View>
          ) : (
            <View
              style={[
                styles.circle,
                {
                  marginLeft: widthPercentageToDP(-2.5),
                  backgroundColor: screens === 2 ? "#282828" : "#C5C5C5",
                },
              ]}
            />
          )}
          <Text
            style={
              screens === 2 ? styles.selectTextStyle : styles.unSelectTextStyle
            }
          >
            Payment
          </Text>
        </View>
      </View>
      </View>
      <View style={styles.contentStyle}>
        {screens == 0 ? (
          <Bag screenSet={screenSet} />
        ) : screens == 1 ? (
          <Address screenSet={screenSet} />
        ) : screens == 2 ? (
          <Payment screenSet={orderConfirmedScreen} />
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
    paddingVertical: heightPercentageToDP(2),
    flexDirection: "row",
    justifyContent: "space-between",
    width:widthPercentageToDP(95),
    alignSelf:"center",
    //paddingHorizontal: heightPercentageToDP(1),
    //elevation: 2,
    //backgroundColor:"red"
  },
  progressStepperStyle: {
    // flex:0.25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  selectLineStyle: {
    backgroundColor: "#04A48E",
    width: widthPercentageToDP(13),
    marginRight: 10,
    height: 1,
  },
  selectTextStyle: {
    fontFamily: Fonts.whitney_semi_bold,
    fontSize: widthPercentageToDP(4),
    color: "black",
    marginLeft: widthPercentageToDP(2),
  },
  unSelectLineStyle: {
    backgroundColor: "#C5C5C5",

    width: widthPercentageToDP(13),
    marginRight: 10,
    height: 1,
  },
  unSelectTextStyle: {
    fontFamily: Fonts.whitney_medium,
    color: "#C5C5C5",
    fontSize: widthPercentageToDP(4),
    marginLeft: widthPercentageToDP(2),
  },
  contentStyle: {
    flex: 1,
    // marginVertical:10,
  },
  outline: {
    width: widthPercentageToDP(3),
    height: widthPercentageToDP(3),
    borderRadius: widthPercentageToDP(3) / 2,
    borderColor: "#04A48E",
    borderWidth: widthPercentageToDP(0.3),
    marginLeft: widthPercentageToDP(-2.5),
    justifyContent: "center",
    alignItems: "center",
  },
  circle: {
    width: widthPercentageToDP(1.5),
    height: widthPercentageToDP(1.5),
    borderRadius: widthPercentageToDP(1.5) / 2,
  },
});

export default Checkout;
