import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import { Fonts } from "../../Constants/fonts";

export const styles = StyleSheet.create({
  subContainer1: {
    backgroundColor: "#282828",
    height: heightPercentageToDP(20),
  },
  profileImage: {
    height: heightPercentageToDP(20),
    width: heightPercentageToDP(20),
    backgroundColor: "white",
    justifyContent: "center",
    alignSelf: "center",
    marginTop: -heightPercentageToDP(10),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  inputLayout: {
    marginTop: heightPercentageToDP(10),
    paddingHorizontal: heightPercentageToDP(5),
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderBottomColor: "#B4B4B4",
    fontSize: heightPercentageToDP(2),
    fontFamily: "whitney-book",
    marginVertical: heightPercentageToDP(1),
  },

  buttonStyle: {
    marginTop: heightPercentageToDP(10),
    backgroundColor: "#FF2C5E",
    width: widthPercentageToDP(80),
    height: heightPercentageToDP(5),
    // marginRight: 20,
    overflow: "hidden",
    borderRadius: 3,
    // margin: 8,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    justifyContent:'center',
    alignItems:'center'
  },

  textBtn:{
      fontFamily:'whitney-book',
      color:'white'
  }
});
