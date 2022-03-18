import React, { useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { COLORDUMMY } from "../data/dummy-data";

const marginSpace = Dimensions.get("window").height * 0.1;
const ColorModel = (props) => {
  const displayFilterSize = COLORDUMMY;

  const renderItem = (itemData) => {
    return itemData.item.checked ? (
      <TouchableOpacity>
        <View style={styles.content}>
          <View style={styles.textContent}>
            <View style={{ flex: 0.4, flexDirection: "row" }}>
              <MaterialIcons name={"done"} size={24} color={"blue"} />
              <View
                style={{
                  backgroundColor: itemData.item.color,
                  width: 30,
                  height: 20,
                  marginRight: 5,
                }}
              ></View>
            </View>
            <Text
              style={{ fontFamily: "whitney-book", flex: 0.5, marginLeft: 10 }}
            >
              {itemData.item.name}
            </Text>
          </View>
          <Text numberOfLines={2} style={{ fontFamily: "whitney-book" }}>
            533
          </Text>
        </View>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={onChecked.bind(this, itemData.item.id)}>
        <View style={styles.content}>
          <View style={styles.textContent}>
            <View style={{ flex: 0.4, flexDirection: "row" }}>
              <MaterialIcons name={"done"} size={18} color={"black"} />
              <View
                style={{
                  backgroundColor: itemData.item.color,
                  width: 30,
                  height: 20,
                  // marginRight: 5,
                }}
              ></View>
            </View>
            <Text
              numberOfLines={2}
              style={{ fontFamily: "whitney-book", flex: 0.5, marginLeft: 10 }}
            >
              {itemData.item.name}
            </Text>
          </View>
          <Text style={{ fontFamily: "whitney-book" }}>533</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const onChecked = (key) => {
    return displayFilterSize.map((item) => {
      item.checked = item.id === key;
    });
  };

  return (
    <FlatList
      scrollEnabled
      keyExtractor={(item, index) => {
        item.id;
      }}
      data={displayFilterSize}
      renderItem={renderItem}
      contentContainerStyle={{ paddingBottom: marginSpace }}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",

    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffff",
    alignItems: "center",
  },
  textContent: {
    width: "65%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default ColorModel;
