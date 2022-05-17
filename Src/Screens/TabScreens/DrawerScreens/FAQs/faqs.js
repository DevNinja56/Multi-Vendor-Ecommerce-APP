import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { ListItem, Icon } from "react-native-elements";
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from "react-native-responsive-screen";
import Colors from "../../../../Constants/colors";
import SimpleHeader from "../../../../Components/Header/simple_header";

const faqs = (props) => {
  const [data, setData] = useState([
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
    },
    {
      isActive: false,
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
        headerTitle={"FAQs"}
        placement={"left"}
        clickHandler={() => props.navigation.goBack()}
      />
      <ScrollView>
        <View style={styles.mainContainer}>
          {data.map((item, index) => {
            return (
              <ListItem.Accordion
                key={"inique" + index}
                containerStyle={styles.contentStyle}
                content={
                  <>
                    <ListItem.Content>
                      <ListItem.Title style={styles.textStyle}>
                        What is Try and Buy Service?
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
      <TouchableOpacity style={styles.buttonStyle}>
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontFamily: "whitney-semi-bold",
            fontSize: heightPercentageToDP(2),
          }}
        >
          Submit Your Question
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    // flex: 1,
    flexGrow: 1,
    backgroundColor: "#F9F9F9",
  },
  mainContainer: {
    flex: 1,
    // backgroundColor: "#F9F9F9",
    paddingVertical: 20,
  },
  bordernotSelected: {
    borderRadius: 10,
    backgroundColor: "#E4E4E4",
    marginLeft: 20,
    marginRight: 10,
    elevation: 1,
  },
  contentStyle: {
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 0,
  },
  borderSelected: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 1,
  },
  buttonStyle: {
    margin: 10,
    padding: 16,
    backgroundColor: Colors.Primary,
    borderRadius: 10,
    elevation: 1,
  },
  textStyle: {
    fontFamily: "whitney-medium",
    fontSize: widthPercentageToDP(4),
  },
});

export default faqs;
