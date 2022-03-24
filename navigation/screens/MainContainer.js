import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeRoute from "./BottomScreensFolder/HomeRoute";


import RosterScreen from "./Home/RosterScreen";
import DetailsScreen from "./Home/DetailsScreen";
import LoginScreen from "./Login&SignUp/LoginScreen";
import WinterWearScreen from "./Home/WinterWear/WinterWearScreen";
import NotificationScreen from "./Notifications/NotificationScreen";
import WishListScreen from "./WishList/WishListScreen";
import CartScreen from "./Cart/CartScreen";

import MenScreen from "./Home/Men/MenScreen";
import WomenScreen from "./Home/Women/WomenScreen";
import KidsScreen from "./Home/Kids/KidsScreen";
import FootwareScreen from "./Home/Footware/FootwareScreen";

import OrderDetails from "./Orders/OrderDetails";
import OTP from './Otp'
import TermsOfUse from "./Legal/TermsOfUse";
import PrivacyPolicy from "./Legal/PrivacyPolicy";
import Checkout from "./Checkout/Checkout";
import EnterPassword from "./EnterPassword";
import SetPassword from "./SetPassword";

// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function MainContainer() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={HomeRoute}
           
          />
          <Stack.Screen
            name="RoadSter"
            component={RosterScreen}
           
         
          />
          <Stack.Screen
            name="Details"
            component={DetailsScreen}
            
           
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen name="WinterWear" component={WinterWearScreen} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="Wishlist" component={WishListScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Men" component={MenScreen} />
          <Stack.Screen name="Women" component={WomenScreen} />
          <Stack.Screen name="Kids" component={KidsScreen} />
          <Stack.Screen name="Footware" component={FootwareScreen} />
          <Stack.Screen name="Order Details" component={OrderDetails} />
          <Stack.Screen name="Terms Of Use" component={TermsOfUse} />
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="EnterPassword" component={EnterPassword} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
