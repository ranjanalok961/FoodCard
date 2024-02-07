/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
Dimensions,
  Button,
  TouchableOpacity,
  ImageBackground,
  TextInput
} from 'react-native';
import Contextprovider from './Context/Context'
import { ItemProvider } from './Context/CartContext';
import { LikeItemProvider } from './Context/LikeContext';
import SearchProvider from './Context/SearchContext';
import OrderProvider from './Context/OrderContext';
import ProfileContextProvider from './Context/ProfileContext';
import MyApp from './Comp/MyApp';
import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { useData } from './Context/Context';
type SectionProps = PropsWithChildren<{
  title: string;
}>;

const screen = Dimensions.get('screen')
function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <ProfileContextProvider>
      <Contextprovider>
        <ItemProvider>
          <LikeItemProvider>
        <SearchProvider>
          <OrderProvider>
                <MyApp />
              </OrderProvider>
            </SearchProvider>
          </LikeItemProvider>
        </ItemProvider>
      </Contextprovider>
    </ProfileContextProvider>
  );
}

export default App;
