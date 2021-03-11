import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import Slider from '@react-native-community/slider';

export default function App() {
  return(
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
      />
      <Text style={styles.title}>12 caracteres</Text>
      <View style={styles.area}>
        <Slider
          style={{height: 50}}
          minimumValue={5}
          maximumValue={15}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3FE'
  },
});