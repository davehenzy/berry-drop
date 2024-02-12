import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'
import { client } from '../Utils/KindeConfig';

export default function LoginScreen() {
  const handleSignUp = async () => {
    const token = await client.register();
    if (token) {
      console.log("Authentication Sucessful")
      // User was authenticated
    }
  };

  const handleSignIn = async () => {
    const token = await client.login();
    if (token) {
      console.log("Authentication Sucessful")
      // User was authenticated

    }
  };
  return (
    <View>
      <Image source={require('./../../assets/images/rocket.jpg')} 
      style={{width:'100%',height:400,objectFit:'cover'}}
      />
      <View style={{padding:20,}}>
        <Text style={{fontSize:45,fontWeight:'bold'}}>Welcome to 
          <Text style={{color:Colors.PRIMARY}}> BerryDrop</Text>
          </Text>
          <Text style={{fontSize:20, marginTop:7, color:Colors.GRAY}} >Learn Programming to Build Real Life Project</Text>

        {/*btn sign*/}  
          <TouchableOpacity onPress={handleSignIn} style={styles.button}>
            <Text style={{textAlign:'center', color:Colors.WHITE, fontSize:18}}>Sign In</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSignUp} >
            <Text style={{marginTop:10,color:Colors.PRIMARY, textAlign:'center', fontSize:16}}>Create New Account</Text>
          </TouchableOpacity>
      </View> 
    </View>
  )
}

const styles = StyleSheet.create({
  button:{
    padding:16,
    backgroundColor:Colors.PRIMARY,
    borderRadius:99,
    marginTop:60,
  }
})