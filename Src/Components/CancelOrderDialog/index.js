import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../Constants/fonts";

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
        justifyContent:'center',
        padding:heightPercentageToDP(2)
      },
      bottomView: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        position: "absolute",
        bottom: "2%",
      },
      headingStyle:{
          fontFamily:Fonts.whitney_medium,
          fontSize:heightPercentageToDP(2.2),
          color:'black',
      },
});

export default CancelOrderDialog;
