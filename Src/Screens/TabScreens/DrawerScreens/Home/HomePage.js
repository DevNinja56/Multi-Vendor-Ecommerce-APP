import React, { useEffect, useState } from "react";
import { SafeAreaView, View, Text, Dimensions, ScrollView } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

import MainScreen from "../Home/Components/Home/MainScreen";
import WinterDeals from "../Home/Components/Home/WinterDeals";
import SeasonDeals from "../Home/Components/Home/SeasonDeals";
import FashionPredictionDeals from "../Home/Components/Home/FashionPredictionDeals";

import { commonStyles } from "../../../../Styles/commonStyles";
import { useSelector, useDispatch } from "react-redux";
import * as Animatable from "react-native-animatable";

import { SliderBox } from "react-native-image-slider-box";

import CategoryCards from "../../../../Components/CategoryCards";
import httpClients from "../../../../Redux/utils";
import Header from "../../../../Components/Header";
import Loader from "../../../../Components/Loader";
import crashlytics from "@react-native-firebase/crashlytics";

const renderCategoryGridItem = (itemData) => {
  return <CategoryCards image={itemData.item.image} />;
};

const HomePage = ({ navigation }) => {
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const dimensions = Dimensions.get("window");

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  };

  const token = useSelector((state) => state.user.token);
  const userToken = useSelector((state) => state.user.userToken);
  const changeShop = () => {
    console.log("ProductsAll");
    navigation.navigate("ProductsAll");
  };

  const getHome = async () => {
    const res = await httpClients.get("home/getAll");
    setData(res.data.data);
    setLoading(false);
  };

  useEffect(() => {
    console.log("token ==>", userToken);
    getHome();
  }, []);

  const SingleRowData = ({ heading, fun, data }) => {
    return (
      <View style={commonStyles.dealCards}>
        <View style={commonStyles.textTop}>
          <Text style={commonStyles.textheadingStyle}>{heading}</Text>
        </View>
        <WinterDeals fun={fun} data={data} />
      </View>
    );
  };

  const TowColumnData = ({ heading, data }) => {
    return (
      <View style={commonStyles.dealCards}>
        <View style={commonStyles.textTop}>
          <Text style={commonStyles.textheadingStyle}>{heading}</Text>
        </View>
        <SeasonDeals data={data} />
      </View>
    );
  };

  const ThreeColumnData = ({ heading, data }) => {
    return (
      <View style={commonStyles.dealCards}>
        <View style={commonStyles.textTop}>
          <Text style={commonStyles.textheadingStyle}>{heading}</Text>
        </View>

        <FashionPredictionDeals
          renderGridItem={renderCategoryGridItem}
          data={data}
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={commonStyles.container}>
      <Header
        clickHandler={() => navigation.toggleDrawer()}
        notificationClickHandler={() => navigation.navigate("Notifications")}
        wishlistClickHandler={() => navigation.navigate("Wishlist")}
        cartClickHandler={() => navigation.navigate("Cart")}
        searchClickHandler={() => navigation.navigate("Search")}
        ishome={true}
      />
      {isLoading ? (
        <Loader color={"FF3E6C"} />
      ) : (
        <ScrollView style={commonStyles.container}>
          <View style={commonStyles.firstContainer}>
            <MainScreen
              data={data.categoryList}
              topCategories={() => {
                navigation.navigate("TopCategories");
              }}
            />
          </View>

          {data.first_SliderImages.status ? (
            <View style={commonStyles.imageContainer}>
              <SliderBox
                images={data.first_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMethod={"resize"}
                resizeMode={"cover"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={"100%"}
              />
            </View>
          ) : null}

          <View style={commonStyles.imageBannerContainer}>
            <Animatable.Image
              source={require("../../../../../assets/imageBanner.png")}
              resizeMode={"cover"}
              style={{
                ...commonStyles.image,
              }}
              animation={"lightSpeedIn"}
              iterationCount="infinite"
            />
          </View>
          {data.second_SliderImages.status ? (
            <SliderBox
              images={data.second_SliderImages.image}
              dotColor="#FF3E6C"
              inactiveDotColor="#90A4AE"
              resizeMethod={"resize"}
              resizeMode={"cover"}
              parentWidth={dimensions.width * 1}
              sliderBoxHeight={heightPercentageToDP(30)}
            />
          ) : null}

          {data.third_SliderImages.status ? (
            <View style={commonStyles.sliderContainer2}>
              <SliderBox
                images={data.third_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMode={"cover"}
                resizeMethod={"resize"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={heightPercentageToDP(15)}
              />
            </View>
          ) : null}

          {data.first_Carousal.status ? (
            <SingleRowData
              heading={data.first_Carousal.heading}
              fun={changeShop}
              data={data.first_Carousal.data}
            />
          ) : null}

          {data.first_TwoColumnView.status ? (
            <TowColumnData
              heading={data.first_TwoColumnView.heading}
              data={data.first_TwoColumnView.data}
            />
          ) : null}

          {data.third_Carousal.status ? (
            <SingleRowData
              heading={data.third_Carousal.heading}
              fun={changeShop}
              data={data.third_Carousal.data}
            />
          ) : null}

          {data.four_Carousal.status ? (
            <SingleRowData
              heading={data.four_Carousal.heading}
              fun={changeShop}
              data={data.four_Carousal.data}
            />
          ) : null}

          {data.four_SliderImages.status ? (
            <View style={commonStyles.imageBanner2Container}>
              <SliderBox
                images={data.four_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMethod={"resize"}
                resizeMode={"cover"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={"100%"}
              />
            </View>
          ) : null}

          {data.second_TwoColumnView.status ? (
            <TowColumnData
              heading={data.second_TwoColumnView.heading}
              data={data.second_TwoColumnView.data}
            />
          ) : null}

          {data.sixth_Carousal.status ? (
            <SingleRowData
              heading={data.sixth_Carousal.heading}
              fun={changeShop}
              data={data.sixth_Carousal.data}
            />
          ) : null}

          {data.seventh_Carousal.status ? (
            <SingleRowData
              heading={data.seventh_Carousal.heading}
              fun={changeShop}
              data={data.seventh_Carousal.data}
            />
          ) : null}

          {data.second_ThreeColumnView.status ? (
            <ThreeColumnData
              heading={data.second_ThreeColumnView.heading}
              data={data.second_ThreeColumnView.data}
            />
          ) : null}

          {data.nineth_Carousal.status ? (
            <SingleRowData
              heading={data.nineth_Carousal.heading}
              fun={changeShop}
              data={data.nineth_Carousal.data}
            />
          ) : null}

          {data.third_SliderImages.status ? (
            <View style={commonStyles.imageBanner3Container}>
              <SliderBox
                images={data.third_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMode={"cover"}
                resizeMethod={"resize"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={"100%"}
              />
            </View>
          ) : null}

          {data.third_TwoColumnView.status ? (
            <TowColumnData
              heading={data.third_TwoColumnView.heading}
              data={data.third_TwoColumnView.data}
            />
          ) : null}

          {data.eleventh_Carousal.status ? (
            <SingleRowData
              heading={data.eleventh_Carousal.heading}
              fun={changeShop}
              data={data.eleventh_Carousal.data}
            />
          ) : null}

          {data.second_ThreeColumnView.status ? (
            <ThreeColumnData
              heading={data.second_ThreeColumnView.heading}
              data={data.second_ThreeColumnView.data}
            />
          ) : null}

          {data.thirteenth_Carousal.status ? (
            <SingleRowData
              heading={data.thirteenth_Carousal.heading}
              fun={changeShop}
              data={data.thirteenth_Carousal.data}
            />
          ) : null}

          {data.four_TwoColumnView.status ? (
            <TowColumnData
              heading={data.four_TwoColumnView.heading}
              data={data.four_TwoColumnView.data}
            />
          ) : null}

          {data.fifth_SliderImages.status ? (
            <View
              style={{
                ...commonStyles.imageBanner3Container,
                height: dimensions.width * 0.37,
              }}
            >
              <SliderBox
                images={data.fifth_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMethod={"resize"}
                resizeMode={"cover"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={"100%"}
              />
            </View>
          ) : null}

          {data.sixth_SliderImages.status ? (
            <View
              style={{
                ...commonStyles.imageContainer,
                height: heightPercentageToDP(50),
                marginTop: heightPercentageToDP(1.5),
              }}
            >
              <SliderBox
                images={data.sixth_SliderImages.image}
                dotColor="#FF3E6C"
                inactiveDotColor="#90A4AE"
                resizeMethod={"resize"}
                resizeMode={"cover"}
                parentWidth={dimensions.width * 1}
                sliderBoxHeight={"100%"}
              />
            </View>
          ) : null}

          {data.fifteenth_Carousal.status ? (
            <SingleRowData
              heading={data.fifteenth_Carousal.heading}
              fun={changeShop}
              data={data.fifteenth_Carousal.data}
            />
          ) : null}

          {data.seventh_SliderImages.status ? (
            <View style={commonStyles.dealCards}>
              <View style={commonStyles.textTop}>
                <Text style={commonStyles.textheadingStyle}>
                  {data.seventh_SliderImages.heading}
                </Text>
              </View>
              <View style={{ marginTop: heightPercentageToDP(1.5) }}>
                <SliderBox
                  images={data.seventh_SliderImages.image}
                  dotColor="#FF3E6C"
                  inactiveDotColor="#90A4AE"
                  resizeMethod={"resize"}
                  resizeMode={"cover"}
                  parentWidth={dimensions.width * 1}
                  sliderBoxHeight={heightPercentageToDP(30)}
                />
              </View>
            </View>
          ) : null}

          {data.sixteenth_Carousal.status ? (
            <SingleRowData
              heading={data.sixteenth_Carousal.heading}
              fun={changeShop}
              data={data.sixteenth_Carousal.data}
            />
          ) : null}

          {data.second_ThreeColumnView.status ? (
            <ThreeColumnData
              heading={data.second_ThreeColumnView.heading}
              data={data.second_ThreeColumnView.data}
            />
          ) : null}

          {data.fifth_TwoColumnView.status ? (
            <TowColumnData
              heading={data.fifth_TwoColumnView.heading}
              data={data.fifth_TwoColumnView.data}
            />
          ) : null}

          {data.sixteenth_Carousal.status ? (
            <SingleRowData
              heading={data.sixteenth_Carousal.heading}
              fun={changeShop}
              data={data.sixteenth_Carousal.data}
            />
          ) : null}

          {data.seventh_Carousal.status ? (
            <SingleRowData
              heading={data.seventh_Carousal.heading}
              fun={changeShop}
              data={data.seventh_Carousal.data}
            />
          ) : null}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>COLORS OF THE SEASON</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>TRENDS FOR HIM</Text>
          </View>
          <View
            style={{ backgroundColor: "#026D5E", alignItems: "center", flex: 1 }}
          >
            <SeasonDeals />
          </View>
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>LATEST PICK THIS WEEK</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>LATEST KIDSWEAR PICKS</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>PERFECT PICKS FOR HOME</Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>BEST BEAUTY FINDS</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>
              LATEST LOOKS BY MFS INFLUENCERS
            </Text>
          </View>

          <FashionPredictionDeals
            renderGridItem={renderProfileInfluencerGGridItem}
            data={INFLUENCERPROFILEDUMMY}
          />
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>
              INFLUENCER INSPIRED CLASSY WEDDING LOOKS
            </Text>
          </View>
          <BeautyDeals renderFun={renderWinterItem} data={DAILYEDITORDUMMY} />
        </View> */}

          {/* <View style={commonStyles.dealCards}>
          <View style={commonStyles.textTop}>
            <Text style={commonStyles.textheadingStyle}>FASHION EDITORIAL</Text>
          </View>
          <View style={{ marginVertical: 5 }}>
            <ImageSliderCustom
              backgroundColorStyle={{ backgroundColor: "white" }}
            />
          </View>
        </View> */}

          <View style={commonStyles.footer}>
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
              style={{
                fontSize: widthPercentageToDP(3),
                color: "grey",
                fontFamily: "whitney-light",
              }}
            >
              Giorgio Armani
            </Text>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomePage;
