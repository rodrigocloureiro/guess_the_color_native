import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function Box({ bgColor, verifyColor }) {
  return (
    <TouchableOpacity onPress={() => verifyColor(bgColor)}>
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
