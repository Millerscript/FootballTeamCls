import React, {Component} from 'react';
import {View} from 'react-native';
import PlayersOverview from './components/players-overview';

class Players extends Component{
    constructor(props){
        super(props)
        this.state = {
            players:{}
        }
    }

    async componentDidMount(){
        const playersData = await fetch('https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?t='+this.props.navigation.getParam('strTeam', 'default-value'), {
            method: 'GET',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/x-www-form-urlencoded',
            }
        }).then((response) => response.json())
            .then((responseJson) => {
                console.log(responseJson)
                return responseJson;
            })
            .catch((error) => {
                console.error(error);
        });

        this.setState({players: playersData.player})
    }

    render(){
        return(
            <View>
                <PlayersOverview navigation={ this.props.navigation } players={this.state.players}/>
            </View>
        );
    }

}

export default Players;