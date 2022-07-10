import * as WebBrowser from "expo-web-browser";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

function Article(props) {
  let date = props.publishedAt;
  let formatedDate = date.split("T")[0]?.split("-").reverse().join("/");

  const goToSource = () => {
    WebBrowser.openBrowserAsync(props.url);
  };

  return (
    <Pressable style={styles.container} onPress={goToSource}>
      <Image
        source={{
          uri: props.urlToImage,
        }}
        style={styles.image}
      />
      <Text style={styles.title}>{props.title}</Text>
      <Text style={styles.description}>{props.description}</Text>
      <View style={{ padding: 10 }}>
        <View style={styles.data}>
          <Text style={styles.date}>{formatedDate}</Text>
        </View>
        <View style={{ marginTop: 10 }}>
          <Text>
            source: <Text style={styles.source}>{props.sourceName}</Text>
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignSelf: "center",
    borderRadius: 20,
    shadowOpacity: 0.5,
    shadowColor: "#000",
    shadowOffset: {
      height: 5,
      width: 5,
    },
    backgroundColor: "#fff",
    marginBottom: 40,
  },

  image: {
    width: "100%",
    height: 200,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    fontWeight: "400",
  },
  data: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  heading: {},
  author: {
    fontWeight: "bold",
    fontSize: 16,
  },
  date: {
    fontWeight: "bold",
    color: "#e63946",
    fontSize: 16,
  },
  source: {
    color: "#e63946",
    fontWeight: "bold",
    fontSize: 18,
  },
});

export default Article;
