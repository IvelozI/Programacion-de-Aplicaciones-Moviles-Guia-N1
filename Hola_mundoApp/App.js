import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>¡Hola Mundo!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5', // Color de fondo suave
  },
  text: {
    fontSize: 24, // Tamaño del texto
    fontWeight: 'bold', // Negrita
    color: '#333', // Color de texto oscuro
  },
});
