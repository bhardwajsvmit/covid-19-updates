import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function StateCard({data}) {
    
    return (
        <View style={styles.container}>
         <View style={{backgroundColor:'#5bacb5',width:'100%',padding:10,justifyContent:'center',alignItems:'center'}} >
         <Text style={{fontSize:20,textTransform:'uppercase',fontWeight:'500',color:'white'}} >Province: {data.Province}</Text>
         </View>
         <View style={{paddingTop:10}} >
         <Text style={styles.text} >Confirmed Cases: {data.Confirmed}</Text>
         <Text style={styles.text}>Deaths: {data.Deaths}</Text>
         <Text style={styles.text}>Recoverd: {data.Recovered}</Text>
         <Text style={styles.text}>Active: {data.Active}</Text>
         </View>
         </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#73cef0',
      alignItems: 'center',
      justifyContent: 'center',
     margin:5,
     width:'100%',
     paddingVertical:10
    },
    text:{
        fontSize:18,
        textTransform:'capitalize'
    },
  });
