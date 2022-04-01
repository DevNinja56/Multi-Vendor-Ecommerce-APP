import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import FastImage from "react-native-fast-image";
import Colors from "../Src/Constants/colors";

const DealsCards = (props) => {
  console.log("URL====>"+props.imageurl)
  return (
    
    <View style={{ ...styles.dealcardStyle, ...props.style }}>
      <TouchableOpacity onPress={props.press} style={styles.imageDealCards}>
        <FastImage
          style={styles.imageDealCardsStyle}
          source={{
            // uri: 'https://unsplash.it/400/400?image=1',
            uri: props.imageurl,
            // headers: { Authorization: 'someAuthToken' },
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  dealcardStyle: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.65,
    marginHorizontal: 8,
    marginVertical: 10,
  },
  imageDealCards: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
    width: "100%",
    height: "100%",
    backgroundColor: "white",
    borderRadius: 5,
    overflow: "hidden",
  },
  imageDealCardsStyle: {
    width: "100%",
    height: "100%",
  },
});

export default DealsCards;
