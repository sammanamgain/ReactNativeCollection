import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function Flatcomponents() {
  return (
    <View>
      <View style={styles.titlecomp}>
        <Text style={styles.titlecomptext}>Flat Cards</Text>
      </View>


      <View style={styles.colorcomp}>
        <View style={styles.colorcompone}>
          <Text style={styles.titlecomptext}>Red</Text>
        </View>
        <View style={styles.colorcomptwo}>
          <Text style={styles.titlecomptext}>Blue</Text>
        </View>
        <View style={styles.colorcompthree}>
          <Text style={styles.titlecomptext}>Green</Text>
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titlecomp: {
    marginLeft:10,

  },
  titlecomptext: {
    fontSize: 34,

  },
  colorcomp:{
    marginTop:15,
    flex:1,
    flexDirection:'row',

  },
  colorcompone:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    height:100,
    width:100,
    backgroundColor:'red',
    marginVertical:4,
    marginHorizontal:4,

  },
  colorcomptwo:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    height:100,
    width:100,
    backgroundColor:'blue',
    marginVertical:4,
    marginHorizontal:4,

  },
  colorcompthree:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    height:100,
    width:100,
    backgroundColor:'green',
    marginVertical:4,
    marginHorizontal:4,

  },
});
