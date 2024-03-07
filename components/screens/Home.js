import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function Home() {
    return (
      <View style={styles.container}>
        <Text>Hello Home!</Text>
      </View>
    );
  }

  styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
  });

  export default Home;