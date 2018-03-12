import React from 'react';
import {Text} from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import MainScreen from './Components/Screens/MainScreen';
import TradeScreen from './Components/Screens/TradeScreen';


const RouterComponent = () => {
    return(
        <Router>
            <Scene key = "root">

            <Scene 
                key="MainScreen" 
                component={MainScreen} 
                title="CryptoTrack" 
                titleStyle={{
                    alignSelf: 'center',
                  }}
                initial
                />
            <Scene 
                key="tradeScreen"
                component={TradeScreen}
                title="Trade"
                titleStyle={{
                    alignSelf: 'center',
                    marginRight: 65
                  }}
                />
            </Scene>
        </Router>
    );
};

export default RouterComponent;
