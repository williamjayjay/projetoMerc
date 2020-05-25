import React, {Component} from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard,Image, Dimensions, Button,FlatList } from 'react-native'
import firebase from 'firebase'

import Carrinho from '../Carrinho'

const { width, height } = Dimensions.get('window')





class Conversor extends Component{

    constructor(props){
        super(props)
        this.state={
            valorAcumulado:0,
            totalzao:0,
            correcaoVerbal:'',
            totalAqui:[],
            y:0,
            index:0,
            cliente:0,
            codigo:0,

            sominha:0,
            preco:'',
            nome:'',
            cartaz:'',
            hahaha:'',

            qtdProd:0,
            prodClicado:'',
            totalInFirebase:'',
            aff:[],

            lista22:[],
            nome1:'',
            preco1:'',
            nomezin:'',
            frutao:0,
            vixe:0,

            tabaco:0,

            key:'',

            id:'',

         
           keyzinha:''

            
        };
       
        this.maisprod = this.maisprod.bind(this) //metodo q aumenta o valor do prod(poe produto no carrinho)
        this.menprod = this.menprod.bind(this)
        this.totalprod = this.totalprod.bind(this)
        this.somaGeral = this.somaGeral.bind(this)
        this.cadastrarAcougue = this.cadastrarAcougue.bind(this)
        this.aqueleProd = this.aqueleProd.bind(this)


          // Initialize Firebase
          if (!firebase.apps.length) {
             firebase.initializeApp(config) }

            
                        firebase.database().ref("usuarios/aqui").on("value" , (snapshot)=>{
                            let state = this.state 
                            state.cliente = snapshot.val()
                            this.setState(state)
                        })

   

                               firebase.database().ref('usuarios').on('value', (snapshot) => {
                                let state = this.state
                                state.lista22 = []
                                     
                                snapshot.forEach((childItem)=>{ 
                                    state.lista22.push({
                                    key: childItem.key,
                                    nome1: childItem.val().nome1,
                                    preco1: childItem.val().preco1,
                                       
                                    })
                    
                                } )
                                
                                this.setState(state)  
                            } );      

            }  
  
       conversaoDoFirebase = parseFloat(this.props.data.preco)

       cadastrarAcougue(){
        
          this.state.totalInFirebase = this.state.totalzao

          this.state.codigo = 5
        //   
         
          //----------------
        

         
    }

    aqueleProd(){
        let state = this.state
          
        if (state.valorAcumulado > 0) {
          state.valorAcumulado -= 1
        //   state.totalzao -= this.conversaoDoFirebase
 
        } else {
          
        }

        if (state.valorAcumulado >1) {
            state.correcaoVerbal =' Produtos'
            
        } else {
            state.correcaoVerbal =' Produto'
        }
        
        this.setState(state)
       
    }
       
    maisprod(){
        let state = this.state
              
        state.valorAcumulado += 1,
        state.totalzao += this.conversaoDoFirebase

        firebase.database().ref('usuarios').child('aqui').set(this.state.cliente + this.state.totalzao)

       
        // firebase.database().ref('primeiraID').child('idTotal').child(this.props.data.id).set(this.state.totalzao)

        // const usuario2 = firebase.database().ref('primeiraID').child('idTotal')
        // const chaves2 = usuario2.push().key
  
        // usuario2.child(chaves2).set({
        //   preco1: this.state.totalzao
          
        // })
      

     


        if (state.totalzao > 0) {
           this.state.aff.push(this.props.data.key)

          
           
            if (state.valorAcumulado >1) {
                state.correcaoVerbal =' Produtos'
                
            } else {
                state.correcaoVerbal =' Produto'
            }


        } else {
            
        }

        this.setState(state)
       
       }
       
