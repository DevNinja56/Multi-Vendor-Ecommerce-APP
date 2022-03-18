import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import FastImage from "react-native-fast-image";
import { heightPercentageToDP } from "react-native-responsive-screen";
import CategoryCards from "../../../../components/CategoryCards";
import DealsCards from "../../../../components/DealsCards";

import ImageSliderCustom from "../../../../components/HomeComponents/ImageSliderCustom";
import SersonChecklistCards from "../../../../components/SersonChecklistCards";
import {
  DAILYEDITORGRIDDUMMY,
  DAILYEDITORHIMDUMMY,
  SEASONCHECKLISTDUMMY,
} from "../../../../data/dummy-data";
import SimpleHeader from "../../Header/simple_header";
import BeautyDeals from "../BeautyDeals";
import FashionPredictionDeals from "../FashionPredictionDeals";
import SeasonDeals from "../SeasonDeals";
import TodayDeals from "../TodayDeals";

const renderGridItem = (itemData) => {
  return (
    <SersonChecklistCards
      image={itemData.item.image}
      name={itemData.item.title}
      date={itemData.item.date}
    />
  );
};

const renderWinterItem = (itemData) => {
  return <DealsCards imageUrl={itemData.item.image} />;
};

const renderDailyEditorGGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
      style={{...styles.mainContainerdeals2Card,width:null,height:null}}
      imageContainerstyle={styles.imageContainerstyle2}
     
    />
  );
};

