import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Flatcomponents from './Components/Flatcomponents';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcomponents></Flatcomponents>
       
      </ScrollView>
    </SafeAreaView>
  );
}
