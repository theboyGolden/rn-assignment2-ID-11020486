import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.myName}>
        My name is <Text style={styles.boldText}>Amenuveve Precious Tsewoo</Text>
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#33E6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  myName: {
    fontSize: 24,
  },

  boldText: {
    fontWeight: 'bold',
  },
});
