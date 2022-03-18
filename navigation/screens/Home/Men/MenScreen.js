import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Dimensions,
  Image,
} from "react-native";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const MenScreen = () => {
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.screen}>
        <Text>Mends</Text>
        <View style={styles.imageStyle}>
          <Image
            source={require("../../../../assets/bannerButton.png")}
            style={styles.image}
            resizeMode={"cover"}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  imageStyle: {
    width: width * 1,
    height: height * 0.1,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default MenScreen;
