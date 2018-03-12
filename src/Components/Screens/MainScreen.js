import React, { Component }  from 'react';
import {View, ScrollView} from 'react-native';

import TradeAndWalletButtons from '../TradeAndWalletButtons'
import Graphics from '../Graphics';


class MainScreen extends Component {

    render() {
    return(
        <View style = {{ flex: 1}}>
            <ScrollView style={{flex:1}}>
            <Graphics />
            <TradeAndWalletButtons />
            </ScrollView>
        </View>
        );
    }
}



export default MainScreen;