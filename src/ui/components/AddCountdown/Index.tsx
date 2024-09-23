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
  title: any;
  songID: any;
  navigation: any;
  handleChange: () => void;
  handleSubmit: () => void;
}

const AddCountdown: React.FC<Props> = props => {
  const [isLoading, setIsLoading] = React.useState(false);

  const handleSubmit = () => {

  }

  return (
    <Modal isOpen={props.isOpen}
      style={{backgroundColor:'#20252B', height: 500}}
      coverScreen={true}
      swipeArea={600}
      backdropOpacity={0.8}
      backdropColor="#000"
      onClosed={props.handleChange}
      keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
      position="bottom">

      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
          backgroundColor: '#20252B',
        }}
        edges={['left', 'right', 'top']}>

        <View style={{justifyContent:'center', alignSelf:'center'}}>
        <View style={styles.modalLine} />
              </View>

        <View
          style={styles.midBg}>

          <MyText style={[styles.titleLabel, {fontSize:RFValue(18)}]}>Add Song to Countdown</MyText>
          <MyText style={[styles.subLabel, {marginTop:20}]}>Your song gets featured in the Discover section where it gets 
          exposed to the Music Industry's big and small players.{"\n"}{"\n"}
          
          When you request to add a song it is reviewed by our team and must meet standard before it gets approved.{"\n"}{"\n"}
          Available to only Premium members</MyText>   
        
        <MyText style={[styles.titleLabel, {marginTop:40, marginBottom:10}]}>Song Title</MyText>
        <Text style={styles.titleLabel}>{props.title}</Text>

        <View style={[styles.RowB, {marginTop:20}]}>
            <TouchableOpacity onPress={() => handleSubmit()}>
            <View style={styles.button}>
            <MyText style={styles.buttonLabel}>Submit Song</MyText>
            </View>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={() => props.navigation.navigate('Premium')}
            style={{marginTop:15}}>
             <Text style={styles.titleLabel}>Upgrade to Premium</Text>   
            </TouchableOpacity>
            </View>
    
    </View>

    </SafeAreaView>
    </Modal>

  )
}

export default AddCountdown;