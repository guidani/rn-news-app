import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

function SearchBar(props) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={props.searchText}
        onChange={() => props.setSearchText}
        onSubmitEditing={props.onSubmit}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default SearchBar;
