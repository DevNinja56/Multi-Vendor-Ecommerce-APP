import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

import MainScreen from "./MainScreen";
import ImageSliderCustom from "../../../components/HomeComponents/ImageSliderCustom";
import ImageTopBottomSlider from "../../../components/HomeComponents/ImageTopBottomSlider";
import WinterDeals from "./WinterDeals";

import SeasonDeals from "./SeasonDeals";
import TodayDeals from "./TodayDeals";
import BeautyDeals from "./BeautyDeals";
import FashionPredictionDeals from "./FashionPredictionDeals";
import Header from '../Header'

import { styles } from '../../../Styles/styles'


import {
  FASHIONPREDICTIONDUMMY,
  CATEGORYDUMMY,
  TOPBRANDSDUMMY,
  BEAUTYDUMMY,
  INFLUENCERSDUMMY,
  STYLECASDUMMY,
  WEADINGDUMMY,
  DAILYEDITORDUMMY,
  DAILYEDITORGRIDDUMMY,
  INFLUENCERPROFILEDUMMY,
  DAILYEDITORHIMDUMMY,
  TODAYDUMMY,
} from "../../../data/dummy-data";
import { SliderBox } from "react-native-image-slider-box";

import FashionPredictionCards from "../../../components/FashionPredictionCards";

import CategoryCards from "../../../components/CategoryCards";
import DealsCards from "../../../components/DealsCards";
import InfluencerCards from "../../../components/InfluencerCards";
import FastImage from "react-native-fast-image";

const renderGridItem = (itemData) => {
  return (
    <FashionPredictionCards
      image={itemData.item.image}
      name={itemData.item.title}
      date={itemData.item.date}
    />
  );
};

const renderCategoryGridItem = (itemData) => {
  return (
    <CategoryCards image={itemData.item.image} name={itemData.item.title} />
  );
};
const renderDealsGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
      name={itemData.item.title}
      style={{...styles.mainContainerdeals2Card,width:widthPercentageToDP(10),height:heightPercentageToDP(20)}}
      // imageContainerstyle={styles.imageContainerstyle1}
      imageContainerstyle={{width:"100%",height:"100%"}}
  
    />
  );
};

const renderDailyEditorGGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
    style={{...styles.mainContainerdeals2Card,width:widthPercentageToDP(10),height:heightPercentageToDP(20)}}
      // imageContainerstyle={styles.imageContainerstyle1}
      imageContainerstyle={{width:"100%",height:"100%"}}
     
    />
  );
};

const renderProfileInfluencerGGridItem = (itemData) => {
  return (
    <InfluencerCards
      image={itemData.item.image}
      style={styles.mainContainerdeals2Card}
      imageContainerstyle={styles.imageContainerstyle2}
    />
  );
};

const renderWinterItem = (itemData) => {
  return <DealsCards imageUrl={itemData.item.image} />;
};

const renderWeadingItem = (itemData) => {
  return (
    <DealsCards
      imageUrl={itemData.item.image}
      style={styles.weadingCardsStyle}
    />
  );
};

