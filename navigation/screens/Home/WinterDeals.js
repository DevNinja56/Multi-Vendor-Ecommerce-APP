import React from "react";
import { StyleSheet, FlatList } from "react-native";

import { WINTERDUMMY } from "../../../data/dummy-data";
import DealsCards from "../../../components/DealsCards";

const WinterDeals = (props) => {
  const renderWinterItem = (itemData) => {
    return <DealsCards imageUrl={itemData.item.image} press={props.fun} />;
  };
  return (
    <FlatList
      horizontal
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={WINTERDUMMY}
      renderItem={renderWinterItem}
      contentContainerStyle={{ flexGrow: 1 }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    marginVertical: 10,
    marginHorizontal: 10,
    height: "10%",
  },
  title: {
    fontSize: 12,
  },
});

export default WinterDeals;
