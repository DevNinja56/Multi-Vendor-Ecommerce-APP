import { View, TouchableOpacity, Image } from "react-native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { createDrawerNavigator } from "@react-navigation/drawer";

import CustomDrawerContent from "./DrawerHeader/CustomDrawerContent";

import OrdersScreen from "../Screens/TabScreens/DrawerScreens/Orders/OrdersScreen";
import {heightPercentageToDP,widthPercentageToDP} from 'react-native-responsive-screen'
import {
  BagIcon,
  HeartIcon,
  NotificationIcon,
  SearchIcon,
} from "../../assets/svg";
import { SafeAreaView } from "react-native-safe-area-context";
import Colors from "../Constants/colors";
import faqs from "../Screens/TabScreens/DrawerScreens/FAQs/faqs";
import ContactUs from "../Screens/TabScreens/DrawerScreens/ContactUs/ContactUs";
import Legal from "../Screens/TabScreens/DrawerScreens/Legal/Legal";
import HomePage from "../Screens/TabScreens/DrawerScreens/Home/HomePage";

const Drawer = createDrawerNavigator();

const DrawerNavigator = ({ navigation }) => {
  // const toggleDrawer = () => {
  //   //Props to open/close the drawer
  //   navigation.toggleDrawer();
  // };

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
         headerShown: false,
       

        headerTitle: "",

        drawerActiveBackgroundColor: Colors.Primary,
        drawerActiveTintColor: "#ffff",
        drawerInactiveTintColor: "#000000",

        drawerLabelStyle: {
          fontFamily: "whitney-book",
          // color: "white/",
          fontSize: heightPercentageToDP(1.6),
        },
      }}
    >
      <Drawer.Screen name="Shop by Categories" component={HomePage} />
      <Drawer.Screen name="Orders" component={OrdersScreen} />
      <Drawer.Screen name="FAQs" component={faqs} />
      <Drawer.Screen name="Contact Us" component={ContactUs} />
      <Drawer.Screen name="Legal" component={Legal} />
      {/* <Drawer.Screen name="Login In" component={LoginScreen} /> */}
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
