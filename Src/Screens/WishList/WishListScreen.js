import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import SimpleHeader from "../../Components/Header/simple_header";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { BagWhite, CancelBtn } from "../../../assets/svg";
import FastImage from "react-native-fast-image";
import Colors from "../../Constants/colors";
import httpClients from "../../Redux/utils";
import Loader from "../../Components/Loader";

import {titleCase} from '../../Constants/title_case';




const WishListScreen = (props) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);

  const getWishlistData = async () => {
    const res = await httpClients.get("wishlist/getAll");
    setData(res.data.data);
    setLoading(false);
  };

  const deleteWishlist = async (id) => {
    const res = await httpClients.get("wishlist/delete/"+id);
    if(res.data.status=="success")
    {
      console.log("Hi");
      setLoading(true);
      getWishlistData();
    }
  };

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.cardStyle}>
        <TouchableOpacity
          onPress={() => deleteWishlist(item.id)}
          style={{ alignSelf: "flex-end", margin: -10 }}
        >
          <CancelBtn
            height={heightPercentageToDP(3.5)}
            width={heightPercentageToDP(3.5)}
          />
        </TouchableOpacity>
        <View style={styles.contentStyle}>
          <FastImage
            source={{
              uri: item.products.feature_image,
              priority: FastImage.priority.high,
            }}
            resizeMode={FastImage.resizeMode.cover}
            style={styles.imageStyle}
          />
          <View style={{ paddingLeft: 10, flex: 0.7 }}>
            <Text
              style={{
                fontFamily: "whitney-semi-bold",
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              {titleCase(item.products.name)}
            </Text>
            <Text
              style={{
                fontFamily: "whitney-regular",
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              {titleCase(item.products.product_categories[0].categories.name)}
            </Text>
            {/* <Text
              style={{
                fontFamily: "whitney-light",
                fontSize: heightPercentageToDP(1.75),
                color: "#C4C4C4",
                marginVertical: 5,
              }}
            >
              Sold by: Truecom Retail
            </Text> */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginVertical: 5,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontSize: widthPercentageToDP(3.5),
                  marginTop: 5,
                }}
              >
                <Text
                  style={{
                    color: "#9F9F9F",
                    textDecorationLine: "line-through",
                    fontFamily: "whitney-book",
                  }}
                >
                  {item.products.regular_Price}
                </Text>
                <Text
                  style={{
                    color: "black",
                    fontFamily: "whitney-semi-bold",
                    marginTop: 3,
                  }}
                >
                  {"  "}
                  {item.products.discounted_Price}
                </Text>
                <Text
                  style={{
                    color: "#FF3E6C",
                    fontFamily: "whitney-book",
                    fontSize: widthPercentageToDP(3),
                    // marginTop: 5,
                    // marginLeft: 5,
                  }}
                >
                  {"  "}
                  {item.products.discount}% OFF
                </Text>
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: Colors.Primary,
                  padding: 5,
                  borderRadius: 5,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "whitney-medium",
                      fontSize: heightPercentageToDP(1.75),
                      color: "white",
                      marginHorizontal: 3,
                    }}
                  >
                    Add to bag
                  </Text>
                  <BagWhite
                    height={heightPercentageToDP(2.5)}
                    width={heightPercentageToDP(2.5)}
                  />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    );
  };

  useEffect(() => {
    getWishlistData();
  }, [data]);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SimpleHeader
        headerTitle={"Wishlist"}
        clickHandler={() => props.navigation.goBack()}
      />
      {isLoading ? (
        <Loader color={Colors.Primary} />
      ) : (
        <FlatList data={data} renderItem={renderItem} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardStyle: {
    backgroundColor: "white",
    elevation: 4,
    margin: 20,
    borderRadius: 10,
  },
  contentStyle: {
    flexDirection: "row",
    padding: 20,
  },
  imageStyle: {
    flex: 0.3,
    elevation: 4,
    borderRadius: 10,
  },
});

export default WishListScreen;
