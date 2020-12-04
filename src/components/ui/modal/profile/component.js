import React, {useRef} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';

// Components
import Button from 'button';
import Input from 'input/profile';

// Api
import {getUserChangePassword} from 'store/api/user';

// Style
import {base} from './style';

export default function Password({
  isVisible,
  onPressClose,
  access_token,
  showToast,
  showNI,
}) {
  const refOldPassword = useRef();
  const refNewPassword = useRef();

  function onPress() {
    const oldPassword = refOldPassword.current.getValue();
    if (oldPassword.length === 0) {
      showToast('Введите старый пароль');
      return;
    }
    const newPassword = refNewPassword.current.getValue();
    if (newPassword.length === 0) {
      showToast('Введите новый пароль');
      return;
    }
    showNI(true);
    const query = {
      oldPassword,
      newPassword,
    };
    getUserChangePassword({access_token, query})
      .then(() => {
        onPressClose();
        showToast('Пароль поменян');
      })
      .catch((e) => showToast(e.response.data.errorText))
      .finally(() => showNI(false));
  }

  return (
    <Modal
      style={base.w1}
      isVisible={isVisible}
      onBackButtonPress={onPressClose}
      onBackdropPress={onPressClose}>
      <View style={base.w2}>
        <Text style={base.t1}>Изменение пароля</Text>
        <Input
          ref={refOldPassword}
          style={base.w3}
          placeholder="старый пароль"
          secureTextEntry
        />
        <Input
          ref={refNewPassword}
          style={base.w3}
          placeholder="новый пароль"
          secureTextEntry
        />
        <Button
          style={base.w4}
          title="Изменить"
          color="#009F06"
          onPress={onPress}
        />
      </View>
    </Modal>
  );
}
