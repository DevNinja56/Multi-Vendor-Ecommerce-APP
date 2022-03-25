import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Dimensions,
  Image,
  ScrollView,
} from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import MainScreen from "./MainScreen";
import ImageSliderCustom from "../../../components/HomeComponents/ImageSliderCustom";
import ImageTopBottomSlider from "../../../components/HomeComponents/ImageTopBottomSlider";
import WinterDeals from "./WinterDeals";

import SeasonDeals from "./SeasonDeals";
import TodayDeals from "./TodayDeals";
import BeautyDeals from "./BeautyDeals";
import FashionPredictionDeals from "./FashionPredictionDeals";
import Header from "../Header";

import { styles } from "../../../Styles/styles";
import { useSelector, useDispatch } from "react-redux";

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

import Httpclients from "../../../Redux/utils";
import Loader from "../Components/Loader";

const renderGridItem = (itemData) => {
  return (
    <FashionPredictionCards
      image={itemData.item.image}
      // name={itemData.item.title}
      // date={itemData.item.date}
    />
  );
};

const renderCategoryGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
      // name={itemData.item.title}
    />
  );
};
const renderDealsGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
      name={itemData.item.title}
      style={{
        ...styles.mainContainerdeals2Card,
        width: widthPercentageToDP(10),
        height: heightPercentageToDP(20),
      }}
      // imageContainerstyle={styles.imageContainerstyle1}
      imageContainerstyle={{ width: "100%", height: "100%" }}
    />
  );
};

const renderDailyEditorGGridItem = (itemData) => {
  return (
    <CategoryCards
      image={itemData.item.image}
      style={{
        ...styles.mainContainerdeals2Card,
        width: widthPercentageToDP(10),
        height: heightPercentageToDP(20),
      }}
      // imageContainerstyle={styles.imageContainerstyle1}
      imageContainerstyle={{ width: "100%", height: "100%" }}
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
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [firstSliderImage, setFirstSliderImage] = useState([]);
  const [secondSliderImage, setSecondSliderImage] = useState([]);

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const token = useSelector((state) => state.user.token);
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

  const getHome = async () => {
    const res = await Httpclients.get("home/getAll");
    setData(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("token ==>", token);
    getHome();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header
        clickHandler={() => navigation.toggleDrawer()}
        notificationClickHandler={() => navigation.navigate("Notifications")}
        wishlistClickHandler={() => navigation.navigate("Wishlist")}
        cartClickHandler={() => navigation.navigate("Cart")}
        ishome={true}
      />
      {isLoading ? (
        <Loader color={"FF3E6C"} />
      ) : (
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
            images={data.first_SliderImages.image}
            dotColor="#FF3E6C"
            inactiveDotColor="#90A4AE"
            resizeMode={"cover"}
            height={heightPercentageToDP(30)}
          />

          <View style={styles.sliderContainer2}>
            <SliderBox
              images={data.second_SliderImages.image}
              dotColor="#FF3E6C"
              inactiveDotColor="#90A4AE"
              resizeMode={"cover"}
              height={heightPercentageToDP(15)}
            />
            {/* <ImageTopBottomSlider data={secondSliderImage}
            backgroundColorStyle={{ backgroundColor: "white" }}
          /> */}
          </View>

          {data.first_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.first_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.first_Carousal.data} />
            </View>
          ) : null}

          {data.first_TwoColumnView.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.first_TwoColumnView.Heading}
                </Text>
              </View>
              <SeasonDeals data={data.first_TwoColumnView.data} />
            </View>
          ) : null}

          {data.third_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.third_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.third_Carousal.data} />
            </View>
          ) : null}

          {data.four_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.four_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.four_Carousal.data} />
            </View>
          ) : null}

          <View style={styles.imageBanner2Container}>
            <FastImage
              source={require("../../../assets/banner1.png")}
              style={styles.image}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          {data.first_TwoColumnView.status ? (
            <View style={styles.seasonCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.fifth_Carousal.Heading}
                </Text>
              </View>

              <FashionPredictionDeals
                renderGridItem={renderGridItem}
                data={data.first_TwoColumnView.data}
              />
            </View>
          ) : null}

          {data.sixth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.sixth_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.sixth_Carousal.data} />
            </View>
          ) : null}

          {data.seventh_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.seventh_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.seventh_Carousal.data} />
            </View>
          ) : null}

          {data.seventh_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.eighth_Carousal.Heading}
                </Text>
              </View>

              <FashionPredictionDeals
                renderGridItem={renderCategoryGridItem}
                data={data.eighth_Carousal.data}
              />
            </View>
          ) : null}

          {data.nineth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.nineth_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals fun={changeShop} data={data.nineth_Carousal.data} />
            </View>
          ) : null}

          <View style={styles.imageBanner3Container}>
            <FastImage
              source={require("../../../assets/banner2.png")}
              style={styles.imageBanner2}
              resizeMode={FastImage.resizeMode.cover}
            />
          </View>

          {data.tenth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.tenth_Carousal.Heading}
                </Text>
              </View>
              <SeasonDeals data={data.tenth_Carousal.data} />
            </View>
          ) : null}

          {data.eleventh_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.eleventh_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals
                fun={changeShop}
                data={data.eleventh_Carousal.data}
              />
            </View>
          ) : null}

          {data.second_TwoColumnView.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.twelveth_Carousal.Heading}
                </Text>
              </View>

              <FashionPredictionDeals
                renderGridItem={renderCategoryGridItem}
                data={data.second_TwoColumnView.data}
              />
            </View>
          ) : null}

