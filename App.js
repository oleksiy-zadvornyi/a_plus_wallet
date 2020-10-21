import React, { useEffect, useState } from "react";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";

import NetworkIndicator from "@base/NetworkIndicator";
import Toast from "@base/Toast";
import Route from "@routes";
import ReduxView from "@store";

export default function App() {
  const [assetsLoaded, setAssetsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      Poppins: require("./assets/fonts/Poppins-Regular.ttf"),
      Roboto: require("./assets/fonts/Roboto-Regular.ttf"),
    });
    setAssetsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  });

  if (!assetsLoaded) {
    return <AppLoading />;
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
