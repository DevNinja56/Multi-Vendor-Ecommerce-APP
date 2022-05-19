import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Text,
  Image,
  ImageBackground,
  FlatList,
  TextInput,
  ActivityIndicator,
  Pressable,
  Modal,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import { Slider, Box, NativeBaseProvider } from "native-base";
import {
  Ionicons,
  FontAwesome,
  FontAwesome5,
  MaterialCommunityIcons,
  Fontisto,
} from "@expo/vector-icons";

//import TodayDeals from "../../../navigation/screens/Home/TodayDeals";
import FastImage from "react-native-fast-image";
import TodayDeals from "../TabScreens/DrawerScreens/Home/Components/Home/TodayDeals";

import SimpleHeader from "../../Components/Header/simple_header";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import httpClients from "../../Redux/utils";
import Colors from "../../Constants/colors";
import Loader from "../../Components/Loader";
import SnakBar from "../../Components/SnakBar";
import { Fonts } from "../../Constants/fonts";
import { AntDesign } from "react-native-vector-icons";
import * as Animatable from "react-native-animatable";
import Swiper from "react-native-swiper";
//import Modal from "react-native-modal";

const ProductDetail = (props) => {
  const images = [
    require("../../../assets/sliderImages1.png"),
    require("../../../assets/sliderImages2.png"),
    require("../../../assets/sliderImages3.png"),
  ];
  const imgList = [
    "https://images.squarespace-cdn.com/content/v1/5e717a4d43b5943ba1cf1375/1605683674435-B4DHTIT6KVONJ0U1DUOX/Vintage+Shirt+Size+Chart.png?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/5e717a4d43b5943ba1cf1375/1605683674435-B4DHTIT6KVONJ0U1DUOX/Vintage+Shirt+Size+Chart.png?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/5e717a4d43b5943ba1cf1375/1605683674435-B4DHTIT6KVONJ0U1DUOX/Vintage+Shirt+Size+Chart.png?format=1000w",
    "https://images.squarespace-cdn.com/content/v1/5e717a4d43b5943ba1cf1375/1605683674435-B4DHTIT6KVONJ0U1DUOX/Vintage+Shirt+Size+Chart.png?format=1000w",
  ];

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
              fontFamily: Fonts.whitney_semi_bold,
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
              fontFamily: Fonts.whitney_semi_bold,
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
              fontFamily: Fonts.whitney_semi_bold,
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
  const renderItem = (itemData) => {
    return (
      <View>
        <View style={{ flexDirection: "row", marginVertical: 10 }}>
          <View
            style={{
              flex: 0.15,
              height: heightPercentageToDP(4.5),
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#04A48E",
              paddingHorizontal: 10,
            }}
          >
            <Text
              style={{
                fontFamily: "whitney-semi-bold",
                fontSize: 20,
                color: "white",
              }}
            >
              {itemData.item.rating}
            </Text>
            <Ionicons name="md-star" size={12} color={"white"} />
          </View>
          <View style={{ flex: 0.8, marginLeft: 5 }}>
            <Text style={{ fontFamily: "whitney-book", fontSize: 12 }}>
              {itemData.item.review}
            </Text>
            <View
              style={{
                flexDirection: "row",
                marginTop: 20,
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ fontFamily: "whitney-book", fontSize: 10 }}>
                  {itemData.item.user.name}
                </Text>
                <View
                  style={{
                    height: "100%",
                    borderWidth: 1,
                    marginHorizontal: 5,
                    borderColor: "#9F9F9F",
                  }}
                />
                <Text style={{ fontFamily: "whitney-book", fontSize: 10 }}>
                  {itemData.item.created_at}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{ borderWidth: 1, flex: 1, borderColor: "#9F9F9F" }} />
      </View>
    );
  };
  const SliderCustom = (props) => {
    return (
      <Box alignItems="center" w="100%">
        <Slider
          defaultValue={props.fill}
          size="sm"
          colorScheme="green"
          w="75%"
          maxW="300"
        >
          <Slider.Track bg="green.100">
            <Slider.FilledTrack bg="green.600" />
          </Slider.Track>
        </Slider>
      </Box>
    );
  };
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [size, setSize] = useState(0);
  const [color, setColor] = useState(0);
  const [toast, setToast] = useState(false);
  const [message, setMessage] = useState("");
  const [sizeChart, showChart] = useState(false);
  const [animateType, setAnimateType] = useState("");
  const swiper = useRef(null);
  const [enable, setEnable] = useState(true);

  var gender = ["XS", "S", "M", "L", "XL", "XXL"];
  useEffect(() => {
    // console.log("Call");
    getProductData();
  }, []);

  const getProductData = async () => {
    const res = await httpClients.get("product/sku2");
    console.log(res.data.status);
    if (res.data.status === "success") {
      console.log(res.data.data);
      setData(res.data.data);
      setLoading(false);
    } else {
      console.log("no data available");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (toast) {
      setTimeout(() => {
        setToast(false);
      }, 1000);
    }
  }, [toast]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <SimpleHeader clickHandler={props.navigation.goBack()} headerTitle={data.Product_Title}/> */}
      <SimpleHeader
        placement={"left"}
        clickHandler={() => props.navigation.goBack()}
        headerTitle={!data ? "" : data.product_title}
      />
      {isLoading ? (
        <Loader color={Colors.Primary} />
      ) : (
        <>
          <ScrollView>
            <NativeBaseProvider>
              <View style={styles.main}>
                <View style={styles.image}>
                  <SliderBox
                    ImageComponent={FastImage}
                    images={data.images}
                    sliderBoxHeight={heightPercentageToDP(59)}
                    //   onCurrentImagePressed={(index) =>
                    //     console.warn(`image ${index} pressed`)
                    //   }
                    //autoplay
                    //circleLoop
                    dotColor="#FF3E6C"
                    inactiveDotColor="#90A4AE"
                  />
                  <View style={styles.buttonStyle}>
                    <View style={styles.raitingCard}>
                      <FontAwesome
                        name="window-restore"
                        size={12}
                        color="grey"
                      />
                      <Text
                        style={{
                          fontSize: widthPercentageToDP(3),
                          fontFamily: "whitney-semi-bold",
                          marginHorizontal: 5,
                          color: "#000",
                        }}
                      >
                        View Similar
                      </Text>
                    </View>
                    <View style={styles.raitingCard}>
                      <Text style={styles.textPicRaiting}>
                        {Math.trunc(data.rating.value)}
                      </Text>
                      <Ionicons name="md-star" size={10} color="#03956E" />
                      <View
                        style={{
                          width: 1,
                          // borderWidth: 1,
                          height: 20,
                          backgroundColor: "black",
                          marginHorizontal: 3,
                        }}
                      />
                      <Text
                        style={{
                          fontSize: widthPercentageToDP(3),
                          fontFamily: "whitney-light",
                          marginHorizontal: 5,
                          color: "#C1C1C1",
                        }}
                      >
                        {data.rating.persons}
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Description View */}
                <View style={styles.descriptionStyle}>
                  <View>
                    <Text
                      style={{
                        fontFamily: "whitney-book",
                        fontSize: widthPercentageToDP(3.5),
                      }}
                    >
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          fontSize: widthPercentageToDP(4),
                        }}
                      >
                        {data.product_title}
                      </Text>{" "}
                      {data.brand.name}
                      <Text
                        style={{
                          color: "#FF3E6C",
                          // fontFamily: "whitney-bold",
                          // fontSize: widthPercentageToDP(3),
                          // marginTop: 5,
                          // marginLeft: 5,
                        }}
                      >
                        {" "}
                        {data.feature_categories.name}
                      </Text>
                    </Text>
                  </View>
                  <View>
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
                        {data.regular_price}PKR
                      </Text>
                      <Text
                        style={{
                          color: "black",
                          fontFamily: "whitney-semi-bold",
                          marginTop: 3,
                        }}
                      >
                        {"  "}
                        {data.discounted_price}PKR
                      </Text>
                      <Text
                        style={{
                          color: "#FF3E6C",
                          fontFamily: "whitney-bold",
                          fontSize: widthPercentageToDP(3),
                          // marginTop: 5,
                          // marginLeft: 5,
                        }}
                      >
                        {"  "}
                        Stock Left {data.quantity}
                      </Text>
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontFamily: "whitney-semi-bold",
                        fontSize: 12,
                        color: "#03956E",
                      }}
                    >
                      inclusive of all taxes
                    </Text>
                  </View>
                </View>
                {/* Plan View */}
                {/* <View style={styles.planStyle}>
            <View style={{ flex: 0.75, justifyContent: "center" }}>
              <Text style={{ ...styles.textStyle, fontSize: 14 }}>
                EMI option available
              </Text>
              <Text
                style={{
                  marginVertical: 7,
                  fontFamily: "whitney-book",
                  fontSize: 14,
                  color: "#000",
                }}
              >
                EMI starting from Rs. 38/month
              </Text>
            </View>
            <View style={{ flex: 0.25 }}>
              <Text
                style={{ ...styles.textStyle, fontSize: 16, color: "#FF3E6C" }}
              >
                View Plan
              </Text>
            </View>
          </View> */}
                {/* Return View */}
                <View style={{ ...styles.descriptionStyle, marginTop: 15 }}>
                  <View style={{ justifyContent: "center" }}>
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontSize: widthPercentageToDP(3.5),
                      }}
                    >
                      {data.exchange_policy.title}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "whitney-book",
                        fontSize: widthPercentageToDP(3.5),
                        marginTop: 7,
                        width: "90%",
                      }}
                    >
                      {data.exchange_policy.text}
                    </Text>
                  </View>
                </View>
                {/* Size View */}
                <View style={styles.sizeStyle}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontSize: widthPercentageToDP(3.5),
                      }}
                    >
                      Select Sizes
                    </Text>
                    <TouchableOpacity
                      onPress={() => {
                        showChart(true);
                        setAnimateType("slideInRight");
                      }}
                    >
                      <Text
                        style={{
                          ...styles.textStyle,
                          fontSize: widthPercentageToDP(4),
                          color: "#FF3E6C",
                        }}
                      >
                        Size chart
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{ width: "100%" }}>
                    <ScrollView horizontal>
                      <View style={styles.btnStyle}>
                        {data.size.map((gender) => {
                          return (
                            <View key={gender.Id}>
                              {size == gender.Id ? (
                                <TouchableOpacity style={styles.btn}>
                                  <View
                                    style={{
                                      borderColor: "#FF3E6C",
                                      borderWidth: 1,
                                      width: 40,
                                      height: 40,
                                      borderRadius: 40 / 2,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        // padding: 10,
                                        color: "#FF3E6C",
                                        textAlign: "center",
                                        fontSize: widthPercentageToDP(3),
                                        fontFamily: "whitney-semi-bold",
                                      }}
                                    >
                                      {gender.size_Name}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity
                                  onPress={() => {
                                    setSize(gender.Id);
                                  }}
                                  style={styles.btn}
                                >
                                  <View
                                    style={{
                                      //   flexDirection: "row",
                                      borderWidth: 1,
                                      width: 40,
                                      height: 40,
                                      borderRadius: 40 / 2,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        // padding: 5,
                                        fontSize: widthPercentageToDP(3),
                                        fontFamily: "whitney-semi-bold",
                                        textAlign: "center",
                                        color: "black",
                                      }}
                                    >
                                      {gender.size_Name}
                                    </Text>
                                  </View>
                                </TouchableOpacity>
                              )}
                            </View>
                          );
                        })}
                      </View>
                    </ScrollView>
                  </View>
                </View>
                {/* Colors View*/}
                <View style={styles.sizeStyle}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        ...styles.textStyle,
                        fontSize: widthPercentageToDP(3.9),
                      }}
                    >
                      Select Colors
                    </Text>
                    {/* <Text
                style={{ ...styles.textStyle, fontSize: 16, color: "#FF3E6C" }}
              >
                Size chart
              </Text> */}
                  </View>

                  <View style={{ width: "100%" }}>
                    <ScrollView horizontal>
                      <View style={styles.btnStyle}>
                        {data.color.map((gender) => {
                          return (
                            <View key={gender.Id}>
                              {color == gender.Id ? (
                                <TouchableOpacity style={styles.btn}>
                                  <View
                                    style={{
                                      // borderColor: "#FF3E6C",
                                      backgroundColor: gender.color_Name,
                                      borderWidth: 1,
                                      width: 40,
                                      height: 40,
                                      borderRadius: 40 / 2,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        // padding: 10,
                                        color: "#FF3E6C",
                                        textAlign: "center",
                                        fontSize: widthPercentageToDP(3),
                                        fontFamily: "whitney-semi-bold",
                                      }}
                                    ></Text>
                                  </View>
                                </TouchableOpacity>
                              ) : (
                                <TouchableOpacity
                                  onPress={() => {
                                    setColor(gender.Id);
                                  }}
                                  style={styles.btn}
                                >
                                  <View
                                    style={{
                                      //   flexDirection: "row",
                                      backgroundColor: gender.color_Name,
                                      // borderWidth: 1,
                                      width: 40,
                                      height: 40,
                                      borderRadius: 40 / 2,
                                      justifyContent: "center",
                                    }}
                                  >
                                    <Text
                                      style={{
                                        // padding: 5,
                                        fontSize: widthPercentageToDP(3),
                                        fontFamily: "whitney-semi-bold",
                                        textAlign: "center",
                                        color: "black",
                                      }}
                                    ></Text>
                                  </View>
                                </TouchableOpacity>
                              )}
                            </View>
                          );
                        })}
                      </View>
                    </ScrollView>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 8,
                        justifyContent: "space-between",
                        height: 40,
                      }}
                    >
                      {data.in_wishlist ? (
                        <View
                          style={{
                            borderWidth: 1,
                            flex: 0.4,
                            borderColor: "#C9C9C9",
                            // height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 2,
                          }}
                        >
                          <TouchableOpacity>
                            <View
                              style={{
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                // height: 30,
                              }}
                            >
                              <Ionicons
                                name="heart-outline"
                                size={14}
                                color={Colors.Primary}
                              />
                              <Text
                                style={{
                                  fontFamily: "whitney-semi-bold",
                                  fontSize: widthPercentageToDP(3.5),
                                  color: "black",
                                  marginHorizontal: 5,
                                }}
                              >
                                REMOVE WISHLIST
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View
                          style={{
                            borderWidth: 1,
                            flex: 0.4,
                            borderColor: "#C9C9C9",
                            // height: 50,
                            justifyContent: "center",
                            alignItems: "center",
                            borderRadius: 2,
                          }}
                        >
                          <TouchableOpacity>
                            <View
                              style={{
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                // height: 30,
                              }}
                            >
                              <Ionicons
                                name="heart-outline"
                                size={14}
                                color={"#000"}
                              />
                              <Text
                                style={{
                                  fontFamily: "whitney-semi-bold",
                                  fontSize: widthPercentageToDP(3.5),
                                  color: "black",
                                  marginHorizontal: 5,
                                }}
                              >
                                WISHLIST
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )}

                      {data.in_cart ? (
                        <View
                          style={{
                            backgroundColor: "#FF3E6C",
                            flex: 0.55,
                            borderRadius: 2,
                            justifyContent: "center",
                            // alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() =>
                              props.navigation.navigate("Checkout")
                            }
                          >
                            <View
                              style={{
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                // height: 30,
                              }}
                            >
                              <FontAwesome
                                name="shopping-bag"
                                size={14}
                                color={"white"}
                              />
                              <Text
                                style={{
                                  fontFamily: "whitney-semi-bold",
                                  color: "white",
                                  fontSize: widthPercentageToDP(3.5),
                                  marginHorizontal: 5,
                                }}
                              >
                                REMOVE FROM CART
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      ) : (
                        <View
                          style={{
                            backgroundColor: "#FF3E6C",
                            flex: 0.55,
                            borderRadius: 2,
                            justifyContent: "center",
                            // alignItems: "center",
                          }}
                        >
                          <TouchableOpacity
                            onPress={() => {
                              if (size == 0) {
                                setToast(true);
                                setMessage("Please select the Size first");
                              } else if (color == 0) {
                                setToast(true);
                                setMessage("Please select the color first");
                              } else {
                                props.navigation.navigate("Checkout");
                              }
                            }}
                          >
                            <View
                              style={{
                                // flex: 1,
                                flexDirection: "row",
                                justifyContent: "center",
                                alignItems: "center",
                                // height: 30,
                              }}
                            >
                              <FontAwesome
                                name="shopping-bag"
                                size={14}
                                color={"white"}
                              />
                              <Text
                                style={{
                                  fontFamily: "whitney-semi-bold",
                                  color: "white",
                                  fontSize: widthPercentageToDP(3.5),
                                  marginHorizontal: 5,
                                }}
                              >
                                ADD TO CART
                              </Text>
                            </View>
                          </TouchableOpacity>
                        </View>
                      )}
                    </View>
                  </View>
                </View>
                {/* Details View */}
                <View
                  style={{
                    ...styles.sizeStyle,
                  }}
                >
                  {!data || !data.custom_fields.length ? (
                    <View />
                  ) : (
                    <FlatList
                      data={data.custom_fields}
                      keyExtractor={(item, index) => "unqiue" + index}
                      numColumns={2}
                      renderItem={({ item, index }) => {
                        return (
                          <View
                            style={{
                              borderBottomWidth: 1,
                              paddingBottom: 8,
                              flex: 0.5,
                              borderColor: "#C9C9C9",
                              margin: 5,
                              // height: 48,
                              justifyContent: "space-between",
                              // alignItems: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "whitney-semi-bold",
                                fontSize: widthPercentageToDP(3.5),
                              }}
                            >
                              {item.heading}
                            </Text>
                            <Text
                              style={{
                                fontFamily: "whitney-book",
                                fontSize: widthPercentageToDP(3.5),
                                marginTop: 5,
                              }}
                            >
                              {item.text}
                            </Text>
                          </View>
                        );
                      }}
                    />
                  )}
                </View>
                {/* Tag View */}
                <View
                  style={{
                    ...styles.sizeStyle,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 0.45,
                      }}
                    >
                      <Image
                        source={require("../../../assets/orignalTag.png")}
                        style={{ height: 25, width: 80 }}
                        resizeMode={"contain"}
                      />
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          color: "#FF3E6C",
                          fontSize: widthPercentageToDP(3.3),
                          marginTop: 10,
                        }}
                      >
                        Genuine Product
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "100%",
                        borderWidth: 1,
                        borderColor: "#C9C9C9",
                      }}
                    />
                    <View
                      style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flex: 0.45,
                      }}
                    >
                      <Image
                        source={require("../../../assets/qualityTag.png")}
                        style={{ height: 25, width: 80 }}
                        resizeMode={"contain"}
                      />
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          color: "#FF3E6C",
                          marginTop: 10,
                          fontSize: widthPercentageToDP(3.3),
                        }}
                      >
                        Quality Checked
                      </Text>
                    </View>
                  </View>
                </View>
                {/* Rating View */}
                <View
                  style={{
                    ...styles.sizeStyle,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "whitney-semi-bold",
                      fontSize: widthPercentageToDP(3.9),
                    }}
                  >
                    Rating & Reviews
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 15,
                      alignItems: "center",
                    }}
                  >
                    <View style={{ flex: 0.45 }}>
                      <View
                        style={{
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Text
                          style={{
                            fontFamily: "whitney-book",
                            fontSize: widthPercentageToDP(13),
                            color: "grey",
                          }}
                        >
                          {Math.trunc(data.rating.value)}
                        </Text>
                        <Ionicons name="md-star" size={14} color="#03956E" />
                      </View>
                      <Text
                        style={{
                          fontFamily: "whitney-book",
                          fontSize: widthPercentageToDP(3.5),
                          textAlign: "center",
                        }}
                      >
                        {data.rating.persons} Verified Buyers
                      </Text>
                    </View>
                    <View
                      style={{
                        height: "100%",
                        borderWidth: 1,
                        borderColor: "#C9C9C9",
                      }}
                    />
                    <View
                      style={{
                        flex: 0.65,
                        marginLeft: 4,
                        justifyContent: "center",
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          marginTop: 10,
                          flex: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                            flex: 0.15,
                            justifyContent: "space-around",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "whitney-semi-bold",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            5
                          </Text>
                          <Ionicons name="md-star" size={14} color="#03956E" />
                        </View>
                        <View
                          style={{
                            flex: 0.7,

                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          {console.log(data.rating_details[4].value)}

                          <SliderCustom
                            fill={parseInt(data.rating_details[4].value) * 10}
                          />
                        </View>
                        <View style={{ flex: 0.15 }}>
                          <Text
                            style={{
                              fontFamily: "whitney-book",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            {data.rating_details[4].value}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          flex: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            flex: 0.15,
                            alignItems: "center",
                            justifyContent: "space-around",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "whitney-semi-bold",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            4
                          </Text>
                          <Ionicons name="md-star" size={12} color="#03956E" />
                        </View>
                        <View
                          style={{
                            flex: 0.7,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <SliderCustom
                            fill={parseInt(data.rating_details[3].value) * 10}
                          />
                        </View>
                        <View style={{ flex: 0.15 }}>
                          <Text
                            style={{
                              fontFamily: "whitney-book",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            {data.rating_details[3].value}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          flex: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            flex: 0.15,
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "whitney-semi-bold",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            3
                          </Text>
                          <Ionicons name="md-star" size={12} color="#03956E" />
                        </View>
                        <View
                          style={{
                            flex: 0.7,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <SliderCustom
                            fill={parseInt(data.rating_details[2].value) * 10}
                          />
                        </View>
                        <View style={{ flex: 0.15 }}>
                          <Text
                            style={{
                              fontFamily: "whitney-book",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            {data.rating_details[2].value}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          flex: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            flex: 0.15,
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "whitney-semi-bold",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            2
                          </Text>
                          <Ionicons name="md-star" size={12} color="#03956E" />
                        </View>
                        <View
                          style={{
                            flex: 0.7,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <SliderCustom
                            fill={parseInt(data.rating_details[1].value) * 10}
                          />
                        </View>
                        <View style={{ flex: 0.15 }}>
                          <Text
                            style={{
                              fontFamily: "whitney-book",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            {data.rating_details[1].value}
                          </Text>
                        </View>
                      </View>
                      <View
                        style={{
                          flexDirection: "row",
                          width: "100%",
                          flex: 1,
                          justifyContent: "space-between",
                          alignItems: "center",
                          marginTop: 10,
                        }}
                      >
                        <View
                          style={{
                            flexDirection: "row",
                            flex: 0.15,
                            justifyContent: "space-around",
                            alignItems: "center",
                          }}
                        >
                          <Text
                            style={{
                              fontFamily: "whitney-semi-bold",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            1
                          </Text>
                          <Ionicons name="md-star" size={12} color="#03956E" />
                        </View>
                        <View
                          style={{
                            flex: 0.7,
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <SliderCustom
                            fill={parseInt(data.rating_details[0].value) * 10}
                          />
                        </View>
                        <View style={{ flex: 0.15 }}>
                          <Text
                            style={{
                              fontFamily: "whitney-book",
                              fontSize: widthPercentageToDP(3),
                              color: "#4D4D4D",
                            }}
                          >
                            {data.rating_details[0].value}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      flex: 1,
                      borderWidth: 1,
                      marginVertical: 5,
                      borderColor: "#C9C9C9",
                    }}
                  />
                  {/* What Customer Said */}
                  {/* <Text
              style={{
                fontFamily: "whitney-semi-bold",
                fontSize: 16,
                marginVertical: 15,
              }}
            >
              What Customers Said
            </Text> */}
                  {/* Fit */}
                  {/* <Text style={{ fontFamily: "whitney-book", fontSize: 14 }}>
              Fit
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[0]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Too Tight (0%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Somewhat Tight(2%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[4.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-semi-bold",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  As Expected (22%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.6]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Somewhat Loose (6%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.4]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Too Loose(4%)
                </Text>
              </View>
            </View> */}
                  {/* Length */}
                  {/* <Text
              style={{
                fontFamily: "whitney-book",
                fontSize: 14,
                marginTop: 20,
              }}
            >
              Length
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[0]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Too Short (0%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Somewhat Short (2%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[4.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-semi-bold",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  As Expected (22%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.6]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Somewhat Long (6%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[1.4]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Too Long (4%)
                </Text>
              </View>
            </View> */}
                  {/* Thickness */}
                  {/* <Text
              style={{
                fontFamily: "whitney-semi-bold",
                fontSize: 14,
                marginTop: 20,
              }}
            >
              Thickness
            </Text>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[0]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Tin (0%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[6.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-semi-bold",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Medium (62%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                flex: 1,
                justifyContent: "space-between",
                marginVertical: 5,
              }}
            >
              <View
                style={{
                  flex: 0.4,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <MultiSlider
                  selectedStyle={{
                    backgroundColor: "#04A48E",
                  }}
                  unselectedStyle={{
                    backgroundColor: "silver",
                  }}
                  values={[2.2]}
                  containerStyle={{
                    height: 15,
                  }}
                  enabledOne={false}
                  sliderLength={150}
                />
              </View>
              <View style={{ flex: 0.5, alignItems: "flex-start" }}>
                <Text
                  style={{
                    fontFamily: "whitney-book",
                    fontSize: 14,
                    color: "#4D4D4D",
                  }}
                >
                  Tick (22%)
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                borderWidth: 1,
                marginVertical: 10,
                borderColor: "#C9C9C9",
              }}
            /> */}
                  {/* Customer Photos */}
                  {/* <Text
              style={{ ...styles.textStyle, fontSize: 14, marginVertical: 10 }}
            >
              Customers Photos (5)
            </Text>
            <ScrollView horizontal>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ height: 100, width: 100, marginHorizontal: 5 }}>
                  <Image
                    source={require("../../../assets/sliderImages1.png")}
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{ height: 100, width: 100, marginHorizontal: 5 }}>
                  <Image
                    source={require("../../../assets/sliderImages2.png")}
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{ height: 100, width: 100, marginHorizontal: 5 }}>
                  <Image
                    source={require("../../../assets/sliderImages3.png")}
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                  />
                </View>
                <View style={{ height: 100, width: 100, marginHorizontal: 5 }}>
                  <ImageBackground
                    source={require("../../../assets/sliderImages1.png")}
                    resizeMode={"cover"}
                    style={styles.imageStyle}
                  >
                    <View
                      style={{
                        backgroundColor: "#ffff",
                        flex: 1,
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          ...styles.textStyle,
                          fontSize: 20,
                          color: "black",
                        }}
                      >
                        +2
                      </Text>
                    </View>
                  </ImageBackground>
                </View>
              </View>
            </ScrollView> */}
                  {/* Customer Reviews */}
                  <Text
                    style={{
                      ...styles.textStyle,
                      fontSize: widthPercentageToDP(3.5),
                      marginTop: 20,
                    }}
                  >
                    Customers Reviews ({data.reviews.length})
                  </Text>
                  <FlatList
                    keyExtractor={(item, index) => {
                      item.id;
                    }}
                    data={data.reviews}
                    renderItem={renderItem}
                  />
                  {data.reviews.length < 1 ? (
                    <Text
                      style={{
                        fontFamily: "whitney-semi-bold",
                        fontSize: widthPercentageToDP(3.3),
                        color: "#FF3E6C",
                        marginVertical: 10,
                      }}
                    >
                      View all {data.reviews.length - 1} reviews
                    </Text>
                  ) : null}
                </View>
                <View
                  style={{
                    ...styles.sizeStyle,
                  }}
                >
                  <Text
                    style={{
                      fontFamily: "whitney-semi-bold",
                      fontSize: widthPercentageToDP(3.5),
                    }}
                  >
                    Delivery & Services for
                  </Text>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      borderWidth: 1,
                      paddingVertical: 5,
                      paddingHorizontal: 16,
                      borderRadius: 10,
                      marginTop: 10,
                      borderColor: "#C9C9C9",
                    }}
                  >
                    <TextInput
                      placeholder="400001"
                      keyboardType="numeric"
                      style={{ fontFamily: "whitney-book", fontSize: 14 }}
                    />
                    <Text
                      style={{
                        fontFamily: "whitney-semi-bold",
                        fontSize: widthPercentageToDP(4),
                        color: "#FF3E6C",
                        marginVertical: 10,
                      }}
                    >
                      Change
                    </Text>
                  </View>
                  <View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <FontAwesome5
                        name="shipping-fast"
                        size={20}
                        style={{ flex: 0.1 }}
                      />
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          fontSize: widthPercentageToDP(3),
                          flex: 0.85,
                          marginHorizontal: 10,
                        }}
                      >
                        {data.delivery_time}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <MaterialCommunityIcons
                        name="cash-marker"
                        size={20}
                        style={{ flex: 0.1 }}
                      />
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          fontSize: widthPercentageToDP(3),
                          flex: 0.85,
                          marginHorizontal: 10,
                        }}
                      >
                        {data.cash_on_delivery_text}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        marginTop: 20,
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Fontisto
                        name="arrow-swap"
                        size={20}
                        style={{ flex: 0.1 }}
                      />
                      <Text
                        style={{
                          fontFamily: "whitney-semi-bold",
                          fontSize: widthPercentageToDP(3),
                          flex: 0.85,
                          marginHorizontal: 10,
                        }}
                      >
                        {data.exchange_policy.text}
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={{
                    ...styles.sizeStyle,
                    // justifyContent: "space-between",
                    alignItems: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      ...styles.textStyle,
                      fontSize: widthPercentageToDP(3.9),
                    }}
                  >
                    View Similar
                  </Text>
                  <View
                    style={{
                      marginTop: 10,
                    }}
                  >
                    {console.log(data.up_sell_products)}
                    <FlatList
                      horizontal
                      data={data.up_sell_products}
                      renderItem={renderItemMore}
                    />
                    {/* <TodayDeals data={data.up_sell_products} /> */}
                    {/* <TodayDeals data={TODAYDUMMY}/> */}
                  </View>
                </View>
              </View>
              <TouchableOpacity
                style={{
                  padding: heightPercentageToDP(1),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: heightPercentageToDP(1),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Fonts.whitney_semi_bold,
                      color: "black",
                      fontSize: widthPercentageToDP(4),
                    }}
                  >
                    View Similar
                  </Text>
                  <AntDesign
                    name="right"
                    size={heightPercentageToDP(2)}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    marginTop: heightPercentageToDP(1.5),
                    height: widthPercentageToDP(0.15),
                    marginLeft: heightPercentageToDP(1),
                    marginRight: heightPercentageToDP(1),
                    backgroundColor: "black",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: heightPercentageToDP(1),
                  // borderWidth: 1,
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: heightPercentageToDP(1),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Fonts.whitney_semi_bold,
                      color: "black",
                      fontSize: widthPercentageToDP(4),
                    }}
                  >
                    View Similar
                  </Text>
                  <AntDesign
                    name="right"
                    size={heightPercentageToDP(2)}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    marginTop: heightPercentageToDP(1.5),
                    height: widthPercentageToDP(0.15),
                    marginLeft: heightPercentageToDP(1),
                    marginRight: heightPercentageToDP(1),
                    backgroundColor: "black",
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: heightPercentageToDP(1),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingHorizontal: heightPercentageToDP(1),
                  }}
                >
                  <Text
                    style={{
                      fontFamily: Fonts.whitney_semi_bold,
                      color: "black",
                      fontSize: widthPercentageToDP(4),
                    }}
                  >
                    View Similar
                  </Text>
                  <AntDesign
                    name="right"
                    size={heightPercentageToDP(2)}
                    color="black"
                  />
                </View>
                <View
                  style={{
                    marginTop: heightPercentageToDP(1.5),
                    height: widthPercentageToDP(0.15),
                    marginLeft: heightPercentageToDP(1),
                    marginRight: heightPercentageToDP(1),
                    backgroundColor: "black",
                  }}
                />
              </TouchableOpacity>
              <View style={styles.footer}>
                <View
                  style={{
                    width: "50%",
                    borderBottomColor: "black",
                    borderBottomWidth: 1,
                    marginBottom: 10,
                  }}
                />
                <Text
                  style={{
                    fontFamily: "whitney-light-italic",
                    fontSize: widthPercentageToDP(3),
                    // fontSize: 14,
                    textAlign: "center",
                    paddingHorizontal: 10,
                  }}
                >
                  "Elegance is not standing out, but being remembered."
                </Text>
                <Text
                  style={{
                    fontSize: widthPercentageToDP(3),
                    color: "grey",
                    fontFamily: "whitney-light-italic",
                  }}
                >
                  Giorgio Armani
                </Text>
              </View>
            </NativeBaseProvider>
          </ScrollView>
        </>
      )}
      <SnakBar isVisible={toast} text={message} bottom={"0%"} />
      {sizeChart && (
        <Modal visible={sizeChart} transparent={true} animationType="none">
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
          >
            <Animatable.View animation={animateType} style={styles.mainModal}>
              <Ionicons
                name="close"
                color={Colors.Primary}
                size={30}
                onPress={() => {
                  showChart(false);
                  setAnimateType("slideInLeft");
                }}
                style={{
                  position: "absolute",
                  top: "8%",
                  right: "0%",
                  zIndex: 3,
                }}
              />
              <Swiper
                ref={swiper}
                containerStyle={styles.wrapper}
                scrollEnabled={enable}
                index={0}
                //dotColor={"red"}
                //activeDotColor={"blue"}
                dot={
                  <View
                    style={{
                      backgroundColor: "#ffffff",
                      width: 5,
                      height: 5,
                      borderRadius: 4,
                      marginLeft: 3,
                      marginRight: 3,
                    }}
                  />
                }
                activeDot={
                  <View
                    style={{
                      backgroundColor: "#000",
                      width: 8,
                      height: 8,
                      borderRadius: 4,
                      marginLeft: 3,
                      marginRight: 3,
                    }}
                  />
                }
                //showsButtons
              >
                {imgList.map((item, index) => {
                  return (
                    <FastImage
                      key={"uniqie" + index}
                      source={{ uri: item }}
                      style={{
                        width: "100%",
                        height: "100%",
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  );
                })}
              </Swiper>
            </Animatable.View>
          </View>
        </Modal>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  main: {
    flex: 1,
  },
  mainModal: {
    width: widthPercentageToDP(95),
    height: heightPercentageToDP(50),
    //backgroundColor: "#ffffff",
    borderRadius: widthPercentageToDP(3),
  },
  image: {
    width: Dimensions.get("window").width * 1,
    height: heightPercentageToDP(60),
  },
  buttonStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: -80,
    marginHorizontal: 10,
  },
  raitingCard: {
    // width: "50%",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  textPicRaiting: {
    fontSize: 12,
    fontFamily: "whitney-bold",
    textAlign: "center",
    marginHorizontal: 5,
  },
  descriptionStyle: {
    // padding: 20,

    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: "white",
  },
  textStyle: {
    fontFamily: "whitney-semi-bold",
    fontSize: 14,
  },
  planStyle: {
    flexDirection: "row",
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 7,
    backgroundColor: "white",
  },
  sizeStyle: {
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 10,
    // marginHorizontal: 5,
  },
  btn: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginRight: 5,
    // marginHorizontal: 5,
  },
  imageStyle: {
    width: "100%",
    height: "100%",
  },
  footer: {
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 40,
  },
  textheadingStyle: {
    fontFamily: "kepler-bold",
    fontSize: 20,
    marginVertical: 10,
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
});
export default ProductDetail;
