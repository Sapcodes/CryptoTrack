import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const Button = ({onPress, styleX, children}) => {
const {buttonTextStyle, buttonStyle} = style;

    return(
        <TouchableOpacity
        onPress = {onPress}
        style = {[style.buttonStyle, styleX]}
        >
        <Text style = {buttonTextStyle}>{children}</Text>
        </TouchableOpacity>
    );
};

const style = {
    buttonStyle:{
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
    },
    buttonTextStyle:{
        alignSelf: 'center',
        color: '#fff',
        fontSize: 36,
        fontWeight: '600',
        paddingTop: 50,
        paddingBottom: 50
    }
}

export {Button};

/*
# becuase we are using the Index method we can't use the export methode instead we use whats above
export default Button;
*/