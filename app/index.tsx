import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
        Edit app/index.tsx to edit this screen!
      </Text>
    </View>
  );
}
