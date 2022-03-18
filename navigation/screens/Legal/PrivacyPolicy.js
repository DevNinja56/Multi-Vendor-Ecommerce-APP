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
import SimpleHeader from "../Header/simple_header";

const PrivacyPolicy = (props) => {
    const [expanded, setExpanded] = useState(false);
    return (
        <SafeAreaView style={styles.screen}>
      <SimpleHeader clickHandler={() => props.navigation.goBack()} />
      <ScrollView>
      <View style={styles.mainContainer}>
          <Text style={{...styles.headerText,fontSize:heightPercentageToDP(3.5), padding:20,}}>Privacy Policy</Text>

          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={ styles.borderSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={styles.headerText}>
                  Introduction
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
                backgroundColor:'#f9f9f9',
              
                // elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light'}}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet end to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>

          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={ styles.borderSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={styles.headerText}>
                  Collection
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
                backgroundColor:'#f9f9f9',
              
                // elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light'}}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet end to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>

        

          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={ styles.borderSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={styles.headerText}>
                  Use
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
                backgroundColor:'#f9f9f9',
              
                // elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light'}}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet end to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>

          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={ styles.borderSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={styles.headerText}>
                  Cookies
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
                backgroundColor:'#f9f9f9',
              
                // elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light'}}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet end to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>

          <ListItem.Accordion
            bottomDivider={expanded}
            containerStyle={ styles.borderSelected}
            content={
              <>
                <ListItem.Content>
                  <ListItem.Title style={styles.headerText}>
                  Sharing
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
                backgroundColor:'#f9f9f9',
              
                // elevation:4,
              }}
            >
              {/* <ListItem.Content> */}
              {/* <ListItem.Title>Title</ListItem.Title> */}
              <ListItem.Subtitle style={{fontFamily:'whitney-light'}}>
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet end to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.{"\n"}Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </ListItem.Subtitle>
              {/* </ListItem.Content> */}
            </ListItem>
          </ListItem.Accordion>

         
      </View>
      </ScrollView>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen:{
        flex:1,
        backgroundColor:'#f9f9f9',
    },
    mainContainer:{
        flex:1,
    },
    headerText:{
        fontFamily:'whitney-semi-bold',      
    },
    simpleText:{
        fontFamily:'whitney-light',      
    },
    borderSelected:{
        backgroundColor:'#f9f9f9',
    }
})

export default PrivacyPolicy;