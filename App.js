import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function App() {
  return(
    <View style={styles.container}>
      <Image
        source={require('./src/assets/logo.png')}
      />
      <Text style={styles.title}>12 caracteres</Text>
      <View style={styles.area}>

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