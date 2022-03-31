import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import { Fonts } from "../../../constants/fonts";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import TodayDeals from "../Home/TodayDeals";
import Colors from "../../../constants/constants";
import { Entypo } from "@expo/vector-icons";
import WinterDeals from "../Home/WinterDeals";
import httpClients from "../../../Redux/utils";
import RenderHtml from "react-native-render-html";

const SearchScreen = (props) => {
  const dataDummy = [1, 2, 3, 4];
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const { width } = useWindowDimensions();

  const getSearch = async () => {
    const res = await httpClients.get("product/search/all?query=" + search);
    console.log(res.data.data);
    if (res.data.data.length > 0) {
      setData(res.data.data);
    }
  };

  useEffect(() => {
    if (search) {
      setOpen(true);
      getSearch();
    } else {
      setOpen(false);
    }
  }, [search]);

  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity>
        <View style={styles.itemStyle}>
          <View
            style={{ flex: 0.75, flexDirection: "row", alignItems: "center" }}
          >
            <View style={styles.itemImageStyle}>
              <FastImage
                source={require("../../../assets/seasonimage.png")}
                resizeMode={FastImage.resizeMode.cover}
                style={styles.image}
              />
            </View>

            <View style={{ marginHorizontal: 10 }}>
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: heightPercentageToDP(2.2),
                  fontFamily: Fonts.whitney_semi_bold,
                }}
              >
                W
              </Text>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: heightPercentageToDP(2),
                  fontFamily: Fonts.whitney_light,
                }}
              >
                Kurtas
              </Text>
            </View>
          </View>

          <View style={{ alignItems: "flex-end" }}>
            <Entypo
              name="chevron-small-right"
              size={heightPercentageToDP(3)}
              color="black"
            />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const _renderItem = ({ item, index }) => {
    const source = {
      html:  '<span style=margin-left:10px>'+item._highlightResult.tag.value+'</span>'
    }; 
    return (
      <TouchableOpacity style={styles.searchRow}>
        <View style={styles.innerRow}>
          <AntDesign name="search1" size={24} color="black" />
          <RenderHtml
            contentWidth={width}
            source={source}
            tagsStyles
            
          />
          {/* <Text style={styles.filterText}>{item.tag}</Text> */}
          <View style={styles.rightBtn}>
            <Feather name="arrow-up-left" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
        <View style={styles.searchLayoutStyles}>
          <TouchableOpacity>
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text
            onPress={() => setOpen(true)}
            style={{ flex: 1, marginLeft: 10 }}
          >
            {!search ? "Search For Brands & Products" : search}
          </Text>
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          <View>
            <View style={styles.trendingCardLayout}>
              <Text
                style={{
                  fontFamily: Fonts.whitney_semi_bold,
                  fontSize: heightPercentageToDP(2.5),
                  padding: 8,
                  backgroundColor: Colors.Primary,
                  color: "white",
                }}
              >
                TRENDING ON MYNTRA
              </Text>
              <WinterDeals data={data} />
            </View>

            <View>
              <Text
                style={{
                  fontFamily: Fonts.whitney_semi_bold,
                  fontSize: heightPercentageToDP(2.5),
                  padding: 8,
                  backgroundColor: Colors.Primary,
                  color: "white",
                }}
              >
                POPULAR ON MYNTRA
              </Text>
              <FlatList data={dataDummy} renderItem={renderItem} />
            </View>

            <View style={styles.trendingCardLayout}>
              <Text
                style={{
                  fontFamily: Fonts.whitney_semi_bold,
                  fontSize: heightPercentageToDP(2.5),
                  padding: 8,
                  backgroundColor: Colors.Primary,
                  color: "white",
                }}
              >
                TRENDING ON MYNTRA
              </Text>
              <WinterDeals data={data} />
            </View>
          </View>
        </ScrollView>
      </View>

      {isOpen && (
        <Modal
          transparent={true}
          visible={isOpen}
          avoidKeyboard
          animationType="fade"
          onRequestClose={() => {
            console.log("close");
          }}
        >
          <TouchableWithoutFeedback onPress={() => setOpen(false)}>
            <View style={styles.innerModal}>
              <View style={styles.searchLayoutStyles}>
                <TouchableOpacity>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                  style={{ flex: 1, marginLeft: 10 }}
                  placeholder="Search For Brands & Products"
                  
                  onChangeText={(text) => setSearch(text)}
                  value={search}
                />
              </View>
              <FlatList
                data={data}
                keyExtractor={(item, index) => item.tag_id}
                renderItem={_renderItem}
              />
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchLayoutStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 16,
    elevation: 4,
  },
  innerModal: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.4)",
    //marginTop: heightPercentageToDP(8)
  },
  searchRow: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(6),
    backgroundColor: "#fff",
    borderBottomWidth: widthPercentageToDP(0.1),
    borderBottomColor: "#000",
  },
  innerRow: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(6),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
  },
  filterText: {
    fontFamily: Fonts.whitney_light,
    fontSize: widthPercentageToDP(3.5),
    color: "#000",
    marginLeft: widthPercentageToDP(4),
  },
  rightBtn: {
    position: "absolute",
    right: "0%",
    top: "10%",
  },
  trendingCardLayout: {
    backgroundColor: "white",
    marginVertical: 20,
  },
  itemStyle: {
    // flex: 0.2,
    overflow: "hidden",
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    height: heightPercentageToDP(13),
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
  itemImageStyle: {
    // flex: 0.25,
    height: heightPercentageToDP(10),
    width: heightPercentageToDP(10),
    // margin: 5,
    borderRadius: heightPercentageToDP(10) / 2,
    elevation: 4,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default SearchScreen;
