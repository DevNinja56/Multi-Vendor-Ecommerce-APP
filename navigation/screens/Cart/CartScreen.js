import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
  SafeAreaView,
} from "react-native";
import { MaterialIcons, Entypo, FontAwesome } from "@expo/vector-icons";
import SimpleHeader from "../Header/simple_header";
import { heightPercentageToDP } from "react-native-responsive-screen";

const CartScreen = (props) => {
  return (
    <SafeAreaView style={{flex:1}}>
    <SimpleHeader headerTitle={'Cart'} clickHandler={()=>props.navigation.goBack()}/>
  <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View style={styles.screen}>
        <View style={styles.flatList}>
          <View style={{ width: "100%", height: 200 }}>
            <Image
              source={require("../../../assets/logoApp.png")}
              resizeMode={"contain"}
              style={styles.image}
            />
          </View>

          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(2.5),
              textAlign: "center",
            }}
          >
            Hey, it feels so light!
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: heightPercentageToDP(1.75),
              color: "#878585",
              textAlign: "center",
            }}
          >
            There is nothing in your bag. Let's add some items.
          </Text>
        </View>
        <View style={styles.popularStyle}>
          <View style={{ padding: 10 }}>
            <Text style={{ ...styles.headingStyle, fontSize: heightPercentageToDP(2.5) }}>
              POPULAR ON MYNTRA
            </Text>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.itemImageStyle}>
              <Image
                source={require("../../../assets/seasonimage.png")}
                resizeMode={"cover"}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 0.5, marginHorizontal: 10 }}>
              <Text style={{ ...styles.headingStyle, fontSize: heightPercentageToDP(2) }}>W</Text>
              <Text style={{ ...styles.textStyle, fontSize: heightPercentageToDP(2) }}>Kurtas</Text>
            </View>

            <View style={{ flex: 0.25, alignItems: "flex-end" }}>
              <Entypo name="chevron-small-right" size={ heightPercentageToDP(3)} color="black" />
            </View>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.itemImageStyle}>
              <Image
                source={require("../../../assets/seasonimage.png")}
                resizeMode={"cover"}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 0.5, marginHorizontal: 10 }}>
              <Text style={{ ...styles.headingStyle, fontSize: heightPercentageToDP(2) }}>W</Text>
              <Text style={{ ...styles.textStyle, fontSize:  heightPercentageToDP(2) }}>Kurtas</Text>
            </View>

            <View style={{ flex: 0.25, alignItems: "flex-end" }}>
              <Entypo name="chevron-small-right" size={heightPercentageToDP(3)} color="black" />
            </View>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.itemImageStyle}>
              <Image
                source={require("../../../assets/seasonimage.png")}
                resizeMode={"cover"}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 0.5, marginHorizontal: 10 }}>
              <Text style={{ ...styles.headingStyle, fontSize:  heightPercentageToDP(2) }}>W</Text>
              <Text style={{ ...styles.textStyle, fontSize:  heightPercentageToDP(2) }}>Kurtas</Text>
            </View>

            <View style={{ flex: 0.25, alignItems: "flex-end" }}>
              <Entypo name="chevron-small-right" size={heightPercentageToDP(3)} color="black" />
            </View>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.itemImageStyle}>
              <Image
                source={require("../../../assets/seasonimage.png")}
                resizeMode={"cover"}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 0.5, marginHorizontal: 10 }}>
              <Text style={{ ...styles.headingStyle, fontSize:  heightPercentageToDP(2) }}>W</Text>
              <Text style={{ ...styles.textStyle, fontSize:  heightPercentageToDP(2) }}>Kurtas</Text>
            </View>

            <View style={{ flex: 0.25, alignItems: "flex-end" }}>
              <Entypo name="chevron-small-right" size={24} color="black" />
            </View>
          </View>
          <View style={styles.itemStyle}>
            <View style={styles.itemImageStyle}>
              <Image
                source={require("../../../assets/seasonimage.png")}
                resizeMode={"cover"}
                style={styles.image}
              />
            </View>

            <View style={{ flex: 0.5, marginHorizontal: 10 }}>
              <Text style={{ ...styles.headingStyle, fontSize:  heightPercentageToDP(2) }}>W</Text>
              <Text style={{ ...styles.textStyle, fontSize:  heightPercentageToDP(2) }}>Kurtas</Text>
            </View>

            <View style={{ flex: 0.25, alignItems: "flex-end" }}>
              <Entypo name="chevron-small-right" size={heightPercentageToDP(3)} color="black" />
            </View>
          </View>
        </View>

        <View
          style={{
            width: "100%",
            flexDirection: "row",
            backgroundColor: "white",
            padding: 10,
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 10,
              overflow: "hidden",
            }}
          >
            <Text style={{ ...styles.headingStyle ,fontSize:  heightPercentageToDP(2)}}>MEN</Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 10,
              overflow: "hidden",
            }}
          >
            <Text style={{ ...styles.headingStyle,fontSize:  heightPercentageToDP(2) }}>WOMEN</Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 10,
              overflow: "hidden",
            }}
          >
            <Text style={{ ...styles.headingStyle,fontSize:  heightPercentageToDP(2) }}>KIDS</Text>
          </View>

          <View
            style={{
              borderRadius: 20,
              borderWidth: 1,
              padding: 10,
              overflow: "hidden",
            }}
          >
            <Text style={{ ...styles.headingStyle,fontSize:  heightPercentageToDP(2) }}>FOOTWEAR</Text>
          </View>
        </View>
      </View>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  flatList: {
    // flex: 0.3,
    backgroundColor: "white",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
    padding: 20,
  },
  cardStyle: {
    height: 133,
    margin: 10,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,
  },
  imageStyle: {
    flex: 0.25,
    margin: 5,
    // borderWidth: 1,
    borderRadius: 10,
    overflow: "hidden",
    elevation: 4,
    // width: "100%",
    // height: "100%",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  headingStyle: {
    fontFamily: "whitney-semi-bold",
  },
  textStyle: {
    fontFamily: "whitney-book",
  },
  infoStyle: {
    flex: 0.5,
  },
  iconsStyle: {
    flex: 0.25,
    justifyContent: "space-between",
    alignItems: "flex-end",
  },

  popularStyle: {
    marginVertical: 25,
    backgroundColor: "white",
    elevation: 4,
  },
  itemStyle: {
    // flex: 0.2,
    flexDirection: "row",
    width: "100%",
    height: 75,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
  itemImageStyle: {
    flex: 0.25,
    margin: 2,
    borderRadius: 10,
    elevation: 4,
    overflow: "hidden",
  },
});

export default CartScreen;
