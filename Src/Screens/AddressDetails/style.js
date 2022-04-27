import { StyleSheet } from 'react-native';
import { heightPercentageToDP } from 'react-native-responsive-screen';
import Colors from '../../Constants/colors';

export const styles = StyleSheet.create({
    container_1_Styles: {
      padding: 16,
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    btnStyle: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent:'space-between',
      marginVertical: 10,
      // marginHorizontal: 5,
    },
    btn: {
        flex:1,
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
      fontFamily: "whitney-light",
      fontSize: heightPercentageToDP(2),
      backgroundColor: "white",
      elevation: 2,
      padding: 16,
      borderRadius: 5,
    },
    footerStyle:{
        backgroundColor:'white',
        elevation:2,
        padding:5,
    },
    buttonStyle:{
  
      padding:16,
      backgroundColor:Colors.Primary,
      alignItems:'center'
  }
  });