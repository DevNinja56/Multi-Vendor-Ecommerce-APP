import React from 'react'
import { View, Text, TouchableOpacity, Image, ImageStore,Dimensions , Platform} from 'react-native'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Header } from 'react-native-elements'
import {
    BagIcon,
    HeartIcon,
    NotificationIcon,
    SearchIcon,
    ShareIcon,
} from "../../../assets/svg";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import FastImage from 'react-native-fast-image'

const SimpleHeader = (props) => {
    const size=Dimensions.get('window');
    return (
        <Header
            placement={props.placement}
            // centerContainerStyle
            
            leftComponent={
                <TouchableOpacity
                    onPress={props.clickHandler}
                >
                    <Ionicons
                        name={"arrow-back-outline"}
                        size={heightPercentageToDP(3.5)}
                        color={"black"}
                    />
                </TouchableOpacity>
            }
            centerComponent={
               
                    <Text
                        style={{
                            fontFamily: "whitney-semi-bold",
                            fontSize: heightPercentageToDP(2.5),
                            letterSpacing: 0.4,
                            marginLeft: 10,
                            color:'#282828',
                        }}
                    >
                       {props.headerTitle} 
                    </Text>
              
            }
           
            containerStyle={{
                backgroundColor: "white",
                borderBottomWidth: 0,
             
                // paddingTop:0,
                // height:Platform.OS === 'ios' ? 70 : 70-24
            }}
            
            statusBarProps={{
                barStyle: "dark-content",
                backgroundColor: "white",
                translucent: true,
            }}
            style={{
                justifyContent:'center',
               alignItems:'center'
            }}
        />
    )
}

export default SimpleHeader;
