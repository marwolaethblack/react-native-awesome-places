import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import StartMainTabs from '../MainTabs/startMainTabs';

class AuthScreen extends Component {
   
   loginHandler = () => {
    StartMainTabs();
   } 


   render() {
       return(
           <View>
               <Text>Auth</Text>
               <Button title="Login"
                       onPress={this.loginHandler}
                 />
           </View>
       );
   } 
}

export default AuthScreen;