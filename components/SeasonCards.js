import React from "react";
import {
  StyleSheet,
  Dimensions,
  View,
  ImageBackground,
  Image,
} from "react-native";

const SeasonCards = (props) => {
  return (
    <View style={styles.dealcardStyle}>
      <Image
        source={props.image}
        style={styles.imageDealCardsStyle}
        resizeMethod="resize"
        resizeMode="cover"
      />
    </View>
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
