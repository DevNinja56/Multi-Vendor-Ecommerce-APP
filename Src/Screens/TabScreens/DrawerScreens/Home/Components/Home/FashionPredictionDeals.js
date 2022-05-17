import React from "react";
import { StyleSheet, ScrollView, FlatList, Dimensions } from "react-native";

const FashionPredictionDeals = (props) => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{
        flexGrow: 1,
        marginVertical: 10,
        // justifyContent: "center",
        // alignItems: "center",
      }}
    >
      <FlatList
        scrollEnabled
        keyExtractor={(item, index) => {
          item.id;
        }}
        data={props.data}
        renderItem={props.renderGridItem}
        numColumns={3}
        contentContainerStyle={{ ...styles.flatlistStyle, ...props.style }}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  flatlistStyle: {
    // flexGrow: 0,
    // justifyContent: "center",
    // borderWidth: 1,
    // alignItems: "center",
  },
});

export default FashionPredictionDeals;
