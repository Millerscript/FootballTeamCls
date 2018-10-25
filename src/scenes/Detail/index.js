import React, {Component} from 'react';
import {View} from 'react-native';
import DetailOverview from './components/detail-overview';

class Detail extends Component{
    constructor(props){
        super(props)
        this.state = {
            detail:{}
        }
    }

    componentDidMount(){
        const detailData = {
            name: this.props.navigation.getParam('strPlayer', 'default-value'),
            media: this.props.navigation.getParam('strThumb', 'default-value'),
        }

        this.setState({
            detail: detailData
        });
    }

    render(){
        return(
            <View>
                <DetailOverview detail={this.state.detail}/>
            </View>
        );
    }

}

export default Detail;