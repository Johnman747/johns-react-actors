import React, { Component } from 'react';
import { Platform, StyleSheet, View, Text } from 'react-native';
import './Footer.css'

class Footer extends Component {
    render() {
      return (
        <footer>
        <View style={styles.MainContainer}>
       <Text style={styles.textStyle}>{'\u00A9'} React Actors</Text>
       </View>
       </footer>
      );
    }
  }
  const styles = StyleSheet.create({
    
    MainContainer :{
    
     flex:1,
     paddingTop: (Platform.OS) === 'ios' ? 20 : 0,
     alignItems: 'center',
     justifyContent: 'center',
     },
    
     textStyle:{
       
       color: '#fff',
       fontSize: 20
     }
    
   });
  
  export default Footer;