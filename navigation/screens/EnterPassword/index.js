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
import { useDispatch, useSelector } from 'react-redux'
import Loader from '../Components/Loader'
import httpClients from '../../../Redux/utils'

const EnterPassword = (props) => {
    const userToken = useSelector((state) => state.user.userToken);
    const [isLoading, setLoading] = useState();
    const [text, setText] = useState("");

    const _OnSubmit = () => {
        if (!text || text.length < 8) {
            Alert.alert('', "Password should be 8 character long")
            return
        }
        setLoginApi()
    }

    const setLoginApi = async () => {
        const body = { password: text }
        setLoading(true)
        const res = await httpClients.post(`login`, body, {
            headers: {
                'Authorization': userToken
            }
        })
        setLoading(false)
        console.log(res.data)
        if (res.data.status === "success") {
            props.navigation.navigate('HomeScreen')
        }
    }

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
                    <Text onPress={() => props.navigation.navigate('SetPassword', {
                        isForgot:true
                    })}
                        style={styles.forgot}>
                        {"Forgot your password?"}
                    </Text>
                    <TouchableOpacity
                        onPress={() => _OnSubmit()}
                        style={styles.btn}>
                        <Text style={styles.btnText}>
                            {"Conitnue"}
                        </Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAwareScrollView>
            {isLoading &&
                <Loader
                    color="black"
                />
            }
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