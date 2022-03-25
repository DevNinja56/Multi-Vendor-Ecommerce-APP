import React from "react";
import { StyleSheet, SafeAreaView, View, Text, TouchableOpacity } from "react-native";
import LottieView from "lottie-react-native";
import SimpleHeader from "../Header/simple_header";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../../constants/fonts";
import Colors from "../../../constants/constants";
import { StackActions } from '@react-navigation/native';



const OrderConfirmed = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <SimpleHeader clickHandler={()=>navigation.dispatch(StackActions.popToTop())}/>
      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            flex: 0.5,
            padding: 16,
          }}
        >
          <LottieView
            // style={{height:"100%",width:"100%"}}
            source={require("../../../assets/animation/tick_animation.json")}
            autoPlay
            loop
            resizeMode="cover"
          />
        </View>
        <View style={{ flex: 0.2, justifyContent: "center" }}>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(3),
              textAlign: "center",
            }}
          >
            Congratulations. Your order is accepted.
          </Text>
        </View>
        <View style={{ flex: 0.3 ,justifyContent:'space-between'}}>
          <Text
            style={{
              ...styles.headingStyle,
              fontSize: heightPercentageToDP(1.75),
              textAlign: "center",
              marginTop:50,
            }}
          >
            Thank you for your purchase! Your items are on the way and should
            arrive shortly.
          </Text>

          <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{...styles.headerText,color:'white',fontSize:heightPercentageToDP(2)}}>CHECK ORDER</Text>
      </TouchableOpacity>
          
        </View>

       
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headingStyle: {
    fontFamily: Fonts.open_sans_semi_bold,
  },

  buttonStyle:{
    marginTop:10,
    padding:16,
    backgroundColor:Colors.Primary,
    alignItems:'center'
}
});

export default OrderConfirmed;
