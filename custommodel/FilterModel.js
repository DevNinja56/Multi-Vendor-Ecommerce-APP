import React, { useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import { Portal } from "@gorhom/portal";
import { Modalize } from "react-native-modalize";
import SizeModel from "../components/SizeModel";
import ColorModel from "../components/ColorModel";
import BrandModel from "../components/BrandModel";
import { Entypo } from "@expo/vector-icons";

const { height } = Dimensions.get("window");
const modalHeight = height * 0.6;

const marginSpace = Dimensions.get("window").height * 0.1;

const FilterModel = (props) => {
  const [checked, setChecked] = useState(0);
  const [userNumber, setUserNumber] = useState(0);
  var gender = [
    "Size",
    "Color",
    "Brand",
    "Categories",
    "Country of Origin",
    "Customer Rating",
  ];

  const changeScreen = (selectedNumber) => {
    console.log(selectedNumber);
    setUserNumber(selectedNumber);
  };

  let content = <SizeModel />;

  if (userNumber === 0) {
    content = <SizeModel />;
  } else if (userNumber === 1) {
    content = <ColorModel />;
  } else if (userNumber === 2) {
    content = <BrandModel />;
  }

  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Text style={styles.text}>FILTERS</Text>
        <TouchableOpacity onPress={props.closeBottomSheet}>
          <Text
            style={{
              color: "#FF3E6C",
              fontSize: 14,
              fontFamily: "whitney-book",
            }}
          >
            CLEAR ALL
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          width: "100%",
          height: 1,
          backgroundColor: "black",
          marginTop: 10,
        }}
      />
      <View style={styles.mainFilterContainer}>
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            {gender.map((gender, key) => {
              return (
                <View key={gender}>
                  {checked == key ? (
                    <TouchableOpacity style={styles.btn}>
                      <View
                        style={{
                          flexDirection: "row",
                          backgroundColor: "white",
                        }}
                      >
                        <Text style={styles.textChecked}>{gender}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(key);
                        changeScreen(key);
                      }}
                      style={styles.btn}
                    >
                      <View style={{ flexDirection: "row" }}>
                        <Text style={styles.textUnChecked}>{gender}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </View>
        <View style={styles.infoContainer}>{content}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 0,

    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "#ffff",
  },
  header: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    // flex: 1,
    fontSize: 14,
    fontFamily: "whitney-book",
    // letterSpacing: 48 * 0.02,
    // alignSelf: "flex-start",
    color: "#9F9F9F",
  },
  textChecked: {
    width: "100%",
    height: "100%",
    fontSize: 16,
    fontFamily: "whitney-semi-bold",
    letterSpacing: 48 * 0.02,
    alignSelf: "flex-start",
    color: "#0F0F0F",
    padding: 10,
  },
  textUnChecked: {
    fontSize: 16,
    fontFamily: "whitney-book",
    // alignSelf: "flex-start",
    color: "#4D4D4D",
    padding: 10,
  },
  mainFilterContainer: {
    height: "100%",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1.2,
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
  infoContainer: {
    flex: 2,
  },

  radio: {
    flexDirection: "row",
  },
  img: {
    height: 40,
    width: 40,
    marginHorizontal: 0,
  },
  btn: {
    flexDirection: "column",
    alignItems: "flex-start",
    // marginVertical: 10,
    // backgroundColor: "white",
  },
});

export default FilterModel;
