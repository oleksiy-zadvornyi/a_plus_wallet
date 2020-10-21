import React, { useRef } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Image from "react-native-scalable-image";
import dw from "@hooks/useDesignWidth";

// Components
import Wrap from "@base/Wrap";
import Header from "@header";
import Input from "@input";
import Button from "@button";

// Helpers
import { replace } from "@helpers/navigation";
import * as Images from "@helpers/images";

// Style
import { base } from "./style";

export default function Login() {
  const refPassword = useRef(null);

  function done() {}

  return (
    <Wrap titleView={<Header title="Вход" />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} width={dw(230)} />
        <Text style={base.t1}>Войдите, если вы зарегистрированы</Text>
        <Input
          style={base.w2}
          placeholder="ваш логин"
          keyboardType="email-address"
          returnKeyType="next"
          autoCapitalize="none"
          onSubmitEditing={() => refPassword.current.focus()}
        />
        <Input
          ref={refPassword}
          style={[base.w2, base.w3]}
          placeholder="ваш пароль"
          autoCapitalize="none"
          secureTextEntry
          onSubmitEditing={done}
        />
        <Button style={base.w2} title="Отправить" color="#009F06" />
        <View style={base.w4}>
          <Text style={base.t2}>
            Если у вас еще нет аккаунта, то пройдите несложную
          </Text>
          <TouchableOpacity onPress={() => replace("Registration")}>
            <Text style={base.t3}>регистрацию</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
