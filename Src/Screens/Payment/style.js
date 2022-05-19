import { StyleSheet } from "react-native";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../Constants/colors";

export const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    backgroundColor: "white",
  },
  blackBackground: {
    height: heightPercentageToDP(20),
    backgroundColor: Colors.BlackBackground,
  },
  addLoctionBtn: {
    width: widthPercentageToDP(88),
    height: heightPercentageToDP(6),
    justifyContent:"center",
    alignItems:"center",
    alignSelf:"center",
    backgroundColor: Colors.Primary,
    marginTop:heightPercentageToDP(3),
    borderRadius: widthPercentageToDP(1.5)
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
    fontSize: widthPercentageToDP(4),
    color: "#707070",
    borderRadius: heightPercentageToDP(1),
  },
});
