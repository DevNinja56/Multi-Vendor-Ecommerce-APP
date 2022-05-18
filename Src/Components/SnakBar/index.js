import * as React from "react";
import { View, StyleSheet, Modal, Text } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../Constants/colors";
import { Fonts } from "../../Constants/fonts";

const MyComponent = (props) => {
  return (
    <Modal
      onRequestClose={(text) => console.log("hi")}
      animationType="slide"
      transparent={true}
      visible={props.isVisible}
    >
      <View style={styles.container}>
        <View style={[styles.snakBarView,{
           bottom: props.bottom,
        }]}>
          <Text style={styles.snakText}>{props.text}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  snakBarView: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(7),
    borderTopRightRadius: widthPercentageToDP(1),
    borderTopLeftRadius: widthPercentageToDP(1),
    backgroundColor: Colors.Primary,
    justifyContent: "center",
    alignSelf: "center",
    position: "absolute",
  },
  snakText: {
    fontFamily: Fonts.open_sans_semi_bold,
    paddingLeft: widthPercentageToDP(3),
    color: "#ffffff",
    fontSize: widthPercentageToDP(4),
  },
});

export default MyComponent;
