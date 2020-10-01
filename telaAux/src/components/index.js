import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';
/*Não consegui inserir as imagens pois as que achei na internet eram muito grande*/ 

const Login = () => {

    return(
        <>

        <View style = {styles.container}>

            <View>

            
                <View style = {styles.containerTitle1}>
                <View style={{flexDirection:"row"}}>
                    <Text style={[styles.titulo, styles.setColorWhite, {flex:0.5}]}>Realização</Text>
                    
                    <Text style={[styles.titulo, styles.setColorWhite]}>Apoio</Text>
                    
                </View>
                </View>

            </View>

            <View style = {styles.containerTitle2}>
                <Text style={[styles.titulo1, styles.setColorWhite]}>Olá, bem-vindo ao</Text>
            </View>


            <View style = {styles.containerMeio}>

                <View style = {styles.containerTitle3}>
                    <Text style={[styles.titulo2, styles.setColorWhite]}>Auxílio</Text>
                </View>

                <View style = {styles.containerTitle4}>
                    <Text style={[styles.titulo2, styles.setColorWhite]}>Emergencial ao</Text>
                </View>

                <View style = {styles.containerTitle5}>
                    <Text style={[styles.titulo3, styles.setColorWhite]}>Trabalhador</Text>
                </View>

            </View>


            <View style = {styles.buttonTotal}>
                <View style = {styles.containerButton1}>
                    <TouchableOpacity style= {styles.button}>
                        <Text style = {[styles.titulo4, styles.setColorWhite]}>Realize sua adesão</Text>
                    </TouchableOpacity>
                </View>

                <View style = {styles.containerButton2}>
                    <TouchableOpacity style= {styles.button2}>
                        <Text style = {[styles.titulo4, styles.setColorWhite]}>Acompanhe sua solicitação</Text>
                    </TouchableOpacity>
                </View>
            </View>
            


            </View>
        </>

    );
};

const styles = StyleSheet.create({
    container: {
       
      
       flex: 1,
       backgroundColor: '#0096c7',
       
    },

    titulo1:{

        fontSize: 25,
    },

    titulo2:{
        fontSize: 30,
    },

    titulo3:{
        fontSize: 40,
        fontWeight: "bold",

    },

    titulo4:{
        fontSize: 20,

    },

    containerTitle1: {
        marginTop: 50,
        paddingLeft: 175,
        
    },

    setColorWhite : {
        color: '#ffffff'
      },

    containerTitle2: {
        paddingLeft: 40,
        marginTop:50,
        
    },


    containerMeio:{
        paddingLeft: 40,
    
    },

    containerTitle3: {
        marginTop:30,

    },

    containerTitle4: {
        marginTop:5,

    },

    containerTitle5: {
        marginTop:5,
        fontWeight: 'bold',
    
    },

    buttonTotal:{
        marginTop: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        
        
    },

    containerButton1: {
            
            backgroundColor: '#fb8500',
            width: 300,
            height:70,
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            borderRadius: 5,
            
        
    },

    containerButton2: {
        
            backgroundColor: '#0096c7',
            width: 300,
            height:70,
            justifyContent: 'center',
            alignItems: 'center',
            borderColor: '#ffffff',
            borderWidth: 1,
            borderRadius: 5,
    },

})

export default Login;