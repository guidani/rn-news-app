import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-screens";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  return (
    <View style={styles.container}>
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Search;
