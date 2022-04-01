import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { heightPercentageToDP } from "react-native-responsive-screen";
import { HomeIcon } from "../../../assets/svg";
import Colors from "../../Constants/colors";
import { Picker } from "@react-native-picker/picker";
import { CheckBox, Icon } from "react-native-elements";

const Address = (props) => {
  const [checked, setChecked] = useState(0);
  const [selectedLanguage, setSelectedLanguage] = useState();
  const [check1, setCheck1] = useState(false);
  var gender = ["Home", "Office", "Other"];
  return (
      <View style={{flex:1}}>
    <ScrollView style={{flexGrow:1}}>
      <View style={styles.container_1_Styles}>
        <ScrollView horizontal>
          <View style={styles.btnStyle}>
            {gender.map((gender, key) => {
              return (
                <View key={gender}>
                  {checked == key ? (
                    <TouchableOpacity style={styles.btn}>
                      <View
                        style={{
                          flex: 1,
                          paddingVertical: 16,
                          paddingHorizontal: 30,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: Colors.Primary,
                          borderRadius: 5,
                        //   elevation: 4,
                        }}
                      >
                        <HomeIcon />
                        <Text style={styles.textChecked}>{gender}</Text>
                      </View>
                    </TouchableOpacity>
                  ) : (
                    <TouchableOpacity
                      onPress={() => {
                        setChecked(key);
                      }}
                      style={styles.btn}
                    >
                      <View
                        style={{
                          flex: 1,
                          paddingVertical: 16,
                          paddingHorizontal: 30,
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: 5,
                        //   elevation: 4,
                        }}
                      >
                        <HomeIcon />
                        <Text style={styles.textUnChecked}>{gender}</Text>
                      </View>
                    </TouchableOpacity>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>

      <View style={styles.container_2_Styles}>
        <Text
          style={{ ...styles.headingStyle, fontSize: heightPercentageToDP(3) }}
        >
          Enter Address Details
        </Text>
        <View style={{ marginTop: 25 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <TextInput
              placeholder="First Name"
              style={{ ...styles.textInputStyle, flex: 0.45 }}
            />
            <TextInput
              placeholder="Last Name"
              style={{ ...styles.textInputStyle, flex: 0.45 }}
            />
          </View>
          <TextInput
            placeholder="Street Address, Landmark etc."
            style={styles.textInputStyle}
          />

          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Picker
              style={{ ...styles.textInputStyle, flex: 0.45, width: "100%" }}
              selectedValue={selectedLanguage}
              mode={"dropdown"}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>

            <TextInput
              placeholder="Last Name"
              style={{ ...styles.textInputStyle, flex: 0.45 }}
            />
          </View>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <CheckBox
              
              checkedIcon={
                <Icon
                  name="checkbox-active"
                  type="fontisto"
                  color={Colors.Primary}
                  size={25}
                //   iconStyle={{ marginRight: 10 }}
                />
              }
              uncheckedIcon={
                <Icon
                  name="checkbox-passive"
                  type="fontisto"
                  color="grey"
                  size={25}
                //   iconStyle={{ marginRight: 10 }}
                />
              }
              checked={check1}
              onPress={() => setCheck1(!check1)}
            />
            <Text style={{...styles.headingStyle,fontSize:heightPercentageToDP(2.2)}}>Save for faster checkout next time</Text>
          </View>
        </View>
      </View>
   
    </ScrollView>
    <View style={styles.footerStyle}>
      <TouchableOpacity style={styles.buttonStyle} onPress={()=>props.screenSet(2)}>
          <Text style={{...styles.headerText,color:'white',fontSize:heightPercentageToDP(2)}}>CONTINUE TO PAYMENT</Text>
      </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Address;
