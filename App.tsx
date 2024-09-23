/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *  
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Routes/Routes';
import { MenuProvider } from 'react-native-popup-menu';
import { Alert, BackHandler, Linking } from 'react-native';

import { Appearance } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

const App = ({ navigation }: any) => {


  return (

      <PaperProvider>
        <MenuProvider>
          <NavigationContainer>
                  <Routes />  
            </NavigationContainer>
        </MenuProvider>
      </PaperProvider>
  );
};


export default App;
