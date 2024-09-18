import React, { createContext, useState } from 'react';
import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';



const FirstPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');

  const navigation = useNavigation();
  const dataObject = {
    fname: firstName,
    lname: lastName,
    mobile: mobilee,
    };
    const isDisabled = !firstName || !lastName || !mobile;
    const handleSubmit = () => {
      if (!isDisabled && mobile.length === 10) {
        navigation.navigate('SecondPage', {
          data: dataObject
        });
      } else {
        if (!firstName || !lastName ) {
          Alert.alert("NO data added", "Please input a Value");
        } else {
          Alert.alert("Invalid Mobile Number", "Enter 10 digit mobile number");
        }
      }
    };
    
  return (
    
      <View style={styles.container}>
        <Text style={styles.label}>First Name:</Text>
        <TextInput
          style={styles.input}
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter first name"
        />

        <Text style={styles.label}>Last Name:</Text>
        <TextInput
          style={styles.input}
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter last name"
        />

        <Text style={styles.label}>Mobile:</Text>
        <TextInput
          style={styles.input}
          value={mobile}
          onChangeText={setMobile}
          keyboardType="number-pad"
          placeholder="Enter mobile number"
        />
        <TouchableOpacity
        style={[styles.button, isDisabled && { backgroundColor: 'gray' }]}
        onPress={handleSubmit}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
      </View>

  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'lightblue',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: 'bold',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    fontSize: 16,
    marginTop: 5,
    marginBottom: 20,
    width: '80%',
    borderRadius: 5,
  },
  button: {
    padding: 10,
    backgroundColor: 'lightblue',
    marginTop: 20,
    borderRadius: 5,
    width: '70%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  }
});

export default FirstPage;
