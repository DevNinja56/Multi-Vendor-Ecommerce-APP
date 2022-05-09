import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import FastImage from "react-native-fast-image";
import { heightPercentageToDP } from "react-native-responsive-screen";
import SimpleHeader from "../../Components/Header/simple_header";
import AntDesign from "react-native-vector-icons/AntDesign";
import { styles } from "./style";
import { DeleteIcon, LocationColor } from "../../../assets/svg";

const AddressDetails = (props) => {
  const data = [1, 2, 3];
  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.locationCardsStyle}>
        <View style={styles.locationcardIcon}>
          <LocationColor />
        </View>
        <View style={styles.locationCardInfo}>
          <Text
            style={{
              ...styles.headingStyle,
              color: "black",
              fontSize: heightPercentageToDP(2),
            }}
          >
            Office
          </Text>
          <Text
            style={{
              ...styles.textlight,
              color: "black",
              fontSize: heightPercentageToDP(1.5),
            }}
          >
            Office 526, 5th Floor, Siddiq.....
          </Text>
        </View>
        <TouchableOpacity style={styles.locaionCardChangeBtn}>
          <Text>Change</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.locationCardDelete}>
          <DeleteIcon />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.containerMain}>
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"ADDRESS"}
        placement={"left"}
      />
      <Text
        style={{
          ...styles.headingStyle,
          fontSize: heightPercentageToDP(3.5),
          color: "black",
          marginTop: heightPercentageToDP(5),
          marginLeft: heightPercentageToDP(3),
        }}
      >
        My Address
      </Text>

      <View style={styles.addressDetailsStyle}>
        <View
          style={{
            flex: 0.6,
            padding: heightPercentageToDP(2),
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(3),
              color: "white",
            }}
          >
            SHAHID SHAMS
          </Text>
          <Text
            style={{
              fontFamily: "whitney-light",
              fontSize: heightPercentageToDP(2),
              color: "white",
            }}
          >
            Office 526, 5th Floor, Siddiq Trade Center, Lahore
          </Text>
        </View>
        <View
          style={{
            flex: 0.4,
            alignItems: "flex-end",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Text
              style={{
                padding: heightPercentageToDP(2),
                ...styles.headingStyle,
                fontSize: heightPercentageToDP(1.75),
                color: "black",
              }}
            >
              Change
            </Text>
          </TouchableOpacity>
          <FastImage
            source={require("../../../assets/locationPicDetails.png")}
            style={{
              height: heightPercentageToDP(11),
              width: heightPercentageToDP(12.5),
              marginRight: heightPercentageToDP(1),
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={() => props.navigation.navigate("AddressAdd")}
        style={styles.addLoctionBtn}
      >
        <AntDesign name="plus" size={24} color="black" />
        <Text
          style={{
            ...styles.headingStyle,
            fontSize: heightPercentageToDP(2.5),
            // alignSelf: "center",
            textAlign: "center",
            flex: 1,
            color: "black",
          }}
        >
          Add another location
        </Text>
      </TouchableOpacity>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default AddressDetails;
