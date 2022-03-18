import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";

const CategoryCards = (props) => {
  return (
    <View style={{ ...styles.mainContainer, ...props.style }}>
      <View style={{ ...styles.imageContainer, ...props.imageContainerstyle }}>
        <FastImage
          source={props.image}
          style={{ ...styles.imageStyle, }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.textStyle} >{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width:widthPercentageToDP(30),
    height: widthPercentageToDP(30),
    // marginHorizontal: 15,
    justifyContent: "center",
    // borderWidth:1,
    alignItems: "center",
  },
  imageContainer: {
    width: widthPercentageToDP(20),
    height: widthPercentageToDP(20),
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginVertical: 10,
    // justifyContent: "center",
    // alignItems: "center",
  },
  dateStyle: {
    fontSize: widthPercentageToDP(3.5),
  },
  textStyle: {
    // width:'80%',
    textAlign: "center",
    fontFamily: "whitney-semi-bold",
    fontSize: widthPercentageToDP(3.5),
    
  },
});

export default CategoryCards;
