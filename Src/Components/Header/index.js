import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageStore,
  Dimensions,
  Platform,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Header } from "react-native-elements";
import {
  BagIcon,
  HeartIcon,
  ModjenLogo,
  NotificationIcon,
  SearchIcon,
  ShareIcon,
} from "../../../assets/svg";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { Fonts } from "../../Constants/fonts";

const CustomHeader = (props) => {
  const size = Dimensions.get("window");
  return (
    <Header
      placement="left"
      leftComponent={
        <TouchableOpacity onPress={props.clickHandler}>
          <Ionicons
            name={props.ishome ? "menu" : "arrow-back-outline"}
            size={heightPercentageToDP(3.5)}
            color={"black"}
          />
        </TouchableOpacity>
      }
      centerComponent={
        props.ishome ? (
          <ModjenLogo
            height={heightPercentageToDP(3.7)}
            width={widthPercentageToDP(15)}
            style={{ marginTop: heightPercentageToDP(0.3) }}
          />
        ) : (
          <Text
            style={{
              fontFamily: Fonts.whitney_semi_bold,
              fontSize: widthPercentageToDP(4),
              letterSpacing: 0.4,
              // marginLeft: 10,
              color: "black",
              // borderWidth: 1,
              marginTop: heightPercentageToDP(0.55),
            }}
          >
            MODJEN
          </Text>
        )
      }
      rightComponent={
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity
            style={{ paddingHorizontal: 8 }}
            onPress={props.searchClickHandler}
          >
            <SearchIcon
              width={heightPercentageToDP(3)}
              height={heightPercentageToDP(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 8 }}
            onPress={props.notificationClickHandler}
          >
            <NotificationIcon
              width={heightPercentageToDP(3)}
              height={heightPercentageToDP(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 8 }}
            onPress={props.wishlistClickHandler}
          >
            <HeartIcon
              width={heightPercentageToDP(3)}
              height={heightPercentageToDP(3)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ paddingHorizontal: 8 }}
            onPress={props.cartClickHandler}
          >
            <BagIcon
              width={heightPercentageToDP(3)}
              height={heightPercentageToDP(3)}
            />
          </TouchableOpacity>
        </View>
      }
      containerStyle={{
        backgroundColor: "white",
        borderBottomWidth: 0,
        elevation: 4,
        // paddingTop:0,
        // height:Platform.OS === 'ios' ? 70 : 70-24
      }}
      statusBarProps={{
        barStyle: "dark-content",
        backgroundColor: "white",
        translucent: true,
      }}
    />
  );
};

export default CustomHeader;
