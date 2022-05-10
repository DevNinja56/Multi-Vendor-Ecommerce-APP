import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../Constants/fonts";
import { Entypo } from "react-native-vector-icons";
import { commonStyles } from "../../Styles/commonStyles";

const CancelOrderDialog = (props) => {
  return (
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.isCancelOrder}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <Text style={styles.headingStyle}>REASON FOR CANCELLATION:</Text>
          <TouchableOpacity
            style={styles.selectBtn}
            onPress={props.reasonCancelBtn}
          >
            <Text
              style={{
                flex: 1,
                textAlign: "center",
                fontFamily: Fonts.whitney_medium,
              }}
            >
              PLEASE SELECT
            </Text>
            <Entypo name="chevron-down" size={24} color="#707070" />
          </TouchableOpacity>

          <TouchableOpacity
            style={commonStyles.buttonStyle}
            onPress={props.cancelOrder}
          >
            <Text
              style={{ color: "white", fontFamily: Fonts.whitney_semi_bold }}
            >
              CANCEL ORDER
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  innerModal: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(30),
    // borderTopRightRadius: widthPercentageToDP(4),
    // borderTopLeftRadius: widthPercentageToDP(4),
    backgroundColor: "white",
    position: "absolute",
    bottom: "0%",
    justifyContent: "center",
    padding: heightPercentageToDP(2),
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "2%",
  },
  headingStyle: {
    fontFamily: Fonts.whitney_medium,
    fontSize: heightPercentageToDP(2.2),
    color: "black",
  },
  selectBtn: {
    flexDirection: "row",
    borderRadius: heightPercentageToDP(1),
    borderWidth: 1,
    borderColor: "#B4B4B47D",
    padding: heightPercentageToDP(1),
    marginTop: heightPercentageToDP(1),
    alignItems: "center",
  },
});

export default CancelOrderDialog;
