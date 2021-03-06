import React from "react";
import { StyleSheet, Text, View, SafeAreaView, StatusBar, Dimensions, Platform } from "react-native";
const { width, height } = Dimensions.get("window");

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.outerBoxStyle}>
        <View style={styles.boxOneOuterStyle}>
          <View style={styles.boxOneInnerStyle}>
            <View style={styles.innerBoxStyle} />
            <Text style={[styles.textStyle, { fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto" }]}>Name</Text>
            <View style={styles.innerBoxStyle} />
          </View>
        </View>
        <View style={styles.boxTwoStyle}>
          <Text
            style={[
              styles.textStyle,
              { textAlign: "center", fontFamily: Platform.OS === "ios" ? "Helvetica" : "Roboto" },
            ]}
          >
            Balance
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0f1222",
    alignItems: "center",
    justifyContent: "center",
  },
  outerBoxStyle: {
    backgroundColor: "#fff",
    borderRadius: 15,
    width: width * 0.6,
    height: height * 0.3,
    overflow: "hidden",
  },
  boxOneOuterStyle: {
    backgroundColor: "#f4f5fb",
    flex: 1,
  },
  boxOneInnerStyle: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomLeftRadius: 31,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  boxTwoStyle: {
    flex: 1,
    backgroundColor: "#f4f5fb",
    justifyContent: "center",
    borderTopRightRadius: 31,
  },
  innerBoxStyle: {
    backgroundColor: "#000",
    alignSelf: "center",
    padding: 13,
    borderRadius: 5,
  },
  textStyle: {
    color: "#000",
    fontSize: 16,
    fontFamily: "Roboto",
  },
});
