import React from "react";
import { StyleSheet, FlatList } from "react-native";
import DealsCards from "../../../../../../Components/DealsCards";

const WinterDeals = (props) => {
  const renderWinterItem = (itemData) => {
    return <DealsCards imageurl={itemData.item.image} press={props.fun} />;
  };
  return (
    <FlatList
      horizontal
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={props.data}
      renderItem={renderWinterItem}
      contentContainerStyle={{ flexGrow: 1 }}
      showsHorizontalScrollIndicator={false}
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
