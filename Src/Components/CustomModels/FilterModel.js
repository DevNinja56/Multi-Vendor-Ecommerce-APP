import React, { useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
  Image,
  Modal,
} from "react-native";

import SizeModel from "../../Components/SizeModel";
import ColorModel from "../../Components/ColorModel";
import BrandModel from "../../Components/BrandModel";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../Constants/colors";
import { Fonts } from "../../Constants/fonts";

const { height } = Dimensions.get("window");
const modalHeight = height * 0.6;

const marginSpace = Dimensions.get("window").height * 0.5;

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
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.isFilter}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <View style={styles.header}>
            <Text style={styles.text}>FILTERS</Text>
            <TouchableOpacity onPress={props.onClearClick}>
              <Text
                style={{
                  color: "#FF3E6C",
                  fontSize: widthPercentageToDP(4),
                  fontFamily: Fonts.whitney_medium,
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
          {/* <View style={styles.content}> */}
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
                          style={{ ...styles.btn }}
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
          <View
            style={{
              flexDirection: "row",
              height: heightPercentageToDP(6),
              // height: "100%",
              justifyContent: "center",
              alignItems: "center",
              // alignSelf: "flex-end",
              borderTopWidth: heightPercentageToDP(0.1),
              // borderWidth: 1,
              borderTopColor: "#4D4D4D",
              paddingVertical: heightPercentageToDP(0.5),
            }}
          >
            <TouchableOpacity
              onPress={props.closeClick}
              style={styles.buttonApply}
            >
              <Text
                style={{
                  color: "#4D4D4D",
                  fontFamily: Fonts.whitney_semi_bold,
                  fontSize: widthPercentageToDP(4.5),
                }}
              >
                Close
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: heightPercentageToDP(0.1),
                height: "50%",
                backgroundColor: "#4D4D4D",
              }}
            />
            <TouchableOpacity style={styles.buttonApply}>
              <Text
                style={{
                  color: Colors.Primary,
                  fontFamily: Fonts.whitney_semi_bold,
                  fontSize: widthPercentageToDP(4.5),
                }}
              >
                Apply
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  mainModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
  },
  innerModal: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(70),
    borderTopRightRadius: widthPercentageToDP(4),
    borderTopLeftRadius: widthPercentageToDP(4),
    backgroundColor: "white",
    position: "absolute",
    bottom: "0%",
  },
  bottomView: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    position: "absolute",
    bottom: "2%",
  },
  content: {
    // flex: 1,
    height: "85%",
    paddingHorizontal: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
    marginBottom: marginSpace,
  },
  header: {
    // flex: 0.2,
    // height: "5%",
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  text: {
    // flex: 1,
    fontSize: widthPercentageToDP(4.5),
    fontFamily: Fonts.whitney_semi_bold,
    // letterSpacing: 48 * 0.02,
    // alignSelf: "flex-start",
    color: "black",
  },
  textChecked: {
    width: "100%",
    height: "100%",
    fontSize: widthPercentageToDP(4.5),
    fontFamily: Fonts.whitney_medium,
    letterSpacing: 48 * 0.02,
    alignSelf: "flex-start",
    color: "black",
    padding: 10,
    // borderWidth: 1,
  },
  textUnChecked: {
    width: "100%",
    fontSize: widthPercentageToDP(4.5),
    fontFamily: Fonts.whitney_light,
    // alignSelf: "flex-start",
    color: "grey",
    // borderWidth: 1,
    padding: 10,
  },
  mainFilterContainer: {
    flex: 1,
    // height: "80%",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1.2,
    backgroundColor: "#F5F5F5",
    height: "100%",
  },
  infoContainer: {
    flex: 2,
    // height:'80%',s
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
    // flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    // marginVertical: 10,
    // backgroundColor: "white",
  },
  buttonApply: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FilterModel;
