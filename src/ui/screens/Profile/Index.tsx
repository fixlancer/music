import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';

//import SongGrid from '../../components/SongGrid/Index';
import SongList from '../../components/SongList/Index';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';
import VideoGrid from '../../components/VideoGrid/Index';
import UploadModal from '../../components/UploadModal/Index';
import ProfileMenu from '../../components/ProfileMenu/Index';

const ItemSong = ({ item, index, navigation }) => {

  return (
    <View key={item.id} style={{ marginTop: 0 }}>
      <SongList
      index={item.id}
        artwork={item.artwork}
        title={item.title}
        artist={item.artist}
        artistID={item.artistID}
        songUrl={item.songUrl}
        songID={item.songID}
        likes={item.likes}
        comments={item.comments}
        stream={item.stream}
        desc={item.desc}
        onDiscover={item.onDiscover}
        viewType={'Profile'}
        navigation={navigation}

      />
    </View>
  )
}

const ItemVideo = ({ item, index, navigation, video }) => {

  return (
    <View key={item.id}>

      <VideoGrid
        index={index}
        data={video}
           videoImg={item.videoImg}
           videoUrl={item.videoUrl}
           navigation={navigation}
           viewType={'FlatList'}
      />
    </View>
  )
}


const Profile = ({ route, navigation }) => {
  const { userID } = route.params;
  const displayName = 'omahlaid';
  const username = 'Omah Lay';
  const premium = 0;
  const userType = 'Artist'; //Artist or Listener

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [category, setCategory] = useState('Songs');

  const [addSong, setAddSong] = useState(false);
  const [menu, setMenu] = useState(false);

  const profileImg = require('../../../Assets/Images/omah.jpg');
  const desc = 'A young boy alone with music ready to be the next big thing. Yes the next rated taalent';
  const phone = '08130000000';
  const email = 'tj@gmail.com'

  const openSong = () => {
    setAddSong(true);
  }

  const closeSong = () => {
    setAddSong(false);
  }

  const openMenu = () => {
    setMenu(true);
  }

  const closeMenu = () => {
    setMenu(false);
  }

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
      desc: 'From nothing comes great things',
      comments: '50',
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
      desc: 'From nothing comes great things',
      comments: '50',
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
  ]

  const played = [
    {
      id: '1',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Bad Influence',
      artist: 'Omah Lay',
      artistID: 1234,
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456',
      likes: '200',
      comments: '300',
      stream: '1200',
      onDiscover: 1,
      desc: 'A young boy alone with music ready to be the next big thing...'
    },

    {
      id: '2',
      artwork: require('../../../Assets/Images/04.png'),
      title: 'Rush',
      artist: 'Ayra Starr',
      artistID: 1234,
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556',
      likes: '250',
      comments: '300',
      stream: '1400',
      onDiscover: 0,
      desc: 'A young boy alone with music ready to be the next big thing...'
    },
    {
      id: '3',
      artwork: require('../../../Assets/Images/03.jpg'),
      title: 'Rosemary',
      artist: 'Victony',
      artistID: '0987',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456756',
      likes: '100',
      comments: '300',
      stream: '1900',
      onDiscover: 0,
      desc: 'A young boy alone with music ready to be the next big thing...'
    },

    {
      id: '4',
      artwork: require('../../../Assets/Images/011.jpg'),
      title: 'Fake Love',
      artist: 'Big Wiz',
      artistID: '456789',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '2345096',
      likes: '300',
      comments: '300',
      stream: '1800',
      onDiscover: 1,
      desc: 'A young boy alone with music ready to be the next big thing...'
    },
  ];


  const RenderItem = ({ item, index }) => {
    return (
      <ItemSong item={item} index={index} navigation={navigation} />
    )

  }


  const RenderVideo = ({ item, index }) => {
    return (
      <ItemVideo item={item} index={index} navigation={navigation} video={video} />
    )

  }

