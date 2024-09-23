import React, {Fragment} from 'react';
import {View, Text, TouchableOpacity, Image, StyleSheet, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import Icon from 'react-native-vector-icons/Ionicons';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import Icons from 'react-native-vector-icons/MaterialIcons';

const Navbar = ({navigation, activePage, backgroundColor}) => {
  return (
    <Fragment>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          backgroundColor: '#273341',
          paddingTop: 15,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingBottom: Platform.OS === 'ios' ? 40 : 15,
        }}>
        <TouchableOpacity
        activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Dashboard');
          }}>
           <Icons
            name={'roofing'}
            size={RFValue(24)}
            color={activePage === 'home' ? '#1cc88a' : '#C0B9B9'}
            style={{ marginTop: 0 }} />
        </TouchableOpacity>

        <TouchableOpacity
                activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Challenge');
          }}> 
          
          <IconM
          name={'movie-open'}
          size={RFValue(24)}
          color={activePage === 'challenge' ? '#1cc88a' : '#C0B9B9'}
          style={{ marginTop: 0 }} />
        </TouchableOpacity>

        <TouchableOpacity
                activeOpacity={0.8}
                style={{alignItems:'center',justifyContent:'center',
                 }}
                onPress={() => navigation.navigate('Discover', {mycat: 'All'})}>
          <Icon
            name={'flame-outline'}
            size={RFValue(24)}
            color={activePage === 'discover' ? '#f27415' : '#C0B9B9'}
            style={{ marginTop: -2 }} />
        </TouchableOpacity>

        <TouchableOpacity
                activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Notifications');
          }}>
         <Icon
            name={'notifications-outline'}
            size={RFValue(24)}
            color={activePage === 'notifications' ? '#1cc88a' : '#C0B9B9'}
            style={{ marginTop: 0 }} />
        </TouchableOpacity>

        <TouchableOpacity
                activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Profile', {userID : '234'});
          }}>
           
          <Image
            source={require('../../../Assets/Images/omah.jpg')}
            style={{ marginTop:1, width: RFValue(25), height: RFValue(25), borderColor:'#343434', borderWidth: activePage === 'menu' ? 1 : 0, borderRadius: 30, }}
            imageStyle={{ borderRadius: 50 }}
          />
          
        </TouchableOpacity>
      </View>
    </Fragment>
  );
};

export default Navbar;
