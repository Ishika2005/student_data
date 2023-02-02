import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ThirdPage = ({route}) => {
const data = route.params.data;
return (
<View style={styles.container}>
<Text style={styles.text}>FIRST NAME: {data.fname}</Text>
<Text style={styles.text}>Last NAME: {data.lname}</Text>
<Text style={styles.text}>CONTACT NUMBER: {data.mobile}</Text>
<Text style={styles.text}>10th CGPA: {data.cgpa10}</Text>
<Text style={styles.text}>12th CGPA: {data.cgpa12}</Text>
<Text style={styles.text}>Graduation CGPA: {data.cgpaGrad}</Text>

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
text: {
fontSize: 20,
margin: 10,
fontWeight: 'bold',
color: 'blue'
}
});

export default ThirdPage;