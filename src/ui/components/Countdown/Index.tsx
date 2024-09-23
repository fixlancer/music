import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../Navbars/Navbar';
import MyText from '../DefaultTextComponent/MyText';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Feather';
import { AnimatedScrollView } from '@kanelloc/react-native-animated-header-scroll-view';

//import SongGrid from '../../components/SongGrid/Index';
import SongList from '../SongList/Index';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';


const Countdown = ({ route, navigation }) => {
  const { artwork, title, entryFee, entryExpiry, expiry, selectionBased, instructions, countdownID, desc, dateUpdated } = route.params;

  const [isLoading, setisLoading] = useState(true);


  const countdown = [
    {
      id: '1',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Bad Influence',
      artist: 'Omah Lay',
      artistID: '3456',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456',
      likes: '200',
      comments: '300',
      stream: '1200',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '1',
        status: 'Accepted'
      },
    },

    {
      id: '2',
      artwork: require('../../../Assets/Images/04.png'),
      title: 'Rush',
      artist: 'Ayra Starr',
      artistID: '4567',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556',
      likes: '250',
      comments: '300',
      stream: '1400',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '2',
        status: 'Accepted'
      },
    },
    {
      id: '3',
      artwork: require('../../../Assets/Images/03.jpg'),
      title: 'Rosemary',
      artist: 'Victony',
      artistID: '3456',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456756',
      likes: '100',
      comments: '300',
      stream: '1900',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '3',
        status: 'Accepted'
      },
    },

    {
      id: '4',
      artwork: require('../../../Assets/Images/011.jpg'),
      title: 'Fake Love',
      artistID: '5678',
      artist: 'Big Wiz',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '2345096',
      likes: '300',
      comments: '300',
      stream: '1800',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '4',
        status: 'Accepted'
      },
    },

    {
      id: '5',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Bad Influence',
      artist: 'Omah Lay',
      artistID: '567',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456',
      likes: '200',
      comments: '300',
      stream: '1200',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '5',
        status: 'Accepted'
      },
    },

    {
      id: '6',
      artwork: require('../../../Assets/Images/04.png'),
      title: 'Rush',
      artist: 'Ayra Starr',
      artistID: '5678',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556',
      likes: '250',
      comments: '300',
      stream: '1400',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '26',
        position: '1',
        status: 'Accepted'
      },
    },
    {
      id: '7',
      artwork: require('../../../Assets/Images/03.jpg'),
      title: 'Rosemary',
      artist: 'Victony',
      artistID: '9876',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456756',
      likes: '100',
      comments: '300',
      stream: '1900',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '6',
        status: 'Accepted'
      },
    },

    {
      id: '8',
      artwork: require('../../../Assets/Images/011.jpg'),
      title: 'Fake Love',
      artistID: '0987',
      artist: 'Big Wiz',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '2345096',
      likes: '300',
      comments: '300',
      stream: '1800',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '26',
        position: '2',
        status: 'Accepted'
      },
    },


    {
      id: '9',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Bad Influence',
      artist: 'Omah Lay',
      artistID: '5678',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456',
      likes: '200',
      comments: '300',
      stream: '1200',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '26',
        position: '3',
        status: 'Accepted'
      },
    },

    {
      id: '10',
      artwork: require('../../../Assets/Images/04.png'),
      title: 'Rush',
      artist: 'Ayra Starr',
      artistID: '34598',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556',
      likes: '250',
      comments: '300',
      stream: '1400',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '',
        status: 'Pending'
      },
    },
    {
      id: '11',
      artwork: require('../../../Assets/Images/03.jpg'),
      title: 'Rosemary',
      artist: 'Victony',
      artistID: '34956',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456756',
      likes: '100',
      comments: '300',
      stream: '1900',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '',
        status: 'Pending'
      },
    },

    {
      id: '12',
      artwork: require('../../../Assets/Images/011.jpg'),
      title: 'Fake Love',
      artistID: '4567',
      artist: 'Big Wiz',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '2345096',
      likes: '300',
      comments: '300',
      stream: '1800',
      desc: 'A young boy alone with music ready to be the next big thing...',
      countdownData: {
        countdownID: '56',
        position: '8',
        status: 'Accepted'
      },
    },
  ];


  const ItemSong = ({ item, index }) => {

    return (
      <View key={item.id} style={{ marginTop: 0 }}>
        {expiry === 1 && selectionBased === true ? (

          countdownID === item.countdownData.countdownID && item.countdownData.status === 'Accepted' ? (
            <SongList
              index={item.countdownData.position}
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
              viewType={'Countdown'}
              navigation={navigation}

            />
          ) : null 

          ) : selectionBased === false ? (
            countdownID === item.countdownData.countdownID ? (
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
            desc={item.desc}
            onDiscover={item.onDiscover}
            viewType={'Countdown'}
            navigation={navigation}

          />
            ) : null 
          ) : null }

      </View>
    )
  }


  const RenderItem = ({ item, index }) => {
    return (
      <ItemSong item={item} index={index} />
    )

  }


  const Header = () => {

    return (
      <>

        <View style={styles.header}>
          <View style={{}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <IconM
                name={'chevron-down'}
                size={RFValue(30)}
                color={'#fff'}
                style={{ marginTop: -5 }} />
            </TouchableOpacity>
          </View>
          {expiry === 0 && selectionBased === true ? (
          <View>    
          <MyText style={styles.subLabel}>Entry Ends: {entryExpiry}</MyText>
          </View>
          ) : null }

        </View>
      </>
    )
  }



  return (

    <View style={styles.container}>

      <SafeAreaView
        style={{
          // height: height + StatusBar.currentHeight,
          // width: width,
          flex: 1,
          backgroundColor: 'transparent',
        }}>
        <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

        <Header />

        <ScrollView>

          <View style={styles.countdownBg}>

            <Image
              source={artwork}
              style={styles.artwork}
              imageStyle={{ borderRadius: 20 }}

            />
            <View style={styles.midBg}>
              <View style={{ paddingHorizontal: 15, }}>

                {expiry === 1 ? (
                  <>
                <Text style={styles.titleLabel}>{title}</Text>
                <MyText style={styles.subLabel}>{desc}</MyText>
                </>
                ) : null}

                {selectionBased === true ? (
                  <></>
                ) : (
                   <MyText style={styles.tinyLabel}>Updated {dateUpdated}</MyText>
                )}
              </View>


              <View style={{ paddingHorizontal: 15 }}>

                <View style={{ marginTop: 20, }}>

                  {countdown && countdown.map((item, index) => {
                    return (
                      <View key={item.id}>
                        <RenderItem item={item} index={index} />
                      </View>
                    )
                  })}

                  {expiry === 0 && selectionBased === true ? (
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>

                      <IconM
                        name={'ios-mic'}
                        size={RFValue(55)}
                        color={'#fff'}
                        style={{ marginTop: 15, marginBottom: 15 }} />


                      <MyText style={styles.subLabel}>{instructions}</MyText>
                      <TouchableOpacity
                      style={styles.button}>
                        <MyText style={styles.buttonLabel}>Upload your cover</MyText>
                      </TouchableOpacity>
                      
                    </View>
                  ) : null }
                </View>

              </View>

            </View>
          </View>

        </ScrollView>

      </SafeAreaView>

    </View>

  );
};

export default Countdown;
