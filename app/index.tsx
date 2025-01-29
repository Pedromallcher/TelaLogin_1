
import { Text,
     View , 
     StyleSheet, 
     Dimensions , 
     Image, 
     TextInput, 
     TouchableOpacity,
     ActivityIndicator,
     Alert
     } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import colors from './themes/colors';
import image from './assets/imgs';
import { useState } from 'react';

export default function login(){

    const emailuser = 'pedromallcher@gmail.com'
    const senhauser = 123456

    // verificaçao simples 
    const [email , setemail] = useState('')
    const [senha , setsenha] = useState ('')
    const [loading ,setloading] = useState(false)



    function pwd (){
            setloading(true)

        setTimeout(() => {
            

            if(!email || !senha ){
                setloading(false)
                Alert.alert('Campos vazios necessarios')
                return
            }




            if(email === emailuser && Number(senha) === Number(senhauser)){
                setloading(false)
                Alert.alert('Sucesso')
            }else {
                setloading(false)
                Alert.alert('Nao sucedido')
            }

            
        }, 1000);



    }




  return (
    <View style={styles.content}>
      <StatusBar style="light" />
      <View style={styles.topContent}>
        <Image
          style={{ height: "100%", width: "60%", marginTop: 60 }}
          resizeMode="contain"
          source={image.top}
        />
      </View>

      <View style={styles.middleContent}>
        <Text style={{ color: "white", fontSize: 25 }}>Welcome Back</Text>
        <Text style={{ color: "white", fontSize: 18 }}>
          Please Log into your existing account
        </Text>
      </View>

      <View style={styles.bottomBox}>
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "white",
            width: "80%",
            height: 65,
            borderRadius: 20,
            marginTop: "3%",
            marginBottom: 20,
            padding: 10,
            color: "white",
          }}
          value={email}
          onChangeText={setemail}
          placeholder="Your Email"
          placeholderTextColor={"white"}
        />
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "white",
            width: "80%",
            height: 65,
            padding: 10,
            borderRadius: 20,
            color: "white",
          }}
          placeholder="Your Password"
          placeholderTextColor={"white"}
          value={senha}
          onChangeText={setsenha}
        />
        <TouchableOpacity
        onPress={pwd}
        style={{
        marginTop: 20,
        backgroundColor: colors.btn,
        width: "50%",
        height: 58,
        justifyContent: "center",
        borderRadius: 20,
    }}
>
    {loading ? (
        <ActivityIndicator />
    ) : (
        <Text style={{ color: "white", textAlign: "center" }}>
            Enviar
        </Text>
    )}
    </TouchableOpacity> 


          
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
    content:{
        flex:1,
       
       backgroundColor: colors.bg
    },

    topContent:{
        height:Dimensions.get('window').height /2.2,
        width:'100%',
        justifyContent:'center',
        alignItems:'center',
        
    },
     middleContent:{
        justifyContent:'center',
        alignItems:'center',
        height:Dimensions.get('window').height/8,
        
        width:'100%'
     },
     bottomBox:{
        height:Dimensions.get('window').height /1,
        alignItems:'center',
        
        

     },

})