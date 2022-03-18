import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

import SimpleHeader from "../Header/simple_header";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { BagWhite, CancelBtn } from "../../../assets/svg";
import FastImage from "react-native-fast-image";
import Colors from "../../../constants/constants";

const renderItem = (itemData) => {
  return (
    <View style={styles.cardStyle}>
      <TouchableOpacity style={{ alignSelf: "flex-end", margin: -10 }}>
        <CancelBtn
          height={heightPercentageToDP(3.5)}
          width={heightPercentageToDP(3.5)}
        />
      </TouchableOpacity>
      <View style={styles.contentStyle}>
        <FastImage
          source={require("../../../assets/sliderImages3.png")}
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
            SASSAFRAS
          </Text>
          <Text
            style={{
              fontFamily: "whitney-regular",
              fontSize: heightPercentageToDP(1.75),
              marginVertical: 5,
            }}
          >
            Women Black Jacket
          </Text>
          <Text
            style={{
              fontFamily: "whitney-light",
              fontSize: heightPercentageToDP(1.75),
              color: "#C4C4C4",
              marginVertical: 5,
            }}
          >
            Sold by: Truecom Retail
          </Text>
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
                fontFamily: "whitney-semi-bold",
                fontSize: heightPercentageToDP(1.75),
                color: Colors.Primary,
              }}
            >
              Rs 200.000
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

const DATA = ["1", "2", "3"];

const WishListScreen = (props) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SimpleHeader
        headerTitle={"Wishlist"}
        clickHandler={() => props.navigation.goBack()}
      />
      <FlatList data={DATA} renderItem={renderItem} />
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
