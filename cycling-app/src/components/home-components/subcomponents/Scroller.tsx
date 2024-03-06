import React from 'react';
import { View, Text, FlatList } from "react-native";
import { scrollStyles } from './scroller.styles';
// import { services } from './items';
// import { renderItem } from './items';
// import { useState } from 'react';
import List from './items';
export default function Scroll(){
    return (
        <View style={scrollStyles.container}>
            <View style={scrollStyles.innercontainer}>
               <List />
            </View>
        </View>
    );
}