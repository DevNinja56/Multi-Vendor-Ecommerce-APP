import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import SimpleHeader from '../Header/simple_header';
import Bag from './Bag';

const Checkout = (props) => {
    let content = <Bag />
    return (
        <SafeAreaView style={styles.screen}>
            <SimpleHeader headerTitle={'Checkout'} clickHandler={() => props.navigation.goBack()} placement={'left'} />
            <View style={styles.progressStepperLayoutStyle}>
                <View style={styles.progressStepperStyle}>
                    <View style={styles.selectLineStyle} />
                    
                    <Text style={styles.selectTextStyle}>Bag</Text>
                </View>
                <View style={styles.progressStepperStyle}>
                    <View style={styles.unSelectLineStyle} />
                    <Text style={styles.unSelectTextStyle}>Address</Text>
                </View>
                <View style={styles.progressStepperStyle}>
                    <View style={styles.unSelectLineStyle} />
                    <Text style={styles.unSelectTextStyle}>Payment</Text>
                </View>
            </View>

            <View style={styles.contentStyle}>
                {content}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    progressStepperLayoutStyle: {
        backgroundColor:'white',
        paddingVertical:heightPercentageToDP(2),
        flexDirection: 'row',
        justifyContent:'space-between',
        paddingHorizontal:heightPercentageToDP(1),
        elevation:2,
       
    },
    progressStepperStyle:{
        // flex:0.25,
        flexDirection: 'row',
        justifyContent: 'center', 
        alignItems: 'center',
        
    },
    selectLineStyle: {
        backgroundColor: '#04A48E',
        width: widthPercentageToDP(10),
        marginRight:10,
        height: 1,
    },
    selectTextStyle:{
        fontFamily:'whitney-semi-bold',
        fontSize:heightPercentageToDP(2),
    },
    unSelectLineStyle:{
        backgroundColor: '#C5C5C5',
        
        width: widthPercentageToDP(10),
        marginRight:10,
        height: 1,
    },
    unSelectTextStyle:{
        fontFamily:'whitney-medium',
        color:'#C5C5C5',
        fontSize:heightPercentageToDP(2),
    },
    contentStyle:{
        flex:1,
        // marginVertical:10,
    },
})

export default Checkout;