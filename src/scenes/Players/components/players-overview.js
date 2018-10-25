import React from 'react';
import { View, Text, Image, FlatList, TouchableHighlight, StyleSheet } from 'react-native';

const PlayersOverview = props => (
    <View style={{ backgroundColor: '#fafafa'}}>
         <FlatList vertical contentContainerStyle={styles.list} data={props.players} renderItem={({item}) => 
            <TouchableHighlight onPress={ () => { props.navigation.navigate('DetailScreen', item) } }>
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
                        source={{uri: item.strThumb}} 
                        style={styles.playerMedia}
                    />
                    <Text style={{ color: '#000'}}>{item.strPlayer}</Text>
                    <Text style={{ color: '#09f'}}>{item.strNationality}</Text>
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
    playerMedia:{
        width:161,
        height:130,
        resizeMode: 'contain',
        borderRadius:10,
    }
});

export default PlayersOverview;