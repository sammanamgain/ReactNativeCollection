import { StyleSheet, Text, View,TouchableOpacity,Linking,TouchableWithoutFeedback} from 'react-native';
import React from 'react';

export default function Touchablecomponets() {
const handleReadmore = async (url:String)=>{
    await Linking.openURL(url);


};

  return (
    <View style={styles.container}>
      <Text style={styles.Header}>Touchable components</Text>

      <View style={styles.subcontainer} >
        <Text style={styles.subHeader}> Explore the UseEffect Hook</Text>

        <TouchableWithoutFeedback onPress={()=>handleReadmore("https://reactnative.dev/docs/linking#handling-deep-links")}>

        <Text style={styles.paragraph}>
          useEffect is a React Hook that lets you synchronize a component with
          an external system.

          ....Read more
        </Text>
            </TouchableWithoutFeedback>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  Header: {
    fontSize: 32,
    marginHorizontal:10,
  },
  subHeader:{
    fontSize:22,
    marginVertical: 10,
  }
  ,
  paragraph:{
    fontSize:18,
  }
  ,
  subcontainer:{
    flex:1,
    flexGap:1,
    elevation:1,
    marginHorizontal:10,
    paddingLeft:10,
    borderRadius:2,


  },
});
