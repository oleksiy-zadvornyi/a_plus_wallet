import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

import { base } from "./style";

export default function Button({ style, title, color, contentContainerStyle }) {
  return (
    <View style={style}>
      <TouchableOpacity
        style={[base.w1, contentContainerStyle, { backgroundColor: color }]}
      >
        <Text style={base.t1}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
}
