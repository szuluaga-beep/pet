import { StatusBar } from "expo-status-bar";
import React, { useState,useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
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

  const saveData = () => {
console.log("hello")
  };
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