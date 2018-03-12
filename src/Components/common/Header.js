import React, { Component } from 'react';
import {
  Text,
  View
} from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles; 

    return (
        <View style = {viewStyle}> 
        <Text style = {textStyle}>{ props.headerText}</Text>
        </View>
);
};

const styles = {
    viewStyle:{
        backgroundColor: '#CB5B35',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
      //  paddingTop: 15,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }
};

export { Header };


/*
# becuase we are using the Index method we can't use the export methode instead we use whats above
export default Button;
*/