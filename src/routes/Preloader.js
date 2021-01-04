import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

import * as Images from 'helpers/images';

export default function Preloader({onPreloader}) {
  const [opacity] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 1,
      duration: 5000,
      useNativeDriver: true,
    }).start();
    setTimeout(onPreloader, 5000);
  });

  return (
    <View style={styles.w1}>
      <Animated.Image
        source={Images.logo}
        resizeMode="contain"
        style={[
          styles.w2,
          {
            opacity: opacity,
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  w1: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  w2: {
    flex: 1,
    width: wp(80),
  },
});
