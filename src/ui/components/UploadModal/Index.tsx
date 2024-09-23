import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  StatusBar,
  StyleSheet,
  FlatList,
  ActivityIndicator
} from 'react-native';
import Modal from 'react-native-modalbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';
const { width, height } = Dimensions.get('screen');

interface Props {
  isOpen: boolean;
  navigation: any;
  handleChange: () => void;
}

const UploadModal: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <Modal isOpen={props.isOpen}
      style={{ backgroundColor: '#20252B', height: 250, }}
      coverScreen={false}
      swipeArea={200}
      backdropOpacity={0.8}
      backdropColor="#000"
      statusBarTranslucent
      onClosed={props.handleChange}
      keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
      position="bottom">

      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
          backgroundColor: 'transparent',
        }}
        edges={['left', 'right', 'top']}>

        <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
          <View style={styles.modalLine} />
        </View>

        <View
          style={styles.midBg}>

          <TouchableOpacity
          onPress={() => props.navigation.navigate('UploadSong')}
          style={[styles.Row, {borderBottomWidth:StyleSheet.hairlineWidth, borderColor:'#1C2229', paddingVertical:15}]}>
            <IconM
              name={'musical-notes-outline'}
              size={RFValue(20)}
              color={'#fff'}
              style={{ marginRight: 10 }} />

            <MyText style={styles.buttonLabel}>Upload Song</MyText>
          </TouchableOpacity>

          <View style={[styles.RowB, { marginTop: 0, paddingVertical:15}]}>
            <TouchableOpacity 
            onPress={() => props.navigation.navigate('UploadVideo', {challengeID: ''})}
            style={styles.Row}>
              <IconM
                name={'logo-youtube'}
                size={RFValue(20)}
                color={'#fff'}
                style={{ marginRight: 10 }} />
              <MyText style={styles.buttonLabel}>Upload Video</MyText>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => props.navigation.navigate('Premium')}
              style={{ marginTop: 2 }}>
              <Text style={styles.titleLabel}>Upgrade to Premium</Text>
            </TouchableOpacity>
          </View>

        </View>

      </SafeAreaView>
    </Modal>

  )
}

export default UploadModal;