import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.BackgroundClr,
  },
  addressDetailsStyle: {
    height: heightPercentageToDP(18),
    flexDirection: "row",
    margin: heightPercentageToDP(3),
    backgroundColor: Colors.Primary,
    justifyContent: "space-between",
    borderRadius: heightPercentageToDP(2),
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  container_1_Styles: {
    padding: 16,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  btnStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    // marginHorizontal: 5,
  },
  btn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    // marginRight: 5,
    marginHorizontal: 5,
  },

  container_2_Styles: {
    padding: 16,
  },
  headingStyle: {
    fontFamily: "whitney-medium",
  },
  textInputStyle: {
    marginTop: 10,
    flex: 1,
    fontFamily: "whitney-book",
    fontSize: heightPercentageToDP(2),
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
    padding: 16,
    borderRadius: 5,
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
