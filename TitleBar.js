import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";

const TitleBar = ({ title }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require("./assets/icon_back.png")}
        ></Image>
      </TouchableOpacity>
      <Text style={styles.titleText}>{title}</Text>
      <TouchableOpacity>
        <Image
          style={styles.icon}
          source={require("./assets/icon_share.png")}
        ></Image>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 24,
    width: "100%",
    alignItems: "center",
  },
  icon: {
    height: 32,
    width: 32,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
  },
});

export default TitleBar;
