import React, { useState } from "react";
import { Dimensions, View, StyleSheet, Text, TouchableOpacity, FlatList } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'

import { SIZEDUMMY } from "../data/dummy-data";
import SearchBar from "./SearchBar";





const BrandModel = props => {
    const displayFilterSize = SIZEDUMMY;

    const renderItem = itemData => {
        return (
            itemData.item.checked ?
                <TouchableOpacity>
                    <View style={styles.content}>
                        <View style={styles.textContent}>
                            <MaterialIcons name={'done'} size={24} color={'blue'} />
                            <Text>{itemData.item.name}</Text>
                        </View>
                        <Text>533</Text>
                    </View>
                </TouchableOpacity>
                :
                <TouchableOpacity onPress={onChecked.bind(this, itemData.item.id)}>
                    <View style={styles.content}>
                        <View style={styles.textContent}>
                            <MaterialIcons name={'done'} size={24} color={'black'} />
                            <Text>{itemData.item.name}</Text>
                        </View>
                        <Text>533</Text>
                    </View>
                </TouchableOpacity>

        );
    }

    const onChecked = (key) => {
        return displayFilterSize.map(item => {
            item.checked = item.id === key
        });
    }

    return (
        <View>
            <SearchBar />
            <FlatList
                keyExtractor={(item, index) => { item.id }}
                data={displayFilterSize}
                renderItem={renderItem}
            />
        </View>
    );
};



const styles = StyleSheet.create({
    content: {
        // flex: 1,
        flexDirection: 'row',
        justifyContent: "space-between",

        paddingHorizontal: 20,
        paddingVertical: 10,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: "#ffff",
        alignItems: 'center'
    },
    textContent: {
        flexDirection: 'row',
        justifyContent: "space-between"
    }

});

export default BrandModel;