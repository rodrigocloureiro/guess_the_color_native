// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Box from './components/Box';
import { useState, useEffect } from 'react';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight : 70;

export default function App() {
  const [ colors, setColors ] = useState([]);
  const [ color, setColor ] = useState('');

  useEffect(() => {
    const colorsArr = [];
    for(let i = 0; i <= 5; i++) {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      const color = `rgb(${r}, ${g}, ${b})`;
      colorsArr.push(color);
    }
    const correctColor = Math.floor(Math.random() * colorsArr.length);
    setColors(colorsArr);
    setColor(colorsArr[correctColor]);
  }, []);

  const verifyColor = (boxColor) => {
    alert(boxColor === color);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='light' />
      <View style={styles.titleContainer}>
        <Text style={[styles.title, {color: '#ffaa00'}]}>Guess</Text>
        <Text style={[styles.title, {color: '#ccff00'}]}> the </Text>
        <Text style={[styles.title, {color: '#00ccff'}]}>Color</Text>
      </View>
      <View style={styles.color}>
        <Text style={styles.text}>COR: {color.toLocaleUpperCase()}</Text>
      </View>
      <View style={styles.boxContainer}>
        {colors.map((color, index) => (
          <Box key={index} bgColor={color} verifyColor={verifyColor} />
        ))}
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
  color: {
    width: '100%',
    backgroundColor: '#2C8E99',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
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
