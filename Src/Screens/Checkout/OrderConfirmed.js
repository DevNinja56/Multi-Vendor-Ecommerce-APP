import React from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import LottieView from "lottie-react-native";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../../Src/Constants/fonts";

import { StackActions } from "@react-navigation/native";
import SimpleHeader from "../../Components/Header/simple_header";
import Colors from "../../Constants/colors";
import { commonStyles } from "../../Styles/commonStyles";

const OrderConfirmed = ({ navigation }) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SimpleHeader
        clickHandler={() => navigation.dispatch(StackActions.popToTop())}
      />
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.4,
            padding: 16,
          }}
        >
          <LottieView
            style={{ height: "100%", width: "100%" }}
            source={require("../../../assets/animation/tick_animation.json")}
            autoPlay
            loop
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 0.2, justifyContent: "center" }}>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(3),
              textAlign: "center",
            }}
          >
            Congratulations. Your order is accepted.
          </Text>
        </View>
        <View style={{ flex: 0.2, justifyContent: "space-between" }}>
          <Text
            style={{
              fontFamily: Fonts.whitney_medium,
              fontSize: heightPercentageToDP(1.75),
              textAlign: "center",
              margin: heightPercentageToDP(2),
            }}
          >
            Thank you for your purchase! Your items are on the way and should
            arrive shortly.
          </Text>

          <TouchableOpacity
            style={{ ...commonStyles.buttonStyle, ...styles.buttonStyle }}
          >
            <Text
              style={{
                ...styles.headerText,
                color: "white",
                fontSize: heightPercentageToDP(2),
              }}
            >
              CHECK ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: Fonts.open_sans_semi_bold,
  },

  buttonStyle: {
    margin: heightPercentageToDP(2),
  },
});

export default OrderConfirmed;
