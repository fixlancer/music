import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import * as Progress from 'react-native-progress';
import SoundPlayer from 'react-native-sound-player';
import { activateKeepAwake, deactivateKeepAwake } from '@sayem314/react-native-keep-awake';
import styles from './Styles';
import MyComments from '../../components/Comments/Index';

const { width, height } = Dimensions.get('screen');


const VideoNotification = ({navigation, route}) => {

  const { videoID} = route.params;
  
  const [artist, setArtist] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [artistID, setArtistID] = useState('');
  const [likes, setLikes] = useState('');
  const [views, setViews]= useState('');

  const [isLoading, setIsLoading] = React.useState(false);
  const [playPosition, setPlayPosition] = useState(0);
  const [playDuration, setPlayDuration] = useState(0)
  const [progress, setProgress] = useState(0);
  const [info, setInfo] = useState(false);
  const [pause, setPause] = useState(false);
  const playTotal = playPosition / playDuration;
  const [loaded, setLoaded] = useState(true);
  const [iscomments, setIsComments] = useState(false);
  const [start, setStart] = useState(0);

  const openComments = () => {
    setIsComments(true);
  }

  const closeComment = () => {
    setIsComments(false);
  }


  useFocusEffect(
    React.useCallback(() => {
      const goBack = () => {
        SoundPlayer.stop();
        deactivateKeepAwake();
        setLoaded(true);
        setPlayDuration(0);
        setPlayPosition(0);
        setPause(false);
      }

      return () => goBack();

    }, [playPosition])
  )


 
  return (
    <View style={styles.container}>

      <SafeAreaView
        style={{
          height: height,
          width: width,
          flex: 1,
          backgroundColor: '#000',
        }}
        edges={['left', 'right', 'top']}>
        <StatusBar translucent barStyle="light-content" backgroundColor="#000" />

{Platform.OS === 'ios' ? (
  <View style={styles.modalHeader}>
<View style={styles.modalLine} />
             
              </View>
) : (

<View style={{paddingHorizontal:15, paddingTop:20, paddingBottom:20}}>
<TouchableOpacity onPress={() => navigation.goBack()}>
<IconM
                name={'chevron-down'}
                size={RFValue(30)}
                color={'#fff'}
                style={{ marginTop:-5 }} />

</TouchableOpacity>        
 </View>
)}

        <View
          style={styles.midBg}>

     

          <View style={[styles.Row, { justifyContent: 'center', alignItems: 'center', marginTop: 10, }]}>
            <Text style={[styles.subLabel, { marginRight: 10, fontSize: RFValue(11), color: '#565555' }]}>{views} plays</Text>
            <MyText style={[styles.subLabel, { fontSize: RFValue(11), color: '#565555' }]}>{likes} likes</MyText>
          </View>
        </View>


        <View style={{ paddingBottom: 30, paddingHorizontal: 15 }}>
          <View style={[styles.RowB, { marginTop: 40, }]}>
            <View>
              <TouchableOpacity
              onPress={() =>navigation.navigate('Profile', {userID: '346'})}>
              <MyText style={[styles.subLabel, {marginTop:5}]}>{artist}</MyText>
              </TouchableOpacity>
            </View>
            <View style={styles.Row}>

              <IconM
                name={'heart-outline'}
                size={RFValue(22)}
                color={'#fff'}
                style={{ marginTop: 0, marginRight: 15 }} />

                <TouchableOpacity 
                onPress={() => openComments()}>
              <IconM
                name={'chatbubble-outline'}
                size={RFValue(22)}
                color={'#fff'}
                style={{ marginTop: 0, marginRight: 15 }} />
                </TouchableOpacity>

              <IconM
                name={'bookmark-outline'}
                size={RFValue(22)}
                color={'#fff'}
                style={{ marginTop: 0 }} />
            </View>
          </View>


        </View>


</SafeAreaView>

<MyComments
isOpen={iscomments}
itemID={videoID}
navigation={navigation}
handleChange={closeComment}
/>

    </View>

  );
};


export default VideoNotification;
