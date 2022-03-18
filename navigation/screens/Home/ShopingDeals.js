import React from "react";
import { StyleSheet, SafeAreaView, FlatList, ScrollView } from "react-native";

const ShoppingDeals = (props) => {
  return (
    <FlatList
      scrollEnabled={true}
      keyExtractor={(item, index) => item.id}
      data={props.data}
      renderItem={props.renderGridItem}
      numColumns={2}
      contentContainerStyle={{ ...styles.flatlistStyle, ...props.style }}
    />
    // </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  flatlistStyle: {
    // flex: 1,
    flexGrow: 1,
    justifyContent: "center",
    // alignItems: "center",
  },
});

export default ShoppingDeals;
