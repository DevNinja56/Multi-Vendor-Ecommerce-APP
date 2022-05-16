import React from "react";
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
