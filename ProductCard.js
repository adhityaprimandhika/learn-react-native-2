import { Image, View, Text, TouchableOpacity, StyleSheet } from "react-native";

const ProductCard = ({ accountName, location, product }) => {
  return (
    <View style={styles.container}>
      <View style={styles.horizontal}>
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require("./assets/icon_krisna.png")}
          ></Image>
        </TouchableOpacity>
        <View style={styles.storeName}>
          <Text style={styles.textUsername}>{accountName}</Text>
          <Text style={styles.textLocation}>{location}</Text>
        </View>
        <TouchableOpacity>
          <Text>Lihat Toko</Text>
        </TouchableOpacity>
      </View>
      <Image
        style={styles.image}
        source={require("./assets/img_barong.png")}
      ></Image>
      <Text style={styles.textProduct}>{product}</Text>
      <View style={styles.horizontal}>
        <View style={styles.horizontal}>
          {Array.from({ length: 4 }, (_, index) => (
            <Image
              key={index}
              style={styles.iconStar}
              source={require("./assets/icon_star.png")}
            />
          ))}
          <Image
            style={styles.iconStar}
            source={require("./assets/icon_star_half.png")}
          ></Image>
          <Text style={styles.textRating}>4.5</Text>
          <Text style={styles.textRating}>| 56 Terjual</Text>
        </View>
        <Text style={styles.textPrice}>Rp 619.000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    width: 45,
    height: 45,
  },
  textUsername: {
    fontSize: 18,
    fontWeight: "700",
  },
  textLocation: {
    fontWeight: "200",
  },
  storeName: {
    flex: 1,
    marginLeft: 4,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginVertical: 10,
  },
  textProduct: {
    fontSize: 20,
    fontWeight: "bold",
  },
  iconStar: {
    marginTop: 6,
    width: 20,
    height: 20,
  },
  textRating: {
    marginTop: 6,
    marginLeft: 4,
    fontSize: 12,
  },
  textPrice: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProductCard;
