
import React, {useState,useEffect} from 'react';
import { ScrollView, StyleSheet, Text, View, SafeAreaView} from 'react-native';
import CountryCard from './CountryCard';


export default function World() {

  const API_URL =`https://api.covid19api.com/summary`
 
  const [data,setData] = useState([])
  const [isLoaded,setLoaded]=useState(false)

 useEffect(() => {
   
  async function a() {
    let response = await fetch (`${API_URL}`)
    let result = await response.json()
    setData(result.Countries)
    
  }
  a();
   setLoaded(true)
 }, [])


  return (
    <SafeAreaView style={styles.container}>
      <Text style={{fontSize:40,fontWeight:'bold', width:"100%",textAlign:'center',color:'#0c1766',paddingBottom:5}} >Covid 19 updates</Text>
      
      <ScrollView style={{width:'90%'}} >
      {data.map((item)=>
      
       <CountryCard key={item.ID} data={item} />
      
      )}
    </ScrollView>
  
    </SafeAreaView>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7390f0',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});