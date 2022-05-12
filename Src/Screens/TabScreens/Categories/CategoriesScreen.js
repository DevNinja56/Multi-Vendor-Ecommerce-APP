import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoriesExtend from "./CategoriesExtend";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Loader from "../../../Components/Loader";
import Colors from "../../../Constants/colors";
import httpClients from "../../../Redux/utils";
import FastImage from "react-native-fast-image";
import { categoryAllData } from "../../../DummyData/dummydata";

const CategoriesScreen = ({ props, navigation }) => {
  const [showScreen, setShowScreen] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setLoading] = useState(true);
  const [activeIndex, setIndex] = useState(0);

  const showScreenTrue = (index) => {
    const temArr = [...data];
    if (data[index].is_active) {
      for (let i = 0; i < temArr.length; i++) {
        temArr[i].is_active = false;
      }
    } else {
      for (let i = 0; i < temArr.length; i++) {
        temArr[i].is_active = false;
      }
      temArr[index].is_active = true;
    }
    setData(temArr);
  };

  const getAllCategories = async () => {
    // const res = await httpClients.get('category/getAll');
    // console.log(res.data.data);
    // if (res.data.data.length > 0) {
    setData(categoryAllData.data);
    setLoading(false);
    // }
  };

  useEffect(() => {
    getAllCategories();
  }, []);

  let content = <CategoriesExtend />;

  const renderItem = ({ item, index }) => {
    return (
      <View>
        <FastImage
          source={{ uri: item.category_bgimage }}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.imageBackgroundStyle}
        >
          <TouchableOpacity
            style={{ width: "100%" }}
            onPress={() => showScreenTrue(index)}
          >
            <View style={{ flexDirection: "row" }}>
              <View
                style={{
                  flex: 0.5,

                  justifyContent: "center",
                  paddingLeft: 32,
                  // alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: widthPercentageToDP(5.5),
                      fontFamily: "whitney-semi-bold",
                      textAlign: "left",
                    }}
                  >
                    {item.name}
                  </Text>
                  <Ionicons
                    name={"ios-chevron-down"}
                    size={widthPercentageToDP(2.5)}
                  />
                </View>
                <Text
                  style={{
                    fontSize: widthPercentageToDP(3),
                    fontFamily: "whitney-light",
                    marginTop: 10,
                  }}
                >
                  {item.subcategory.name}
                </Text>
              </View>
              <View
                style={{
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 10,
                  // borderWidth: 1,
                }}
              >
                <FastImage
                  source={{ uri: item.feature_image }}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
            </View>
          </TouchableOpacity>
        </FastImage>
        {item.is_active && <CategoriesExtend data={item.subcategory} />}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      {isLoading ? (
        <Loader color={Colors.Primary} />
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item, index) => {
            item.id;
          }}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: { flex: 1 },
  menuStyle: {
    height: Dimensions.get("window").height * 0.24,
    // flex: 0.25,
  },
  imageBackgroundStyle: {
    width: Dimensions.get("window").width * 1,
    height: Dimensions.get("window").height * 0.16,
  },
});

export default CategoriesScreen;
