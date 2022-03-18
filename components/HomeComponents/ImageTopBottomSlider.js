import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "./ImageSlider/Carousel";
import { dummyData2 } from "./ImageSlider/Data";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const ImageTopBottomSlider = (props) => {
  return (
    <View styles={styles.screen}>
      <Carousel
        data={dummyData2}
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
    height: heightPercentageToDP(15),
  },
  imageStyle: {
    height: heightPercentageToDP(15),
  },
});

export default ImageTopBottomSlider;
