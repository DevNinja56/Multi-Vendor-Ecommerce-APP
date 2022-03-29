import React from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";

const SearchScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.searchLayoutStyles}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <TextInput
            style={{ flex: 1, marginLeft: 10 }}
            placeholder="Search For Brands & Products"
          />
        </View>

        <FastImage>
            
        </FastImage>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchLayoutStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 16,
    elevation: 4,
  },
});

export default SearchScreen;
