import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";
import { NOTIFICATOINDUMMY } from "../../../../data/dummy-data";

const renderItem = (itemData) => {
  console.log(itemData);
  return (
    <View style={styles.screen}>
      <View style={{ flex: 0.2 }}>
        <View
          style={{
            borderRadius: 50 / 2,
            backgroundColor: itemData.item.color,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            width: 50,
          }}
        >
          <FontAwesome5 name={itemData.item.icon} size={18} color="white" />
        </View>
      </View>
      <View style={{ flex: 0.8, padding: 5 }}>
        <Text
          style={{
            fontFamily: "whitney-semi-bold",
            fontSize: 16,
            marginVertical: 2.5,
          }}
        >
          {itemData.item.title}
        </Text>
        <Text
          style={{
            fontFamily: "whitney-book",
            fontSize: 12,
            color: "#B1B1B1",
            marginVertical: 2.5,
          }}
        >
          {itemData.item.time}
        </Text>
        <Text
          style={{
            fontFamily: "whitney-book",
            fontSize: 14,
            color: "grey",
            marginVertical: 2.5,
          }}
        >
          {itemData.item.message}
        </Text>
      </View>
    </View>
  );
};

const Recent = () => {
  return (
    <FlatList
      scrollEnabled={true}
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={NOTIFICATOINDUMMY}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListStyle}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    padding: 10,
    margin: 10,
    elevation: 4,
    borderRadius: 5,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
  },
  flatListStyle: {
    flexGrow: 0,
  },
});

export default Recent;
