import React from "react";
import { StyleSheet, SafeAreaView, View, Text } from "react-native";
import LottieView from "lottie-react-native";
import SimpleHeader from "../Header/simple_header";

const OrderConfirmed = () => {
  return (
    <SafeAreaView>
      <SimpleHeader />
      <View>
        <LottieView
          source={require("../../../assets/animation/animation.json")}
          autoPlay
          loop
        />
        ;
      </View>
    </SafeAreaView>
  );
};

export default OrderConfirmed;
