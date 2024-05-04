import { StyleSheet, Text, View,Image } from 'react-native';
import React from 'react';

export default function ListIterating() {

    const contacts = [
        {
          uid: 1,
          name: 'Hitesh Choudhary',
          status: 'Just an extra ordinary teacher',
          imageUrl: 'https://avatars.githubusercontent.com/u/11613311?v=4',
        },
        {
          uid: 2,
          name: 'Anurag Tiwari',
          status: 'I ❤️ To Code and Teach!',
          imageUrl: 'https://avatars.githubusercontent.com/u/94738352?v=4',
        },
        {
          uid: 3,
          name: 'Sanket Singh',
          status: 'Making your GPay smooth',
          imageUrl: 'https://avatars.githubusercontent.com/u/29747452?v=4',
        },
        {
          uid: 4,
          name: 'Anirudh Jwala',
          status: 'Building secure Digital banks',
          imageUrl: 'https://avatars.githubusercontent.com/u/25549847?v=4',
        },
    ];
  return (
    <View>
      <Text style={styles.Heading}>List Iterating</Text>

      <View>
        {contacts.map(({uid,name,status,imageUrl})=>(
            <View key={uid} style={styles.contactcomp}>
              <Image source={{uri: imageUrl}}
       style={styles.photo} />
                <Text> {name}</Text>
                <Text> {status}</Text>

            </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    Heading:{
        fontSize:32,
        color:'#000',
        paddingHorizontal:24,
        textAlign:'center',
        marginVertical:20,
    },
    contactcomp:{
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor:'#74B9FF'
      


    }
    ,
    photo:{
      width: 100, 
      height: 100,
      borderRadius:50,
      marginHorizontal:10,

    },
});
