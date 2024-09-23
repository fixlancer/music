import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    Platform,
    StatusBar,
    FlatList,
    ActivityIndicator,
    useWindowDimensions,
} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import { activateKeepAwake, deactivateKeepAwake } from '@sayem314/react-native-keep-awake';
import styles from './Styles';
//import VideoPlayer from 'react-native-media-console';
import Video from 'react-native-video';
import convertToProxyURL from 'react-native-video-cache';

const { width, height } = Dimensions.get('screen');

const VideoPlay = ({ navigation, route }) => {

    const { index, data, viewType } = route.params;
    const [FlatRef, setFlatRef] = useState(null);

    const img = require('../../../Assets/Images/omah.jpg');
    const video = require('../../../Assets/Videos/vid2.mp4')

    const [videoData, setVideoData] = useState([])
    const [isLoading, setIsLoading] = React.useState(false);
    const [nextVideo, setNextVideo] = useState(0);


    const challenge = [
        {
          id: 1,
          videoImg: require('../../../Assets/Images/11.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Big Wiz',
          videoUrl: 'https://download.samplelib.com/mp4/sample-5s.mp4',
          videoID: '23450986',
          likes: '300',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1800',
        },
    
        {
          id: 2,
          videoImg: require('../../../Assets/Images/6.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Omah Lay',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '234256',
          likes: '500',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1200',
        },
    
        {
          id: 3,
          videoImg: require('../../../Assets/Images/1.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Davido',
          videoUrl: 'https://download.samplelib.com/mp4/sample-20s.mp4',
          videoID: '21134556',
          likes: '250',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1400',
        },
        {
          id: 3,
          videoImg: require('../../../Assets/Images/03.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Victony',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '2033456756',
          likes: '100',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1900',
        },
        {
            id: 5,
            videoImg: require('../../../Assets/Images/1.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Ayra',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '234558506',
            likes: '290',
            desc: 'From nothing comes great things',
            comments: '50',
            views: '1400',
          },
          {
            id: 6,
            videoImg: require('../../../Assets/Images/01.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Rem United',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '2345675600',
            likes: '1050',
            desc: 'From nothing comes great things',
            comments: '50',
            views: '1900',
          },
      ];
      
    useFocusEffect(
        React.useCallback(() => {
            const goBack = () => {
         //   setPause(true);
            }

            return () => goBack();

        }, []) 
    )


    useEffect(() => {
   
        setVideoData(data);
        setNextVideo(index);

    }, [])

    
    const viewabilityConfig = {
        waitForInteraction: true,
      //  viewAreaCoveragePercentThreshold: 0,
        itemVisiblePercentThreshold: 70,
        minimumViewTime: 1000,
    }

    const onViewableItemsChanged = ({viewableItems}) => {
        console.log('ITem in view', viewableItems[0].index);
        setNextVideo(viewableItems[0].index);
    }

    const viewabilityConfigCallbackPairs = useRef([
        { onViewableItemsChanged },
    ]);

    const nextRender = (index) => { //make sure index is started from 0 and not 1
        if(nextVideo + 1 >= challenge.length){
            //setNextVideo(index);
            return;

        } else {
            
            if(viewType == 'Dashboard' && challenge.length >= nextVideo + 10) {
                
        //    FlatRef.scrollToIndex({animated: true, index: nextVideo + 10});
            setNextVideo(nextVideo => nextVideo + 10);

            } else {
         //   FlatRef.scrollToIndex({animated: true, index: nextVideo + 1});
            setNextVideo(nextVideo => nextVideo + 1);
            }
        }
    }

    const loading = () => {
        return (
            <View style={{position:'absolute', top: 0, right:0, left:0, alignItems:'center'}}>
            <ActivityIndicator size={'large'} color={'#fff'} />
            </View>
        )
    }

    const ItemVideo = ({item, index}) => {
        const [ready, setReady] = useState(true);
        
       
      const bufferConfig = {
        minBufferMs: 100,
        maxBufferMs:300,
        bufferForPlaybackMs: 100,
        bufferForPlaybackAfterRebufferMs: 100
      }

        return (
    
<>


     <View style={{alignItems:'center',position:'absolute', top: 0, right: 0, left:0, bottom:0,
            }}
            >
            
               <Video
                    source={{uri: convertToProxyURL(item.videoUrl)}}
                    controls={false}
                    bufferConfig={bufferConfig}
                    repeat={true}
                    paused={ready}
                    onEnd={() => nextRender(item.id)}
                    onLoad={() => {
                        if(nextVideo == index){
                            setReady(false)
                    }
                }}
                poster={'https://fixlancer.com/fejora/images/bgVideo.png'}
                    onLoadStart={loading} 
                    resizeMode={'contain'}
                    style={{alignSelf:'center',height:'100%',width:'100%', position:'relative'}} />
                  
            </View>

            <View
                            style={styles.midBg}>

    
                        <View style={{ paddingHorizontal: 15,  }}>
    
                            <View style={[styles.RowB, { marginTop: 10, }]}>
                                <View style={{ justifyContent: 'flex-end' }}>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Profile', { userID: '346' })}
                                        style={styles.Row}>
                                        
                                        <MyText style={[styles.subLabel, { marginTop: 5 }]}>{item.artist}</MyText>
                                    </TouchableOpacity>
    
        <MyText style={[styles.subLabel, { marginVertical: 10, fontSize: RFValue(12), color: '#fff' }]}>{item.desc}</MyText>
    
                                </View>
                                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                  
                                    <TouchableOpacity
                                    >
                                        <IconM
                                            name={'heart-outline'}
                                            size={RFValue(25)}
                                            color={'#fff'}
                                            style={{ marginBottom: 0, }} />
 <MyText style={[styles.subLabel, { fontSize: RFValue(11), color: '#fff', marginBottom: 15, textAlign: 'center' }]}>{item.likes}</MyText>
                                    </TouchableOpacity>
    
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate('Comments', {contentID : item.videoID})}>
                                        <IconM
                                            name={'chatbubble-outline'}
                                            size={RFValue(25)}
                                            color={'#fff'}
                                            style={{ marginBottom: 0, }} />
    
    <MyText style={[styles.subLabel, { fontSize: RFValue(11), color: '#fff', marginBottom: 15, textAlign: 'center' }]}>{item.comments}</MyText>
    
                                    </TouchableOpacity>
    
    
                                    <TouchableOpacity>
                                    <IconM
                                        name={'bookmark-outline'}
                                        size={RFValue(25)}
                                        color={'#fff'}
                                        style={{ marginBottom: 20 }} />
                                    </TouchableOpacity>    
    
                                      <Icon
                                        name={'visibility'}
                                        size={RFValue(22)}
                                        color={'#808080'}
                                        style={{  }} />
                                        
     <MyText style={[styles.subLabel, { fontSize: RFValue(11), color: '#fff', marginBottom: 15, textAlign: 'center' }]}>{item.views}</MyText>
                                                                                   
    
                                </View>
                            </View>
    
    
                        </View>

                        </View>
    
   
    </>
    
        )
    }
    
    const renderVideo = ({ item, index }) => {

        return (
        
        <ItemVideo item={item} index={index}  />
        
        )
    }


    return (

        <View style={styles.container}>
<SafeAreaView
                style={{
                    height: height,
                    width: '100%',
                  //  flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

                <View style={{position:'absolute', top:40,
                            paddingHorizontal: 15,
                            paddingBottom: 0, paddingRight: 20, zIndex: 99
                        }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <IconM
                                    name={'chevron-down'}
                                    size={RFValue(30)}
                                    color={'#fff'}
                                    style={{ marginTop: 0 }} />
    
                            </TouchableOpacity>
                        </View>

        <FlatList
        data={challenge}
        key={'_'}
        ref={(ref) => setFlatRef(ref)}
        renderItem={renderVideo}
        keyExtractor={item => '_' + item.videoID}
        viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
        viewabilityConfig={viewabilityConfig}
        snapToAlignment={'start'}
        decelerationRate={'fast'}
        snapToInterval={height}
  
        initialScrollIndex={index}
        />
    
    
        
            
   </SafeAreaView>

        </View>
    );
};


export default VideoPlay;
