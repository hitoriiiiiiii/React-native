import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      <Text style={styles.title}>
        Hello, !
      </Text>

      <Text style={styles.subtitle}>
        My first Expo application 🚀
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e153d6',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#14213D',
  },
  subtitle: {
    marginTop: 12,
    fontSize: 16,
    color: '#555',
  },
});