import React from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import { Ionicons } from "@expo/vector-icons";
import { titleCase } from "../constants/title_case";

const ShoppingCards = (props) => {

  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={props.detaislScreen}>
        <View style={styles.cardStyle}>
          
          <FastImage
            // source={{uri: props.feature_image,}}
            source={{
              uri:  props.feature_image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.backgroundStyle}
          >
            <View style={{ paddingVertical: 10, flex: 1 }}>
              {/* <Image
                source={require("../assets/tag.png")}
                resizeMode="contain"
              /> */}
            </View>
            <View style={styles.raitingCard}>
              <Text style={styles.textPicRaiting}>{props.rating}</Text>
              <Ionicons name="md-star" size={14} color="#FF3E6C" />
              <View
                style={{
                  width: 1,
                  height: "80%",
                  backgroundColor: "#C1C1C1",
                  marginHorizontal: 3,
                }}
              />
              <Text
                style={{ fontSize: 12, marginHorizontal: 5, color: "#C1C1C1" }}
              >
                112
              </Text>
            </View>
          </FastImage>
        </View>
        <View style={styles.descriptioStyle}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View>
              <Text
                style={{
                  fontFamily: "whitney-semi-bold",
                  fontSize: widthPercentageToDP(4.5),
                }}
              >
                {titleCase(props.name)}
              </Text>

              <Text
                style={{
                  fontSize: widthPercentageToDP(3.5),
                  fontFamily: "whitney-book",
                  // flex: 1,
                  marginTop: 3,
                  color: "#9F9F9F",
                }}
              >
                {props.category_name}
              </Text>
            </View>
            <View>
              <Ionicons
                name="md-heart-outline"
                size={widthPercentageToDP(4)}
                color="black"
                style={{ alignSelf: "flex-end" }}
              />
            </View>
          </View>

          <Text
            style={{
              fontSize: widthPercentageToDP(3.5),
              marginTop: 5,
            }}
          >
            <Text
              style={{
                color: "#9F9F9F",
                textDecorationLine: "line-through",
                fontFamily: "whitney-book",
              }}
            >
              {props.regular_Price}
            </Text>
            <Text
              style={{
                color: "black",
                fontFamily: "whitney-semi-bold",
                marginTop: 3,
              }}
            >
              {"  "}
              {props.discounted_Price}
            </Text>
            <Text
              style={{
                color: "#FF3E6C",
                fontFamily: "whitney-book",
                fontSize: widthPercentageToDP(3),
                // marginTop: 5,
                // marginLeft: 5,
              }}
            >
              {"  "}
              {props.discount}% OFF
            </Text>
          </Text>

          <Text
            style={{
              color: "#FF3E6C",
              fontFamily: "whitney-semi-bold",
              fontSize: widthPercentageToDP(3),
              marginTop: 3,
            }}
          >
            Quantity {props.quantity}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 0.5,
    backgroundColor: "white",
    // elevation: 4,
    borderWidth: 0.25,
    borderColor: "#91A1BD",
    // marginVertical: 10,
    // marginHorizontal: 5,
    // borderRadius: 20,
    overflow: "hidden",
  },
  cardStyle: {
    height: 200,
    // paddingHorizontal: 10,
    // paddingTop: 5,
    alignItems: "flex-end",
  },
  backgroundStyle: {
    width: "100%",
    height: "100%",
  },
  raitingCard: {
    marginVertical: 20,
    marginHorizontal: 5,
    alignSelf: "flex-end",
    width: "50%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 12,
    
    justifyContent: "center",
    alignItems: "center",
    elevation:4,
  },
  textPicRaiting: {
    fontSize: 12,
    marginHorizontal: 5,
  },
  descriptioStyle: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "transparent",
    justifyContent: "space-between",
  },
});

export default ShoppingCards;
