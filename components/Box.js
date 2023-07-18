import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function Box({ bgColor, verifyColor, isCorrect }) {
  const handleClick = () => {};
  
  return (
    <TouchableOpacity onPress={() => verifyColor(bgColor)} disabled={isCorrect}>
      <View style={[styles.box, {backgroundColor: bgColor}]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});
