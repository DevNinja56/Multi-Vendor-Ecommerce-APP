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

const Payment = (props) => {
  const [check1, setCheck1] = useState(false);

  _onChange = (form) => console.log(form);

  useEffect(() => {
    if (Platform.OS === "android") {
      UIManager.setLayoutAnimationEnabledExperimental &&
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={{ ...styles.textInputStyle, margin: 16 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <CheckBox
              checkedIcon={
                <Icon
                  name="radio-button-checked"
                  type="material"
                  color={Colors.Primary}
                  size={25}
                  //   iconStyle={{ marginRight: 10 }}
                />
              }
              uncheckedIcon={
                <Icon
                  name="radio-button-off"
                  type="material"
                  color="grey"
                  size={25}
                  //   iconStyle={{ marginRight: 10 }}
                />
              }
              checked={check1}
              onPress={() => setCheck1(!check1)}
            />
            <Text
              style={{
                ...styles.headingStyle,
                fontSize: heightPercentageToDP(2.2),
              }}
            >
              Cash On Delivery
            </Text>
          </View>
        </View>

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
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-off"
                    type="material"
                    color="grey"
                    size={25}
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: heightPercentageToDP(2.2),
                }}
              >
                JazzCash
              </Text>
            </View>
            <FastImage
              source={require("../../../assets/jazzCash.png")}
              style={styles.imageStyleJE}
            />
          </View>
        </View>

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
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-off"
                    type="material"
                    color="grey"
                    size={25}
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: heightPercentageToDP(2.2),
                }}
              >
                EasyPaisa
              </Text>
            </View>
            <FastImage
              source={require("../../../assets/easypaisa.png")}
              style={styles.imageStyleJE}
            />
          </View>
        </View>

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
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                uncheckedIcon={
                  <Icon
                    name="radio-button-off"
                    type="material"
                    color="grey"
                    size={25}
                    //   iconStyle={{ marginRight: 10 }}
                  />
                }
                checked={check1}
                onPress={() => setCheck1(!check1)}
              />
              <Text
                style={{
                  ...styles.headingStyle,
                  fontSize: heightPercentageToDP(2.2),
                }}
              >
                Credit Card
              </Text>
            </View>
            <FastImage
              source={require("../../../assets/creditcard.png")}
              style={styles.imageStyleJE}
            />
          </View>
        </View>

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
                size={25}
                //   iconStyle={{ marginRight: 10 }}
              />
            }
            checked={check1}
            onPress={() => setCheck1(!check1)}
          />
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(2.2),
            }}
          >
            Save card details for future payments
          </Text>
        </View>
      </ScrollView>

      <View style={styles.footerStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={props.screenSet}>
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
    padding: 16,
    backgroundColor: Colors.Primary,
    alignItems: "center",
  },
});

export default Payment;
