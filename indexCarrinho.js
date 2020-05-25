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
