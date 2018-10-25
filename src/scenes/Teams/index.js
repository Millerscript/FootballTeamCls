import React, {Component} from 'react';
import {View} from 'react-native';
import TeamsOverview from './components/teams-overview';
class Teams extends Component{
    constructor(props){
        super(props)
        this.state = {
            teams:{}
        }
    }

    async componentDidMount(){
        const teamsData = await fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?s=Soccer&c=Spain', {
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

        this.setState({teams: teamsData.teams})
    }

    render(){
        return(
            <View>
                <TeamsOverview navigation={ this.props.navigation } teams={this.state.teams}/>
            </View>
        );
    }
}

export default Teams;