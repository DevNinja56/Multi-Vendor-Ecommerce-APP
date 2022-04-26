import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  CouponTagIcon,
  HeartIcon,
  HelpCenterIcon,
  OrderIcon,
  ProfileIcon,
} from "../../../../assets/svg";
import { color } from "react-native-reanimated";
import { styles } from "./style";

const NotAuthenticated = (props, { navigation }) => {



  return (
    <View style={styles.container}>
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
      <View style={{ marginBottom: 100 }}>
        <View style={styles.profileImage}></View>

        <View style={styles.loginLayout}>
          <View
            style={{
              height: 110,
              width: 120,
              backgroundColor: "white",
              padding: 10,
              marginTop: -50,
              marginLeft: 20,
              borderRadius: 5,
              shadowColor:'grey',
              shadowOffset:{
                width:widthPercentageToDP(0),
                height:widthPercentageToDP(0.5),
              },
              shadowOpacity:0.8,
              elevation: 4,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ProfileIcon width={"100%"} height={"100%"} />
          </View>
          <View style={styles.buttonStyle}>
            <TouchableOpacity
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "whitney-semi-bold",
                  fontSize: widthPercentageToDP(2.7),
                  color: "white",
                }}
              >
                LOG IN/SIGN UP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.buttonsGroupLayout}>
          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 20 }}>
                <OrderIcon width={heightPercentageToDP(2.5)} height={heightPercentageToDP(2.5)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buttonHeadingStyle}>Orders</Text>
                <Text style={styles.buttonDesStyle}>
                  Check your order status
                </Text>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Ionicons name="chevron-forward" size={heightPercentageToDP(1.5)} color="grey" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: widthPercentageToDP(0.1), backgroundColor: "grey" }} />

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 20 }}>
                <HelpCenterIcon width={heightPercentageToDP(2.5)} height={heightPercentageToDP(2.5)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buttonHeadingStyle}>Help Center</Text>
                <Text style={styles.buttonDesStyle}>
                  Help regarding your recent purchases
                </Text>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Ionicons name="chevron-forward" size={heightPercentageToDP(1.5)} color="grey" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: widthPercentageToDP(0.1), backgroundColor: "grey" }} />

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 20 }}>
                <HeartIcon width={heightPercentageToDP(2.5)} height={heightPercentageToDP(2.5)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buttonHeadingStyle}>Wishlist</Text>
                <Text style={styles.buttonDesStyle}>
                  Your most loved styles
                </Text>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Ionicons name="chevron-forward" size={heightPercentageToDP(1.5)} color="grey" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: widthPercentageToDP(0.1), backgroundColor: "grey" }} />

          <TouchableOpacity>
            <View
              style={{
                flexDirection: "row",
                backgroundColor: "white",
                alignItems: "center",
              }}
            >
              <View style={{ padding: 20 }}>
                <CouponTagIcon width={heightPercentageToDP(2.5)} height={heightPercentageToDP(2.5)} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={styles.buttonHeadingStyle}>Apply Coupon</Text>
              </View>
              <View style={{ paddingRight: 10 }}>
                <Ionicons name="chevron-forward" size={heightPercentageToDP(1.5)} color="grey" />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ height: widthPercentageToDP(0.1), backgroundColor: "grey" }} />
        </View>

        <View
          style={{
            backgroundColor: "white",
            marginTop: 20,
            padding: 10,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.23,
            shadowRadius: 2.62,
            
            elevation: 4,
          }}
        >
          <TouchableOpacity style={{ padding: 10 }}>
            <Text
              style={{
                ...styles.buttonHeadingStyle,
                fontSize: heightPercentageToDP(1.4),
                color: "grey",
              }}
            >
              FAQs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Text
              style={{
                ...styles.buttonHeadingStyle,
                fontSize: heightPercentageToDP(1.4),
                color: "grey",
              }}
            >
              ABOUT US
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Text
              style={{
                ...styles.buttonHeadingStyle,
                fontSize: heightPercentageToDP(1.4),
                color: "grey",
              }}
            >
              TERMS OF USE
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ padding: 10 }}>
            <Text
              style={{
                ...styles.buttonHeadingStyle,
                fontSize: heightPercentageToDP(1.4),
                color: "grey",
              }}
            >
              PRIVACY POLICY
            </Text>
          </TouchableOpacity>
        </View>

        <Text
          style={{
            fontFamily: "whitney-light",
            fontSize: heightPercentageToDP(1.5),
            margin: 20,
            textAlign: "center",
          }}
        >
          APP VERSION 4.2111.1
        </Text>
      </View>
    </ScrollView>
    </View>
  );
};



export default NotAuthenticated;
