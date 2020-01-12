import React, {Component} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,Image, Dimensions, Button,FlatList } from 'react-native'
import firebase from 'firebase'



class Carrinho extends Component {


  static navigationOptions = ({ navigation }) => {
    return {
      tabBarLabel: 'Carrinho',
    }
  }

  constructor(props){
    super(props)
    this.state = {
      cliente:0,
       
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
    
         firebase.database().ref("usuarios/aqui").on("value" , (snapshot)=>{
          let state = this.state 
          state.cliente = snapshot.val()
          this.setState(state)
      })
        }  
 


  render(){
    // this.state.rata = 'precin'

   
    return(
      <View>
     
        <Text style={{fontSize:30, marginTop:15}} > {this.state.cliente}  </Text>
      
      </View>
    );
  }
}







  // const styles = StyleSheet.create({
  //   item: {
  //     alignItems: "center",
  //     backgroundColor: "#dcda48",
  //     flexGrow: 1,
  //     margin: 4,
  //     padding: 20
  //   },
  //   text: {
  //     color: "#333333"
  //   }
  // });

export default Carrinho;