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

const TermsOfUse = (props) => {
  const [expanded, setExpanded] = useState(false);
  const [data, setData] = useState([
    {
      isActive: false,
      question: " 1. User Account, Password, and Security:",
    },
    {
      isActive: false,
      question: " 2. Services Offered:",
    },
    {
      isActive: false,
      question: " 3. Platform for Transaction & Communication:",
    },
    {
      isActive: false,
      question: " 4. Contents Posted on Platform:",
    },
    {
      isActive: false,
      question: " 5.Selling",
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
        headerTitle={"Term of Use"}
        placement={"left"}
        clickHandler={() => props.navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.mainContainer}>
          <Text
            style={{
              ...styles.headerText,
              fontSize: heightPercentageToDP(3.5),
              padding: 20,
            }}
          >
            Terms of Use
          </Text>

          <Text style={{ ...styles.simpleText, paddingHorizontal: 20 }}>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even believable. If you
            are going to use a passage of Lorem Ipsum, you need to be sure there
            isn't anything embarrassing hidden in the middle of text. All the
            Lorem Ipsum generators on the Internet end to repeat predefined
            chunks as necessary, making this the first true generator on the
            Internet. It uses a dictionary of over 200 Latin words, combined
            with a handful of model sentence structures, to generate Lorem Ipsum
            which looks reasonable. The generated Lorem Ipsum is therefore
            always free from repetition, injected humour, or non-characteristic
            words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
            {"\n\n"}Lorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
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

export default TermsOfUse;
