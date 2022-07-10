import axios from "axios";
import { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Article from "../../components/Article";
import { API_KEY, API_URL } from "../../config";

function Home() {
  const [articles, setArticles] = useState([]);

  const getNews = async () => {
    axios
      .get(`${API_URL}country=br&apiKey=${API_KEY}`, {
        params: {
          category: "technology",
          country: "br",
        },
      })
      .then((response) => setArticles(response.data.articles))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getNews();
  }, [articles]);

  return (
    <View style={styles.container}>
      <View style={styles.categories}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>business</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>entertainment</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>general</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>health</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>science</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>sports</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => getNews("business")}>
            <Text style={styles.chip}>technology</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>

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
}

const styles = StyleSheet.create({
  categories: {
    paddingBottom: 5,
    paddingTop: 5,
  },
  chip: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 50,
    marginRight: 5,
    // marginVertical: 5,
    textAlign: "center",
    backgroundColor: "#303030",
    color: "#fff",
  },
  texto: {
    color: "red",
  },
});

export default Home;
