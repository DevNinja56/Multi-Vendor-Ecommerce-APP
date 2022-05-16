import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Image,
  TouchableOpacity
} from "react-native";
import FastImage from "react-native-fast-image";

const SeasonCards = (props) => {
  return (
    // <View style={styles.dealcardStyle}>
      <TouchableOpacity onPress={props.press} style={styles.dealcardStyle}>
        
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
    // </View>
  );
};

const styles = StyleSheet.create({
  dealcardStyle: {
    width: Dimensions.get("window").width * 0.45,
    height: Dimensions.get("window").width * 0.58,
    // padding: 8,
    marginVertical: 10,
    marginHorizontal: 8,
    // borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    overflow: "hidden",
    borderRadius: 5,
  },
  imageDealCards: {
    width: "100%",
    height: "100%",

    justifyContent: "center",
    alignItems: "center",

    // borderWidth: 1,
  },

  imageDealCardsStyle: {
    width: "100%",
    height: "100%",
  },
});

export default SeasonCards;
