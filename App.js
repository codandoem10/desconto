import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [valor, setValor] = useState('');
  const [percentual, setPercentual] = useState('');

  const valorNumerico = parseFloat(valor) || 0;
  const percentualNumerico = parseFloat(percentual) || 0;

  const valorDesconto = (valorNumerico * percentualNumerico) / 100;
  const valorFinal = valorNumerico - valorDesconto;

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor="cyan" />

      <View style={styles.header}>
        <MaterialIcons name="calculate" size={32} color="white" style={styles.icon} />
        <Text style={styles.title}>Desconto 1.0</Text>
      </View>

      <Text style={styles.label}>Valor do produto (R$):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={valor}
        onChangeText={setValor}
        placeholder="Ex: 100.00"
      />

      <Text style={styles.label}>Desconto (%):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={percentual}
        onChangeText={setPercentual}
        placeholder="Ex: 10"
      />

      <Text style={styles.resultado}>
        Valor do desconto: R$ {valorDesconto.toFixed(2)}
      </Text>
      <Text style={styles.resultado}>
        Valor final: R$ {valorFinal.toFixed(2)}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED9121', // Laranja cenoura
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  icon: {
    marginRight: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
  },
  label: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'flex-start',
    marginTop: 10,
  },
  input: {
    height: 50,
    width: '100%',
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 15,
    fontSize: 18,
    marginTop: 5,
    marginBottom: 10,
  },
  resultado: {
    fontSize: 20,
    color: 'white',
    marginTop: 10,
    fontWeight: 'bold',
  },
});
