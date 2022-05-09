import React, { useState } from "react";
import {
  Dimensions,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const { height } = Dimensions.get("screen");
const modalHeight = height * 0.4;

const marginSpace = Dimensions.get("window").height * 0.1;

const GenderModel = (props) => {
  const [checked, setChecked] = useState(0);
  var gender = ["Men", "Boys", "Girls", "Women"];
  return (
    <Modal
      onRequestClose={() => console.log("hiii")}
      visible={props.isGender}
      animationType="slide"
      transparent={true}
    >
      <View style={styles.mainModal}>
        <View style={styles.innerModal}>
          <SafeAreaView style={styles.screen}>
            {/* <Portal>
        <Modalize ref={modalRef} modalHeight={modalHeight}> */}

            <View style={styles.content}>
              <View style={styles.header}>
                <Text style={styles.text}>GENDER</Text>
                <TouchableOpacity onPress={props.closeClick}>
                  <Entypo name="circle-with-cross" size={24} color="black" />
                </TouchableOpacity>
              </View>
              <View>
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: "black",
                    marginTop: 10,
                  }}
                />
                <View style={styles.btn}>
                  {gender.map((gender, key) => {
                    return (
                      <View key={gender}>
                        {checked == key ? (
                          <TouchableOpacity style={styles.btn}>
                            <View style={{ flexDirection: "row" }}>
                              {/* <Image
                                                        style={styles.img}
                                                        source={require('../assets/radioChecked.png')}
                                                    /> */}
                              <Text style={styles.textChecked}>{gender}</Text>
                            </View>
                          </TouchableOpacity>
                        ) : (
                          <TouchableOpacity
                            onPress={() => {
                              setChecked(key);
                            }}
                            style={styles.btn}
                          >
                            <View style={{ flexDirection: "row" }}>
                              {/* <Image
                                                        style={styles.img}
                                                        source={require('../assets/radioUnchecked.png')}
                                                    /> */}
                              <Text style={styles.textUnChecked}>{gender}</Text>
                            </View>
                          </TouchableOpacity>
                        )}
                      </View>
                    );
                  })}
                </View>
              </View>
            </View>
          </SafeAreaView>
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
  screen: {
    flex: 1,
  },
  content: {
    // flex: 1,
    // justifyContent: "space-between",
    // height: modalHeight,
    paddingHorizontal: 20,
    // paddingBottom: marginSpace,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: "white",
  },
  header: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontFamily: "whitney-book",
    // letterSpacing: 48 * 0.02,
    // alignSelf: "flex-start",
    color: "#9F9F9F",
  },
  textChecked: {
    fontSize: 16,
    fontFamily: "whitney-semi-bold",
    // letterSpacing: 48 * 0.02,
    // alignSelf: "flex-start",
    color: "#0F0F0F",
  },
  textUnChecked: {
    fontSize: 16,
    fontFamily: "whitney-book",
    // letterSpacing: 48 * 0.02,
    // alignSelf: "flex-start",
    color: "#4D4D4D",
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
    marginVertical: 10,
  },
});

export default GenderModel;
