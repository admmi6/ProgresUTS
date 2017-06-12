import React from "react";
import { View } from "react-native";
import { Card, Button, Text } from "react-native-elements";

export default ({ navigation }) => (
  <View style={{ paddingVertical: 20 }}>
    <Card title="Lokasi">
      <View
        style={{
          backgroundColor: "#bcbec1",
          alignItems: "center",
          justifyContent: "center",
          width: 80,
          height: 80,
          borderRadius: 40,
          alignSelf: "center",
          marginBottom: 20
        }}
      >
        <Text style={{ color: "white", fontSize: 28 }}>Lihat</Text>
      </View>

    </Card>
  </View>
);
