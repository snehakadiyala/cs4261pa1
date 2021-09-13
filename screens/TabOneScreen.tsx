import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'Accessibility'>) {
  let x = "The color contrast on this screen is high and the fonts are larger for accessibility reasons."
  const [change, setStatus] = React.useState(false);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Accessibility Oriented</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" text={x} highcontrast={change}/>
      <TouchableOpacity
      onPress={() => setStatus(!change)}
      style={{ backgroundColor: '#eee' }}>
      <Text style={styles.button}>{change ? "Remove Accessibility" : "Make Accessible"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
    fontSize:50, 
    fontWeight: 'bold',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#eee",
    color: "#20232a",
    textAlign: "center",
    fontSize: 20,

  },
});
