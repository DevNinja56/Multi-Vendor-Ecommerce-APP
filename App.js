import "react-native-gesture-handler";
import React, { useState,useEffect } from "react";
import AppLoading from "expo-app-loading";
import {View} from 'react-native'
import * as Font from "expo-font";
import { loadAsync } from "expo-font";
import { Store, persistor } from "./Src/Redux/store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Services from './Src/Services'
import MainApp from './MainApp'
import SplashScreen from 'react-native-splash-screen'

const fetchFonts = () => {
  return Font.loadAsync({
    "font-free": require("./assets/fonts/FontsFree.ttf"),
    "kepler-regular": require("./assets/fonts/Kepler/KeplerStd-Regular.otf"),
    "kepler-medium": require("./assets/fonts/Kepler/KeplerStd-Medium.otf"),
    "kepler-light-italic": require("./assets/fonts/Kepler/KeplerStd-LightIt.otf"),
    "kepler-light": require("./assets/fonts/Kepler/KeplerStd-Light.otf"),
    "kepler-bold": require("./assets/fonts/Kepler/KeplerStd-Black.otf"),

    // Whitney Font
    "whitney-bold": require("./assets/fonts/WhitneyFont/whitneybold.otf"),
    "whitney-book": require("./assets/fonts/WhitneyFont/whitneybook.otf"),
    "whitney-book-italic": require("./assets/fonts/WhitneyFont/whitneybookitalic.otf"),
    "whitney-light": require("./assets/fonts/WhitneyFont/whitneylight.otf"),
    "whitney-light-italic": require("./assets/fonts/WhitneyFont/whitneylightitalic.otf"),
    "whitney-medium": require("./assets/fonts/WhitneyFont/whitneymedium.otf"),
    "whitney-medium-italic": require("./assets/fonts/WhitneyFont/whitneymediumitalic.otf"),
    "whitney-semi-bold": require("./assets/fonts/WhitneyFont/whitneysemibold.otf"),
    "whitney-semi-bold-italic": require("./assets/fonts/WhitneyFont/WhitneySemiboldItalic.otf"),

    // Open-Sans Font
    "open-sans-condensed-bold": require("./assets/fonts/OpenSansBold/OpenSans_Condensed-ExtraBold.ttf"),
    "open-sans-condensed-regular": require("./assets/fonts/OpenSansBold/OpenSans_Condensed-Regular.ttf"),
    "open-sans-condensed-semi-bold": require("./assets/fonts/OpenSansBold/OpenSans_Condensed-SemiBold.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans/OpenSans-ExtraBold.ttf"),
    "open-sans-semi-bold": require("./assets/fonts/OpenSans/OpenSans-SemiBold.ttf"),
    "open-sans-regular": require("./assets/fonts/OpenSans/OpenSans-Regular.ttf"),
    //  "open-sans-medium-italic": require("./assets/fonts/WhitneyFont/whitneymediumitalic.otf"),
    //  "open-sans-semi-bold": require("./assets/fonts/WhitneyFont/whitneysemibold.otf"),
    //  "open-sans-semi-bold-italic": require("./assets/fonts/WhitneyFont/WhitneySemiboldItalic.otf"),
  });
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);


  useEffect(()=>{
    setTimeout(() => SplashScreen.hide(), 2000);
  },[])

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <View style={{ flex: 1 }}>
      <Provider store={Store}>
        <PersistGate loading={null} persistor={persistor}>
          <MainApp />
          <Services/>
        </PersistGate>
      </Provider>
    </View>
  );
}
