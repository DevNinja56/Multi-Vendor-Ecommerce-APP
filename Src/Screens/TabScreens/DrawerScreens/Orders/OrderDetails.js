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
import CancelOrderDialog from "../../../../Components/CancelOrderDialog";
import ReasonForCancelDialog from "../../../../Components/ReasonForCancelDialog";
import OrderCancelledDialog from "../../../../Components/OrderCancelledDialog";
import { commonStyles } from "../../../../Styles/commonStyles";

const OrderDetails = (props) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState();
  const [productsData, setProductsData] = useState([]);
  const [isCancelOrder, setCancelOrder] = useState(false);
  const [reasonCancel, setReasonCancel] = useState(false);
  const [orderCancelled, setOrderCancelled] = useState(false);

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
      <View>
        <View
          style={{
            ...styles.textTopStyle,
            justifyContent: "flex-start",
            marginVertical: heightPercentageToDP(1),
            // borderBottomWidth: widthPercentageToDP(0.1),
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
                fontSize: widthPercentageToDP(3.8),
                color: "black",
              }}
            >
              {itemData.item.products.name.toUpperCase()}
            </Text>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: widthPercentageToDP(3.5),
                marginTop: heightPercentageToDP(0.2),
                color: "black",
              }}
            >
              {itemData.item.products.product_categories[0].categories.name}
            </Text>
            <View style={styles.itemStyle}>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: widthPercentageToDP(3.5),
                  color: "white",
                }}
              >
                Items: 2
              </Text>
            </View>
            <Text
              style={{
                ...styles.headingStyle,
                fontSize: widthPercentageToDP(3.5),
                marginTop: heightPercentageToDP(0.3),
                color: "black",
              }}
            >
              $ {itemData.item.amount}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "grey",
            height: heightPercentageToDP(0.1),
            marginVertical: heightPercentageToDP(0.75),
          }}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={{ flex: 1, flexGrow: 1 }}>
      <SimpleHeader
        headerTitle={"Order Details"}
        clickHandler={() => props.navigation.goBack()}
        placement={"left"}
      />

      {isLoading ? (
        <Loader color={Colors.Primary} />
      ) : (
        <View style={styles.detailsCardStyle}>
          <View style={styles.textTopStyle}>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: widthPercentageToDP(4.2),
              }}
            >
              Order from{" "}
              <Text style={{ ...styles.headingStyle }}>{data.order_date}</Text>
            </Text>
            <Text
              style={{
                ...styles.textStyle,
                fontSize: widthPercentageToDP(3),
                color: Colors.Primary,
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
                  fontSize: widthPercentageToDP(4),
                  marginTop: heightPercentageToDP(0.5),
                }}
              >
                Order number:
              </Text>
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: widthPercentageToDP(4),
                }}
              >
                {data.id}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: widthPercentageToDP(4),
                  marginTop: heightPercentageToDP(0.5),
                }}
              >
                Quantity:
              </Text>
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: widthPercentageToDP(4),
                }}
              >
                {productsData.length}
              </Text>
            </View>
            <View>
              <Text
                style={{
                  ...styles.textStyle,
                  fontSize: widthPercentageToDP(4),
                  marginTop: heightPercentageToDP(0.5),
                }}
              >
                Total amount:
              </Text>
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: widthPercentageToDP(4),
                }}
              >
                ${data.amount}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={{ ...commonStyles.buttonStyle, ...styles.buttonStyle }}
            onPress={() => setCancelOrder(true)}
          >
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
      )}
      {isCancelOrder && (
        <CancelOrderDialog
          onClearClick={() => setCancelOrder(false)}
          closeClick={() => setCancelOrder(false)}
          isCancelOrder={isCancelOrder}
          reasonCancelBtn={() => {
            setReasonCancel(true);
          }}
          cancelOrder={() => {
            setCancelOrder(false);
            setOrderCancelled(true);
          }}
        />
      )}

      {reasonCancel && (
        <ReasonForCancelDialog
          onClearClick={() => setReasonCancel(false)}
          closeClick={() => setReasonCancel(false)}
          reasonCancel={reasonCancel}
        />
      )}

      {orderCancelled && (
        <OrderCancelledDialog
          onClearClick={() => setOrderCancelled(false)}
          closeClick={() => setOrderCancelled(false)}
          orderCancelled={orderCancelled}
        />
      )}
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
    paddingVertical: 20,
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
    color: "black",
  },
  textStyle: {
    fontFamily: "whitney-book",
  },
  imageStyle: {
    //   width:widthPercentageToDP(30),
    //   height:heightPercentageToDP(15),

    height: heightPercentageToDP(11),
    width: widthPercentageToDP(17),
    borderRadius: widthPercentageToDP(2.5),
    margin: 10,
  },
  itemStyle: {
    width: widthPercentageToDP(20),
    backgroundColor: Colors.Primary,
    marginTop: 5,
    padding: 3,
    borderRadius: heightPercentageToDP(50),
    justifyContent: "center",
    alignItems: "center",
  },
  buttonStyle: {
    marginVertical: heightPercentageToDP(2),
    alignSelf: "flex-end",
  },
  // flatListStyle: {
  //   height: heightPercentageToDP(65),
  // },
});

export default OrderDetails;
