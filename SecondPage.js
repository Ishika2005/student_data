import { Button, View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React from 'react'
import { useState } from 'react';
import ThirdPage from './ThirdPage';
import { useNavigation } from '@react-navigation/native';

const SecondPage = ({route}) => {
const [cgpa10, setCgpa10] = useState('');
const [cgpa12, setCgpa12] = useState('');
const [cgpaGrad, setCgpaGrad] = useState('');
const data = route.params.data;
const navigation = useNavigation();
const dataObject = {
cgpa10: cgpa10,
cgpa12: cgpa12,
cgpaGrad: cgpaGrad,
fname:data.fname,
lname:data.lname,
mobile:data.mobile
};
const isDisabled = !cgpa10 || !cgpa12 || !cgpaGrad;
const handleSubmit = () => {
  if (cgpa10 >=0 && cgpa10 <=10 && cgpa12 >=0 && cgpa12 <=10 && cgpaGrad >=0 && cgpaGrad <=10) {
  navigation.navigate('ThirdPage', {
  data: dataObject
  });
  } else {
  Alert.alert("Invalid input", "Enter a value between 0 and 10.");
  }
  };
return (
<View style={styles.container}>
<Text style={styles.headerText}>Enter your CGPA details:</Text>
<Text style={styles.label}>10th CGPA:</Text>
<View style={styles.inputContainer}>
<TextInput
       style={styles.input}
       value={cgpa10}
       onChangeText={setCgpa10}
       keyboardType="decimal-pad"
     />
</View>
<Text style={styles.label}>12th CGPA:</Text>
<View style={styles.inputContainer}>
<TextInput
       style={styles.input}
       value={cgpa12}
       onChangeText={setCgpa12}
       keyboardType="decimal-pad"
     />
</View>
<Text style={styles.label}>Graduation CGPA:</Text>
<View style={styles.inputContainer}>
<TextInput
       style={styles.input}
       value={cgpaGrad}
       onChangeText={setCgpaGrad}
       keyboardType="decimal-pad"
     />
</View>
<TouchableOpacity
        style={[styles.button, isDisabled && { backgroundColor: 'gray' }]}
        onPress={handleSubmit}
        disabled={isDisabled}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "light green",
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    width: '100%',
    marginTop: 5,
    marginBottom: 20,
    borderRadius: 10,
  },
  input: {
    fontSize: 16,
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
export default SecondPage;