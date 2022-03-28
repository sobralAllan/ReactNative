import React, {useState} from 'react';
import { Text, 
       SafeAreaView, 
       TouchableOpacity,
       StyleSheet} from 'react-native';

const App = () =>{

  const [numero, setNumero] = useState(0);
  
  function handleNumero(){

      const novo_numero = Math.floor(Math.random() * 10);//floor = Arendonda

      setNumero(novo_numero);//para somar = numero + novoNumero
  }
  //No return só pode ser devolvido 1 , porém com o fragment é possível colocar mais de um
  return (
    <>
        <Text> Teste </Text>
        <SafeAreaView style={style.container}>
          <Text style={style.numero}>{numero}</Text>
          <TouchableOpacity onPress={handleNumero} style={style.botao}>
            <Text>Gerar Número</Text>
          </TouchableOpacity>
        </SafeAreaView>
    </>
  );
};

const style = StyleSheet.create({
    container:{
        backgroundColor: '#ff0000',
        flex: 1, //Pega o espaço total disponível
        justifyContent: 'center',
        fontSize: 24,
        alignItens: 'Center',
    },
    numero:{
        fontSize: 24,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    botao:{
      backgroundColor: '#FF0000',
      width: '80%',
      paddingHorizontal: 5,
      paddingVertical: 10,
      borderRadius: 5,
      justifyContent: 'center',
      alignItens: 'center',
      marginTop: 10,
    },
});

export default App;