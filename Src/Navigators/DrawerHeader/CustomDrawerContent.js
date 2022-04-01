import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../Constants/colors";
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'

const icon = () => <AntDesign name="questioncircle" size={24} color="black" />;

const CustomDrawerContent = (props) => {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView {...props}>
        <View style={styles.header}>
          <View
            style={{
              height: "60%",
              width: "30%",
              backgroundColor: "white",
              padding: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={require("../../../assets/userimage.png")}
              resizeMode="contain"
              style={{ height: "100%", width: "100%" }}
            />
          </View>

          <View style={{ flexDirection: "row", flex: 0.5 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("LoginScreen")}
            >
              <Text
                style={styles.textStyle}
              >
                Log In
              </Text>
            </TouchableOpacity>
            <Text
              style={styles.textStyle}
            >
              {"   "}.{"   "}
            </Text>
            <TouchableOpacity>
              <Text
                style={styles.textStyle}
              >
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <TouchableOpacity style={styles.buttonStyle} >
            <Text style={styles.buttontextStyle}>Logout</Text>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: heightPercentageToDP(15),
    padding: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
    backgroundColor: Colors.Primary,
  },
  textStyle:{
    fontFamily: "whitney-semi-bold",
    color: "white",
    fontSize: heightPercentageToDP(1.75),
  },
  buttonStyle:{

    margin:10,
    padding:16,
    backgroundColor:Colors.Primary,
    borderRadius:10,
    elevation:4,
},
buttontextStyle: {
      
  fontFamily: "whitney-semi-bold",
  fontSize: heightPercentageToDP(2),
  color: "white",
  textAlign:'center'
},
});

export default CustomDrawerContent;
