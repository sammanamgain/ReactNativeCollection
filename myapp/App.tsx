import React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  useColorScheme,
  StyleSheet,
} from 'react-native';

function App(): JSX.Element {
  let mode = useColorScheme() === 'dark';
  return (
    <SafeAreaView>
      <View>
        <Text style={mode ? styles.textcomp : styles.textwhite}>
          Hello World
        </Text>
        <Text style={styles.textcomp}>Hello World</Text>
        <Text style={styles.textcomp}>Hello World</Text>
        <Text style={styles.textcomp}>Hello World</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // align item works with main axis   reversed to web
    justifyContent: 'center', // justify content is works on cross axis like vertically
  },
  textcomp: {
    color: 'red',
  },
  textwhite: {
    color: 'green',
  },
});
export default App;
