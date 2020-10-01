import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont();


const Inicial = () => {

    return(
        <>

        <View style = {styles.container}>

        

            <View style = {{flexDirection:"row" ,justifyContent:'center', alignItems: 'center', flex: 1}} >
            <View>
            <Image source={require('./nubank1.png')} style={{width: 60, height: 60}} resizeMode="contain"/>
                
                </View>
                <Text style={styles.titulo1, styles.textColor}>Edson</Text>
            </View>


            <View style = {styles.containerMeio}>
                
                <View style = {styles.containerTitle3}> 
                <Icon name="payment" size={30} color="#000" />
                    <Text style={styles.titulo2}>NuConta</Text>
                </View>

                <View style = {styles.containerTitle4}>
                    <Text style={styles.titulo3}>Saldo disponível</Text>
                </View>

                <View style = {styles.containerTitle5}>
                    <Text style={styles.titulo4}>R$ 989.453,43</Text>
                </View>

                <View style = {styles.containerTitle6}>
                <Icon name="transfer-within-a-station" size={30} color="#000" />
                    <Text style={styles.titulo5}>Transferência de R$ 800,00 enviada para Luiza Lima ontem.</Text>
                </View>

                

            </View>

            <View style = {styles.lateral}>
            <View style = {styles.buttonTotal, {flexDirection:"row"} }>
            
                <View style = {styles.containerButton1 , {flex:0.5}}>
                    <TouchableOpacity style= {styles.button}>
                    <Icon name="adjust" size={30} color="#FFF" />
                        <Text style = {[styles.botao1, styles.setColorWhite]}>Ajustar limite</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton2, {flex:0.5}}>
                    <TouchableOpacity style= {styles.button}>
                    <Icon name="attach-money" size={30} color="#FFF" />
                        <Text style = {[styles.botao2, styles.setColorWhite]}>Pagar</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton3, {flex:0.5}}>
                    <TouchableOpacity style= {styles.button}>
                    <Icon name="cases" size={30} color="#FFF" />
                        <Text style = {[styles.botao3, styles.setColorWhite]}>Depositar</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton4 , {flex:0.5}}>
                    <TouchableOpacity style= {styles.button}>
                    <Icon name="transfer-within-a-station" size={30} color="#FFF" />
                        <Text style = {[styles.botao4, styles.setColorWhite]}>Transferir</Text>
                    </TouchableOpacity>
                </View>

                </View>

    
            </View>
            


        </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
       flex: 1,
       backgroundColor: '#8029A6', 
       
    },

    
    titulo1:{
        fontSize: 30,
    },

    textColor:{
        color:'white', 
        fontSize:30,
    },


    titulo2:{
        
        fontSize: 15,
        
    },

    titulo3:{
        fontSize: 15,
        marginTop:40,
    },

    titulo4:{
        fontSize: 40,
        fontWeight: "bold",
    },

   titulo5:{

        fontSize: 15,
   },

    containerTitle1: {
        marginTop: 50,
        paddingLeft: 175,
        
    },

    containerTitle2: {
        marginTop: 60,
        paddingLeft: 250,
    },

    containerMeio:{
        paddingLeft: 40,
        backgroundColor: 'rgba(255,255,255,0.9)',
        marginLeft: 30,
        marginRight: 30,
        height: 350,
        width: 350,
        borderRadius:4,
    },

    containerTitle3: {
        
        
        alignItems: 'center',
        flex: 1, 
        flexDirection: 'row', 
        
        },

    containerTitle4: {
        marginTop:5,
    },

    containerTitle5: {
        marginTop:5,
        fontWeight: 'bold',
    },

    containerTitle6: {
        marginTop: 80,
        fontSize: 20,
        alignItems: 'center',
        flex: 1, 
        flexDirection: 'row', 
        justifyContent: 'space-between',
        marginBottom: 20,
       
    },

    buttonTotal:{
        justifyContent: 'center',
    },

    button:{
        width:80,
        height: 80,
        marginTop: 50,
        paddingLeft: 80,
        marginBottom: 20,
        paddingLeft: 5,
        backgroundColor: '#8D3BA6',
        borderRadius:4,
        paddingTop:3,
    },

    containerButton1: {   
            width: 90,
            height:70,
            paddingLeft: 10,
            marginBottom: 20,
            borderRadius: 5,
    },

    containerButton2: {
            backgroundColor: '#0096c7',
            width: 90,
            height:70,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 5,
    },

    botao1:{
        marginTop:10,
        fontSize: 13,
    },

    botao2:{
        marginTop:20,
        fontSize: 13,
    },

    botao3:{
        marginTop:20,
        fontSize: 13,
    },

    botao4:{
        marginTop:20,
        fontSize: 13,
    },

    lateral:{

        paddingLeft: 15,
    },

})

export default Inicial;