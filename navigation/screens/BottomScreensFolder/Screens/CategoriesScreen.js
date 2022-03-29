import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  Image,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CategoriesExtend from "../../Categories/CategoriesExtend";
import { CATEGORIESPAGEDUMMY } from "../../../../data/dummy-data";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const CategoriesScreen = ({ props, navigation }) => {
  const [showScreen, setShowScreen] = useState(false);

  const showScreenTrue = () => {
    if (showScreen) {
      setShowScreen(false);
    } else {
      setShowScreen(true);
    }
    console.log(showScreen);
  };

  let content = CategoriesExtend();

  const renderItem = (itemData) => {
    return (
      <View
        style={
          {
            // borderWidth: 1,
          }
        }
      >
        <ImageBackground
          source={itemData.item.bgImage}
          resizeMode={"cover"}
          style={styles.imageBackgroundStyle}
        >
          <TouchableOpacity style={{ width: "100%" }} onPress={showScreenTrue}>
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
                    {itemData.item.title}
                  </Text>
                  <Ionicons name={"ios-chevron-down"} size={widthPercentageToDP(2.5)} />
                </View>
                <Text
                  style={{
                    fontSize: widthPercentageToDP(3),
                    fontFamily: "whitney-light",
                    marginTop: 10,
                  }}
                >
                  {itemData.item.des}
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
                <Image
                  source={itemData.item.image}
                  style={{ height: "100%" }}
                  resizeMode={"contain"}
                />
              </View>
            </View>
          </TouchableOpacity>
        </ImageBackground>
        {showScreen ? content : null}
      </View>
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={CATEGORIESPAGEDUMMY}
        keyExtractor={(item, index) => {
          item.id;
        }}
        renderItem={renderItem}
      />
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
