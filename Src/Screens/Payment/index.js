import React from "react";
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SimpleHeader from "../../Components/Header/simple_header";
import { styles } from "./style";
import SliderBox from "react-native-image-slider-box";
import FastImage from "react-native-fast-image";
import AntDesign from "react-native-vector-icons/AntDesign";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { commonStyles } from "../../Styles/commonStyles";

const PaymentMethod = (props) => {
  const data = [1, 2, 3, 4];
  const renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: heightPercentageToDP(1.5),
          marginHorizontal: heightPercentageToDP(3),
        }}
      >
        <FastImage
          source={require("../../../assets/discover.png")}
          style={{
            height: heightPercentageToDP(4),
            width: widthPercentageToDP(18),
            borderRadius: heightPercentageToDP(1),
          }}
        />
        <Text
          style={{
            fontFamily: "whitney-medium",
            color: "black",
            fontSize: widthPercentageToDP(3.5),
            flex: 1,
            textAlign: "left",
            marginLeft: heightPercentageToDP(2),
          }}
        >
          VISA
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.containerMain}>
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"Payment Method"}
        placement={"left"}
      />
      <View style={styles.blackBackground} />
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: heightPercentageToDP(-14),
        }}
      >
        {/* <SliderBox
          images={data}
          dotColor="#FF3E6C"
          inactiveDotColor="#90A4AE"
          resizeMethod={"resize"}
          resizeMode={"cover"}
          parentWidth={Dimensions.get("window").width * 1}
          sliderBoxHeight={"100%"}
        /> */}
        <FastImage
          source={{
            uri: "https://4.bp.blogspot.com/-L0SF3OEBlWk/V436gmJshWI/AAAAAAAA99U/Xbaoo6vPhuQ8_FK7HmH-EjE67UQp5k38QCLcB/s1600/mastercard-logo%2B%25283%2529.jpg",
          }}
          style={{
            height: heightPercentageToDP(20),
            width: widthPercentageToDP(80),
            borderRadius: heightPercentageToDP(1),
            elevation: 2,
          }}
        />
      </View>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PaymentAdd")}
        style={{ ...commonStyles.buttonStyle, ...styles.addLoctionBtn }}
      >
        <AntDesign name="plus" size={24} color="white" />
        <Text
          style={{
            ...styles.headingStyle,
            fontSize: widthPercentageToDP(4.5),
            // alignSelf: "center",
            textAlign: "center",
            flex: 1,
            color: "white",
          }}
        >
          Add Card
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontFamily: "whitney-medium",
          fontSize: widthPercentageToDP(4),
          color: "black",
          padding: heightPercentageToDP(3),
        }}
      >
        Other Payment Method
      </Text>

      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default PaymentMethod;
