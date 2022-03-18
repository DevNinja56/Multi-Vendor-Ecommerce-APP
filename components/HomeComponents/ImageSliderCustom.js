import React, { useState, useRef } from "react";
import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import Carousel from "./ImageSlider/Carousel";
import { dummyData } from "./ImageSlider/Data";
// import Carousel from "react-native-anchor-carousel";

const ImageSliderCustom = (props) => {
  const [imagesSlides] = useState([
    require("../../assets/slider1.png"),
    require("../../assets/slider2.png"),
    require("../../assets/slider3.png"),
  ]);
  return (
    <View styles={styles.screen}>
      <Carousel
        data={dummyData}
        imageStyle={styles.imageStyle}
        backgroundColorStyle={props.backgroundColorStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
  },
  carousel: {
    height: 200,
  },
  imageStyle: {
    height: 220,
  },
});

export default ImageSliderCustom;
