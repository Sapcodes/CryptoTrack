import React from 'react';
import {View} from 'react-native';

const CardSection = (props) => {
    return(
    <View style = {[style.sectionStyle, props.style]}> 
    {/* style most on the right will over right the one on the left*/}
        {props.children}
    </View>
    );
};

const style = {
    sectionStyle:{
        borderBottomWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColor: '#ddd',
        position: 'relative'
    }
};


export {CardSection};

/*
# becuase we are using the Index method we can't use the export methode instead we use whats above
export default Button;
*/