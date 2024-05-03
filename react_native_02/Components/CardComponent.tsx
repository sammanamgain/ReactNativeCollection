import {Image, StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function CardComponent() {
  return (
    <View>
      <View>
        <Text style={styles.titleHeading}> Trending Places</Text>
      </View>

      <View style={styles.Card} />
      <View>
        <Image
          style={styles.Image}
          source={{
            uri: 'https://www.factinate.com/wp-content/uploads/2018/01/17-37.jpg',
          }}
        />
      </View>
      <View style={styles.Description}>
        <Text style={styles.Descriptiontitle}>Mt.Everest</Text>
        <Text style={styles.DescriptionLocation}>Solukhumbu , Nepal</Text>
        <Text style={styles.DescriptionDetail}>
          Mount Everest is the highest peak on Earth, reaching an elevation of
          29,032 feet (8,849 meters) above sea level. It is located in the
          Himalayas on the border between Nepal and Tibet/China. Known as
          "Sagarmatha" in Nepal and "Chomolungma" in Tibet, Everest attracts
          climbers and adventurers from around the world seeking to conquer its
          formidable summit.
        </Text>
        <Text style={styles.locationdetail}>Distance: 3km away from here</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  titleHeading: {
    fontSize: 28,
    marginVertical: 5,
  },
  Card: {},
  Image: {
    height: windowHeight * 0.3,
    width: windowWidth,
  },
  Description: {
    elevation:1,
    shadowcolor:{
        flex:1,
        flexgrow:1,

    }
  },
  Descriptiontitle: {
    fontSize: 36,
    color: '#4C4B4B',
    marginHorizontal:10,
  },
  DescriptionLocation: {
    fontSize: 24,
    color: '#777E8B',
    marginHorizontal:10,
  },
  DescriptionDetail: {
    fontSize: 16,
    marginHorizontal:10,
    marginVertical: 10,
  },

  locationdetail:{
    fontSize:16,
    color:'#777E8B',
    marginHorizontal:10,
  },
});
