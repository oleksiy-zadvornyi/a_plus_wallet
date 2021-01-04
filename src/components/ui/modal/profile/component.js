import React, {useRef} from 'react';
import {View, Text, Alert} from 'react-native';
import Modal from 'react-native-modal';
import i18n from 'i18n-js';

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
  showNI,
  showToast,
}) {
  const refOldPassword = useRef();
  const refNewPassword = useRef();

  function onPress() {
    const oldPassword = refOldPassword.current.getValue();
    if (oldPassword.length === 0) {
      showToast(i18n.t('t84'));
      return;
    }
    const newPassword = refNewPassword.current.getValue();
    if (newPassword.length === 0) {
      showToast(i18n.t('t85'));
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
        setTimeout(() => {
          Alert.alert('', i18n.t('t86'));
        });
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
        <Text style={base.t1}>{i18n.t('t87')}</Text>
        <Input
          ref={refOldPassword}
          style={base.w3}
          placeholder={i18n.t('t88')}
          secureTextEntry
        />
        <Input
          ref={refNewPassword}
          style={base.w3}
          placeholder={i18n.t('t89')}
          secureTextEntry
        />
        <Button
          style={base.w4}
          title={i18n.t('t27')}
          color="#009F06"
          onPress={onPress}
        />
      </View>
    </Modal>
  );
}
