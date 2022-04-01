import React, { useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, TouchableOpacity, ScrollView } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { heightPercentageToDP } from "react-native-responsive-screen";
import Colors from "../../../../Constants/colors";
import SimpleHeader from "../../../../Components/Header/simple_header";

const faqs = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <SimpleHeader headerTitle={"FAQs"} placement={"left"} clickHandler={()=>props.navigation.goBack()} />
      <ScrollView >
      <View style={styles.mainContainer}>
        <ListItem.Accordion
          containerStyle={styles.contentStyle}
          
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={styles.textStyle}>What is Try and Buy Service?</ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        ></ListItem.Accordion>
        <ListItem.Accordion
          containerStyle={styles.contentStyle}
          content={
            <>
              <ListItem.Content>
                <ListItem.Title style={styles.textStyle}>
                  Shipping, Order Tracking & Delivery?
                </ListItem.Title>
              </ListItem.Content>
            </>
          }
          isExpanded={expanded}
          onPress={() => {
            setExpanded(!expanded);
          }}
        >
          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={expanded ? styles.borderSelected: styles.bordernotSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={{fontSize:heightPercentageToDP(2),fontFamily:'whitney-medium'}}>
                  How do I cancel the order, I have placed?
                  </ListItem.Title>
                </ListItem.Content>
              </>
            }
            isExpanded={expanded}
            onPress={() => {
              setExpanded(!expanded);
            }}
          >
            <ListItem
              containerStyle={{
                backgroundColor: "white",
                marginLeft: 20,
                marginRight: 10,

                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
                elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light',fontSize:heightPercentageToDP(2)}}>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor invidunt ut labore et dolore magna
                aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                eirmod tempor invidunt ut labore et dolore.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>
        </ListItem.Accordion>
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonStyle}>
          <Text style={{textAlign:'center',color:'white',fontFamily:'whitney-semi-bold',fontSize:heightPercentageToDP(2)}}>Submit Your Question</Text>
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
    elevation:4,
  },
  contentStyle:{
     
    backgroundColor: "white",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation:4,
  },
  borderSelected: {
    backgroundColor: "white",
    marginLeft: 20,
    marginRight: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation:4,
  },
  buttonStyle:{

      margin:10,
      padding:16,
      backgroundColor:Colors.Primary,
      borderRadius:10,
      elevation:4,
  },
  textStyle:{
    fontFamily:'whitney-medium',
    fontSize:heightPercentageToDP(2)
  }
});

export default faqs;
