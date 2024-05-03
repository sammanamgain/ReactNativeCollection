import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import Flatcomponents from './Components/Flatcomponents';
import ElevatedComponet from './Components/ElevatedComponet';
import CardComponent from './Components/CardComponent';
import Touchablecomponets from './Components/Touchablecomponets';
import React from 'react';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcomponents></Flatcomponents>
        <ElevatedComponet></ElevatedComponet>
        <CardComponent></CardComponent>
        <Touchablecomponets></Touchablecomponets>
       
      </ScrollView>
    </SafeAreaView>
  );
}
