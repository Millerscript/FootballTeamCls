import React from 'react';
import { View, Text, Image, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

const TeamsOverview = props => (
    <View style={{ backgroundColor: '#fafafa'}}>
         <FlatList vertical contentContainerStyle={styles.list} data={props.teams} renderItem={({item}) => 
            <TouchableHighlight onPress={ () => { props.navigation.navigate('PlayersScreen', item) } }>
                <View style={{
                                flex: 1,
                                margin: 2,
                                minWidth: 170,
                                maxWidth: 170,
                                height: 200,
                                maxHeight:200,
                                borderRadius:4,
                                padding:4,
                                borderColor:'#ddd',
                                backgroundColor: '#fff',
                                }}>
                    <Image 
                        source={{uri: item.strTeamBanner}} 
                        style={styles.teamMedia}
                    />
                    <Text style={{ color: '#000'}}>{item.strAlternate}</Text>
                    <Text style={{ color: '#09f'}}>{item.strWebsite}</Text>
                </View>
            </TouchableHighlight>
         }/>
    </View>
);

const styles = StyleSheet.create({
    list: {
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    teamMedia:{
        width:161,
        height:130,
        resizeMode: 'contain',
        borderRadius:10,
    }
});

export default TeamsOverview;