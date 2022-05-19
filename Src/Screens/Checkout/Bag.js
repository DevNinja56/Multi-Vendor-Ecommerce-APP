import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../Constants/colors";
import {
  MaterialCommunityIcons,
  AntDesign,
  Entypo,
  MaterialIcons,
  Ionicons,
} from "@expo/vector-icons";
import FastImage from "react-native-fast-image";
import { FlatList } from "react-native-gesture-handler";
import {
  BagIcon,
  ContactlessDelivery,
  CouponTagIcon,
  OrignalProduct,
  SecurePayment,
} from "../../../assets/svg";
import { Fonts } from "../../Constants/fonts";
//import { Colors } from "../../Constants/colors";
import { commonStyles } from "../../Styles/commonStyles";
import RemoveDialog from "../../Components/RemoveDialog";

const Bag = (props) => {
  const [remove, setRemove] = useState(false);
  var gender = ["ALL", "SOCKS", "MASCARA"];
  const [checked, setChecked] = useState(0);

  const removeItem = () => {
    // deleteWishlist(removeId);
    setRemove(false);
  };

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
              fontSize: widthPercentageToDP(4),
              color: "#4D4D4D",
            }}
          >
            SASSAFRAS
          </Text>
          <Text
            style={{
              fontFamily: Fonts.whitney_book,
              fontSize: widthPercentageToDP(4),
              marginVertical: 2.5,
              color: "#4D4D4D",
            }}
          >
            Women Black Jacket
          </Text>
          <Text
            style={{
              ...styles.simpleText,
              fontSize: widthPercentageToDP(3.5),
              color: "#B4B4B4",
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
                  fontSize: widthPercentageToDP(3.5),
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
                  fontSize: widthPercentageToDP(3.5),
                  color: "white",
                  marginVertical: 2.5,
                }}
              >
                Qty: 1
              </Text>
            </View>
          </View>

          <Text
            style={{
              fontSize: widthPercentageToDP(3.75),
              marginTop: 5,
              fontFamily: Fonts.whitney_light,
            }}
          >
            <Text
              style={{
                color: "#B4B4B4",
                textDecorationLine: "line-through",
              }}
            >
              Rs 899
            </Text>
            <Text
              style={{
                fontFamily: Fonts.whitney_semi_bold,
                marginTop: 3,
                color: "#4D4D4D",
              }}
            >
              {"  "}
              Rs 550
            </Text>
            <Text
              style={{
                color: Colors.Primary,
              }}
            >
              {"  "}
              45% OFF
            </Text>
          </Text>

          <View style={{ ...styles.container_1_Styles, alignItems: "center" }}>
            <MaterialIcons
              name="done"
              size={widthPercentageToDP(4.5)}
              color="#15BC09"
            />
            <Text
              style={{
                ...styles.simpleText,
                fontSize: widthPercentageToDP(3.5),
                marginHorizontal: 4,
                color: "#B4B4B4",
              }}
            >
              Delivery by{" "}
              <Text
                style={{
                  fontFamily: Fonts.whitney_semi_bold,
                  color: "black",
                  fontSize: widthPercentageToDP(3.75),
                }}
              >
                11 Jan 2022
              </Text>
            </Text>
          </View>
        </View>
        <View>
          <TouchableOpacity onPress={() => setRemove(true)}>
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
          style={{ height: "60%", width: "100%" }}
        />

        <View style={{ height: "25%" }}>
          <Text
            style={{
              paddingHorizontal: heightPercentageToDP(0.5),
              ...styles.headerText,
              fontSize: widthPercentageToDP(4),
              color: "#4D4D4D",
            }}
          >
            BIG HEAD TIGI
          </Text>
          <Text
            style={{
              paddingHorizontal: heightPercentageToDP(0.5),
              fontFamily: Fonts.whitney_book,
              fontSize: widthPercentageToDP(3.75),
              color: "#959595",
            }}
          >
            ELECTRIC HAIR REMOVER
          </Text>
          <Text
            style={{
              ...styles.headerText,
              paddingHorizontal: heightPercentageToDP(0.5),
              fontSize: heightPercentageToDP(2),
              color: "#4D4D4D",
            }}
          >
            RS 49
          </Text>
        </View>
        <TouchableOpacity
          style={{
            height: "15%",
            // borderTopWidth: heightPercentageToDP(0.1),
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: Colors.Primary,
          }}
        >
          <Text
            style={{
              fontSize: widthPercentageToDP(4),
              ...styles.headerText,
              color: "white",
              //   textAlign: "center",
            }}
          >
            ADD TO CART
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  const data = ["1", "2"];

  return (
    <View style={{ flex: 1 }}>
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
          <View style={{ ...styles.container_1_Styles, alignItems: "center" }}>
            <Text
              style={{
                ...styles.simpleText,
                fontSize: widthPercentageToDP(3.5),
                color: "black",
              }}
            >
              Deliver to:{" "}
            </Text>
            <Text
              style={{
                ...styles.headerText,
                fontSize: widthPercentageToDP(4),
                color: "black",
              }}
            >
              400001
            </Text>
          </View>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: Fonts.whitney_book,
                color: Colors.Primary,

                fontSize: widthPercentageToDP(3.2),
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
                fontSize: widthPercentageToDP(4),
                color: "black",
              }}
            >
              Available Offers
            </Text>
            <Text
              style={{
                fontFamily: Fonts.whitney_book,
                fontSize: widthPercentageToDP(3.5),
                marginVertical: 5,
                color: "black",
              }}
            >
              10% Discount with Standard Cgartered Credit and Debit Cards on a
              min spend of Rs 3,000. TCA
            </Text>

            <TouchableOpacity
              style={{
                ...styles.container_1_Styles,
                alignItems: "center",
                // justifyContent: "center",
              }}
            >
              <Text
                style={{
                  ...styles.headerText,
                  fontSize: widthPercentageToDP(3.5),
                  color: Colors.Primary,
                  marginRight: 5,
                  marginTop: heightPercentageToDP(0.2),
                }}
              >
                Show More
              </Text>
              <AntDesign
                name="caretdown"
                size={widthPercentageToDP(3.5)}
                color={Colors.Primary}
              />
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
              fontFamily: Fonts.whitney_book,
              fontSize: widthPercentageToDP(4),
              color: "black",
            }}
          >
            1 ITEM
          </Text>
          <Text
            style={{
              fontFamily: Fonts.whitney_book,
              fontSize: widthPercentageToDP(4),
              color: "black",
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
          <TouchableOpacity onPress={() => setRemove(true)}>
            <Text
              style={{
                ...styles.headerText,
                fontSize: widthPercentageToDP(4),
                color: Colors.Primary,
              }}
            >
              DELETE CART
            </Text>
          </TouchableOpacity>
          <View
            style={{
              height: "100%",
              width: widthPercentageToDP(0.15),
              backgroundColor: "black",
            }}
          />
          <TouchableOpacity>
            <Text
              style={{
                ...styles.headerText,
                fontSize: widthPercentageToDP(4),
                color: "#4D4D4D",
              }}
            >
              MOVE TO WISHLIST
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.container_5_Styles}>
          <View style={{ ...styles.container_1_Styles, alignItems: "center" }}>
            <BagIcon
              height={widthPercentageToDP(5)}
              width={widthPercentageToDP(5)}
              color={"#4D4D4D"}
            />
            <Text
              style={{
                ...styles.headerText,
                fontSize: widthPercentageToDP(4),
                color: "#4D4D4D",
                marginHorizontal: 5,
              }}
            >
              Get Free Shipping by adding more:
            </Text>
          </View>

          {/* <ScrollView horizontal>
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
                      <Text
                        style={{
                          ...styles.headerText,
                          fontSize: widthPercentageToDP(4),
                          color: "black",
                        }}
                      >
                        {gender}
                      </Text>
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
                      <Text
                        style={{
                          ...styles.simpleText,
                          fontSize: widthPercentageToDP(4),
                          color: "black",
                        }}
                      >
                        {gender}
                      </Text>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView> */}
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
              fontFamily: Fonts.whitney_book,
              fontSize: widthPercentageToDP(4),
              color: "black",
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
                style={{
                  ...styles.container_1_Styles,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CouponTagIcon
                  height={widthPercentageToDP(4.5)}
                  width={widthPercentageToDP(4.5)}
                  color={"#4D4D4D"}
                />
                <Text
                  style={{
                    ...styles.headerText,
                    fontSize: widthPercentageToDP(4),
                    marginHorizontal: 10,
                    color: "#4D4D4D",
                  }}
                >
                  Apply Coupon
                </Text>
              </View>
              <Ionicons name="caret-forward" size={24} color="#4D4D4D" />
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
            <Text
              style={{
                ...styles.headerText,
                color: Colors.Primary,
                fontSize: widthPercentageToDP(3.5),
              }}
            >
              Login to see best coupon for you
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ ...styles.container_6_Styles, marginVertical: 20 }}>
          <Text
            style={{
              ...styles.headerText,
              fontSize: widthPercentageToDP(4),
              color: "#4D4D4D",
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
                  fontFamily: Fonts.whitney_light,
                  fontSize: widthPercentageToDP(3.65),
                  color: "#4D4D4D",
                  marginVertical: 5,
                }}
              >
                Total MRP
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.whitney_light,
                  fontSize: widthPercentageToDP(3.65),
                  color: "#4D4D4D",
                  marginVertical: 5,
                }}
              >
                Discount on MRP{" "}
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.whitney_light,
                  fontSize: widthPercentageToDP(3.65),
                  color: "#4D4D4D",
                  marginVertical: 5,
                }}
              >
                Coupon Discount
              </Text>
              <Text
                style={{
                  fontFamily: Fonts.whitney_light,
                  fontSize: widthPercentageToDP(3.65),
                  color: "#4D4D4D",
                  marginVertical: 5,
                }}
              >
                Convenience Fee{"   "}
                <Text style={{ color: Colors.Primary }}>Know more</Text>
              </Text>
            </View>
            <View style={{ flex: 1, alignItems: "flex-end" }}>
              <Text
                style={{
                  ...styles.simpleText,
                  fontSize: widthPercentageToDP(3.65),
                  marginVertical: 5,
                  color: "#4D4D4D",
                }}
              >
                Rs1,998
              </Text>
              <Text
                style={{
                  ...styles.simpleText,
                  fontSize: widthPercentageToDP(3.65),
                  marginVertical: 5,
                  color: "#04A48E",
                }}
              >
                -Rs1,032
              </Text>
              <TouchableOpacity>
                <Text
                  style={{
                    ...styles.simpleText,
                    fontSize: widthPercentageToDP(3.65),
                    marginVertical: 5,
                    color: Colors.Primary,
                  }}
                >
                  Apply Coupon
                </Text>
              </TouchableOpacity>
              <Text
                style={{
                  ...styles.simpleText,
                  fontSize: widthPercentageToDP(3.65),
                  marginVertical: 5,
                  color: "#4D4D4D",
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
                fontSize: widthPercentageToDP(4),
                color: "#4D4D4D",
              }}
            >
              Total Amount
            </Text>
            <Text
              style={{
                ...styles.headerText,
                fontSize: widthPercentageToDP(4),
                color: "#4D4D4D",
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
            alignItems: "center",
            padding: 5,
          }}
        >
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: widthPercentageToDP(20),
                width: widthPercentageToDP(20),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <OrignalProduct height={"100%"} width={"100%"} />
            </View>
            <Text
              style={{
                fontFamily: Fonts.whitney_light,
                fontSize: widthPercentageToDP(3.5),
                color: "#4D4D4D",
              }}
            >
              Genuine Products
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: widthPercentageToDP(20),
                width: widthPercentageToDP(20),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ContactlessDelivery height={"100%"} width={"100%"} />
            </View>
            <Text
              style={{
                fontFamily: Fonts.whitney_light,
                fontSize: widthPercentageToDP(3.5),
                color: "#4D4D4D",
              }}
            >
              Contactless Delivery
            </Text>
          </View>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View
              style={{
                height: widthPercentageToDP(20),
                width: widthPercentageToDP(20),
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <SecurePayment height={"82%"} width={"100%"} />
            </View>
            <Text
              style={{
                fontFamily: Fonts.whitney_light,
                fontSize: widthPercentageToDP(3.5),
                color: "#4D4D4D",
              }}
            >
              Secure Payments
            </Text>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={{
          ...commonStyles.buttonStyle,
          margin: heightPercentageToDP(2),
        }}
        onPress={() => props.screenSet(1)}
      >
        <Text
          style={{
            ...styles.headerText,
            color: "white",
            fontSize: heightPercentageToDP(2),
          }}
        >
          PLACE ORDER
        </Text>
      </TouchableOpacity>
      {remove && (
        <RemoveDialog
          title={"Sure you want to remove this Item"}
          onClearClick={() => setRemove(false)}
          closeClick={() => setRemove(false)}
          isRemove={remove}
          removeClick={removeItem}
        />
      )}
    </View>
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
    marginHorizontal: widthPercentageToDP(3),
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.65,
    backgroundColor: "white",
    // borderWidth: widthPercentageToDP(0.1),
    borderRadius: 5,
    overflow: "hidden",
    elevation: 4,
    marginVertical: widthPercentageToDP(1),
  },
  container_6_Styles: {
    backgroundColor: "white",
    padding: 16,
  },
  buttonStyle: {
    marginTop: 10,
    padding: 16,
    backgroundColor: Colors.Primary,
    alignItems: "center",
  },
});

export default Bag;
