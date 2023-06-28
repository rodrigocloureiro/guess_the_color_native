// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 70;
// console.log(statusBarHeight);

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: '#ffaa00'}]}>Guess</Text>
        <Text style={[styles.title, {color: '#ccff00'}]}> the </Text>
        <Text style={[styles.title, {color: '#00ccff'}]}>Color</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
    alignItems: 'center',
    paddingTop: statusBarHeight,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: 'row',
  },
  title: {
    color: '#fafafa',
    fontSize: 40,
    fontWeight: '700',
  },
  text: {
    color: '#fafafa',
    fontSize: 18,
  },
});
