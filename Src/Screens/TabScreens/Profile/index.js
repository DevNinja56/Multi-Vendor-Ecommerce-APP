import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import {
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import {
  CouponTagIcon,
  HeartIcon,
  HelpCenterIcon,
  OrderIcon,
  ProfileIcon,
} from "../../../../assets/svg";
import { color } from "react-native-reanimated";
import NotAuthenticated from "./NotAuthenticated";
import Authenticated from "./Authenticated";

const Profile = (props) => {
  const profileEdit = () => props.navigation.navigate("ProfileEdit");
  const addressDetails = () => props.navigation.navigate("AddressDetails");
  const paymentMethod = () => props.navigation.navigate("PaymentMethod");
  return (
    // <NotAuthenticated />
    <Authenticated
      profileEdit={profileEdit}
      addressDetails={addressDetails}
      paymentMethod={paymentMethod}
    />
  );
};

export default Profile;
