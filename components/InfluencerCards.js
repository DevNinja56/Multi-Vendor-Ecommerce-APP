import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

const InfluencerCards = props => {
    return (
        <View style={{ ...styles.mainContainer, ...props.style }}>
            {/* <View style={{ ...styles.imageContainer, ...props.imageContainerstyle }}> */}
            <Image source={props.image} style={{ ...styles.imageStyle, ...props.imageContainerstyle }} resizeMode="contain" />
            {/* </View>
            // <View style={styles.textContainer}> */}

            <View
                style={{
                    width: "100%",
                    borderBottomColor: 'black',
                    borderBottomWidth: 1,
                }}
            ></View>
            <Text>+ FOLLOW NOW</Text>
            {/* </View> */}
        </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        marginHorizontal: 20,
        marginVertical: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.4,
        height: Dimensions.get('window').width * 0.4,
        overflow: 'hidden',
    },
    imageStyle: {
        flex: 1,
        width: Dimensions.get('window').width * 0.20,
        height: Dimensions.get('window').width * 0.20,
    },

    textStyle: {
        flex: 1,
        width: Dimensions.get('window').width * 0.2,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',

    }
});

export default InfluencerCards;