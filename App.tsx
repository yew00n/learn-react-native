/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {SafeAreaView, Button, StyleSheet} from 'react-native';
import Greeting from './components/Greeting';
import Box from './components/Box';

const App = () => {
  const [visible, setVisible] = useState(true);
  const onPress = () => {
    setVisible(!visible);
  }
  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {visible && <Box rounded={true} size="large" color="blue"/>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1, // SafeAreaView가 전체 영역을 사용하게끔 설정
  },
});

export default App;
