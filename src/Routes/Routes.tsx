import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from '../ui/screens/Dashboard/Dashboard';
import Challenge from '../ui/screens/Challenge/Index';
import Discover from '../ui/screens/Discover/Index';
import Profile from '../ui/screens/Profile/Index';
import Notifications from '../ui/screens/Notifications/Index';
import Playlist from '../ui/screens/Playlist/Playlist';
import UploadSong from '../ui/screens/UploadSong/Index';
//import UploadVideo from '../ui/screens/UploadVideo/index';
import Saved from '../ui/screens/Saved/Index';
import Premium from '../ui/components/Premium/Index';
import EditProfile from '../ui/components/ProfileMenu/EditProfile';
import Countdown from '../ui/components/Countdown/Index';
import PlayNotification from '../ui/screens/Playlist/PlayNotification';
import VideoNotification from '../ui/screens/VideoPlay/VideoNotification';
import VideoPlay from '../ui/screens/VideoPlay/Index';
import Comments from '../ui/components/Comments/Index';
import AccountType from '../ui/screens/UserAccount/AcountType';
import SignIn from '../ui/screens/UserAccount/SignIn';
import Register from '../ui/screens/UserAccount/Register';
import Search from '../ui/screens/Search/Index';

// const Stack = createNativeStackNavigator();
const Stack = createStackNavigator();

const Routes = ({}) => {
  return (
    <Stack.Navigator
      // initialRouteName="SplashScreen"
      initialRouteName="Dashboard"
      screenOptions={{
        headerShown: false,
      }}>

        <Stack.Group>
      <Stack.Screen name="Dashboard" component={Dashboard} />	  
      <Stack.Screen name="Challenge" component={Challenge} />	 
      <Stack.Screen name="Discover" component={Discover} />	 
      <Stack.Screen name="Profile" component={Profile} />	 
      <Stack.Screen name="Notifications" component={Notifications} />	 
      
      <Stack.Screen name="SignIn" component={SignIn} />	 
      <Stack.Screen name="Register" component={Register} />	
      </Stack.Group>

      <Stack.Group screenOptions={{ presentation: 'modal' }}>
      <Stack.Screen name="Playlist" component={Playlist} />
      <Stack.Screen name="UploadSong" component={UploadSong} />
      <Stack.Screen name="Saved" component={Saved} />
      <Stack.Screen name="Premium" component={Premium} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="Countdown" component={Countdown} />
      <Stack.Screen name="PlayNotification" component={PlayNotification} />
      <Stack.Screen name="VideoPlay" component={VideoPlay} />
      <Stack.Screen name="VideoNotification" component={VideoNotification} />
      <Stack.Screen name="Comments" component={Comments} />
      <Stack.Screen name="AccountType" component={AccountType} />
      <Stack.Screen name='Search' component={Search} />

      </Stack.Group>

    </Stack.Navigator>
  );
};
export default Routes;