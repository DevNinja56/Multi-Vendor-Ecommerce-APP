import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: Colors.BackgroundClr,
  },
  textlight: {
    fontFamily: "whitney-book",
  },
  locationCardsStyle: {
    margin: heightPercentageToDP(3),
    flexDirection: "row",
    backgroundColor: "white",
    padding: heightPercentageToDP(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
    borderRadius: heightPercentageToDP(1),
  },

  locationcardIcon: {
    backgroundColor: Colors.LightPrimary,
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1),
    height: heightPercentageToDP(8),
    width: heightPercentageToDP(8),
    justifyContent: "center",
    alignItems: "center",
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
    backgroundColor: Colors.BackgroundClr,
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

  addLoctionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    margin: heightPercentageToDP(3),
    // padding: heightPercentageToDP(2),

    // borderRadius: heightPercentageToDP(1),
  },
  locationCardInfo: {
    justifyContent: "center",
    flex: 1,
    marginHorizontal: heightPercentageToDP(1),
  },
  locaionCardChangeBtn: {
    justifyContent: "flex-end",
  },

  locationCardDelete: {
    backgroundColor: Colors.Primary,
    padding: heightPercentageToDP(0.2),
    height: heightPercentageToDP(4),
    width: heightPercentageToDP(4),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: heightPercentageToDP(4) / 2,
    marginRight: -heightPercentageToDP(3.5),
    marginTop: -heightPercentageToDP(4),
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
});
