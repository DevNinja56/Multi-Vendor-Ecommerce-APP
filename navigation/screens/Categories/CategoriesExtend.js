import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Text,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';

const CategoriesExtend = (props) => {
  return (
    <View style={styles.menuStyle}>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Westernwear</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Ethnic & Fusionwear</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Lingerie</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Footwear</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Accessories</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Winter Wear</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.container}>
          <Text style={styles.textStyle}>Sleepwear & Loungewear</Text>
          <Ionicons name={"ios-chevron-down"} size={heightPercentageToDP(1.5)} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  menuStyle: {
    flex: 1,
  },
  container: {
    flexDirection: "row",
    paddingVertical: 20,
    marginHorizontal: 20,
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "#C9C9C9",
  },
  textStyle: {
    fontSize: heightPercentageToDP(1.75),
    fontFamily: "whitney-medium",
    textAlign: "left",
  },
});

export default CategoriesExtend;
