import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import {
  MaterialIcons,
  Entypo,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'
import Colors from "../../../../Constants/colors";


const DATA = ["1", "2", "3"];

const DeliveredScreen = (props) => {


const renderItem = (itemData,clicked) => {
  return (
    <View style={styles.cardStyleMainStyle}>
     <View style={styles.topTextlayoutStyle}>
       <Text style={{...styles.headingStyle,fontSize:heightPercentageToDP(1.75)}}>Order #{itemData.item.Order_Id}</Text>
       <Text style={{...styles.textStyle,fontSize:heightPercentageToDP(1.65)}}>{itemData.item.Order_Date}</Text>
     </View>
     <View style={{paddingTop:10}}>
     <Text style={{...styles.textStyle,fontSize:heightPercentageToDP(1.65)}}>Tracking Number: QWCFVD41K8</Text>
     </View>
     <View style={{...styles.topTextlayoutStyle,marginTop:10}}>
     <Text style={{...styles.textStyle,fontSize:heightPercentageToDP(1.65)}}>Items: {itemData.item.Items}</Text>
       <Text style={{...styles.textStyle,fontSize:heightPercentageToDP(1.65)}}>Total Price: <Text style={styles.headingStyle}>${itemData.item.Total_Price}</Text></Text>
     </View>
     
     <TouchableOpacity style={styles.buttonStyle} onPress={clicked}>
      
         <Text style={{...styles.headingStyle,color:'white',fontSize:heightPercentageToDP(2)}}>Details</Text>
      
     </TouchableOpacity>
    </View>
  );
};
  return (
    <View style={styles.screen}>
 
        <FlatList
          keyExtractor={(item, index) => {
            item.id;
          }}
          data={props.data}
          renderItem={(item)=>renderItem(item,props.detailsSCreen)}
        />

    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  cardStyleMainStyle: {
    backgroundColor:'white',
   elevation:4,
   shadowColor:'grey',
   shadowOpacity:0.8,
   shadowOffset:{
     width:heightPercentageToDP(0),
     height:heightPercentageToDP(0.5)
   },
   marginVertical:8,
   marginHorizontal:10,
   padding:16,
   borderRadius:5
  },
   topTextlayoutStyle:{
     flexDirection:'row',
     justifyContent:'space-between',
   
   },
   headingStyle:{
     fontFamily:'whitney-semi-bold',
   },
   textStyle:{
     fontFamily:'whitney-book'
   },
   buttonStyle:{
     marginTop:10,
     padding:8,
     width:widthPercentageToDP(25),
     borderRadius:5,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:Colors.Primary,
     elevation:4
   }
});

export default DeliveredScreen;
