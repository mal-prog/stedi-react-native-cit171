import { useState} from "react";
import { SafeAreaView, StyleSheet, TextInput, TouchableOpacity, Text } from "react-native";

const sendText = async (phoneNumber) => {
  console.log("PhoneNumber: ",phoneNumber)
  await fetch('https//dev.stedi.me/twofactorlogin/'+phoneNumber, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/text'
  }
});
  const loginResponseText = await loginResponse.text(); //converts the promise to a string by using await
  console.log('Login Response',loginResponseText);
};



const getToken = async({phoneNumber, oneTimePassword, setUserLoggedIn}) =>{
  const tokenResponse =await fetch('https//dev.stedi.me/twofactorlogin', {
    method: 'POST',
    body:JSON.stringify({oneTimePassword, phoneNumber}),
    headers: {
      'Content-type':'application/json'
    }

});
const responseCode= tokenResponse.status;//200 means logged in successfully
console.log("Response Status Code", responseCode);
if(responseCode==200){
  setUserLoggedIn(true);
}
const tokenResponseString = await tokenResponse.text}

const Login = (props) => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [oneTimePassword, setOneTimePassword] = useState(null);

  return ( 
    <SafeAreaView style={styles.mainView}>
      <TextInput
        style={styles.input}
        onChangeText={setPhoneNumber}
        value={phoneNumber}
        placeholder="801-555-1212"
      />
      <TextInput
        style={styles.input}
        onChangeText={setOneTimePassword}
        value={oneTimePassword}
        placeholder="1234"
        keyboardType="numeric"
        secureTextEntry={true}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{sendText(phoneNumber)}}
      >
        <Text>Send Text</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={()=>{
          getToken({phoneNumber, oneTimePassword, setUserLoggedIn:props.setUserLoggedIn})}}
      >
        <Text>LogIn</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  mainView:{
     marginTop:100
  },
button:{
  alignItems: "center",
  alignSelf: "center",
  backgroundColor: "#DDDDDD",
  padding: 10,
  borderWidth:1,
  borderRadius:20,
  margin:10,
  width:100,
}
});

export default Login;