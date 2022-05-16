import React from "react";
import { StyleSheet, FlatList } from "react-native";

const BeautyDeals = props => {
    return (
        <FlatList
            horizontal
            keyExtractor={(item, index) => { item.id }}
            data={props.data}
            renderItem={props.renderFun}
        />
    );
};

const styles = StyleSheet.create({});

export default BeautyDeals;