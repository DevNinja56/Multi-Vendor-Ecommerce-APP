import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Modal, TouchableWithoutFeedback, FlatList, } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import FastImage from "react-native-fast-image";
import { Fonts } from '../../../constants/fonts'
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview'

const SearchScreen = (props) => {

  const [isOpen, setOpen] = useState(false)
  const [search, setSearch] = useState('')


  // useEffect(() => {
  //   if (search) {
  //     setOpen(true)
  //   } else {
  //     setOpen(false)
  //   }
  // }, [search])

  const _renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity style={styles.searchRow}>
        <View style={styles.innerRow}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
          />
          <Text style={styles.filterText}>
            {"T-Shirt"}
          </Text>
          <View style={styles.rightBtn}>
            <Feather name="arrow-up-left" size={24} color="black" />
          </View>
        </View>

      </TouchableOpacity>
    )
  }


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1 }}>
          <View style={styles.searchLayoutStyles}>
            <TouchableOpacity>
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text
              onPress={() => setOpen(true)}
              style={{ flex: 1, marginLeft: 10 }}>
              {!search ? "Search For Brands & Products": search}
            </Text>
          </View>
          
      </View>
      {isOpen &&
        <Modal
          transparent={true}
          visible={isOpen}
          avoidKeyboard
          animationType="fade"
          onRequestClose={() => { console.log('close') }}
        >
          <TouchableWithoutFeedback onPress={() => setOpen(false)}>
            <View style={styles.innerModal}>
              <View style={styles.searchLayoutStyles}>
                <TouchableOpacity>
                  <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <TextInput
                  style={{ flex: 1, marginLeft: 10 }}
                  placeholder="Search For Brands & Products"
                  onChangeText={text => setSearch(text)}
                  value={search}
                />
              </View>
              <FlatList
                data={[0, 1,]}
                keyExtractor={(item, index) => "unique" + index}
                renderItem={_renderItem}
              />

            </View>
          </TouchableWithoutFeedback>
        </Modal>
      }
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  searchLayoutStyles: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 16,
    elevation: 4,
  },
  innerModal: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    //marginTop: heightPercentageToDP(8)
  },
  searchRow: {
    width: widthPercentageToDP(100),
    height: heightPercentageToDP(6),
    backgroundColor: "#fff",
    borderBottomWidth: widthPercentageToDP(0.1),
    borderBottomColor: "#000"
  },
  innerRow: {
    width: widthPercentageToDP(90),
    height: heightPercentageToDP(6),
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center"
  },
  filterText: {
    fontFamily: Fonts.whitney_light,
    fontSize: widthPercentageToDP(3.5),
    color: "#000",
    marginLeft: widthPercentageToDP(4)
  },
  rightBtn: {
    position: "absolute",
    right: "0%",
    top: "10%"
  }
});

export default SearchScreen;
