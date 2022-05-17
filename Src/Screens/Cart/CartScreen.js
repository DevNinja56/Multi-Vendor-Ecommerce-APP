import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../../Components/Header/simple_header";
import FastImage from "react-native-fast-image";
import { Fonts } from "../../Constants/fonts";
import { commonStyles } from "../../Styles/commonStyles";

const CartScreen = (props) => {
  const dataDummy = [1, 2, 3, 4];
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.itemStyle}>
          <View
            style={{ flex: 0.75, flexDirection: "row", alignItems: "center" }}
          >
            <View style={styles.itemImageStyle}>
              <FastImage
                source={require("../../../assets/seasonimage.png")}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}
              />
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: widthPercentageToDP(4),
                  fontFamily: Fonts.whitney_medium,
                  color: "black",
                }}
              >
                W
              </Text>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: widthPercentageToDP(3.5),
                  fontFamily: Fonts.whitney_light,
                  color: "black",
                }}
              >
                Kurtas
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Entypo
              name="chevron-small-right"
              size={heightPercentageToDP(3)}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SimpleHeader
        headerTitle={"Cart"}
        clickHandler={() => props.navigation.goBack()}
        placement={"left"}
      />
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.screen}>
          <View style={styles.flatList}>
            <View style={{ width: "100%", height: heightPercentageToDP(20) }}>
              <FastImage
                source={require("../../../assets/logoApp.png")}
                resizeMode={FastImage.resizeMode.contain}
                style={styles.image}
              />
            </View>

            <Text
              style={{
                ...styles.headingStyle,
                fontSize: widthPercentageToDP(4.5),
                textAlign: "center",
                color: "black",
              }}
            >
              Hey, it feels so light!
            </Text>
            <Text
              style={{
                fontFamily: Fonts.whitney_light,
                fontSize: widthPercentageToDP(3.75),
                color: "#878585",
                textAlign: "center",
              }}
            >
              There is nothing in your bag. Let's add some items.
            </Text>
          </View>
          <View style={styles.popularStyle}>
            <View style={commonStyles.textTop}>
              <Text
                style={{
                  fontFamily: Fonts.whitney_semi_bold_italic,
                  // backgroundColor: Colors.Primary,
                  color: "white",
                  fontSize: widthPercentageToDP(4),
                  marginVertical: 10,
                  textAlign: "center",
                  paddingLeft: 16,
                }}
              >
                POPULAR ON MYNTRA
              </Text>
            </View>

            <FlatList data={dataDummy} renderItem={renderItem} />
          </View>

          <View
            style={{
              width: "100%",
              flexDirection: "row",
              backgroundColor: "white",
              padding: 10,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={styles.categoriesStyle}>
              <Text style={styles.categoriesText}>MEN</Text>
            </View>

            <View style={styles.categoriesStyle}>
              <Text style={styles.categoriesText}>WOMEN</Text>
            </View>

            <View style={styles.categoriesStyle}>
              <Text style={styles.categoriesText}>KIDS</Text>
            </View>

            <View style={styles.categoriesStyle}>
              <Text style={styles.categoriesText}>FOOTWEAR</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flatList: {
    // flex: 0.3,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    padding: 20,
  },
  cardStyle: {
    height: 133,
    margin: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  imageStyle: {
    flex: 0.25,
    margin: 5,
    // borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    // width: "100%",
    // height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headingStyle: {
    fontFamily: Fonts.whitney_medium,
  },
  textStyle: {
    fontFamily: "whitney-book",
  },
  infoStyle: {
    flex: 0.5,
  },
  iconsStyle: {
    flex: 0.25,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  popularStyle: {
    marginVertical: 25,
    backgroundColor: "white",
    elevation: 4,
  },
  itemStyle: {
    // flex: 0.2,
    flexDirection: "row",
    width: "100%",
    height: 75,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
  itemImageStyle: {
    // flex: 0.25,
    height: heightPercentageToDP(7),
    width: heightPercentageToDP(7),
    margin: 5,
    borderRadius: heightPercentageToDP(7) / 2,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  categoriesStyle: {
    height: heightPercentageToDP(4),
    // width: widthPercentageToDP(17),
    borderRadius: heightPercentageToDP(50),
    borderWidth: 1,
    borderColor: "#4D4D4D",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
  },
  categoriesText: {
    fontFamily: Fonts.whitney_medium,
    fontSize: widthPercentageToDP(3.5),
    paddingHorizontal: widthPercentageToDP(2.5),
    color: "black",
  },
});

export default CartScreen;
