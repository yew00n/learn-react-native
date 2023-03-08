import React from 'react';
import {View, Text} from 'react-native';

function Greeting(props){
    return (
        <>
            <View>
                <Text>안녕하세요 {props.name}!</Text>
            </View>
            <Text>Extra Text!</Text>
        </>
    );
}

Greeting.defaultProps = {
    name: '리액트 네이티브',
};

export default Greeting; //JSX 문법: XML 형태로 이루어진 내용을 반환

