import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { RootTabScreenProps } from '../types';
import { Text, View} from '../components/Themed';

export default function TabTwoScreen({ navigation }: RootTabScreenProps<'Accessibility'>) {
  let spanish = "Esto se centra en la traducción. " 
  + "Para que esto sea accesible a una población más grande, es necesario traducir las interfaces de usuario."

  let english = 
  "This is focused on translation."
    + "For this to be accessible to a larger population, the user interfaces need to be translated."
  
  const [count, setStatus] = React.useState(false);

  
  let localize = count ? "Localize" : "Unlocalize" 
  let txt = count ? english : spanish

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Localization Oriented</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" text={txt} highcontrast={true} />
      <TouchableOpacity
      onPress={() => setStatus(!count)}
      style={{ backgroundColor: '#eee' }}>
      <Text style={styles.button}>{localize}</Text>
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
