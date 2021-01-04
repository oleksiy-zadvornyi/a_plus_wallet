import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import Modal from 'react-native-modal';

// Style
import styles from './styles';

export default function NetworkIndicator({networkIndicator}) {
  return (
    <Modal isVisible={networkIndicator.value} backdropOpacity={0.7}>
      <View style={styles.flex}>
        <View style={styles.flex} />
        <ActivityIndicator size="large" color="white" />
        <View style={styles.flex} />
      </View>
    </Modal>
  );
}
