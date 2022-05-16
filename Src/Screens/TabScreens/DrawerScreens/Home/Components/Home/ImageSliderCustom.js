import React, { useState, useRef } from "react";
import { StyleSheet, Dimensions, TouchableOpacity, View } from "react-native";
import Carousel from "./ImageSlider/Carousel";
import { dummyData } from "./ImageSlider/Data";

const ImageSliderCustom = (props) => {
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
