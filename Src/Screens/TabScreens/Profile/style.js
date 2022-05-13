import { StyleSheet } from "react-native";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  profileImage: {
    flexDirection: "row",
    width: "100%",
    height: "12%",
    // flex: 0.1,
    backgroundColor: "#282828",
    justifyContent: "space-between",
    //   alignItems:'flex-end'
  },
  userNameText: {
    fontFamily: "whitney-medium",
    fontSize: widthPercentageToDP(4.5),
    color: "white",
  },
  phoneText: {
    color: "white",
    fontSize: heightPercentageToDP(2),
  },
  loginLayout: {
    width: "100%",
    height: "12%",
    flexDirection: "row",
    // flex: 0.1,
    backgroundColor: "white",

    justifyContent: "space-between",
  },
  buttonStyle: {
    width: "50%",
    height: "45%",
    marginRight: 20,
    overflow: "hidden",
    // borderRadius: 3,
    // margin: 8,
    alignSelf: "center",
    // shadowColor: "#000",
    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    // shadowOpacity: 0.23,
    // shadowRadius: 2.62,

    // elevation: 4,
  },
  buttonHeadingStyle: {
    fontFamily: "whitney-semi-bold",
    fontSize: heightPercentageToDP(1.75),
    color: "#767579",
  },
  buttonDesStyle: {
    fontFamily: "whitney-book",
    fontSize: heightPercentageToDP(1),
    marginTop: 5,
    color: "grey",
  },

  buttonsGroupLayout: {
    marginTop: 20,
    // elevation: 4,
  },
  buttonGroupStyle: {
    overflow: "hidden",
    flexDirection: "row",
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
});
