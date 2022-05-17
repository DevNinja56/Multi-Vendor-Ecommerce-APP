import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { RadioButton } from "react-native-paper";
import FastImage from "react-native-fast-image";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import SimpleHeader from "../../../../Components/Header/simple_header";
import Colors from "../../../../Constants/colors";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";

const ContactUs = (props) => {
  const [value, setValue] = React.useState("first");
  const ref_input2 = useRef();
  const ref_input3 = useRef();

  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader
        headerTitle={"Help Center"}
        placement={"left"}
        clickHandler={() => props.navigation.goBack()}
      />
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <View style={styles.container1}>
            <View style={styles.container1text}>
              <Text style={styles.headingStyle}>Help Center</Text>
              <Text style={styles.textStyle}>
                Please get in touch and we will be happy to help you
              </Text>
            </View>
            <FastImage
              source={require("../../../../../assets/contactUsImage.png")}
              resizeMode={FastImage.resizeMode.contain}
              style={styles.imageStyle}
            />
          </View>

          <View style={styles.container2}>
            <TextInput
              placeholder="Name"
              style={styles.textInputStyle}
              placeholderTextColor={"black"}
              autoFocus={true}
              returnKeyType="next"
              onSubmitEditing={() => ref_input2.current.focus()}
            />
            <TextInput
              placeholder="Email"
              style={styles.textInputStyle}
              placeholderTextColor={"black"}
              returnKeyType="next"
              onSubmitEditing={() => ref_input3.current.focus()}
              ref={ref_input2}
            />
            <TextInput
              placeholder="Phone"
              style={styles.textInputStyle}
              placeholderTextColor={"black"}
              ref={ref_input3}
            />

            <Text
              style={{
                ...styles.textStyle,
                fontSize: widthPercentageToDP(3.5),
                marginLeft: widthPercentageToDP(1),
              }}
            >
              Preferred method for communication
            </Text>

            <RadioButton.Group
              onValueChange={(newValue) => setValue(newValue)}
              value={value}
            >
              <View
                style={{
                  flexDirection: "row",
                  //justifyContent: "space-around",
                  alignItems: "center",
                  marginTop: heightPercentageToDP(1),
                  marginLeft: widthPercentageToDP(1),
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Text style={styles.radioText}>Email</Text>
                  <RadioButton value="first" color={Colors.Primary} />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "center",
                    marginLeft: widthPercentageToDP(3),
                  }}
                >
                  <Text style={styles.radioText}>Phone</Text>
                  <RadioButton value="second" color={Colors.Primary} />
                </View>
              </View>
            </RadioButton.Group>

            <TextInput
              placeholder="Message"
              style={styles.textInputStyle}
              placeholderTextColor={"black"}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontFamily: "whitney-semi-bold",
            }}
          >
            Submit
          </Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
  },
  mainContainer: {
    flex: 1,
  },
  container1: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
  },
  imageStyle: {
    flex: 0.5,
    //   height:heightPercentageToDP(25),
  },
  container1text: {
    flex: 0.5,
    paddingVertical: 20,
  },
  headingStyle: {
    fontFamily: "whitney-semi-bold",
    fontSize: heightPercentageToDP(2.5),
  },
  textStyle: {
    marginTop: 14,
    fontFamily: "whitney-light",
    fontSize: heightPercentageToDP(1.5),
    color: "#8D8C8C",
  },
  container2: {
    backgroundColor: "white",
    padding: 20,
    margin: 20,
    elevation: 4,
    borderRadius: 10,
  },
  textInputStyle: {
    padding: 5,
    borderBottomWidth: widthPercentageToDP(0.1),
    fontSize: heightPercentageToDP(1.75),
    marginTop: 10,
    fontFamily: "whitney-medium",
  },
  radioText: {
    fontFamily: "whitney-medium",
    color: "black",
  },
  buttonStyle: {
    margin: 10,
    padding: 16,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    elevation: 4,
  },
});

export default ContactUs;
