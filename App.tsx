import { StatusBar, View } from "react-native";
import { Background } from "./src/components/Background";
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Loading } from "./src/components/Loading";
import { Routes } from "./src/routes";
import "./src/services/notificationsConfig";
import { getPushNotificationToken } from "./src/services/getPushNotificationToken";
import { useRef } from "react";
import {} from "expo";

const getNotificationListener = useRef();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <Background>
      <StatusBar
        barStyle={"light-content"}
        translucent
        backgroundColor="transparent"
      />

      {fontsLoaded ? <Routes /> : <Loading />}
      <View></View>
    </Background>
  );
}
