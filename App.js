import React,{useState} from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
	const [valor1, setValor1] = useState("20");
	const [valor2, setValor2] = useState("3");
	const [resultado,setResultado] =useState("");
	function somar (){
		let r= parseFloat(valor1) + parseFloat(valor2);
		setResultado(r);
		
	}
  return (
    <View style={styles.	  ntainer}>
		<View style={styles.bloco}>
		  <Text style={styles.titulo}>Calculadora simples</Text> 
		</View>
    
	  	<View style={styles.bloco}>
		  <Text>Valor 1:</Text>
			  <TextInput style={styles.input}
				  value={valor1}
				  onChangeText = {(valor)=>setValor1(valor)}
				  keyboardType="numeric"
				/>
		  </View>
		  <View style={styles.bloco}>
		  <Text>Valor 2:</Text>
			  <TextInput style={styles.input}
				  value={valor2}
				  onChangeText = {(valor)=>setValor2(valor)}
				  keyboardType="numeric"
				  />
		  </View>
		  <View style={styles.bloco}>
		  <TouchableOpacity 
			  style={styles.botao}
			  onPress={somar}
			  >
			  <Text style={styles.textoBotao}>SOMAR</Text>
			  </TouchableOpacity>
		  </View>
		  <View style={styles.bloco}>
		  <Text style={styles.titulo}>
			  RESULTADO: {resultado}
			  </Text>
		  </View>
	</View>				
	 
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	  backgroundColor: '#FF5733'
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
