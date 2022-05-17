import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ListItem } from "react-native-elements";
import { heightPercentageToDP } from "react-native-responsive-screen";
import SimpleHeader from "../../../../Components/Header/simple_header";

const PrivacyPolicy = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([
    {
      isActive: false,
      question: " Introduction",
    },
    {
      isActive: false,
      question: " Collection",
    },
    {
      isActive: false,
      question: " Use",
    },
    {
      isActive: false,
      question: " Cookies",
    },
    {
      isActive: false,
      question: " Sharing",
    },
  ]);
  const hideDropDown = (index) => {
    const temData = [...data];
    if (temData[index].isActive) {
      for (let i = 0; i < temData.length; i++) {
        temData[i].isActive = false;
      }
    } else {
      for (let i = 0; i < temData.length; i++) {
        temData[i].isActive = false;
      }
      temData[index].isActive = true;
    }
    setData(temData);
  };
  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader
        headerTitle={"Privacy Policy"}
        placement={"left"}
        clickHandler={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(3.5),
              padding: 20,
            }}
          >
            Privacy Policy
          </Text>

          {data.map((item, index) => {
            return (
              <ListItem.Accordion
                key={"inique" + index}
                containerStyle={styles.contentStyle}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={styles.textStyle}>
                        {item.question}
                      </ListItem.Title>
                    </ListItem.Content>
                  </>
                }
                isExpanded={item.isActive}
                onPress={() => {
                  hideDropDown(index);
                }}
              >
                <ListItem
                  containerStyle={{
                    backgroundColor: "white",
                    marginLeft: 20,
                    marginRight: 10,

                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    elevation: 1,
                  }}
                >
                  {/* <ListItem.Content> */}
                  {/* <ListItem.Title>Title</ListItem.Title> */}
                  <ListItem.Subtitle
                    style={{
                      fontFamily: "whitney-light",
                      fontSize: heightPercentageToDP(2),
                    }}
                  >
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore.
                  </ListItem.Subtitle>
                  {/* </ListItem.Content> */}
                </ListItem>
              </ListItem.Accordion>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  mainContainer: {
    flex: 1,
  },
  headerText: {
    fontFamily: "whitney-semi-bold",
  },
  simpleText: {
    fontFamily: "whitney-light",
  },
  borderSelected: {
    backgroundColor: "#f9f9f9",
  },
});

export default PrivacyPolicy;
