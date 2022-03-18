import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import FastImage from 'react-native-fast-image';

const FashionPredictionCards = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <FastImage
          source={props.image}
          style={styles.imageStyle}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={{ ...styles.dateStyle, ...styles.textStyle }}>
          {props.date}
        </Text>
        <Text style={{ fontFamily: "whitney-semi-bold",fontSize:widthPercentageToDP(3.5) }}>{props.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    marginHorizontal: 15,
    justifyContent: "space-between",
    alignItems: "center",
  },
  imageContainer: {
    width: widthPercentageToDP(20),
    height: widthPercentageToDP(20),
    //borderRadius:widthPercentageToDP(20) /2,
    overflow: "hidden",
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  dateStyle: {
    fontSize: widthPercentageToDP(2.7),
  },
  textStyle: {
    fontFamily: "whitney-light",
  },
});

export default FashionPredictionCards;
