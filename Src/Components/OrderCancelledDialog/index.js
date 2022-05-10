import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import LottieView from "lottie-react-native";
import { Fonts } from "../../Constants/fonts";
import { Entypo } from "react-native-vector-icons";
import { DeleteIcon } from "../../../assets/svg";
import Colors from "../../Constants/colors";

const OrderCancelledDialog = (props) => {
  return (
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.orderCancelled}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <TouchableOpacity
            style={styles.locationCardDelete}
            onPress={props.closeClick}
          >
            <Entypo name="cross" size={24} color="white" />
          </TouchableOpacity>
          <View
            style={{
              height: "50%",
              width: "100%",
              //   justifyContent: "center",
              alignItems: "center",
            }}
          >
            <LottieView
              style={{ height: "100%", width: "100%" }}
              source={require("../../../assets/animation/order_cancel_animation.json")}
              autoPlay
              loop
              resizeMode="cover"
            />
          </View>
          <Text
            style={{
              fontFamily: Fonts.whitney_semi_bold,
              fontSize: heightPercentageToDP(3),
              marginVertical: heightPercentageToDP(1),
              textAlign: "center",
              color: "black",
            }}
          >
            ORDER CANCELED
          </Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.29)",
    justifyContent: "center",
  },
  innerModal: {
    // width: widthPercentageToDP(100),
    height: heightPercentageToDP(37),
    borderRadius: widthPercentageToDP(4),
    // borderTopLeftRadius: widthPercentageToDP(4),
    backgroundColor: "white",
    margin: heightPercentageToDP(5),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "2%",
  },

  locationCardDelete: {
    alignSelf: "flex-end",
    backgroundColor: Colors.Primary,
    padding: heightPercentageToDP(0.2),
    height: heightPercentageToDP(4),
    width: heightPercentageToDP(4),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: heightPercentageToDP(4) / 2,
    position: "absolute",
    right: "-5%",
    top: "-5%",
  },
});

export default OrderCancelledDialog;
