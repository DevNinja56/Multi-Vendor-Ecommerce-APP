import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../Constants/fonts";

const ReasonForCancelDialog = (props) => {
  const reasons = [
    "Not Interested",
    "Price Too High",
    "Delivery Charges Too High",
    "Delivery Time is Too Long",
    "Product is not Required anymore",
    "Change in Order Details",
    "Duplicate Order",
    "Change of Mind",
    "Test Order",
  ];
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={props.closeClick}>
        <Text
          style={{
            fontFamily: Fonts.whitney_medium,
            fontSize: heightPercentageToDP(2),
            marginVertical: heightPercentageToDP(1),
            color: "white",
          }}
        >
          {item}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.reasonCancel}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <Text
            style={{
              fontFamily: Fonts.whitney_medium,
              fontSize: heightPercentageToDP(2),
              color: "black",
            }}
          >
            REASON FOR CANCELLATION:
          </Text>
          <View style={styles.reasonStyle}>
            <Text
              style={{
                fontFamily: Fonts.whitney_medium,
                color: "#C4C4C4",
                fontSize: heightPercentageToDP(2),
              }}
            >
              Please Select
            </Text>
            <FlatList data={reasons} renderItem={renderItem} />
          </View>
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
    height: heightPercentageToDP(55),
    // borderTopRightRadius: widthPercentageToDP(4),
    // borderTopLeftRadius: widthPercentageToDP(4),
    backgroundColor: "white",
    position: "absolute",
    bottom: "0%",

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
  reasonStyle: {
    backgroundColor: "#878787D9",
    margin: heightPercentageToDP(1),
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1),
  },
});

export default ReasonForCancelDialog;
