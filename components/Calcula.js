import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function Calcula(props){
    return(
        <View style={styles.container}>
            <Text styles={styles.text}> Número de pessoas {props.qtd} </Text>
            <Text styles={styles.text}> Refrigerante {(props.qtd * 600) / 1000}</Text>
            <Text styles={styles.text}> Água {(props.qtd * 200) / 1000} L</Text>
            <Text styles={styles.text}> Bolo {(props.qtd * 100) / 1000} Kg</Text>
            <Text styles={styles.text}> Doces {props.qtd * 3} Uni.</Text>
            <Text styles={styles.text}> Salgadinhos {props.qtd * 10} Uni.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f3f3',
        marginHorizontal: '5%',
        borderWidth: 3,
        borderRadius: 10,
        marginTop: '10%'
    },

    text: {
        fontSize: 30,
        color: '#fff'
    },
});