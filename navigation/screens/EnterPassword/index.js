import React, { useState } from "react";
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    SafeAreaView,
} from "react-native";
import {
    heightPercentageToDP,
    widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../Header/simple_header";
import FastImage from "react-native-fast-image";
import { Fonts } from '../../../constants/fonts'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'
import { TextInput } from 'react-native-paper';

const EnterPassword = (props) => {

    const [code, setCode] = useState(1234);
    const [text, setText] = useState("");

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
            <SimpleHeader
                clickHandler={() => props.navigation.goBack()}
                headerTitle={""}
            />
            <KeyboardAwareScrollView>
                <View style={styles.centerView}>
                    <FastImage
                        source={require('../../../assets/login_img.png')}
                        resizeMode={FastImage.resizeMode.cover}
                        style={styles.image}
                    />


                    <Text style={styles.title}>
                        {"Enter Password"}
                    </Text>

                    <TextInput
                        label="Password"
                        value={text}
                        onChangeText={text => setText(text)}
                        style={styles.input}
                        secureTextEntry={true}
                        activeUnderlineColor={"black"}
                    />
                    <Text
                        onPress={() => props.navigation.navigate('SetPassword')}
                        style={styles.forgot}>
                        {"Forgot your password?"}
                    </Text>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>
                            {"Conitnue"}
                        </Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
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

    btn: {
        width: widthPercentageToDP(85),
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
    },
    image: {
        width: widthPercentageToDP(70),
        height: widthPercentageToDP(50),
        alignSelf: "center",
        marginTop: heightPercentageToDP(5)
    },
    title: {
        marginTop: heightPercentageToDP(10),
        fontFamily: Fonts.whitney_semi_bold,
        fontSize: widthPercentageToDP(6),
        color: "#282828"
    },
    input: {
        backgroundColor: "transparent",
        marginTop: heightPercentageToDP(5),
        fontSize: widthPercentageToDP(4.5),
        fontFamily: Fonts.whitney_light,
        color: "#282828"
    },
    forgot: {
        textAlign: "right",
        fontFamily: Fonts.whitney_medium,
        fontSize: widthPercentageToDP(3.5),
        color: "#282828",
        marginVertical: heightPercentageToDP(1)
    }
})

export default EnterPassword