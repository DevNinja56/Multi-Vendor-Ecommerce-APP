import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";

import StoryScrollView from "../../../components/HomeComponents/StoryScrollView";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const renderItem = (itemData) => {
  return (
    // console.log(itemData)
    <StoryScrollView
      name={itemData.item.title}
      style={styles.item}
      textStyle={styles.title}
    />
  );
};

const MainScreen = (props) => {
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexGrow: 1,
        elevation: 4,
        backgroundColor: "white",
        // borderWidth: 1,
      }}
    >
      <View style={styles.containerItem}>
        <StoryScrollView
          name={"WINTERWEAR"}
          style={styles.item}
          textStyle={styles.title}
          winterWear={props.winterWear}
          imageName={require("../../../assets/witnerCollectionSuits.jpg")}
        />
        <StoryScrollView
          name={"MEN"}
          style={styles.item}
          textStyle={styles.title}
          winterWear={props.menWear}
          imageName={require("../../../assets/mensCollectionSuits.jpg")}
        />
        <StoryScrollView
          name={"WOMEN"}
          style={styles.item}
          textStyle={styles.title}
          winterWear={props.womenWear}
          imageName={require("../../../assets/witnerCollectionSuits.jpg")}
        />
        <StoryScrollView
          name={"KIDS"}
          style={styles.item}
          textStyle={styles.title}
          winterWear={props.kidsWear}
          imageName={require("../../../assets/witnerCollectionSuits.jpg")}
        />
        <StoryScrollView
          name={"FOOTWARE"}
          style={styles.item}
          textStyle={styles.title}
          winterWear={props.footwareWear}
          imageName={require("../../../assets/witnerCollectionSuits.jpg")}
        />
      </View>
    </ScrollView>
  );
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
    fontSize: widthPercentageToDP(2.5),
    fontFamily: "whitney-book",
  },
});

export default MainScreen;