       menprod(){
       
        let state = this.state
       
        // firebase.database().ref('primeiraID').child('idTotal').child(this.state.keyzinha).child('preco1').set(0)
  
        firebase.database().ref('usuarios').child('aqui').set(this.state.cliente - this.state.totalzao)
       
        if (state.valorAcumulado > 0) {
          state.valorAcumulado -= 1
          state.totalzao -= this.conversaoDoFirebase

          

          
         

                // const usuario2 = firebase.database().ref('verdura/precin')
        // const chaves2 = usuario2.push().key
  
        // usuario2.child(chaves2).set({
        //   nome1: this.props.data.nome,
        //   preco1: this.state.totalzao
        // })

         
        } else {
          
        }

        if (state.valorAcumulado >1) {
            state.correcaoVerbal =' Produtos'
            
        } else {
            state.correcaoVerbal =' Produto'
        }
        
        this.setState(state)
       
       }

    //    totalrod(){

       totalprod(){
        
        this.state.totalInFirebase = this.state.totalzao

        let usuario = firebase.database().ref('usuarios')
        let chaves = usuario.push().key
  
        usuario.child(chaves).set({
          nome1: this.props.data.nome,
          preco1: this.state.totalInFirebase

    })
  }

       somaGeral(){
        let state = this.state 

        state.sominha = this.state.totalAqui[1] + this.state.totalAqui[2]

       }

    render(){
       
        let prod
        const { mercadoria, nomeMerca, precoMerca  } = this.props
        // const precoMercaConv = parseFloat(precoMerca).toFixed(2)

        // const precao = parseFloat(this.state.precoFireBase).toFixed(2)
      
        return(
            <View style={styles.container} >

                <View style={styles.marcadorias} >
                    <View>
                  
                    <Image  style={styles.imagensprod} source={{uri:this.props.data.cartaz }} />
                    
                </View>

                    <View style={{marginTop:0, justifyContent:'space-around'}} >
                        <Text style={styles.titulo} >{this.props.data.nome   } </Text>

                        {/* <Text style={styles.preco} >R$ {precao} </Text> AQUI ANTES */} 
                        <Text style={styles.preco} >R$ { this.props.data.preco } </Text> 
                        
                    <View style={{flexDirection:'row', }} >

                                <TouchableOpacity style={styles.botao} onPress={this.maisprod} > 
                                <Text style={{color:'white', fontSize:15}} >+ Carrinho</Text> 
                                </TouchableOpacity>

                                <TouchableOpacity onPress={this.menprod} > 
                                <Image source={require('../img/cash-remove.png')} style={{height:30, width:30,}} /> 
                                </TouchableOpacity>
                    </View>
                                                               
                        <Text style={styles.valorAcumuladoStyle} > 
                        { (this.state.valorAcumulado === 0 ? '' : this.state.valorAcumulado + this.state.correcaoVerbal ) }
                        
                        </Text>
                               
                        <View style={{flexDirection:'row', alignItems:'center', justifyContent:'center'}} >
                            <TouchableOpacity style={styles.botaoComprar} onPress={''} > 
                                <Text style={{color:'white', fontWeight:'bold', fontSize:18, }} >COMPRAR</Text>  
                            </TouchableOpacity>
                                   <Text style={{fontSize:15}} > R$ {this.state.totalzao.toFixed(2)}</Text>
            
                        </View>

                

                            
                        

                         
                    </View>
                </View>
               

            </View>     
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'space-between',
        // alignItems:'center',
        flexDirection:'column',
        margin:10,
    },
    marcadorias:{
        marginTop:20,
        height:height/3 ,
        width:width-25,
        backgroundColor:'#FFF',
        flexDirection:'row',
        // justifyContent:'flex-start',
      borderRadius:10,
      elevation:3

        
    },
    titulo:{
        fontSize:20,
       
      
    },
    imagensprod:{
        width:150,
        height:200,
        // marginTop:10
        margin:10,
        borderRadius:50
        
    },
    botao:{
        width:100,
        height:30,
        backgroundColor:'#115',
        // borderRadius:10,
        // marginTop:20,
        // marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center',
        borderTopStartRadius:35,
        borderBottomEndRadius:35

        
    },
    botaoComprar:{
        width:100,
        height:50,
        backgroundColor:'green',
        justifyContent:'center',
        alignItems:'center',
        borderBottomStartRadius:35,
        borderTopEndRadius:35,
        marginBottom:15
    },
    preco:{
        fontSize:30,
        fontWeight:'bold'
    },
    valorAcumuladoStyle:{
        fontWeight:'bold'
    }
})

export default Conversor
