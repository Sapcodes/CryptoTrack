import React, { Component } from 'react';
import {Image} from 'react-native';
import {Card, CardSection} from './common';
import {Dropdown} from 'react-native-material-dropdown'; //use this in the future to make a drop down menu



class Graphics extends Component {

   
    render() {
        return (
            <Card>
                <Image
                style={{width: 400, height: 250}}
                source={{uri: 'http://www.statisticshowto.com/wp-content/uploads/2014/01/cdc-bar-graph.png'}}
                />
            </Card>
        );
    }
}

const style = {
    dropStyle: {
        marginLeft: 50,
        width: 10,
    }
}

export default Graphics;