const HomePage = ({ navigation }) => {
  const changeShop = () => {
    console.log("RoadSter");
    navigation.navigate("RoadSter");
  };

  const winterWear = () => {
    console.log("WinterWear");
    navigation.navigate("WinterWear");
  };
  const menWear = () => {
    console.log("WinterWear");
    navigation.navigate("Men");
  };
  const womenWear = () => {
    console.log("WinterWear");
    navigation.navigate("Women");
  };
  const kidsWear = () => {
    console.log("WinterWear");
    navigation.navigate("Kids");
  };
  const footwareWear = () => {
    console.log("WinterWear");
    navigation.navigate("Footware");
  };

  const [imagesSlides] = useState([
    require("../../../assets/slider1.png"),
    require("../../../assets/slider2.png"),
    require("../../../assets/slider3.png"),
  ]);
  return (
    <SafeAreaView style={styles.container}>
      <Header
        clickHandler={() => navigation.toggleDrawer()}
        notificationClickHandler={()=>navigation.navigate('Notifications')}
        wishlistClickHandler={()=>navigation.navigate('Wishlist')}
        cartClickHandler={()=>navigation.navigate('Cart')}

        ishome={true}
      />
      <ScrollView style={styles.container}>

        <View style={styles.firstContainer}>
          <MainScreen
            winterWear={winterWear}
            menWear={menWear}
            womenWear={womenWear}
            kidsWear={kidsWear}
            footwareWear={footwareWear}
          />
        </View>

        <View style={styles.imageContainer}>
          <FastImage
            source={require("../../../assets/firstImage.png")}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
        <View style={styles.imageBannerContainer}>
          <FastImage
            source={require("../../../assets/imageBanner.png")}
            style={{
              ...styles.image,
            }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>


        <SliderBox
          images={imagesSlides}
          dotColor="#FF3E6C"
          inactiveDotColor="#90A4AE"
          resizeMode={'cover'}
          height={heightPercentageToDP(30)}
        />

        <View style={styles.sliderContainer2}>
          <ImageTopBottomSlider
            backgroundColorStyle={{ backgroundColor: "white" }}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>WINTER WEAR SPECIAL DEALS</Text>
          </View>
          <WinterDeals fun={changeShop} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TOP PICK OF THE SEASON</Text>
          </View>
          <SeasonDeals />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>DEALS OF THE DAY</Text>
          </View>
          {/* <TodayDeals data={TODAYDUMMY}/> */}
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>BEST OF BEAUTY & PERSONAL</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={BEAUTYDUMMY} />
        </View>

        <View style={styles.imageBanner2Container}>
          <Image
            source={require("../../../assets/banner1.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>

        <View style={styles.seasonCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>FASHION PREDICTION 2022</Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderGridItem}
            data={FASHIONPREDICTIONDUMMY}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>FEATURED BRANDS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={BEAUTYDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>
              SHOP LIVE WIYH INFLUENCERS
            </Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={INFLUENCERSDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>CATEGORIES TO BAG</Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderCategoryGridItem}
            data={CATEGORYDUMMY}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={{ ...styles.textheadingStyle }}>
              BRANDS COLLAB CORNER
            </Text>
          </View>
          {/* <TodayDeals data={TODAYDUMMY}/> */}
        </View>

        <View style={styles.imageBanner3Container}>
          <Image
            source={require("../../../assets/banner2.png")}
            style={styles.imageBanner2}
            resizeMode="contain"
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}> BEST BUYS</Text>
          </View>
          <SeasonDeals />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>PROMOTED BRANDS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={BEAUTYDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>DEALS ON TOP BRANDS</Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderDealsGridItem}
            data={TOPBRANDSDUMMY}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>SPONSORED BRANDS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={BEAUTYDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>SPONSORED BRANDS</Text>
          </View>
          <SeasonDeals />
        </View>

        <View
          style={{
            ...styles.imageBanner3Container,
            height: Dimensions.get("window").width * 0.37,
            // borderRadius: 20,
            // elevation: 10,
          }}
        >
          <Image
            source={require("../../../assets/banner3.png")}
            style={{ ...styles.imageBanner2 }}
            resizeMode="cover"
          />
        </View>

        <View
          style={{ ...styles.imageContainer, height: heightPercentageToDP(50) , marginVertical: 10 }}
        >
          <FastImage
            source={require("../../../assets/banner4.png")}
            style={styles.image}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>STYLECAST - HOTTEST FINDS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={STYLECASDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>MYNTRA GIFT CARDS</Text>
          </View>
          <BeautyDeals renderFun={renderWeadingItem} data={WEADINGDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>STORES IN THE SPOTLIGHT</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>DAILY EDITOR'S PICKS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>DEALS ON TOP BRANDS</Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderDailyEditorGGridItem}
            data={DAILYEDITORGRIDDUMMY}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>SPONSORED BRANDS</Text>
          </View>
          <SeasonDeals />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HIM</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORHIMDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HER</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORHIMDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>COLORS OF THE SEASON</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HIM</Text>
          </View>
          <View
            style={{ backgroundColor: "#026D5E", alignItems: "center", flex: 1 }}
          >
            <SeasonDeals />
          </View>
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>LATEST PICK THIS WEEK</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>LATEST KIDSWEAR PICKS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>PERFECT PICKS FOR HOME</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>
              LATEST LOOKS BY MFS INFLUENCERS
            </Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderProfileInfluencerGGridItem}
            data={INFLUENCERPROFILEDUMMY}
          />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>
              INFLUENCER INSPIRED CLASSY WEDDING LOOKS
            </Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View>

        <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>FASHION EDITORIAL</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <View
            style={{
              width: "50%",
              borderBottomColor: "black",
              borderBottomWidth: 1,
            }}
          />
          <Text
            style={{
              color: "black",
              fontFamily: "whitney-book-italic",
              fontSize: widthPercentageToDP(4.5),
              textAlign: "center",
              paddingHorizontal: 10,
            }}
          >
            "Elegance is not standing out, but being remembered."
          </Text>
          <Text
            style={{ fontSize: widthPercentageToDP(3), color: "grey", fontFamily: "whitney-light" }}
          >
            Giorgio Armani
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     // marginTop: StatusBar.currentHeight || 0,
//     backgroundColor: "#F6F6F6",
//   },
//   firstContainer: {
//     height: Dimensions.get("window").height * 0.12,
//     backgroundColor: "white",
//     elevation: 4,
//   },
//   imageContainer: {
//     backgroundColor: "white",
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.76,
//     elevation: 4,
//     overflow: "hidden",

//     // marginTop: Dimensions.get("window").height / 90,
//   },
//   image: {
//     width: "100%",
//     height: "100%",
//     // elevation: 4,
//   },

//   imageBannerContainer: {
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.1,
//     marginVertical: Dimensions.get("window").height / 90,
//     backgroundColor: "transparent",
//     // elevation: 4,
//     overflow: "hidden",
//   },
//   sliderContainer: {
//     backgroundColor: "#ffff",
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.74,
//     paddingBottom: 8,
//     // marginVertical: Dimensions.get("window").height / 99,
//     // backgroundColor: "white",
//     // borderWidth: 1,
//     elevation: 4,
//     overflow: "hidden",
//   },
//   sliderContainer2: {
//     // backgroundColor: "#ffff",
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.37,
//     paddingBottom: 8,
//     marginVertical: 20,
//     elevation: 4,
//     overflow: "hidden",
//   },
//   dealCards: {
//     backgroundColor: "white",
//   },
//   dealBannerCards: {
//     flex: 1,
//     // padding: 10,
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.9,
//     backgroundColor: "#ffff",
//     elevation: 4,
//     marginVertical: 10,
//   },
//   textTop: {
//     backgroundColor: Colors.Primary,
//     elevation: 4,
//   },
//   textTop1: {
//     flex: 0.1,
//     padding: 15,
//   },
//   seasonCards: {
//     backgroundColor: "white",
//     // elevation: 4,
//     marginTop: 10,
//   },
//   seasonCardsdeals: {
//     flex: 1,
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 1.59,
//     backgroundColor: "#ffff",
//     elevation: 4,
//     marginVertical: 10,
//   },
//   influencerCardsdeals: {
//     flex: 1,
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.7,
//     backgroundColor: "#ffff",
//     elevation: 4,
//     marginVertical: 10,
//   },

//   imageBanner2Container: {
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.67,

//     // overflow: 'hidden',
//     marginTop: Dimensions.get("window").height / 60,
//   },

//   flatlistPrediction: {
//     flex: 1,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   flatlistPrediction2: {
//     flex: 1,
//     margin: 0,
//     backgroundColor: "#f6f6f6",
//     // padding: 10,
//     width: "100%",
//     height: "100%",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   customFlatlistStyle: {
//     // width: "100%",
//     // height: "100%",
//   },

//   imageBanner3Container: {
//     width: Dimensions.get("window").width * 1,
//     height: Dimensions.get("window").width * 0.37,
//     elevation: 4,
//     backgroundColor: "white",
//     overflow: "hidden",
//     marginVertical: Dimensions.get("window").height / 60,
//   },

//   imageBanner2: {
//     width: "100%",
//     height: "100%",
//   },

//   mainContainerdealsCard: {
//     marginVertical: 0,
//     marginHorizontal: 15,
//   },
//   mainContainerdeals2Card: {
//     marginVertical: 0,
//     marginHorizontal: 10,
//   },
//   imageContainerstyle1: {
//     height: widthPercentageToDP(20),
//     width: widthPercentageToDP(20),
//   },
//   imageContainerstyle2: {
//     height: 155,
//     width: 100,
//     // resizeMode: 'cover'
//   },
//   weadingCardsStyle: {
//     width: Dimensions.get("window").width * 0.75,
//     // height: Dimensions.get('window').width * 0.75,
//   },
//   footer: {
//     justifyContent: "center",
//     alignItems: "center",
//     marginVertical: 40,
//   },

//   textheadingStyle: {
//     fontFamily: "whitney-medium-italic",
//     // backgroundColor: Colors.Primary,
//     color: "white",
//     fontSize: 16,
//     marginVertical: 10,
//     textAlign: "center",
//     paddingLeft: 16,
//   },
// });

export default HomePage;
