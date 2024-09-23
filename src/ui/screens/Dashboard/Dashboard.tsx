import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef } from 'react';
import {
  Image,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  RefreshControl,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import SongGrid from '../../components/SongGrid/Index';
import SongList from '../../components/SongList/Index';
import styles from './Styles';
import Artist from '../../components/Artist/Index.tsx';

const Dashboard = ({ route, navigation }) => {
  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);

  const toast = useToast();


  const handleRefresh = () => {
    //  setisRefreshing(true);
    //  setisLoading(true);

  }

  const countdown = [
    {
      id: '1',
      artwork: require('../../../Assets/pick1.jpg'),
      title: 'Talent Rising',
      countdownID: '26',
      desc: "Top 20 tracks this week that stand shoulder-to-shoulder with Naijia's biggest hits",
      instructions: '',
      status: 'Active',
      entryFee: 0,
      expiry: 0,
      entryExpiry: '',
      selectionBased: false,
      dateUpdated: 'Last Week',
    },
    {
      id: '2',
      artwork: require('../../../Assets/pick2.jpg'),
      title: 'Banga',
      countdownID: '56',
      desc: 'Tracks that meet a standard of quality by which we call "good music", regardless of style',
      instructions: 'Vibe to your favourite music in no less than 60 seconds and stand a chance of winning amazing prizes',
      status: 'Active',
      entryFee: 100,
      expiry: 0,
      entryExpiry: '31st March. 2023',
      selectionBased: true,
      dateUpdated: 'February',
    },
  ];



  const challenge = [
    {
      id: '1',
      challengeImg: require('../../../Assets/Images/011.jpg'),
      challenegID: '3456',
      title: 'FakeLove',
      videos: '1300',
      status: 'Active',
    },
  ];

  const challengeVideo = [
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
      videoImg: require('../../../Assets/Images/03.jpg'),
      artistImg: require('../../../Assets/Images/11.jpg'),
      artistID: '456',
      artist: 'Victony',
      videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
      videoID: '23456756',
      likes: '100',
      comments: '50',
      views: '1900',
    },
    {
      id: '5',
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
      id: '6',
      videoImg: require('../../../Assets/Images/01.jpg'),
      artistImg: require('../../../Assets/Images/11.jpg'),
      artistID: '456',
      artist: 'Rem United',
      videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
      videoID: '23456756',
      likes: '100',
      comments: '50',
      views: '1900',
    },
  ];

  const cat = [
    {
      id: '0',
      title: 'All'
    },
    {
      id: '1',
      title: 'Afrobeat'
    },

    {
      id: '2',
      title: 'RnB'
    },
    {
      id: '3',
      title: 'Hip-Hop'
    },

    {
      id: '4',
      title: 'Highlife'
    },
    {
      id: '5',
      title: 'Reggae/Dancehall'
    },

    {
      id: '6',
      title: 'Pop'
    },
    {
      id: '7',
      title: 'Rock'
    },
    {
      id: '8',
      title: 'Amapiano'
    },

    {
      id: '9',
      title: 'Rap'
    },

    {
      id: '10',
      title: 'Freestyles'
    },
  ]


  const artist = [
    {
      id: '1',
      userImg: require('../../../Assets/Images/03.jpg'),
      userID: '1234',
      displayName: 'Omah Lay',
    },

    {
      id: '2',
      userImg: require('../../../Assets/Images/1.jpg'),
      userID: '7654',
      displayName: 'Wizkid',
    },
    {
      id: '3',
      userImg: require('../../../Assets/Images/11.jpg'),
      userID: '987345',
      displayName: 'Bella schmurda',
    },

    {
      id: '4',
      userImg: require('../../../Assets/Images/3.jpg'),
      userID: '34509',
      displayName: 'Burna Boy',
    },
    {
      id: '5',
      userImg: require('../../../Assets/Images/4.jpg'),
      userID: '345',
      displayName: 'Victony',
    },

    {
      id: '6',
      userImg: require('../../../Assets/Images/01.jpg'),
      userID: '3345',
      displayName: 'Rema',
    },
  ];


  const played = [
    {
      id: '1',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Bad Influence',
      artist: 'Omah Lay',
      artistID: '1234',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456',
      likes: '200',
      comments: '300',
      stream: '1200',
      desc: 'A young boy alone with music ready to be the next big thing...'
    },

    {
      id: '2',
      artwork: require('../../../Assets/Images/04.png'),
      title: 'Rush',
      artist: 'Ayra Starr',
      artistID: '19876',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556',
      likes: '250',
      comments: '300',
      stream: '1400',
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
      desc: 'A young boy alone with music ready to be the next big thing...'
    },
  ];



  const Video = ({ item, index }) => {
    return (
      <TouchableOpacity key={item.id}
        activeOpacity={0.8}
        onPress={() => navigation.navigate('VideoPlay', { index: index, data: challengeVideo, viewType: 'Dashboard' })}>
        <Image
          source={item.videoImg}
          style={styles.imgVideo}
          imageStyle={{ borderRadius: 20 }}
        />
        <View style={[styles.opacityBg, { width: 171, height: 36, paddingTop: 10, paddingRight: 5 }]}>
          <View style={styles.RowB}>
            <View>
              <MyText style={styles.subLabel}>{item.artist}</MyText>
            </View>

            <View style={styles.Row}>
              <MyText style={styles.subLabel}>{item.views}</MyText>
              <Icon
                name={'visibility'}
                size={RFValue(15)}
                color={'#808080'}
                style={{ marginLeft: 2, marginTop: 0 }} />
            </View>
          </View>
        </View>
      </TouchableOpacity>

    )
  }


  return (

    <View style={styles.container}>
      <SafeAreaView
        style={{
          // height: height + StatusBar.currentHeight,
          // width: width,
          flex: 1,
          backgroundColor: '#20252B',
        }}>
        <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

        <View style={[styles.RowB, { paddingHorizontal: 10, marginTop: 10, paddingBottom: 5 }]}>
          <Text style={[styles.titleLabel, { fontSize: 20, paddingLeft: 0, marginTop: 15 }]}>Hi, Jones</Text>

          <TouchableOpacity
            onPress={() => navigation.navigate('Saved', { userID: '2345' })}
            style={styles.bgSaved}>
            <IconM
              name={'bookmark-outline'}
              size={RFValue(21)}
              color={'#fff'}
              style={{ marginTop: 0, alignSelf: 'center' }} />
          </TouchableOpacity>
        </View>

        <ScrollView>

          <View style={{ marginBottom: 30, marginTop: 10, paddingLeft: 15, }}>

            <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>

              {cat && cat.map((item, index) => {
                return (
                  <View key={item.id} style={styles.RowB}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Discover', { mycat: item.title })}
                      style={[styles.cat, {backgroundColor: item.title === 'All' ? '#f27415' : '#1B2025' }]}>
                      <MyText style={[styles.catLabel,]}>{item.title}</MyText>
                    </TouchableOpacity>

                  </View>
                )
              })
              }

            </ScrollView>
          </View>

          <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 30, }} horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={[styles.Row, { marginBottom: 0, paddingLeft: 15, }]}>
              <View>
                {challenge && challenge.map((item, index) => {
                  return (
                    <TouchableOpacity key={item.id}
                      onPress={() => navigation.navigate('Challenge')}>
                      <Image
                        source={item.challengeImg}
                        style={styles.imgChallenge}
                        imageStyle={{ borderRadius: 20 }}
                      />
                      <View style={styles.opacityBg}>
                        <View style={styles.RowB}>
                          <View>
                            <Text style={styles.titleLabel}>#{item.title}</Text>
                            <MyText style={styles.subLabel}>{item.videos} videos</MyText>
                          </View>

                          <View>
                            <IconM
                              name={'logo-youtube'}
                              size={RFValue(25)}
                              color={'#f27415'}
                              style={{ marginTop: 5, marginRight: 10 }} />
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
                  )
                })
                }
              </View>
              <View>


                <View style={{ position: 'absolute', left: 0, top: 10 }}>
                  <Text style={[styles.titleLabel, { fontSize: 20, paddingLeft: 0, marginTop: 15 }]}>Challenge</Text>
                  <Icon
                    name={'east'}
                    size={RFValue(15)}
                    color={'#808080'}
                    style={{ marginTop: 0, }} />
                </View>
                <View style={{ height: 83 }}></View>
                <View style={styles.Row}>
                  {challengeVideo && challengeVideo.map((item, index) => {
                    return (
                      <View key={item.id}>
                        <Video item={item} index={index} />
                      </View>
                    )
                  })
                  }
                </View>

              </View>
            </View>
          </ScrollView>

          
          <View style={{ paddingLeft: 15, marginBottom: 40 }}>
            <MyText style={styles.label}>PLAYLIST</MyText>
            {played && played.map((item, index) => {
              return (
                <View key={item.id} style={[{paddingRight:10, marginTop: 10 }]}>
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
                    viewType={'Normal'}
                    navigation={navigation}

                  />

                </View>
              )
            })
            }
          </View>

          <View style={{ marginBottom: 30, paddingLeft: 15, }}>
            <MyText style={styles.label}>NEXT RATED</MyText>
            <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 0, }} horizontal={true} showsHorizontalScrollIndicator={false}>

              {artist && artist.map((item, index) => {
                return (
                  <View key={item.userID}>
                    <Artist
                      userID={item.userID}
                      viewType={''}
                      userImg={item.userImg}
                      displayName={item.displayName}
                      navigation={navigation}
                    />
                  </View>
                )
              })
              }

            </ScrollView>
          </View>

          <View style={{ marginBottom: 30, paddingLeft: 15, }}>
            <MyText style={styles.label}>EDITOR'S PICK</MyText>
            <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 0, }} horizontal={true} showsHorizontalScrollIndicator={false}>

              {countdown && countdown.map((item, index) => {
                return (
                  <TouchableOpacity key={item.id}
                    onPress={() => navigation.navigate('Countdown', { artwork: item.artwork, title: item.title, instructions: item.instructions, selectionBased: item.selectionBased, expiry: item.expiry, countdownID: item.countdownID, entryExpiry: item.entryExpiry, entryFee: item.entryFee, desc: item.desc, dateUpdated: item.dateUpdated })}>
                    <Image
                      source={item.artwork}
                      style={styles.imgCountdown}
                      imageStyle={{ borderRadius: 20 }}
                    />
                  </TouchableOpacity>
                )
              })
              }
            </ScrollView>
          </View>



          <View style={{ paddingLeft: 15, marginBottom: 40 }}>
            <MyText style={styles.label}>RECENTLY PLAYED</MyText>
            <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>

              {played && played.map((item, index) => {
                return (
                  <View key={item.id} style={[styles.RowB, { marginTop: 10 }]}>
                    <SongGrid
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
                      viewType={'ScrollView'}
                      navigation={navigation}

                    />
                  </View>
                )
              })
              }

            </ScrollView>
          </View>

          {/*    <View style={{ paddingHorizontal: 15, marginBottom: 40 }}>
            <MyText style={styles.label}>NEW ARRIVALS</MyText>

            {newSongs && newSongs.map((item, index) => {
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
                    stream={item.stream}
                    desc={item.desc}
                    onDiscover={item.onDiscover}
                    navigation={navigation}
                    viewType={''}

                  />
                </View>
              )
            })
            }
          </View>
          */}


        </ScrollView>

      </SafeAreaView>
      <NavBar
        navigation={navigation}
        activePage={'home'}
        backgroundColor={undefined}
      />
    </View>

  );
};

export default Dashboard;
