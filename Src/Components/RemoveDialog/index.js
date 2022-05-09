import React from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../Constants/colors";
import { Fonts } from "../../Constants/fonts";

const RemoveDialog = (props) => {
  return (
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.isRemove}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <Text style={styles.textStyle}>{props.title}</Text>
          </View>
          <View style={styles.buttonLayout}>
            <TouchableOpacity
              style={{ ...styles.removeButton, backgroundColor: "transparent" }}
              onPress={props.closeClick}
            >
              <Text>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={props.removeClick}
            >
              <Text style={{ color: "white" }}>Remove</Text>
            </TouchableOpacity>
          </View>
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
    height: heightPercentageToDP(18),
    borderRadius: widthPercentageToDP(4),
    // borderTopLeftRadius: widthPercentageToDP(4),
    backgroundColor: "white",
    margin: heightPercentageToDP(5),
    justifyContent: "center",
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "2%",
  },
  textStyle: {
    fontFamily: Fonts.whitney_medium,
    fontSize: heightPercentageToDP(2.5),
    textAlign: "center",
    marginHorizontal: heightPercentageToDP(2),
    alignSelf:'center'
  },
  buttonLayout: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // margin: heightPercentageToDP(2),/
  },
  removeButton: {
    backgroundColor: Colors.buttonRed,
    paddingHorizontal: heightPercentageToDP(3),
    paddingVertical: heightPercentageToDP(1),
    marginHorizontal: heightPercentageToDP(1),
    marginVertical:heightPercentageToDP(1),
    borderRadius: heightPercentageToDP(0.5),
  },
});

export default RemoveDialog;
