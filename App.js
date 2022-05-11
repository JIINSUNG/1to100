import { StatusBar } from 'expo-status-bar';
import {Platform, KeyboardAvoidingView, SafeAreaView,TextInput,StyleSheet, Text,Image,ScrollView, View, TouchableOpacity, Button, Alert,  } from 'react-native';
import MyComponents from './MyComponent';
import {React,useState} from 'react';
import MyProfile from './MyProfile';
import Menu from './Menu';
import Questionbar from './Questionbar';
import { getDownloadURL, getStorage,ref, uploadBytes } from "firebase/storage";
import * as ImagePicker from 'expo-image-picker';
import * as Location from 'expo-location';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFZKZvjRAvwv2AIvyxHHqP95lL0OIyYqA",
  authDomain: "to100-d57e6.firebaseapp.com",
  projectId: "to100-d57e6",
  storageBucket: "to100-d57e6.appspot.com",
  messagingSenderId: "1068221050304",
  appId: "1:1068221050304:web:8fb2c566ff560447c2ec25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);

import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword  } from "firebase/auth";
const userid = "29381919123"


const auth = getAuth();
// Create a storage reference from our storage service
const storageRef = ref(storage);
// Create a child reference
const profileRef = ref(storage, 'userprofile/')
const imagesref = ref(profileRef, userid);
// imagesRef now points to 'images'


export default function App() {
  const [image, setImage] = useState(null);
  const [uri,setUri] = useState();
  const [imgtrue, setImgtrue] = useState(false);
  const [location, setLocation] = useState();
  const [ok, setOkay] = useState(true);
  const [city,setCity] = useState("미상");
  const getPosition = async() => {
    const granted = await Location.requestForegroundPermissionsAsync();
    if(!granted)
    {
      setOk(false);
    }
 
    const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync({accuracy:5});
    const location = await Location.reverseGeocodeAsync({latitude,longitude});
    setCity(location[0].city);
  }
 



  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.2,
    });
    if (!result.cancelled) {
      setImage(result.uri);

      const img = await fetch(result.uri);
      const bytes = await img.blob();
      uploadBytes(imagesref, bytes).then(imageupload => {console.log("image uploaded")});


      
    }
  };

  const getImage = async() => {
    const reference = ref(storage,'/userprofile/'+ userid);
      await getDownloadURL(reference).then((x)=>{
        setUri(x);
      })
      setImgtrue(true);
  }
 
  return (
    <View style = {styles.container}>
      <View style = {{flex : 1}}>
      </View>
      <View style = {{flex : 1,  alignItems : "center", justifyContent : "center", }}>
      <Button title="Pick an image from camera roll" onPress={pickImage} />
      {imgtrue ?   <Image source={{ uri: uri }} style={{ width: 200, height: 200}} /> : null} 
      <Button title="get Image" onPress={getImage} />
      <Button title="get Position" onPress={getPosition} />
      <Text> {city} 에 거주중 이십니다 </Text>
      <Text style = {{fontSize : 20}}> 미쥬미쥬미쥬 님의 프로필</Text>
      </View>
      <View style = {{flex : 1}}>

      </View>
  </View>
  )
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor : "yellow",
  },
  top:{
    flex: 1.5,
    borderBottomColor: 'skyblue',
    borderBottomWidth: 1,
    backgroundColor : "white",
    flexDirection : "row",    
  },
  topleft:{
    flex : 1,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "flex-start",
    backgroundColor : "white"


  },
  topright: {
    felx : 1,
    flexDirection : "row",
    alignItems : "center",
    justifyContent : "flex-end",
    backgroundColor : "white",

  },

  toptext:{
    marginTop : 50,
    marginLeft : 10,
    fontSize : 20,
    color : "purple",

  },
  profile:
  {
    flex:3.5,
    backgroundColor : "white",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

 

 
 
 
