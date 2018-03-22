import React, { Component } from 'react';
import { View, Text, Button, TextInput, StyleSheet, ImageBackground } from 'react-native';

import StartMainTabs from '../MainTabs/startMainTabs';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';

import background from '../../assets/background.jpg';

class AuthScreen extends Component {
   
   loginHandler = () => {
    StartMainTabs();
   } 


   render() {
       return(
        <ImageBackground source={background} style={styles.backgroundImage}>

           <View style={styles.container}>
               <HeadingText style={styles.inputText}>Please Login</HeadingText>
               <Button title="Switch to login"/>
               <View style={styles.inputContainer}>
                    <DefaultInput style={styles.inputText} placeholderTextColor="#f7f7f7" placeholder="Your E-mail Address" />
                    <DefaultInput style={styles.inputText} placeholderTextColor="#f7f7f7" placeholder="Password" />
                    <DefaultInput style={styles.inputText} placeholderTextColor="#f7f7f7" placeholder="Confirm Password" />
               </View>
               <Button title="Login"
                       onPress={this.loginHandler}
                 />
             
           </View>
           </ImageBackground>
       );
   } 
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    inputText: {
        textShadowColor: "#9ea0a3",
        color: "#f7f7f7",
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10
    },

    inputContainer: {
        width: "70%"
    },

    backgroundImage: {
        width: "100%",
        flex: 1
    }
})

export default AuthScreen;