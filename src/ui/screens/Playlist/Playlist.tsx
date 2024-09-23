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
import SongInfo from './SongInfo';

const { width, height } = Dimensions.get('screen');


const Playlist = ({ navigation, route }) => {

  const { title, artist, artistID, songUrl, songID, artwork, likes, comments, stream, desc } = route.params;

  const [isLoading, setIsLoading] = React.useState(false);
  const [playPosition, setPlayPosition] = useState(0);
  const [playDuration, setPlayDuration] = useState(0)
  const [progress, setProgress] = useState(0);
  const [info, setInfo] = useState(false);
  const [pause, setPause] = useState(false);
  const playTotal = playPosition / playDuration;
  const [loaded, setLoaded] = useState(true);
  const [start, setStart] = useState(0);

  const openInfo = () => {
    setInfo(true);
  }

  const closeInfo = () => {
    setInfo(false);
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

/*
  useEffect(() => {
    
      setTimeout(() => {
        setStart(1);
        try {
          SoundPlayer.loadUrl(songUrl);
        }
        catch (e) {

        }

      }, 1000);

      const eventSubscribe = SoundPlayer.addEventListener('FinishedLoadingURL', ({ success, url }) => {
        Info();
        SoundPlayer.play();
        activateKeepAwake();
        setLoaded(false);
      })
      return () => eventSubscribe.remove();

     
  }, [start]);
  */


  useEffect(() => {
    Info();

    if (playPosition == playDuration) {
      deactivateKeepAwake();
    }

  }, [playPosition])


  useEffect(() => {
    Info();

  }, [pause])


  const PlaySong = () => {
    try {
      SoundPlayer.resume();
      setPause(false);
    }
    catch (e) {
      //
    }
  }

  const PauseSong = () => {
    try {
      SoundPlayer.pause();
      setPause(true);
    }
    catch (e) {
      //
    }
  }

  const ReplaySong = () => {
    try {
      SoundPlayer.seek(0)
    }
    catch (e) {
      //
    }
  }

  const Info = async () => {
    try {
      const info = await SoundPlayer.getInfo();

      if (playPosition < info.duration / 60) {
        setPlayPosition(info.currentTime / 60);
      }

      setProgress(playTotal * 100)
      setPlayDuration(info.duration / 60);
    }
    catch (e) {
      //
    }
  }

  const SeekSong = () => {
    try {
      SoundPlayer.seek(10)
    }
    catch (e) {
      //
    }
  }



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

          <View style={{ paddingHorizontal: 15, paddingTop: 20, paddingBottom: 20 }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconM
                name={'chevron-down'}
                size={RFValue(30)}
                color={'#fff'}
                style={{ marginTop: -5 }} />

            </TouchableOpacity>
          </View>
        )}

        <View
          style={styles.midBg}>

          <Image
            source={artwork}
            style={styles.artwork}
            imageStyle={{ borderRadius: 20 }}
          />

        </View>


        <View style={{ paddingBottom: 30, paddingHorizontal: 15 }}>
          <View style={[styles.RowB, { marginTop: 40, }]}>
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('Profile', { userID: artistID })}>
                <MyText style={[styles.subLabel, { paddingTop: 5 }]}>{artist}</MyText>
              </TouchableOpacity>
            </View>
            <View style={styles.Row}>

              <TouchableOpacity>
                <IconM
                  name={'heart-outline'}
                  size={RFValue(22)}
                  color={'#fff'}
                  style={{ marginTop: 0, marginRight: 20 }} />
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigation.navigate('Comments', {itemID: songID })}>
                <IconM
                  name={'chatbubble-outline'}
                  size={RFValue(22)}
                  color={'#fff'}
                  style={{ marginTop: 0, marginRight: 20 }} />
              </TouchableOpacity>

              
              <IconM
                name={'bookmark-outline'}
                size={RFValue(22)}
                color={'#fff'}
                style={{ marginTop: 1 }} />
            
            </View>

        </View>

        
          <Text style={styles.titleLabel}>{title}</Text>

        <Text numberOfLines={1} style={[styles.subLabel, { color: '#fff' }]}>{desc}</Text>

        <TouchableOpacity
          onPress={openInfo}
          style={{ marginTop: 0 }}>
          <MyText style={[styles.subLabel, { color: '#f27415', fontSize: RFValue(12) }]}>See More</MyText>
        </TouchableOpacity>

        <View style={{ marginTop: 15, height: 30 }}>

          {!loaded ? (
            <View style={styles.RowB}>
              <MyText style={[styles.subLabel, { color: '#565555', fontSize: RFValue(9) }]}>{playPosition}</MyText>
              <MyText style={[styles.subLabel, { color: '#565555', fontSize: RFValue(9) }]}>{playDuration}</MyText>
            </View>
          ) : null}
        </View>



        <View style={[styles.RowB, { marginTop: 10, paddingHorizontal: 30, }]}>
          <TouchableOpacity
            onPress={ReplaySong}>

            <IconM
              name={'play-back-outline'}
              size={RFValue(30)}
              color={'#fff'}
              style={{ marginTop: 5, }} />

          </TouchableOpacity>

          {loaded ? (
            <View style={{ height: 45 }}>
              <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
          ) : (

            pause === false ? (

              <TouchableOpacity
                onPress={PauseSong}>
                <IconM
                  name={'pause-circle-outline'}
                  size={RFValue(45)}
                  color={'#fff'}
                  style={{ marginTop: 0 }} />
              </TouchableOpacity>

            ) : (
              <TouchableOpacity
                onPress={PlaySong}>
                <IconM
                  name={'play'}
                  size={RFValue(45)}
                  color={'#fff'}
                  style={{ marginTop: 0 }} />
              </TouchableOpacity>
            )

          )}


          <TouchableOpacity
            onPress={ReplaySong}>

            <IconM
              name={'play-forward-outline'}
              size={RFValue(30)}
              color={'#fff'}
              style={{ marginTop: 5 }} />
          </TouchableOpacity>

        </View>

    </View>


</SafeAreaView >


<SongInfo
isOpen={info}
desc={desc}
handleChange={closeInfo}
/>


    </View >

  );
};


export default Playlist;
