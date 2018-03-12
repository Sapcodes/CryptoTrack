import React, { Component }  from 'react';
import {Actions} from 'react-native-router-flux';
import {Card, CardSection, Button} from './common';
import Icon from 'react-native-vector-icons/FontAwesome';
//import {APItest} from '../bittrexAPI';


const exchangeIcon = (<Icon name="exchange" size={50} color="#fff" />);
const walletIcon = (<Icon name="suitcase" size={50} color="#fff" />);

class TradeAndWalletButtons extends Component {

    UNSAFE_componentWillMount(){
       /* console.log("APItest");
        console.log(APItest);*/
    }

    onTradePress() {
        Actions.tradeScreen()
    }
    onWalletPress() {
        console.log('hi')
    }
    

    render() {
    return(
        <Card>
            <CardSection>
            <Button 
            onPress = {this.onTradePress.bind(this)}
            styleX = {{backgroundColor: '#359177'}}
            >
            {exchangeIcon} Trade
            </Button>
            </CardSection>
            <CardSection>
            <Button 
            onPress = {this.onWalletPress.bind(this)}
            styleX = {{backgroundColor: '#b13e16'}}
            >
            {walletIcon} Wallet
            </Button>
            </CardSection>
        </Card>
        );
    }
}



export default TradeAndWalletButtons;