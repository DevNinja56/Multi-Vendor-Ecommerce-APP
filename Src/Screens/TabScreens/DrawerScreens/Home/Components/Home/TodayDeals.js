import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  FlatList,
  Dimensions,
  View,
  TouchableOpacity,
  Image,
} from "react-native";
import FastImage from "react-native-fast-image";

import DealsCards from "../../../../../../Components/DealsCards";

const renderWinterItem = (itemData) => {
  // console.log("ImagePath \n"+itemData.item.feature_image);
  return <DealsCards imageurl={itemData.item.feature_image} />;
};

const TodayDeals = (props) => {
  const [data, setData] = useState(props.data);

  return (
    <FlatList
      horizontal
      keyExtractor={(item, index) => item.id}
      data={data}
      renderItem={renderWinterItem}
    />
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

export default TodayDeals;
