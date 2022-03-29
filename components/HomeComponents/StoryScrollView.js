import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";



const StoryScrollView = (props) => {
  console.log(props.imageUrl);
  return (
    <View style={styles.screen}>
      {/* <View style={{ ...styles.screen, ...props.style }}> */}
        <TouchableOpacity
          onPress={props.winterWear}
          style={styles.imageContainer}
        >
          <FastImage
            source={{uri:props.imageUrl,priority:FastImage.priority.high}}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.image}
          />
        </TouchableOpacity>
        <Text style={{ ...styles.userText, ...props.textStyle }}>
          {props.name}
        </Text>
      </View>
    // </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    paddingVertical:3
  },
  imageContainer: {
    // borderWidth: 1,
    // borderColor: "#C1B404",
    flex:0.8,
    width: Dimensions.get("window").width * 0.15,
    height: Dimensions.get("window").width * 0.15,
    marginHorizontal:10,
    borderRadius: 5,
    overflow: "hidden",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  userText: {
    textAlign: "center",
    flex:0.2,
  },
});

export default StoryScrollView;