const WinterWearScreen = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader
        headerTitle={"WinterWear"}
        clickHandler={() => props.navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.screen}>
          <View style={styles.imageContainer}>
            <FastImage
              source={require("../../../../assets/firstImage.png")}
              style={{
                ...styles.image,
                justifyContent: "flex-end",
                alignItems: "center",
              }}
              resizeMode={FastImage.resizeMode.cover}
            >
              <View
                style={{
                  backgroundColor: "rgba(52, 52, 52, 0.6)",
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    paddingTop: 8,
                    paddingBottom: 2,
                    fontFamily: "kepler-regular",
                    fontSize: heightPercentageToDP(1.75),
                    color: "white",
                  }}
                >
                  - Up To 70% Off -
                </Text>

                <Text
                  style={{
                    paddingVertical: 2,
                    fontFamily: "kepler-medium",
                    fontSize: heightPercentageToDP(3.5),
                    color: "white",
                  }}
                >
                  All Things Winter
                </Text>

                <Text
                  style={{
                    paddingVertical: 2,
                    fontFamily: "kepler-light",
                    fontSize: heightPercentageToDP(2.5),
                    color: "white",
                  }}
                >
                  Cozy up your closet for colder days!
                </Text>

                <TouchableOpacity>
                  <Text
                    style={{
                      paddingVertical: 10,
                      fontFamily: "kepler-medium",
                      fontSize: heightPercentageToDP(2.5),
                      color: "white",
                    }}
                  >
                    + EXPLORE
                  </Text>
                </TouchableOpacity>
              </View>
            </FastImage>
          </View>

          <View style={styles.headingLayoutStyles}>
            <Text style={styles.headingStyle}>- In The Spotlight -</Text>
            <Text style={styles.textStyles}>What's Hot In Winter(wear)</Text>
          </View>

          <View style={styles.sliderContainer}>
          <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>

          <View style={styles.backLayout}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- In The Spotlight -</Text>
              <Text style={styles.textStyles}>What's Hot In Winter(wear)</Text>
            </View>
            <SeasonDeals />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Premium Brands -</Text>
              <Text style={styles.textStyles}>
                Give your wardrobe a promotion this season
              </Text>
            </View>
            <TodayDeals />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Season's Checklist -</Text>
              <Text style={styles.textStyles}>
                Giving winter the warmest welcome
              </Text>
            </View>
            <FashionPredictionDeals
              renderGridItem={renderGridItem}
              data={SEASONCHECKLISTDUMMY}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Trends For Her -</Text>
              <Text style={styles.textStyles}>
                Hot fashion for the cold season
              </Text>
            </View>
            <BeautyDeals
              renderFun={renderWinterItem}
              data={DAILYEDITORHIMDUMMY}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Trends For Him -</Text>
              <Text style={styles.textStyles}>
                Style forecast for the weather forecast
              </Text>
            </View>
            <BeautyDeals
              renderFun={renderWinterItem}
              data={DAILYEDITORHIMDUMMY}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Winter Wear For Teens -</Text>
            </View>

            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Trends For Tiny Tots -</Text>
              <Text style={styles.textStyles}>
                Vibrant looks for a grey winter
              </Text>
            </View>

            <BeautyDeals
              renderFun={renderWinterItem}
              data={DAILYEDITORHIMDUMMY}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Trends For Tiny Tots -</Text>
              <Text style={styles.textStyles}>
                Vibrant looks for a grey winter
              </Text>
            </View>

            <FashionPredictionDeals
              renderGridItem={renderDailyEditorGGridItem}
              data={DAILYEDITORGRIDDUMMY}
            />
          </View>

          <View
            style={{
              marginTop: 20,
              backgroundColor: "#A2B1FB",
              // padding: 20,
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flex: 1, justifyContent: "space-between" }}>
              <View
                style={{
                  height: heightPercentageToDP(35),
                  width: "100%",
                  paddingHorizontal: 5,
                }}
              >
                <FastImage
                  source={require("../../../../assets/freezingPic.png")}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
              <View
                style={{
                  height: heightPercentageToDP(35),
                  width: "100%",
                  paddingHorizontal: 5,
                }}
              >
                <FastImage
                  source={require("../../../../assets/freezingPic.png")}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <View style={{ padding: 5 }}>
                <Text
                  style={{
                    paddingVertical: 5,
                    fontFamily: "kepler-medium",
                    fontSize: heightPercentageToDP(4),
                    color: "#062460",
                  }}
                >
                  Whatever The Weather
                </Text>
                <Text
                  style={{
                    paddingVertical: 5,
                    fontFamily: "kepler-light",
                    fontSize: heightPercentageToDP(2.75),
                    color: "grey",
                  }}
                >
                  Tell Us Where You Stay, We'll Tell You What To Wear
                </Text>
              </View>
              <View style={{ flex: 1, paddingBottom: 10 }}>
                <FastImage
                  source={require("../../../../assets/freezingPic.png")}
                  resizeMode={FastImage.resizeMode.cover}
                  style={{ width: "100%", height: "100%" }}
                />
              </View>
            </View>
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>- Winter Footwear -</Text>
            </View>

            <FashionPredictionDeals
              renderGridItem={renderDailyEditorGGridItem}
              data={DAILYEDITORGRIDDUMMY}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>
              - Winter Editorials -
            </Text>
            <Text
            style={styles.textStyles}
            >
              It's More Than Just Sweater Weather
            </Text>
          </View>
       
          <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>

          <View style={{ ...styles.backLayout, marginTop: 20 }}>
            <View style={styles.headingLayoutStyles}>
              <Text style={styles.headingStyle}>
              - Winter Editorials -
            </Text>
            <Text
             style={styles.textStyles}
            >
              It's More Than Just Sweater Weather
            </Text>

           
              <TodayDeals />
            </View>
          </View>
          <View
            style={{ ...styles.flatlistPrediction, backgroundColor: "white" }}
          >
            <FashionPredictionDeals
              renderGridItem={renderDailyEditorGGridItem}
              data={DAILYEDITORGRIDDUMMY}
            />
          </View>

          <View style={styles.backLayout}>
          <View
            style={styles.headingLayoutStyles}
          >
            <Text
              style={styles.headingStyle}
            >
              - More Brands To Love -
            </Text>
            <Text
              style={styles.textStyles}
            >
              Vibrant looks for a grey winter
            </Text>
          
              <FashionPredictionDeals
                renderGridItem={renderGridItem}
                data={SEASONCHECKLISTDUMMY}
              />
            </View>
          </View>

          <View
            style={styles.headingLayoutStyles}
          >
            <Text
              style={styles.textStyles}
            >
              Winter Home Makeovers
            </Text>
          </View>

          <ImageSliderCustom
            backgroundColorStyle={{ backgroundColor: "white" }}
          />

          <View
            style={{
              ...styles.imageContainer,
              height: heightPercentageToDP(35),
              marginTop: 10,
              elevation: 4,
            }}
          >
            <FastImage
              source={require("../../../../assets/banner5.png")}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <View style={{ ...styles.imageContainer, height: heightPercentageToDP(11), marginTop: 10 }}>
            <FastImage
              source={require("../../../../assets/smallBannerWinter1.png")}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <View style={{ ...styles.imageContainer, height: heightPercentageToDP(11), marginTop: 10 }}>
            <FastImage
              source={require("../../../../assets/smallBannerWinter2.png")}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <View style={{ ...styles.imageContainer, height: heightPercentageToDP(11), marginTop: 10 }}>
            <FastImage
              source={require("../../../../assets/smallBannerWinter3.png")}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          <Text
            style={{
              marginTop: 10,
              paddingVertical: 5,
              fontFamily: "kepler-light",
              fontSize: heightPercentageToDP(2.5),
              color: "#062460",
              textAlign: "center",
            }}
          >
            Drink up your hot cocoa, slip into your toasty clothes & have a
            great winter!
          </Text>

          <FastImage
            source={require("../../../../assets/flowerIcon.png")}
            style={{
              height: heightPercentageToDP(4),
              width: heightPercentageToDP(4),
              alignSelf: "center",
              marginTop: 10,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageContainer: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.9,
    // overflow: 'hidden',
    // marginTop: Dimensions.get("window").height / 90,
  },
  image: {
    width: "100%",
    height: "100%",
  },

  flatlistPrediction: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  backLayout: {
    backgroundColor: "white",
  },
  headingLayoutStyles: {
    backgroundColor: "white",
    padding: heightPercentageToDP(1.5),
    alignItems: "center",
  },
  headingStyle: {
    paddingVertical: 5,
    fontFamily: "kepler-regular",
    fontSize: heightPercentageToDP(4),
    color: "#062460",
  },
  textStyles: {
    paddingVertical: 5,
    fontFamily: "kepler-light",
    fontSize: heightPercentageToDP(2.5),
    color: "grey",
  },

  mainContainerdeals2Card: {
    marginVertical: 0,
    marginHorizontal: 10,
  },

  imageContainerstyle2: {
    height: 155,
    width: 100,
    // resizeMode: 'cover'
  },

  sliderContainer: {
    backgroundColor: "#ffff",
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").width * 0.73,

    marginVertical: Dimensions.get("window").height / 99,
  },
});

export default WinterWearScreen;
