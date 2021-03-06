import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,ToastAndroid
} from "react-native";

export default function App() {
  const [pet, setPet] = useState({
    name: "",
    age: "",
  });
  

  const onChangeName = (value) => {
    setPet({ ...pet, name: value });
  };
  const onchangeAge = (value) => {
    setPet({ ...pet, age: value });
  };

  const saveData = async() => {
    var data = { name: pet.name, age: pet.age };
    
    await fetch("http://192.168.1.1:8080/api/Pets", {
      // method: "GET"
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        name: data.name,
        age: parseInt(data.age)
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      }
    })
      .then((res) => res.json())
      .catch((error) => console.error("Error:", error))
      .then((response) => showToast() );
  };;

  const showToast=() => {
        ToastAndroid.show("a new pet has been added !", ToastAndroid.SHORT);
      }
  // var url = "https://localhost:44396/pets";
  // var data = { name: pet.name,age:pet.age };
  // console.log(data)
  // fetch(url, {
  //   method: "POST", // or 'PUT'
  //   body: JSON.stringify(data), // data can be `string` or {object}!
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // })
  //   .then((res) => res.json())
  //   .catch((error) => console.error("Error:", error))
  //   .then((response) => console.log("Success:", response));
  //   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pet Veterinary</Text>
      <TextInput
        placeholder={"Name"}
        onChangeText={(value) => onChangeName(value)}
        style={styles.input}
      />
      <TextInput
        placeholder={"AGE"}
        onChangeText={(value) => onchangeAge(value)}
        style={styles.input}
        keyboardType="numeric"
      />
      <TouchableOpacity onPress={saveData}>
        <View style={{ backgroundColor: "blue", padding: 10 }}>
          <Text style={{ color: "white", textAlign: "center" }}>{"Send"}</Text>
        </View>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 8,
    margin: 50,
  },
  title: {
    color: "red",
    fontSize: 30,
    textAlign: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 5,
  },
});
