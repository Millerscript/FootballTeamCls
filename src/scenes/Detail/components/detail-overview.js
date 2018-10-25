import React from 'react';
import { View, Text, Image, TouchableHighlight, StyleSheet } from 'react-native';

const DetailOverview = props => (
    <View style={{ flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch', alignItems: 'center', backgroundColor: '#09f'}}>
        <View style={{ padding: 6,}}>
            <Image source={{uri: props.detail.media}} style={styles.playerMedia}/>
            <Text>{props.detail.name}</Text>
        </View>
    </View>
);

const styles = StyleSheet.create({
    playerMedia:{
        width:161,
        height:161,
        resizeMode: 'contain',
        borderRadius:10,
    }
});

export default DetailOverview;