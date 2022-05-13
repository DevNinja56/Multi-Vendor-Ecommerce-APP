import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { CheckBox, Icon } from "react-native-elements";
import FastImage from "react-native-fast-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../../Components/Header/simple_header";
import RemoveDialog from "../../Components/RemoveDialog";
import Colors from "../../Constants/colors";
import { commonStyles } from "../../Styles/commonStyles";
import { styles } from "./style";

const PaymentAdd = (props) => {
  const [check1, setCheck1] = useState(false);
  const [isRemove, setRemove] = useState(false);

  return (
    <View
      style={{ ...styles.containerMain, backgroundColor: Colors.BackgroundClr }}
    >
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"REMOVE CARD"}
        placement={"left"}
      />

      <View style={styles.cardLayout}>
        <View style={styles.cardStyle}>
          <FastImage
            source={require("../../../assets/masterCard.png")}
            style={{
              height: heightPercentageToDP(20),
              width: widthPercentageToDP(80),
              marginTop: -heightPercentageToDP(8),
            }}
          />

          <View style={{ marginTop: heightPercentageToDP(2) }}>
            <Text
              style={{
                fontFamily: "whitney-medium",
                fontSize: heightPercentageToDP(2),
                marginVertical: heightPercentageToDP(1),
              }}
            >
              Card Number
            </Text>
            <TextInput
              placeholder="1234 7415 1452 1254"
              style={styles.inputstyle}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ marginTop: heightPercentageToDP(2), flex: 0.45 }}>
              <Text
                style={{
                  fontFamily: "whitney-medium",
                  fontSize: heightPercentageToDP(2),
                  marginVertical: heightPercentageToDP(1),
                }}
              >
                Expiry Date
              </Text>
              <TextInput placeholder="19/06/2022" style={styles.inputstyle} />
            </View>
            <View style={{ marginTop: heightPercentageToDP(2), flex: 0.45 }}>
              <Text
                style={{
                  fontFamily: "whitney-medium",
                  fontSize: heightPercentageToDP(2),
                  marginVertical: heightPercentageToDP(1),
                }}
              >
                CVV
              </Text>
              <TextInput placeholder="567" style={styles.inputstyle} />
            </View>
          </View>

          <View style={{ marginTop: heightPercentageToDP(2) }}>
            <Text
              style={{
                fontFamily: "whitney-medium",
                fontSize: heightPercentageToDP(2),
                marginVertical: heightPercentageToDP(1),
              }}
            >
              Name
            </Text>
            <TextInput placeholder="Shahid Shamas" style={styles.inputstyle} />
          </View>

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
                fontFamily: "whitney-medium",
                color: "black",
                fontSize: heightPercentageToDP(2.2),
              }}
            >
              Save Card Details
            </Text>
          </View>
        </View>
      </View>

      <TouchableOpacity
        style={{ ...commonStyles.buttonStyle, ...styles.addLoctionBtn }}
        onPress={() => setRemove(true)}
      >
        <Text
          style={{
            ...styles.headingStyle,
            fontSize: heightPercentageToDP(2),
            // alignSelf: "center",
            textAlign: "center",
            flex: 1,
            color: "white",
          }}
        >
          REMOVE CARD
        </Text>
      </TouchableOpacity>

      {isRemove && (
        <RemoveDialog
          onClearClick={() => setRemove(false)}
          closeClick={() => setRemove(false)}
          isRemove={isRemove}
          title={"Do you want to remove this card?"}
        />
      )}
    </View>
  );
};

export default PaymentAdd;
