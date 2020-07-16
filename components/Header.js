import React from "react";
import { View, Text, StyleSheet } from "react-native";

import Color from "../constants/color";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 90,
    paddingTop: 36,
    backgroundColor: Color.primary,
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    color: "#000",
    fontSize: 18
  }
});

export default Header;
