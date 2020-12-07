import React, {useEffect, useState} from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import * as Font from 'expo-font';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import NetworkIndicator from 'base/NetworkIndicator';
import Toast from 'base/Toast';
import Route from 'routes';
import ReduxView from 'store';

import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');

import ru from 'helpers/locales/ru';
i18n.translations = {
  ru,
};
i18n.locale = 'ru';

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Poppins: require('./assets/fonts/Poppins-Regular.ttf'),
      Roboto: require('./assets/fonts/Roboto-Regular.ttf'),
    });
    setAssetsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  });

  if (!assetsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ReduxView>
        <NetworkIndicator />
        <Toast />
        <Route />
      </ReduxView>
    </SafeAreaProvider>
  );
}
