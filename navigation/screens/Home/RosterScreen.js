import React, { useRef, useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import FastImage from "react-native-fast-image";
import { MaterialCommunityIcons, AntDesign } from "@expo/vector-icons";
import { PortalProvider } from "@gorhom/portal";
import Header from "../Header";

import ShoppingDeals from "./ShopingDeals";
import { PRODUCTSDUMMY } from "../../../data/dummy-data";
import ShoppingCards from "../../../components/ShoppingCards";
import GenderModel from "../../../custommodel/GenderModel";
import SortingModel from "../../../custommodel/SortingModel";
import FilterModel from "../../../custommodel/FilterModel";

import Httpclients from "../../../Redux/utils";

import { BottomSheet } from "react-native-elements";
import Colors from "../../../constants/constants";
import Loader from '../Components/Loader'


const grey = "#91A1BD";
const RosterScreen = (props) => {
  const [data, setData] = useState();
  const [isVisible, setIsVisible] = useState(false);
  const [whichScreen, setWhichScreen] = useState(0);
  const [isLoading, setLoading] = useState(false)

  let content = <GenderModel />;

  const closeBottomSheet = () => {
    setIsVisible(false);
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  if (whichScreen === 0) {
    content = <GenderModel closeBottomSheet={closeBottomSheet} />;
  } else if (whichScreen === 1) {
    content = <SortingModel closeBottomSheet={closeBottomSheet} />;
  } else if (whichScreen === 2) {
    content = <FilterModel closeBottomSheet={closeBottomSheet} />;
  }

  const detaislScreen = () => {
    props.navigation.navigate("Details");
  };

  const renderGridItem = (itemData) => {
    return (
      <ShoppingCards
        detaislScreen={detaislScreen}
        name={itemData.item.name}
        feature_image={itemData.item.feature_image}
        category_name={itemData.item.category_name}
        discounted_Price={itemData.item.discounted_Price}
        quantity={itemData.item.quantity}
        regular_Price={itemData.item.regular_Price}
        rating={itemData.item.rating}
        discount={itemData.item.discount}
      />
    );
  };

  const NewMorph = ({ children, size, style }) => {
    return (
      <View style={styles.topShadow}>
        <View style={styles.bottomShadow}>
          <View
            style={[
              styles.inner,
              {
                width: size || 40,
                height: size || 40,
                borderRadius: size / 2 || 40 / 2,
              },
              style,
            ]}
          >
            {children}
          </View>
        </View>
      </View>
    );
  };

  const getAllProducts = async () => {
    setLoading(true)
    const res = await Httpclients.get("product/getAll");
    setLoading(false);
    console.log(res.data.status);
    console.log(res.data.data);
    if (res.data.data.length) {
      setData(res.data.data);
      console.log(res.data.data);
    } else {
      console.log("no data available");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header clickHandler={() => props.navigation.goBack()} />
      <View style={styles.mainContainer}>
        <View style={{ flex: 1 }}>
          <FastImage
            source={require("../../../assets/promocode.png")}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.imageContainer}
          />

          <ShoppingDeals data={data} renderGridItem={renderGridItem} />

          <View style={styles.buttonConatainer}>
            <View
              style={{
                flex: 1,
                height: "100%",

                justifyContent: "center",
                // borderRightWidth: 0.2,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setWhichScreen(0);
                  setIsVisible(true);
                }}
              >
                <Text
                  style={{
                    fontSize: widthPercentageToDP(3.5),
                    color: "grey",
                    fontFamily: "whitney-semi-bold",
                    textAlign: "center",
                  }}
                >
                  MEN
                </Text>
              </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 0.3, height: "60%" }} />

            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setWhichScreen(1);
                  setIsVisible(true);
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="sort"
                    size={widthPercentageToDP(3.5)}
                    color="grey"
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: widthPercentageToDP(3.5),
                      color: "grey",
                      fontFamily: "whitney-semi-bold",
                      textAlign: "center",
                    }}
                  >
                    SORT
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={{ borderWidth: 0.3, height: "60%" }} />
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setWhichScreen(2);
                  setIsVisible(true);
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialCommunityIcons
                    name="filter"
                    size={widthPercentageToDP(3.5)}
                    color="grey"
                  />
                  <Text
                    style={{
                      marginLeft: 10,
                      fontSize: widthPercentageToDP(3.5),
                      color: "grey",
                      fontFamily: "whitney-semi-bold",
                      textAlign: "center",
                    }}
                  >
                    FILTER
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <BottomSheet modalProps={{}} isVisible={isVisible}>
            {content}
          </BottomSheet>
        </View>
      </View>
      {isLoading &&
        <Loader
          color={"FF3E6C"}
        />
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },

  mainContainer: {
    flex: 1,

    backgroundColor: "#fcfcfc",
    // marginTop: 32,
    // marginHorizontal: 32,
  },
  topContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // borderWidth: 1,
  },
  inner: {
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#d2def2",
    borderWidth: 1,
    shadowColor: grey,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },

  headingStyle: {
    color: Colors.Primary,
    fontFamily: "open-sans-bold",
    fontSize: 20,
  },
  imageContainer: {
    margin: 10,
    height: heightPercentageToDP(10),
    width: widthPercentageToDP(90),
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    backgroundColor: "white",
    alignSelf: "center",
    // flex: 1,
    // backgroundColor: "#f6f6f6",
    // justifyContent: "center",
    // alignItems: "center",
  },
  buttonConatainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    // backgroundColor: "rgba(251, 251, 251, 0.8)",
    // backgroundColor: "transparent",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: -3,
    //   height: -3,
    // },
    // shadowOpacity: 0.89,
    // shadowRadius: 4.65,

    // elevation: 7,
    borderTopWidth: 0.3,
  },
});

export default RosterScreen;
