import React from 'react';
import {View} from 'react-native';

const Card = (props) =>{

    return(
        <View style = {style.cardStyle}>
           {props.children}
        </View>
    );
};

const style = {
    cardStyle: {
        borderWidth:1 ,
        borderRadius:2 , 
        borderColor: '#ddd',
        borderBottomWidth: 0,
        elevation: 2,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
    }

}


export {Card};

/*
# becuase we are using the Index method we can't use the export methode instead we use whats above
export default Button;
*/