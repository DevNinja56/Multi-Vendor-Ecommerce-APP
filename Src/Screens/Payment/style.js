import { StyleSheet } from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "white",
  },
  blackBackground: {
    height: heightPercentageToDP(25),
    backgroundColor: Colors.BlackBackground,
  },
  addLoctionBtn: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.Primary,
    margin: heightPercentageToDP(3),
    padding: heightPercentageToDP(2),
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
    borderRadius: heightPercentageToDP(1),
  },
  cardLayout: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    marginTop: heightPercentageToDP(4),
  },
  cardStyle: {
    backgroundColor: "white",
    elevation: 4,
    padding: heightPercentageToDP(2),
    borderRadius: heightPercentageToDP(1),
  },
  inputstyle: {
    backgroundColor: "#EEEEEE",
    padding: heightPercentageToDP(2),
    fontFamily: "whitney-medium",
    fontSize: heightPercentageToDP(2),
    color: "#707070",
    borderRadius: heightPercentageToDP(1),
  },
});
