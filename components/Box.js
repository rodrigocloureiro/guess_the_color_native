import { TouchableOpacity, View, StyleSheet } from "react-native";

export default function Box({ bgColor }) {
  return (
    <TouchableOpacity>
      <View style={[styles.box, {backgroundColor: bgColor}]}></View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  box: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
});
