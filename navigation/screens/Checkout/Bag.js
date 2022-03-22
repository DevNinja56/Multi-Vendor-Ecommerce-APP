import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../../constants/constants";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { FlatList } from "react-native-gesture-handler";
import { BagIcon, ContactlessDelivery, CouponTagIcon, OrignalProduct, SecurePayment } from "../../../assets/svg";

const renderItem = (itemData) => {
  return (
    <View style={styles.container_4_Styles}>
      <FastImage
        source={require("../../../assets/todayDeals.png")}
        style={styles.imageCardStyle}
        resizeMode={FastImage.resizeMode.cover}
      />
      <View style={styles.cardTextStyle}>
        <Text
          style={{
            ...styles.headerText,
            fontSize: heightPercentageToDP(2),
          }}
        >
          SASSAFRAS
        </Text>
        <Text
          style={{
            ...styles.simpleText,
            fontSize: heightPercentageToDP(2),
            marginVertical: 2.5,
          }}
        >
          Women Black Jacket
        </Text>
        <Text
          style={{
            ...styles.simpleText,
            fontSize: heightPercentageToDP(1.75),
            color: "#959595",
            marginVertical: 2.5,
          }}
        >
          Sold by: Truecom Retail
        </Text>
        <View
          style={{
            ...styles.container_1_Styles,
            marginVertical: 2.5,
            alignItems: "center",
          }}
        >
          <View style={styles.iteminfoStyle}>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                color: "white",
                marginVertical: 2.5,
              }}
            >
              Size: S
            </Text>
          </View>
          <View style={styles.iteminfoStyle}>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                color: "white",
                marginVertical: 2.5,
              }}
            >
              Size: S
            </Text>
          </View>
        </View>

        <Text
          style={{
            fontSize: heightPercentageToDP(1.75),
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
            Rs 899
          </Text>
          <Text
            style={{
              color: "black",
              fontFamily: "whitney-semi-bold",
              marginTop: 3,
            }}
          >
            {"  "}
            Rs 550
          </Text>
          <Text
            style={{
              color: "#FF3E6C",
              fontFamily: "whitney-book",
              fontSize: heightPercentageToDP(1.75),
              // marginTop: 5,
              // marginLeft: 5,
            }}
          >
            {"  "}
            45% OFF
          </Text>
        </Text>

        <View style={{ ...styles.container_1_Styles, alignItems: "center" }}>
          <MaterialIcons
            name="done"
            size={heightPercentageToDP(2.5)}
            color="#15BC09"
          />
          <Text
            style={{
              ...styles.simpleText,
              fontSize: heightPercentageToDP(1.75),
              marginHorizontal: 4,
            }}
          >
            Delivery by <Text style={styles.headerText}>11 Jan 2022</Text>
          </Text>
        </View>
      </View>
      <View>
        <TouchableOpacity>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const renderItemMore = () => {
  return (
    <View style={styles.moreItemStyle}>
      <FastImage
        source={require("../../../assets/mensCollectionSuits.jpg")}
        style={{ flex: 0.65, height: "100%", width: "100%" }}
      />

      <View style={{ flex: 0.35 }}>
        <Text
          style={{
            flex: 1,
            paddingHorizontal: heightPercentageToDP(0.5),
            ...styles.headerText,
            fontSize: heightPercentageToDP(2),
          }}
        >
          BIG HEAD TIGI
        </Text>
        <Text
          style={{
            flex: 1,
            paddingHorizontal: heightPercentageToDP(0.5),
            ...styles.simpleText,
            fontSize: heightPercentageToDP(2),
            color: "#959595",
          }}
        >
          ELECTRIC HAIR REMOVER
        </Text>
        <Text
          style={{
            flex: 1,
            ...styles.headerText,
            paddingHorizontal: heightPercentageToDP(0.5),
            fontSize: heightPercentageToDP(2),
            color: "#959595",
          }}
        >
          RS 49
        </Text>
        <TouchableOpacity
          style={{
            flex: 2,
            // height: "100%",

            borderTopWidth: heightPercentageToDP(0.1),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: heightPercentageToDP(2),
              ...styles.headerText,
              color: Colors.Primary,
              //   textAlign: "center",
            }}
          >
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const data = ["1", "2"];

const Bag = () => {
  var gender = ["ALL", "SOCKS", "MASCARA"];
  const [checked, setChecked] = useState(0);
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View
        style={{
          ...styles.container_1_Styles,
          marginTop: 10,
          backgroundColor: "white",
          padding: 16,
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={styles.container_1_Styles}>
          <Text
            style={{
              ...styles.simpleText,
              fontSize: heightPercentageToDP(2),
            }}
          >
            Deliver to:{" "}
          </Text>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2),
            }}
          >
            400001
          </Text>
        </View>
        <TouchableOpacity>
          <Text
            style={{
              ...styles.headerText,
              color: Colors.Primary,

              fontSize: heightPercentageToDP(1.75),
            }}
          >
            Change
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_2_Styles}>
        <View style={{ flex: 0.1 }}>
          <MaterialCommunityIcons
            name="percent-outline"
            size={20}
            color="black"
          />
        </View>
        <View style={{ flex: 0.85 }}>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2),
            }}
          >
            Available Offers
          </Text>
          <Text
            style={{
              ...styles.simpleText,
              fontSize: heightPercentageToDP(1.75),
              marginVertical: 5,
            }}
          >
            10% Discount with Standard Cgartered Credit and Debit Cards on a min
            spend of Rs 3,000. TCA
          </Text>

          <TouchableOpacity
            style={{ ...styles.container_1_Styles, alignItems: "center" }}
          >
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(2),
                color: Colors.Primary,
                marginRight: 5,
              }}
            >
              Show More
            </Text>
            <AntDesign name="caretdown" size={12} color={Colors.Primary} />
          </TouchableOpacity>
        </View>
      </View>

      <View
        style={{
          ...styles.container_1_Styles,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "whitney-medium",
            fontSize: heightPercentageToDP(2),
          }}
        >
          1 ITEM
        </Text>
        <Text
          style={{
            fontFamily: "whitney-medium",
            fontSize: heightPercentageToDP(2),
          }}
        >
          Total: Rs 5,000
        </Text>
      </View>

      <FlatList data={data} renderItem={renderItem} />
      <View
        style={{
          ...styles.container_1_Styles,
          backgroundColor: "white",
          borderTopWidth: heightPercentageToDP(0.1),
          padding: 16,
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <TouchableOpacity>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2.5),
              color: "#6D6D6D",
            }}
          >
            REMOVE
          </Text>
        </TouchableOpacity>
        <View
          style={{
            height: "80%",
            width: widthPercentageToDP(0.1),
            backgroundColor: "black",
          }}
        />
        <TouchableOpacity>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2.5),
              color: "#6D6D6D",
            }}
          >
            MOVE TO WISHLIST
          </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.container_5_Styles}>
        <View style={{ ...styles.container_1_Styles, alignItems: "center" }}>
          <BagIcon
            height={heightPercentageToDP(4)}
            width={heightPercentageToDP(4)}
          />
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2),
              marginHorizontal: 5,
            }}
          >
            Get Free Shipping by adding more:
          </Text>
        </View>

        <ScrollView horizontal>
          <View style={styles.btnStyle}>
            {gender.map((gender, key) => {
              return (
                <View key={gender}>
                  {checked == key ? (
                    <TouchableOpacity
                      style={{
                        ...styles.btn,
                        borderColor: Colors.Primary,
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 50,
                      }}
                    >
                      <Text style={styles.headerText}>{gender}</Text>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(key);
                      }}
                      style={{
                        ...styles.btn,
                        borderColor: "black",
                        borderWidth: 1,
                        padding: 8,
                        borderRadius: 50,
                      }}
                    >
                      <Text style={styles.simpleText}>{gender}</Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={{ backgroundColor: "#FED5D1", paddingVertical: 5 }}>
        <FlatList data={data} renderItem={renderItemMore} horizontal />
      </View>

      <View
        style={{
          ...styles.container_1_Styles,
          padding: 16,
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontFamily: "whitney-medium",
            fontSize: heightPercentageToDP(2),
          }}
        >
          COUPONS
        </Text>
      </View>
      <View style={styles.container_6_Styles}>
        <TouchableOpacity>
          <View
            style={{
              ...styles.container_1_Styles,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{ ...styles.container_1_Styles, alignItems: "center" }}
            >
              <CouponTagIcon />
              <Text
                style={{
                  ...styles.headerText,
                  fontSize: heightPercentageToDP(2),
                  marginHorizontal: 10,
                }}
              >
                Apply Coupon
              </Text>
            </View>
            <Ionicons name="caret-forward" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <View
          style={{
            width: "100%",
            height: heightPercentageToDP(0.1),
            backgroundColor: "grey",
            marginVertical: 10,
          }}
        />
        <TouchableOpacity>
          <Text style={{ ...styles.headerText, color: Colors.Primary }}>
            Login to see best coupon for you
          </Text>
        </TouchableOpacity>
      </View>

      <View style={{ ...styles.container_6_Styles, marginVertical: 20 }}>
        <Text
          style={{
            ...styles.headerText,
            fontSize: heightPercentageToDP(2),

            // marginHorizontal: 10,
          }}
        >
          PRICE DETAILS (Items)
        </Text>

        <View
          style={{
            width: "100%",
            height: heightPercentageToDP(0.1),
            backgroundColor: "grey",
            marginVertical: 10,
          }}
        />

        <View
          style={{
            ...styles.container_1_Styles,
            justifyContent: "space-between",
          }}
        >
          <View style={{ flex: 2, alignItems: "flex-start" }}>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Total MRP
            </Text>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Discount on MRP{" "}
            </Text>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Coupon Discount
            </Text>
            <Text
              style={{
                ...styles.headerText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Convenience Fee{" "}
              <Text style={{ color: Colors.Primary }}>Know more</Text>
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text
              style={{
                ...styles.simpleText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Rs1,998
            </Text>
            <Text
              style={{
                ...styles.simpleText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
                color: "#04A48E",
              }}
            >
              -Rs1,032
            </Text>
            <Text
              style={{
                ...styles.simpleText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
                color: Colors.Primary,
              }}
            >
              Apply Coupon
            </Text>
            <Text
              style={{
                ...styles.simpleText,
                fontSize: heightPercentageToDP(1.75),
                marginVertical: 5,
              }}
            >
              Rs<Text style={{ textDecorationLine: "line-through" }}>99</Text>{" "}
              <Text style={{ color: "#04A48E" }}>FREE</Text>
            </Text>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            height: heightPercentageToDP(0.1),
            backgroundColor: "grey",
            marginVertical: 10,
          }}
        />

        <View
          style={{
            ...styles.container_1_Styles,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2),
            }}
          >
            Total Amount
          </Text>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(2),
            }}
          >
            Rs966
          </Text>
        </View>
      </View>


      <View
          style={{
            ...styles.container_1_Styles,
            justifyContent: "space-between",
            alignItems:'center',
            padding:5
          }}
        >
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <OrignalProduct height={heightPercentageToDP(10)} width={heightPercentageToDP(10)}/>
            <Text style={{...styles.headerText,fontSize:heightPercentageToDP(2)}}>Genuine Products</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <ContactlessDelivery height={heightPercentageToDP(10)} width={heightPercentageToDP(10)}/>
            <Text style={{...styles.headerText,fontSize:heightPercentageToDP(2)}}>Genuine Products</Text>
        </View>
        <View style={{justifyContent:'center',alignItems:'center'}}>
            <SecurePayment height={heightPercentageToDP(10)} width={heightPercentageToDP(10)}/>
            <Text style={{...styles.headerText,fontSize:heightPercentageToDP(2)}}>Genuine Products</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontFamily: "whitney-semi-bold",
  },
  simpleText: {
    fontFamily: "whitney-light",
  },
  container_1_Styles: {
    flexDirection: "row",
  },
  container_2_Styles: {
    marginTop: heightPercentageToDP(3),
    backgroundColor: "white",
    padding: 16,
    flexDirection: "row",
  },
  container_4_Styles: {
    flexDirection: "row",
    backgroundColor: "white",
    padding: 16,
    justifyContent: "space-between",
  },
  imageCardStyle: {
    flex: 0.25,
    borderRadius: 5,
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },

  cardTextStyle: {
    flex: 0.65,
  },
  iteminfoStyle: {
    marginHorizontal: 4,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderRadius: 50,
    backgroundColor: Colors.Primary,
  },
  container_5_Styles: {
    backgroundColor: "#FED5D1",
    padding: 16,
  },

  btnStyle: {
    //   width:widthPercentageToDP(80),

    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'space-between',
    marginVertical: 10,
  },
  btn: {
    marginHorizontal: 2.5,
    //   flexGrow:1,
    // width:'100%',
    // flexDirection: "row",
    // alignItems: "flex-start",
    // marginRight: 5,
    // marginHorizontal: 5,
  },

  moreItemStyle: {
    marginHorizontal: 10,
    height: heightPercentageToDP(35),
    backgroundColor: "white",
    borderWidth: widthPercentageToDP(0.1),
  },
  container_6_Styles: {
    backgroundColor: "white",
    padding: 16,
  },
});

export default Bag;
