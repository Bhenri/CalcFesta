import React from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
		<View style={styles.bloco}>
		  <Text style={styles.titulo}>Calculadora simples</Text> 
		</View>
    
	  	<View style={styles.bloco}>
		  <Text>Valor 1:</Text>
			  <TextInput style={styles.input}></TextInput>
		  </View>
		  <View style={styles.bloco}>
		  <Text>Valor 2:</Text>
			  <TextInput style={styles.input}></TextInput>
		  </View>
		  <View style={styles.bloco}>
		  <TouchableOpacity style={styles.botao}>
			  <Text style={styles.textoBotao}>SOMAR</Text>
			  </TouchableOpacity>
		  </View>
	</View>				
	 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  backgroundColor: 'cyan'
  },
	
	bloco:{
		marginTop:20,
		width:'80%',
		marginLeft:'10%'
	},
	titulo:{
		fontSize:30,
		textAlign:'center'
	},
	input:{
		borderWidth:2,
		fontSize:20,
		borderRadius:10
	},
	botao:{
		backgroundColor:'blue',
		borderRadius:10
	},
	textoBotao:{
		color: '#fff',
		textAlign:'center',
		fontSize:20
	}
});
