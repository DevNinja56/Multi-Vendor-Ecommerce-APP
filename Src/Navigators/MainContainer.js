import React from "react";

import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TabNavigator from "./TabNavigator";
import ProductsAll from "../Screens/ProductsAll/ProductsAll";
import ProductDetail from "../Screens/ProductDetails/ProductDetail";
import LoginScreen from '../Screens/Login&SignUp/LoginScreen';
import TopCategories from "../Screens/TopCategories/TopCategories";
import NotificationScreen from '../Screens/Notifications/NotificationScreen';
import WishListScreen from '../Screens/WishList/WishListScreen';
import CartScreen from '../Screens/Cart/CartScreen';
import OrderDetails from '../Screens/TabScreens/DrawerScreens/Orders/OrderDetails';
import TermsOfUse from '../Screens/TabScreens/DrawerScreens/Legal/TermsOfUse';
import PrivacyPolicy from '../Screens/TabScreens/DrawerScreens/Legal/PrivacyPolicy';
import Checkout from '../Screens/Checkout/Checkout';
import OTP from '../Screens/Login&SignUp/Otp';
import EnterPassword from '../Screens/Login&SignUp/EnterPassword';
import SetPassword from '../Screens/Login&SignUp/SetPassword';
import OrderConfirmed from '../Screens/Checkout/OrderConfirmed';
import SearchScreen from '../Screens/Search/SearchScreen';
import ProfileEdit from "../Screens/ProfileEdit";
import AddressDetails from "../Screens/AddressDetails";




// const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
export default function MainContainer() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false }}>
          <Stack.Screen
            name="HomeScreen"
            component={TabNavigator}
           
          />
          <Stack.Screen
            name="ProductsAll"
            component={ProductsAll}
           
         
          />
          <Stack.Screen
            name="Details"
            component={ProductDetail}
            
           
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerTitle: "" }}
          />
          <Stack.Screen name="TopCategories" component={TopCategories} />
          <Stack.Screen name="Notifications" component={NotificationScreen} />
          <Stack.Screen name="Wishlist" component={WishListScreen} />
          <Stack.Screen name="Cart" component={CartScreen} />
          <Stack.Screen name="Order Details" component={OrderDetails} />
          <Stack.Screen name="Terms Of Use" component={TermsOfUse} />
          <Stack.Screen name="Privacy Policy" component={PrivacyPolicy} />
          <Stack.Screen name="Checkout" component={Checkout} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="EnterPassword" component={EnterPassword} />
          <Stack.Screen name="SetPassword" component={SetPassword} />
          <Stack.Screen name="OrderConfirmed" component={OrderConfirmed} />
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
          <Stack.Screen name="AddressDetails" component={AddressDetails} />
         
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
