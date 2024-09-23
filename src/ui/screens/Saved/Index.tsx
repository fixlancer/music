import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
    Image,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    StyleSheet,
    ScrollView,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';
import VideoGrid from '../../components/VideoGrid/Index';
import SongList from '../../components/SongList/Index';

const ItemVideo = ({item, index, navigation, video}) => {

    return (
        <VideoGrid
        index={index}
        data={video}
           videoImg={item.videoImg}
           videoUrl={item.videoUrl}
           navigation={navigation}
           viewType={''}
      />
   
    )
  }


  const ItemSong = ({item, index, navigation}) => {
    return (
        <SongList
        index={index}
        artwork={item.artwork}
        title={item.title}
        artist={item.artist}
        artistID={item.artistID}
        songUrl={item.songUrl}
        songID={item.songID}
        likes={item.likes}
        comments={item.comments}
        stream={item.stream}
        onDiscover={item.onDiscover}
        desc={item.desc}
        viewType={'Normal'}
        navigation={navigation}
  
        />    
    )
  } 

  
const Saved = ({ route, navigation }) => {
    const { userID } = route.params;

    const [isLoading, setisLoading] = useState(false);
    const [category, setCategory] = useState('Song');

    const video = [
        {
            id: '1',
            videoImg: require('../../../Assets/Images/11.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Big Wiz',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '2345096',
            likes: '300',
            desc: 'From nothing comes great things',
            comments: '50',
            views: '1800',
          },
      
          {
            id: '2',
            videoImg: require('../../../Assets/Images/6.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Omah Lay',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '23456',
            likes: '500',
            comments: '50',
            desc: 'From nothing comes great things',
            views: '1200',
          },
      
          {
            id: '3',
            videoImg: require('../../../Assets/Images/1.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Davido',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '234556',
            likes: '250',
            comments: '50',
            desc: 'From nothing comes great things',
            views: '1400',
          },
          {
            id: '4',
            videoImg: require('../../../Assets/Images/3.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Bella',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '23456756',
            likes: '100',
            desc: 'From nothing comes great things',
            comments: '50',
            views: '1900',
          },
      ];
    
    const songs = [
      {
        id: '1',
        artwork: require('../../../Assets/Images/11.jpg'),
        title: 'Fake Love',
        artist: 'Big Wiz',
        artistID: '458',
        songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
        songID: '245096',
        likes: '300',
        comments: '300',
        stream: '1800',
        desc: 'A young boy alone with music ready to be the next big thing...',
        onDiscover: 1,
        cat: 'Afrobeats'
      },
  
      {
        id: '2',
        artwork: require('../../../Assets/Images/6.jpg'),
        title: 'Soso',
        artist: 'Omah Lay',
        artistID: '39',
        songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
        songID: '23456',
        likes: '500',
        comments: '300',
        stream: '1200',
        desc: 'A young boy alone with music ready to be the next big thing...',
        onDiscover: 1,
        cat: 'Afrobeats'
      },
  
      {
        id: '3',
        artwork: require('../../../Assets/Images/1.jpg'),
        title: 'Stand Strong',
        artist: 'Davido',
        artistID: '234',
        songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
        songID: '234556',
        likes: '250',
        comments: '300',
        stream: '1400',
        desc: 'A young boy alone with music ready to be the next big thing...',
        onDiscover: 1,
        cat: 'Jazz'
      },
      {
        id: '4',
        artwork: require('../../../Assets/Images/03.jpg'),
        title: 'Rosemary',
        artist: 'Victony',
        artistID: '3458',
        songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
        songID: '2345675s6',
        likes: '100',
        comments: '300',
        stream: '1900',
        desc: 'A young boy alone with music ready to be the next big thing...',
        onDiscover: 1,
        cat: 'Afrobeats',
      },
    ];  

      const renderSong = ({item, index}) => {
    
        return (
          
       <ItemSong item={item} index={index} navigation={navigation} />       
    
    )
      }

      
      const renderVideo = ({item, index}) => {
    
        return (
          
       <ItemVideo item={item} index={index} navigation={navigation} video={video} />       
    
    )
      }


      const fetchMore = () => {

    }

      
  const seperator = () => {
    return (
      <View style={{ height: 1, width:'100%', backgroundColor:'#000'}} />
    )
  }


  
  const seperator2 = () => {
    return (
        <View style={{height: StyleSheet.hairlineWidth, width:'100%', backgroundColor:'#323A44'}}></View>
    )
}
 

const fetchMoreSong = () => {

}


return (

        <View style={styles.container}>

            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />


                <View style={styles.header}>

                    <TouchableOpacity onPress={() => navigation.goBack()}>
                    <IconM
                name={'chevron-down'}
                size={RFValue(30)}
                color={'#fff'}
                style={{ marginTop:-5 }} />

                    </TouchableOpacity>
                    <Text style={styles.titleLabel}>Saved</Text>
                    <MyText></MyText>
                </View>

                <View style={[styles.Row, {paddingHorizontal:0}]}>
                <TouchableOpacity
                        onPress={() => setCategory('Song')}
                        style={[styles.cat, {  borderBottomWidth: 1, borderColor: category === 'Song' ? '#fff' : 'transparent', }]}>
                        <IconM
                    name={'musical-notes-outline'}
                    size={RFValue(22)}
                    color={category === 'Song' ? '#f27415' : '#808080'}
                    style={{ alignSelf: 'center' }} />
                      </TouchableOpacity>

                      <TouchableOpacity
                        onPress={() => setCategory('Video')}
                        style={[styles.cat, { borderBottomWidth: 1, borderColor: category === 'Video' ? '#fff' : 'transparent', }]}>
                        <IconM
                    name={'logo-youtube'}
                    size={RFValue(22)}
                    color={category === 'Video' ? '#f27415' : '#808080'}
                    style={{ alignSelf: 'center' }} />
                      </TouchableOpacity>
              </View>


                    <View style={styles.midBg}>

                    {category === 'Song' ? (
                        <View style={{paddingHorizontal:15}}>
                             <FlatList
                             data={songs}
                             renderItem={renderSong}
                             keyExtractor={item => item.songID}
                             initialNumToRender={10}
                             onEndReached={fetchMoreSong}
                             onEndReachedThreshold={0.01}
                             ItemSeparatorComponent={seperator2}
                             />
                             </View>
                    ) : (

                        <FlatList
                        data={video}
                        key={'_'}
                        renderItem={renderVideo}
                        keyExtractor={item => '_' + item.videoID}
                        initialNumToRender={20}
                        onEndReached={fetchMore}
                        onEndReachedThreshold={0.01}
                        numColumns={3}
                        ItemSeparatorComponent={seperator}
                        
                        />

                    )}

                    </View>



                </SafeAreaView>

                </View>
                
    )}

    export default Saved;
    
export const ItemFnc = React.memo(ItemVideo);

export const ItemFncS = React.memo(ItemSong);