import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet, 
  ScrollView,
  FlatList,
  Image,
  Button
  
  } from 'react-native';

  import Conversor from '../conversor'
  import firebase from 'firebase'
  import Carrinho from '../Carrinho'


//https://free.currencyconverterapi.com/api/v5/convert?q=USD_BRL&compact=ultra&apiKey=7c5ef455b88d735bc6ad
class Acougue extends Component{

  static navigationOptions={
  
    header:null
  }



  constructor(props){
    super(props)
    this.state = {
      lista:[],
      listaId:[],
      lista45:[]

     };
     
    

      let config = {
        apiKey: "AIzaSyCIrlS_enEKQn6oiCxTyFuuQu6BVq3363g",
        authDomain: "meuapp-ccb25.firebaseapp.com",
        databaseURL: "https://meuapp-ccb25.firebaseio.com",
        projectId: "meuapp-ccb25",
        storageBucket: "meuapp-ccb25.appspot.com",
        messagingSenderId: "904396632718",
        appId: "1:904396632718:web:a4931fdb66cc6b68e10fdf",
        measurementId: "G-9G6C5NYD3Q"
      };
      // Initialize Firebase
      if (!firebase.apps.length) {
         firebase.initializeApp(config) }

    //adiciona um ouvinte.
    //    firebase.database().ref(this.props.precoMerca).once('value', (snapshot) => {
    //     let state = this.state
    //     state.precoFireBase = snapshot.val()
    //     this.setState(state)
    // } );

    //listafirebase


  //*********************************** */
    
    firebase.database().ref("mercado/acougue").on('value', (snapshot) => {
      let state = this.state
      state.lista = []

      snapshot.forEach((childItem)=>{
        state.lista.push({
          key: childItem.key,
          nome: childItem.val().nome,
          preco: childItem.val().preco,
          cartaz: childItem.val().cartaz,

        })

      } )

      this.setState(state)
  } );


 


     
                
  }
  
render() {
  

  const precao = (this.state.precoFireBase)  //aqui transformamos numa constante a propriedade que traz a info do firebase.
 
  return (

    
    <View style={styles.container} >
     
      {/* <Conversor moedaA="USD" moedaB="BRL" />   */}
      {/* <Button 
          title="Voltar"
          //aqui abaixo temos uma função chamada goBack que volta uma navegação para trás.
          onPress={()=> this.props.navigation.goBack() } />  */}

      <FlatList data={this.state.lista}
      datax={this.state.lista45}
                renderItem={({item})=> <Conversor datax={item} data={item} /> }
        
      />
   
  </View>

  )
}


}


const styles = StyleSheet.create({
  container:{
    marginTop:-20 ,
    backgroundColor:'#FF3E',
    flex:1,
    justifyContent:'center',  // aaqui alinha ao centro de cima para baixo.
    alignItems:'center'  //aqui alinha ao centro da esquerda para a direita, centro da tela.
  }
})

export default Acougue
