import React, {useState, useEffect} from 'react';
import {View, Animated} from 'react-native';

// Helpers
import * as Images from 'helpers/images';

// Styles
import {base} from './style';

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
    <View style={base.w1}>
      <Animated.Image
        source={Images.logo}
        resizeMode="contain"
        style={[
          base.w2,
          {
            opacity: opacity,
          },
        ]}
      />
    </View>
  );
}
