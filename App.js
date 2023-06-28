// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Box from './components/Box';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 70;

export default function App() {

  const generateColors = () => {};

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: '#ffaa00'}]}>Guess</Text>
        <Text style={[styles.title, {color: '#ccff00'}]}> the </Text>
        <Text style={[styles.title, {color: '#00ccff'}]}>Color</Text>
      </View>
      <View style={styles.boxContainer}>
        <Box bgColor='#fff' />
        <Box bgColor='#000' />
        <Box bgColor='#ccc' />
        <Box bgColor='#ff0000' />
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
  boxContainer: {
    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
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
