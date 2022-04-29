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
import Header from "../../Components/Header";

import ShoppingDeals from "../../../navigation/screens/Home/ShopingDeals";
import { PRODUCTSDUMMY } from "../../../data/dummy-data";
import ShoppingCards from "../../../components/ShoppingCards";
import GenderModel from "../../../custommodel/GenderModel";
import SortingModel from "../../../custommodel/SortingModel";
import FilterModel from "../../../custommodel/FilterModel";

import Httpclients from "../../Redux/utils";

import { BottomSheet } from "react-native-elements";
import Colors from "../../Constants/colors";
import Loader from "../../Components/Loader";
import { ScrollView } from "react-native-gesture-handler";

const grey = "#91A1BD";
const ProductsAll = (props) => {
  const [data, setData] = useState();
  const [isFilter, setFilter] = useState(false);
  const [isGender, setGender] = useState(false);
  const [isSorting, setSorting] = useState(false);
  const [whichScreen, setWhichScreen] = useState(0);
  const [isLoading, setLoading] = useState(false);

  let content = <GenderModel />;

  // const closeBottomSheet = () => {
  //   setIsVisible(false);
  // };

  useEffect(() => {
    getAllProducts();
  }, []);

  // if (whichScreen === 0) {
  //   content = <GenderModel closeBottomSheet={closeBottomSheet} />;
  // } else if (whichScreen === 1) {
  //   content = <SortingModel closeBottomSheet={closeBottomSheet} />;
  // } else if (whichScreen === 2) {
  //   content = (
  //     <FilterModel isFilter={isVisible} closeBottomSheet={closeBottomSheet} />
  //   );
  // }

  const detaislScreen = () => {
    props.navigation.navigate("Details");
  };

  const renderGridItem = (itemData) => {
    return (
      <ShoppingCards
        detaislScreen={detaislScreen}
        name={itemData.item.name}
        feature_image={itemData.item.feature_image}
        category_name={itemData.item.product_categories[0].categories.name}
        discounted_Price={itemData.item.discounted_price}
        quantity={itemData.item.quantity}
        regular_Price={itemData.item.regular_price}
        rating={itemData.item.rating}
        discount={itemData.item.discount}
      />
    );
  };

  const getAllProducts = async () => {
    setLoading(true);
    const res = await Httpclients.get("product/getAll?size=&color=&category=");
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
          <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View>
              <FastImage
                source={require("../../../assets/promocode.png")}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.imageContainer}
              />

              <ShoppingDeals data={data} renderGridItem={renderGridItem} />
            </View>
          </ScrollView>
          <View style={styles.buttonConatainer}>
            <View
              style={{
                flex: 1,
                height: "100%",
                justifyContent: "center",
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  setWhichScreen(0);
                  setGender(true);
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
                  setSorting(true);
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
                  setFilter(true);
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
          {/* <BottomSheet modalProps={{}} isVisible={isVisible}>
            {content}
          </BottomSheet> */}

          {isFilter && (
            <FilterModel
              onClearClick={() => setFilter(false)}
              closeClick={() => setFilter(false)}
              // data={data}
              isFilter={isFilter}
              // durationData={durationData}
            />
          )}
          {isGender && (
            <GenderModel
              onClearClick={() => setGender(false)}
              closeClick={() => setGender(false)}
              // data={data}
              isGender={isGender}
              // durationData={durationData}
            />
          )}
          {isSorting && (
            <SortingModel
              onClearClick={() => setSorting(false)}
              closeClick={() => setSorting(false)}
              // data={data}
              isSorting={isSorting}
              // durationData={durationData}
            />
          )}
        </View>
      </View>

      {isLoading && <Loader color={"FF3E6C"} />}
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
  },
  topContainer: {
    marginHorizontal: 16,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
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
  },
  buttonConatainer: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    height: 50,
    backgroundColor: "white",
    borderTopWidth: 0.3,
  },
});

export default ProductsAll;