const Header = () => {

  return (
<>

    <View style={styles.header}>
    <View style={[styles.bgOverlay, {}]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name={'arrow-back-ios'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ marginLeft:4, alignSelf: 'center' }} />
      </TouchableOpacity>
    </View>

<View style={styles.Row}>
<TouchableOpacity onPress={() => openSong()}>
      <View style={styles.bgOverlay}>
        <IconM
          name={'add-outline'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ alignSelf: 'center', marginTop: 1, marginLeft: 0.5, }} />

      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openMenu()}>
      <View style={[styles.bgOverlay, {marginLeft:10}]}>
        <Icons
          name={'menu'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ alignSelf: 'center', marginTop: 1, marginLeft: 0.5, }} />

      </View>
    </TouchableOpacity>
    </View>

  </View>
  </>
  )
}




const HeaderTop = () => {

  return (

<>
    <View style={[styles.header, {backgroundColor:'#16191e',marginTop:-40, height:90,paddingTop:55}]}>
    <View style={[styles.bgOverlay, { }]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          name={'arrow-back-ios'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ marginLeft:4, alignSelf: 'center' }} />
      </TouchableOpacity>
    </View>

<View style={styles.Row}>
<TouchableOpacity onPress={() => openSong()}>
      
<View style={styles.bgOverlay}>
        <IconM
          name={'add-outline'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ alignSelf: 'center', marginTop: 1, marginLeft: 0.5, }} />

      </View>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => openMenu()}>
      <View style={[styles.bgOverlay, {marginLeft:10}]}>
        <Icons
          name={'menu'}
          size={RFValue(20)}
          color={'#fff'}
          style={{ alignSelf: 'center', marginTop: 1, marginLeft: 0.5, }} />

      </View>
    </TouchableOpacity>
    </View>

  </View>

  </>
  )
}


  return (

    <>


<AnimatedScrollView
      HeaderNavbarComponent={<Header />}
      TopNavBarComponent={<HeaderTop />}
      topBarHeight={80}
      headerMaxHeight={372}
      headerImage={profileImg}
    >

<View style={styles.profileBg}>
          <View style={[styles.Row, { paddingHorizontal: 15 }]}>
            <MyText style={styles.nameLabel}>{displayName}</MyText>
            <MyText style={styles.namesubLabel}>@{username}</MyText>
          </View>

            <View style={styles.midBg}>
              <View style={{paddingHorizontal:15,}}>
              <MyText style={styles.subLabel}>{desc}</MyText>
              </View>

              <View style={[styles.Row, styles.info]}>

                <View style={[styles.Row, { marginRight: 30, }]}>
                  <IconM
                    name={'call-outline'}
                    size={RFValue(20)}
                    color={'#fff'}
                    style={{ alignSelf: 'center' }} />
                  <MyText selectable={true} style={[styles.subLabel, { marginLeft: 5, marginTop: 2 }]}>{phone}</MyText>

                </View>

                <View>
                  <MyText selectable={true} style={styles.subLabel}>{email}</MyText>

                </View>
              </View>

              <View style={[styles.Row, {width:'100%'}]}>
                      <TouchableOpacity
                        onPress={() => setCategory('Songs')}
                        style={[styles.cat, {  borderBottomWidth: 1, borderColor: category === 'Songs' ? '#fff' : 'transparent', }]}>
                        <IconM
                    name={'musical-notes-outline'}
                    size={RFValue(22)}
                    color={category === 'Songs' ? '#f27415' : '#808080'}
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

              <View style={{paddingHorizontal:15}}>
              {category === 'Songs' ? (

                <View style={{ marginTop: 20, }}>

                  {played && played.map((item, index) => {
                    return (
                      <View key={item.id}>
                        <RenderItem item={item} index={index} />
                      </View>
                    )
                  })}
                </View>
              ) : (

                <View style={{ marginTop: 20, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'flex-start', }}>

                  {video && video.map((item, index) => {
                    return (
                      <View key={item.id}>
                        <RenderVideo item={item} index={index} />
                      </View>
                    )
                  })
                  }
                </View>

              )}
              </View>

            </View>
        </View>
    </AnimatedScrollView>
  
      <UploadModal
        isOpen={addSong}
        handleChange={closeSong}
        navigation={navigation}

      />

      <ProfileMenu
      isOpen={menu}
      userID={userID}
      premium={premium}
      userType={userType}
      handleChange={closeMenu}
      navigation={navigation}
      />

    </>

  );
};

export default Profile;

