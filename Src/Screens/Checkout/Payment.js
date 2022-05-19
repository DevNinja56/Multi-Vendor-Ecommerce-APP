import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  UIManager,
  LayoutAnimation,
  Platform,
} from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import FastImage from "react-native-fast-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../Constants/colors";
import {
  CreditCardInput,
  LiteCreditCardInput,
} from "react-native-credit-card-input";
import { TouchableOpacity } from "react-native";
import { commonStyles } from "../../Styles/commonStyles";

const Payment = (props) => {
  const _onChange = (form) => console.log(form);

  const [check1, setCheck1] = useState(false);
  const [data, setData] = useState([
    {
      isActive: false,
      title: "Cash On Delivery",
      image: "",
    },
    {
      isActive: false,
      title: "JazzCash",
      image: require("../../../assets/jazzCash.png"),
    },
    {
      isActive: false,
      title: "EasyPaisa",
      image: require("../../../assets/easypaisa.png"),
    },
    {
      isActive: false,
      title: "Credit Card",
      image: require("../../../assets/creditcard.png"),
    },
  ]);

  const unCheckPayment = (index) => {
    const temp = [...data];
    if (temp[index].isActive) {
      for (let i = 0; i < temp.length; i++) {
        temp[i].isActive = false;
      }
    } else {
      for (let i = 0; i < temp.length; i++) {
        temp[i].isActive = false;
      }
      temp[index].isActive = true;
    }
    setData(temp);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        {data.map((item, index) => {
          return (
            <View style={{ ...styles.textInputStyle, margin: 16 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <CheckBox
                    checkedIcon={
                      <Icon
                        name="radio-button-checked"
                        type="material"
                        color={Colors.Primary}
                        size={25}
                      />
                    }
                    uncheckedIcon={
                      <Icon
                        name="radio-button-off"
                        type="material"
                        color="grey"
                        size={25}
                      />
                    }
                    checked={item.isActive}
                    onPress={() => unCheckPayment(index)}
                  />
                  <Text
                    style={{
                      ...styles.headingStyle,
                      fontSize: heightPercentageToDP(2.2),
                    }}
                  >
                    {item.title}
                  </Text>
                </View>
                <FastImage source={item.image} style={styles.imageStyleJE} />
              </View>
            </View>
          );
        })}

        <LiteCreditCardInput
          onChange={_onChange}
          autoFocus={true}
          inputStyle={{
            backgroundColor: "white",
            fontSize: heightPercentageToDP(2),
            ...styles.headingStyle,
            padding: 16,
            height: heightPercentageToDP(7),
            width: widthPercentageToDP(100),
            margin: 5,
          }}
        />
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <CheckBox
            title={" Save card details for future payments"}
            containerStyle={{
              // marginLeft: heightPercentageToDP(-1.2),
              // padding: 0,
              borderWidth: 0,
              backgroundColor: "transparent",
            }}
            checkedIcon={
              <Icon
                name="checkbox-active"
                type="fontisto"
                color={Colors.Primary}
                size={25}
                //   iconStyle={{ marginRight: 10 }}
              />
            }
            uncheckedIcon={
              <Icon
                name="checkbox-passive"
                type="fontisto"
                color="grey"
                size={20}
                //   iconStyle={{ marginRight: 10 }}
              />
            }
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
        </View>
      </ScrollView>
      <View
        style={{
          backgroundColor: "white",
        }}
      >
        <TouchableOpacity
          style={{ ...commonStyles.buttonStyle, ...styles.buttonStyle }}
          onPress={props.screenSet}
        >
          <Text
            style={{
              ...styles.headerText,
              color: "white",
              fontSize: heightPercentageToDP(2),
            }}
          >
            CONTINUE TO PAYMENT
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    marginTop: 10,
    flex: 1,
    fontFamily: "whitney-light",
    fontSize: heightPercentageToDP(2),
    backgroundColor: "white",
    elevation: 2,
    padding: 8,
    borderRadius: 5,
  },
  headingStyle: {
    fontFamily: "whitney-medium",
  },
  imageStyleJE: {
    height: heightPercentageToDP(5),
    width: heightPercentageToDP(5),
  },
  footerStyle: {
    backgroundColor: "white",
    elevation: 2,
    padding: 5,
  },
  buttonStyle: {
    margin: heightPercentageToDP(2),
  },
});

export default Payment;