{data.thirteenth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.thirteenth_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals
                fun={changeShop}
                data={data.thirteenth_Carousal.data}
              />
            </View>
          ) : null}


  {data.fourteenth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.fourteenth_Carousal.Heading}
                </Text>
              </View>
              <SeasonDeals data={data.fourteenth_Carousal.data} />
            </View>
          ) : null}

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

        {data.fifteenth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.fifteenth_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals
                fun={changeShop}
                data={data.fifteenth_Carousal.data}
              />
            </View>
          ) : null}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>MYNTRA GIFT CARDS</Text>
          </View>
          <BeautyDeals renderFun={renderWeadingItem} data={WEADINGDUMMY} />
        </View> */}


{data.third_SliderImages.status ? (
          <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>STORES IN THE SPOTLIGHT</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
          <SliderBox
            images={data.third_SliderImages.image}
            dotColor="#FF3E6C"
            inactiveDotColor="#90A4AE"
            resizeMode={"cover"}
            height={heightPercentageToDP(30)}
          />
          </View>
        </View>
        ) : null}

{data.sixteenth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.sixteenth_Carousal.Heading}
                </Text>
              </View>
              <WinterDeals
                fun={changeShop}
                data={data.sixteenth_Carousal.data}
              />
            </View>
          ) : null}

{data.twelveth_Carousal.status ? (
            <View style={styles.dealCards}>
              <View style={styles.textTop}>
                <Text style={styles.textheadingStyle}>
                  {data.twelveth_Carousal.Heading}
                </Text>
              </View>

              <FashionPredictionDeals
                renderGridItem={renderCategoryGridItem}
                data={data.twelveth_Carousal.data}
              />
            </View>
          ) : null}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>SPONSORED BRANDS</Text>
          </View>
          <SeasonDeals />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HIM</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORHIMDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HER</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORHIMDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>COLORS OF THE SEASON</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>TRENDS FOR HIM</Text>
          </View>
          <View
            style={{ backgroundColor: "#026D5E", alignItems: "center", flex: 1 }}
          >
            <SeasonDeals />
          </View>
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>LATEST PICK THIS WEEK</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>LATEST KIDSWEAR PICKS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>PERFECT PICKS FOR HOME</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>
              LATEST LOOKS BY MFS INFLUENCERS
            </Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderProfileInfluencerGGridItem}
            data={INFLUENCERPROFILEDUMMY}
          />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>
              INFLUENCER INSPIRED CLASSY WEDDING LOOKS
            </Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={styles.dealCards}>
          <View style={styles.textTop}>
            <Text style={styles.textheadingStyle}>FASHION EDITORIAL</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={styles.footer}>
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
        </View> */}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomePage;
