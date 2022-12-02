import React, { useState } from 'react'; 
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Calcula from './components/Calcula.js';

export default function App() {

  const [inputQtd, setInputQtd] = useState(0);
  const [qtd, setQtd] = useState(0);

  function enviaValor(){
    setQtd(inputQtd);
  }

  return (
    <View style={styles.container}>

      {/* TITULO */}
      <View style={styles.box}>
        <Text 
          style={styles.title}
        >Calculadora de Festa
        </Text>
      </View>
      {/* FIM TITULO */}

      {/* BODY */}
      <View style={styles.boxBody}>
        <Text 
          style={styles.label}
        >Qtd. Convidados:
        </Text>
        <TextInput
          style={styles.input}
          value={inputQtd}
          onChangeText={(value) => setInputQtd(value)}
        />
        <TouchableOpacity style={styles.btn}>
          <Text 
            style={styles.btnText}
            onPress={enviaValor}
          >CALCULAR
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.res}>
        <Calcula qtd={qtd} />
      </View>
      {/* FIM BODY */}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff' 
  },

  box: {
    position: 'relative'
  },

  title: {
    fontSize: 30,
    textAlign: 'center'
  },

  boxBody: {
    position: 'relative',
    marginTop: '8%',
    marginHorizontal: '5%'
  },

  label: {
    fontSize: 20
  },

  input: {
    backgroundColor: '#D2D5D9',
    borderRadius: 5,
    height: 50
  },

  btn: {
    position: 'relative',
    backgroundColor: '#1C1C1C',
    width: 150,
    padding: 10,
    borderRadius: 10,
    marginTop: '8%'
  },

  btnText: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});
