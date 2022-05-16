import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const SersonChecklistCards = (props) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={props.image}
          style={styles.imageStyle}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text
          style={{ fontFamily: "kepler-bold", color: "#0583D8", fontSize: 12 }}
        >
          {props.name}
        </Text>
        <Text style={{ ...styles.dateStyle, ...styles.textStyle }}>
          {props.date}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    // marginRight: 15,
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: Dimensions.get("window").width * 0.2,
    height: Dimensions.get("window").width * 0.2,
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
    fontSize: 8,
  },
  textStyle: {
    fontFamily: "kepler-light",
    color: "#9F9F9F",
  },
});

export default SersonChecklistCards;
