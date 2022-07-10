import axios from "axios";
import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Article from "../../components/Article";
import SearchBar from "../../components/SearchBar";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [articles, setArticles] = useState([]);

  const searchArticles = () => {
    axios
      .get(`${API_URL}&apiKey=${API_KEY}`, {
        params: {
          counter: "br",
          category: "technology",
          q: searchText,
        },
      })
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error));
  };

  return (
    <View style={styles.container}>
      <SearchBar
        value={searchText}
        // TODO: função não está funcionando
        onChange={() => setSearchText()}
        onSubmit={searchArticles}
      />
      <FlatList
        data={articles}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <Article
            urlToImage={item.urlToImage}
            title={item.title}
            description={item.description}
            author={item.author}
            publishedAt={item.publishedAt}
            sourceName={item.source.name}
          />
        )}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SearchPage;
