import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileIcon } from "../../../assets/svg";
import SimpleHeader from "../../Components/Header/simple_header";
import { commonStyles } from "../../Styles/commonStyles";
import { styles } from "./style";

const ProfileEdit = (props) => {
  return (
    <View style={commonStyles.container}>
      <SimpleHeader
        clickHandler={() => props.navigation.goBack()}
        headerTitle={"Edit Profile"}
        placement={"left"}
      />
      <View>
        <View style={styles.subContainer1} />

        <View style={styles.profileImage}>
          <ProfileIcon width={"100%"} height={"100%"} />
        </View>

        <View style={styles.inputLayout}>
            <TextInput placeholder="Firstname" style={styles.inputStyle}/>
            <TextInput placeholder="Last Name" style={styles.inputStyle}/>
            {/* <TextInput placeholder="Phone no." style={styles.inputStyle}/> */}
        </View>

        <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.textBtn}>SAVE</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProfileEdit;
