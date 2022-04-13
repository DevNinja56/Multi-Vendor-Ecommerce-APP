import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import FastImage from "react-native-fast-image";

import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";





import Colors from "../../../../Constants/colors";
import SimpleHeader from "../../../../Components/Header/simple_header";
import httpClients from "../../../../Redux/utils";
import Loader from "../../../../Components/Loader";

const OrderDetails = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    // console.log("Call");
    getOrderDetailsData();
  }, []);

  const getOrderDetailsData = async () => {
    const res = await httpClients.get("order/getById/1");
    // console.log("Order Details Data : " + res.data.data.products.length);
    if (res.data.status === "success") {
      console.log(res.data.data);
      setData(res.data.data);
      setProductsData(res.data.data.order_details);
      setLoading(false);
    } else {
      console.log("no data available");
      setLoading(false);
    }
  };

  const renderItem = (itemData) => {
    return (

      <View
        style={{
          ...styles.textTopStyle,
          justifyContent: "flex-start",
          marginVertical: 20,
          borderBottomWidth: widthPercentageToDP(0.1),
        }}
      >
        <FastImage
          source={{
            uri: itemData.item.products.feature_image,
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}
          style={styles.imageStyle}
        />
        <View>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(2.1),
            }}
          >
            {itemData.item.products.name.toUpperCase()}
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: heightPercentageToDP(2),
              marginTop: 7,
            }}
          >
            {itemData.item.products.product_categories[0].categories.name}
          </Text>
          <View style={styles.itemStyle}>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: heightPercentageToDP(2),
                color: "white",
              }}
            >
              Items: 2
            </Text>
          </View>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(2.1),
              marginTop: 7,
            }}
          >
            $ {itemData.item.amount}
          </Text>
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <SimpleHeader
        headerTitle={"Order Details"}
        clickHandler={() => props.navigation.goBack()}
      />

      {isLoading ? <Loader color={Colors.Primary}/> :

      <View style={styles.detailsCardStyle}>
        <View style={styles.textTopStyle}>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: heightPercentageToDP(2.2),
            }}
          >
            Order from{" "}
            <Text style={{ ...styles.headingStyle }}>
              {data.order_date}
            </Text>
          </Text>
          <Text
            style={{
              ...styles.textStyle,
              fontSize: heightPercentageToDP(2),
            }}
          >
            {data.status.toUpperCase()}
          </Text>
        </View>
        <View style={styles.flatListStyle}>
          
            <FlatList
              scrollEnabled={true}
              showsVerticalScrollIndicator={false}
              data={productsData}
              keyExtractor={(item, index) => {
                item.key;
              }}
              renderItem={renderItem}
            // contentContainerStyle={styles.flatListStyle}
            />
           
        </View>

        <View style={{ ...styles.textTopStyle, marginHorizontal: 10 }}>
          <View>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: heightPercentageToDP(2),
                marginTop: 7,
              }}
            >
              Order number:
            </Text>
            <Text
              style={{
                ...styles.headingStyle,
                fontSize: heightPercentageToDP(2),
              }}
            >
              {data.id}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: heightPercentageToDP(2),
                marginTop: 7,
              }}
            >
              Quantity:
            </Text>
            <Text
              style={{
                ...styles.headingStyle,
                fontSize: heightPercentageToDP(2),
              }}
            >
              {productsData.length}
            </Text>
          </View>
          <View>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: heightPercentageToDP(2),
                marginTop: 7,
              }}
            >
              Total amount:
            </Text>
            <Text
              style={{
                ...styles.headingStyle,
                fontSize: heightPercentageToDP(2),
              }}
            >
              ${data.amount}
            </Text>
          </View>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={{
              ...styles.headingStyle,
              color: "white",
              fontSize: heightPercentageToDP(2),
            }}
          >
            Repeat Order
          </Text>
        </TouchableOpacity>
      </View>
}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  detailsCardStyle: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    paddingHorizontal: 20,
    paddingVertical: 30,
    backgroundColor: "white",
    margin: 10,
    borderRadius: heightPercentageToDP(1.5),
  },
  textTopStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headingStyle: {
    fontFamily: "whitney-semi-bold",
  },
  textStyle: {
    fontFamily: "whitney-book",
  },
  imageStyle: {
    //   width:widthPercentageToDP(30),
    //   height:heightPercentageToDP(15),

    height: heightPercentageToDP(18),
    width: "30%",
    borderRadius: 20,
    margin: 10,
  },
  itemStyle: {
    width: widthPercentageToDP(20),
    backgroundColor: Colors.Primary,
    marginTop: 7,
    padding: 3,
    borderRadius: heightPercentageToDP(50),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginTop: 20,
    backgroundColor: Colors.Primary,
    padding: 10,
    alignSelf: "flex-end",
    borderRadius: 10,
    elevation: 4,
  },
  flatListStyle: {
    height: heightPercentageToDP(65),
  },
});

export default OrderDetails;
