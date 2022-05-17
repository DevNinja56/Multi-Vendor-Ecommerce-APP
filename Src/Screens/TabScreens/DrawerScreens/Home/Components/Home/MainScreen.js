import React from "react";
import { StyleSheet, ScrollView, View, FlatList } from "react-native";
import StoryScrollView from "./StoryScrollView";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../../../../../Constants/fonts";

const MainScreen = (props) => {
  const renderItem = (itemData) => {
    return (
      // console.log(itemData)
      <StoryScrollView
        name={itemData.item.name}
        imageUrl={itemData.item.feature_image}
        style={styles.item}
        textStyle={styles.title}
        topCategories={props.topCategories}
      />
    );
  };
  return <FlatList data={props.data} renderItem={renderItem} horizontal />;
};

const styles = StyleSheet.create({
  containerItem: {
    flexDirection: "row",
    height: "100%",
    width: "100%",
    // elevation: 50,
    // flexGrow: 1,
  },

  item: {
    // flex: 1,
    // marginVertical: ,
    marginTop: 5,
    marginHorizontal: 10,
    height: "10%",
  },
  title: {
    marginTop: 5,
    fontSize: widthPercentageToDP(3),
    fontFamily: Fonts.whitney_medium,
    color: "black",
  },
});

export default MainScreen;
