import {StyleSheet, Text, View} from 'react-native';
import React,{useState} from 'react';
import {object, number} from 'yup';



export default function App() {


  let passwordLengthSchema = object({
    length: number()
      .required()
      .positive()
      .integer()
      .min(4, 'It should have at least 4 characters')
      .max(16, 'cannot have more than 16 characters'),
  });

  //state definitions
  

  return (
    <View>
      <Text style={styles.Heading}>Password Generator</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Heading: {
    fontSize: 24,
  },
});
