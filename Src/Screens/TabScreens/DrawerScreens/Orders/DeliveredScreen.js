import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../../../Constants/colors";
import { Fonts } from "../../../../Constants/fonts";

const DATA = ["1", "2", "3"];

const DeliveredScreen = (props) => {
  const renderItem = (itemData, clicked) => {
    return (
      <View style={styles.cardStyleMainStyle}>
        <View style={styles.topTextlayoutStyle}>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: widthPercentageToDP(5),
              color: "#282828",
            }}
          >
            Order #{itemData.item.id}
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: widthPercentageToDP(4),
              color: "#707070",
            }}
          >
            {itemData.item.order_date}
          </Text>
        </View>
        <View style={{ paddingTop: 10 }}>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: widthPercentageToDP(4),
              color: "#707070",
            }}
          >
            Tracking Number: QWCFVD41K8
          </Text>
        </View>
        <View style={{ ...styles.topTextlayoutStyle, marginTop: 10 }}>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: widthPercentageToDP(4),
              color: "#707070",
            }}
          >
            Items: {itemData.item.items}
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: widthPercentageToDP(4),
            }}
          >
            Total Price:{" "}
            <Text style={{ ...styles.headingStyle, color: "#282828" }}>
              ${itemData.item.amount}
            </Text>
          </Text>
        </View>

        <TouchableOpacity style={styles.buttonStyle} onPress={clicked}>
          <Text
            style={{
              fontFamily: Fonts.whitney_medium,
              color: "white",
              fontSize: widthPercentageToDP(4),
            }}
          >
            DETAILS
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <FlatList
        keyExtractor={(item, index) => {
          item.id;
        }}
        data={props.data}
        renderItem={(item) => renderItem(item, props.detailsSCreen)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardStyleMainStyle: {
    backgroundColor: "white",
    elevation: 4,
    shadowColor: "grey",
    shadowOpacity: 0.8,
    shadowOffset: {
      width: heightPercentageToDP(0),
      height: heightPercentageToDP(0.5),
    },
    marginVertical: 8,
    marginHorizontal: 10,
    padding: 16,
    borderRadius: 5,
  },
  topTextlayoutStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headingStyle: {
    fontFamily: "whitney-semi-bold",
  },
  textStyle: {
    fontFamily: "whitney-book",
  },
  buttonStyle: {
    marginTop: heightPercentageToDP(2),
    padding: heightPercentageToDP(1.5),
    width: widthPercentageToDP(25),
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.Primary,
    // elevation: 4,
  },
});

export default DeliveredScreen;
