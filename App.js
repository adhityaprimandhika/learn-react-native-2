import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import TitleBar from "./TitleBar";
import ProductCard from "./ProductCard";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TitleBar title={"Detail"} />
      <ProductCard
        accountName={"Rama Krisna Bali"}
        location={"Badung, Bali"}
        product={"Topeng Barong"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: 45,
  },
});
