import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import FastImage from "react-native-fast-image";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../../constants/constants";
import SimpleHeader from "../Header/simple_header";

const Legal = (props) => {
  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader clickHandler={() => props.navigation.goBack()} />

      <View style={styles.mainContainer}>
        <FastImage
          source={require("../../../assets/legalPic.png")}
          style={styles.imageStyle}
          resizeMode={FastImage.resizeMode.cover}
        />

        <TouchableOpacity style={styles.buttonStyle} onPress={()=>props.navigation.navigate('Terms Of Use')}>
            <Text style={styles.textStyle}>Terms of Use</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSimpleStyle} onPress={()=>props.navigation.navigate('Privacy Policy')}>
            <Text style={styles.textSimpleStyle}>Privacy Policy</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#f9f9f9',
    },
    mainContainer:{
        flex:1,
        // backgroundColor:'white',
    },
    imageStyle:{
        height:heightPercentageToDP(50),
    },
    buttonStyle:{

        margin:10,
        padding:16,
        backgroundColor:Colors.Primary,
        borderRadius:10,
        elevation:4,
    },
    textStyle: {
      
        fontFamily: "whitney-semi-bold",
        fontSize: heightPercentageToDP(2),
        color: "white",
        textAlign:'center'
      },
      textSimpleStyle:{
        fontFamily: "whitney-semi-bold",
        fontSize: heightPercentageToDP(2),
        color: "black",
        textAlign:'center'
      },
      buttonSimpleStyle:{
        margin:10,
        padding:16,
        borderWidth:widthPercentageToDP(0.1),
        borderColor:'#B4B4B4',
        borderRadius:10,
        // elevation:4,
      }
});

export default Legal;
