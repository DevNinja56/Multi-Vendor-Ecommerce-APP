import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../Header/simple_header";
import OTPInputView from '@twotalltotems/react-native-otp-input'
import { Fonts } from '../../../constants/fonts'

const OTP = (props) => {

    const [code, setCode] = useState(1234);

    return (
        <SafeAreaView style={{ flex: 1 , backgroundColor:"white"}}>
            <SimpleHeader
                clickHandler={() => props.navigation.goBack()}
                headerTitle={""}
            />
            <View style={styles.centerView}>
                <Text style={styles.verify}>
                    {"Verify with OTP"}
                </Text>
                <Text style={styles.smallText}>
                    {"Send via SMS to 03--------1"}
                </Text>

                <OTPInputView
                    style={{ width: '90%', height: 200, alignSelf: "center" }}
                    pinCount={4}
                    //code={code} //You can supply this prop or not. The component will be used as a controlled / uncontrolled component respectively.
                    //onCodeChanged={code => setCode(code)}
                    autoFocusOnLoad
                    codeInputFieldStyle={styles.underlineStyleBase}
                    codeInputHighlightStyle={styles.underlineStyleHighLighted}
                    onCodeFilled={(num) => {
                        if (num == code) {
                            console.log(`Code is ${code}, you are good to go!`)
                        } else {
                            console.log('code not matched')
                        }

                    }}
                />

                <Text style={styles.received}>
                    {"Didn't you received any code?"}
                </Text>
                <Text style={[styles.received, {
                    marginVertical: heightPercentageToDP(4),
                    color: "#FE3F6C",
                    fontFamily: "whitney-medium"
                }]}>
                    {"Resend a new code"}
                </Text>

                <TouchableOpacity
                    onPress={() => props.navigation.navigate('EnterPassword')}
                    style={styles.btn}>
                    <Text style={styles.btnText}>
                        {"Login with Password"}
                    </Text>
                </TouchableOpacity>

            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    centerView: {
        width: widthPercentageToDP(85),
        flex: 1,
        alignSelf: "center",
        //backgroundColor:"red"
    },
    verify: {
        marginVertical: heightPercentageToDP(7),
        //paddingLeft: widthPercentageToDP(),
        fontFamily: "whitney-semi-bold",
        fontSize: widthPercentageToDP(6),
        color: "black"
    },
    received: {
        marginVertical: heightPercentageToDP(-3),
        //paddingLeft: widthPercentageToDP(4),
        fontFamily: "whitney-light",
        fontSize: widthPercentageToDP(3.5),
        color: "grey",
        textAlign: "center"
    },
    smallText: {
        marginVertical: heightPercentageToDP(-3),
        //paddingLeft: widthPercentageToDP(4),
        fontFamily: "whitney-light",
        fontSize: widthPercentageToDP(3.5),
        color: "grey"
    },
    // borderStyleBase: {
    //     width: 40,
    //     height: 45,
    // },

    // borderStyleHighLighted: {
    //     borderColor: "#03DAC6",
    //     color:"black",
    // },

    underlineStyleBase: {
        width: widthPercentageToDP(15),
        height: heightPercentageToDP(12),
        borderWidth: widthPercentageToDP(0.2),
        borderColor: "#FE3F6C",
        fontSize: widthPercentageToDP(8),
        color: "black",
        fontFamily: "whitney-medium"
    },

    underlineStyleHighLighted: {
        width: widthPercentageToDP(15),
        height: heightPercentageToDP(12),
        borderWidth: widthPercentageToDP(0.2),
        borderColor: "#FE3F6C",
        fontSize: widthPercentageToDP(8),
        color: "black",
        fontFamily: "whitney-medium"
    },
    btn: {
        width: widthPercentageToDP(80),
        height: heightPercentageToDP(7),
        backgroundColor: "#FE3F6C",
        justifyContent: "center",
        alignItems: "center",
        marginTop: heightPercentageToDP(10),
        alignSelf: "center"
    },
    btnText: {
        fontFamily: Fonts.whitney_medium,
        fontSize: widthPercentageToDP(4.5),
        color: "white"
    }
})

export default OTP