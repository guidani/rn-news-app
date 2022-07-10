import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

const SeachBar = (props) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.searchText}
        onChange={(text) => props.setSearchText(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginTop: 40 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: "red",
  },
});

export default SeachBar;
