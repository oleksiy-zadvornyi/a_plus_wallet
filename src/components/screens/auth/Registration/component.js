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

export default function Registration() {
  const refPassword = useRef(null);
  const refRePassword = useRef(null);

  function done() {}

  return (
    <Wrap titleView={<Header title="Регистрация" />}>
      <View style={base.flex} />
      <View style={base.w1}>
        <Image source={Images.logo} width={dw(230)} />
        <Text style={base.t1}>
          После регистрации вы сможете войти в систему
        </Text>
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
          returnKeyType="next"
          autoCapitalize="none"
          secureTextEntry
          onSubmitEditing={() => refRePassword.current.focus()}
        />
        <Input
          ref={refRePassword}
          style={[base.w2, base.w3]}
          placeholder="повторите пароль"
          autoCapitalize="none"
          secureTextEntry
          onSubmitEditing={done}
        />
        <Button style={base.w2} title="Отправить" color="#009F06" />
        <View style={base.w4}>
          <Text style={base.t2}>У вас уже есть аккаунт?</Text>
          <TouchableOpacity onPress={() => replace("Login")}>
            <Text style={base.t3}>Перейдите на страницу входа.</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={base.flex} />
    </Wrap>
  );
}
