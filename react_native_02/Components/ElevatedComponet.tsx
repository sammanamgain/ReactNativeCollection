import { StyleSheet, Text, View,ScrollView } from 'react-native';
import React from 'react';

export default function ElevatedComponet() {
  return (
    <View>

    <View style={styles.titlecomp}>
        <Text style={styles.titlecomptext}> Elevated Component</Text>
    </View>

  <ScrollView horizontal={true}>
  <View style={styles.colorcomp}>
        <View >
            <Text style={styles.colorcompone}> Red </Text>
        </View>
        <View >
            <Text style={styles.colorcomptwo}> Blue </Text>
        </View>
        <View >
            <Text style={styles.colorcompthree}> Green </Text>
        </View>
        <View >
            <Text style={styles.colorcompone}> Red </Text>
        </View>
        <View >
            <Text style={styles.colorcomptwo}> Blue </Text>
        </View>
        <View >
            <Text style={styles.colorcompthree}> Green </Text>
        </View>
        <View >
            <Text style={styles.colorcompone}> Red </Text>
        </View>
        <View >
            <Text style={styles.colorcomptwo}> Blue </Text>
        </View>
        <View >
            <Text style={styles.colorcompthree}> Green </Text>
        </View>
    </View>
  </ScrollView>
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
      shadowcolor:'red',
      elevation:5,
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
