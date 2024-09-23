import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  StyleSheet,
  Platform,
  TextInput,
  FlatList,
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
import SongList from '../../components/SongList/Index';
import styles from './Styles';

const Item = ({ item, index, navigation, category }) => {
  return (
    category === 'All' && item.onDiscover === 1 ? (
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
    ) : (
    item.cat === category && item.onDiscover === 1 ? (
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
    ) : null
    )
  )
}

const Discover = ({ route, navigation }) => {
  const {mycat} = route.params;

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [category, setCategory] = useState(mycat);
  const [search, setSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    setSearch(false);
    navigation.navigate('Search', { term: searchTerm });

  }

  const discover = [
    {
      id: '0',
      artwork: require('../../../Assets/Images/11.jpg'),
      title: 'Fake Love',
      artist: 'Big Wiz',
      artistID: '6709',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '245006',
      likes: '300',
      comments: '300',
      stream: '1800',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'All'
    },
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
    {
      id: '5',
      artwork: require('../../../Assets/Images/1.jpg'),
      title: 'Fia',
      artist: 'Davido',
      artistID: '9576',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234556d',
      likes: '250',
      comments: '300',
      stream: '1400',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'Rap'
    },
    {
      id: '6',
      artwork: require('../../../Assets/Images/01.jpg'),
      title: 'Won da mo',
      artist: 'Rem United',
      artistID: '4068',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '23456756d',
      likes: '100',
      comments: '300',
      stream: '1900',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'HipHop',
    },
    
    {
      id: '21',
      artwork: require('../../../Assets/Images/11.jpg'),
      title: 'Fake Love',
      artist: 'Big Wiz',
      artistID: '458',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '2450396',
      likes: '300',
      comments: '300',
      stream: '1800',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'Afrobeats'
    },

    {
      id: '26',
      artwork: require('../../../Assets/Images/6.jpg'),
      title: 'Soso',
      artist: 'Omah Lay',
      artistID: '39',
      songUrl: 'https://cdn.trendybeatz.com/audio/Omah-Lay-Bad-Influence-%5BTrendyBeatz.com%5D.mp3',
      songID: '234956',
      likes: '500',
      comments: '300',
      stream: '1200',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'Afrobeats'
    },
  ];

  const cat = [
    {
      id: '0',
      title: 'All'
    },
    {
      id: '1',
      title: 'Afrobeats'
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
  ];


  const renderItem = ({ item, index }) => {

    return (

      <Item item={item} index={index} category={category} navigation={navigation} />

    )
  }


  const fetchMore = () => {

  }

  const seperator = () => {
    return (
      <View style={{ height: 0, width: '100%', backgroundColor: '#323A44' }}></View>
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

        {!search ? (

          <>
            <View style={styles.header}>
              <View>
                <Text style={styles.titleLabel}>Discover Talents</Text>
                <MyText style={[styles.subLabel, { color: '#808080', marginTop: 5 }]}>Handpicked banging songs by talents across the country</MyText>
              </View>

              <TouchableOpacity
                onPress={() => {
                  setSearch(true);
                }}>
                <IconM
                  name={'search-outline'}
                  size={RFValue(22)}
                  color={'#fff'}
                  style={{ marginTop: 1 }} />
              </TouchableOpacity>

            </View>



            <View style={{ marginBottom: 10, paddingLeft: 15, }}>
              <ScrollView contentContainerStyle={{ marginLeft: 0, marginBottom: 0 }} horizontal={true} showsHorizontalScrollIndicator={false}>

                {cat && cat.map((item, index) => {
                  return (
                    <View key={index} style={styles.RowB}>
                      <TouchableOpacity
                        onPress={() => setCategory(item.title)}
                        style={[styles.cat, { backgroundColor: category === item.title ? '#f27415' : '#1B2025' }]}>
                        <MyText style={styles.catLabel}>{item.title}</MyText>
                      </TouchableOpacity>

                    </View>
                  )
                })
                }

              </ScrollView>
            </View>

            <View style={styles.midBg}>

              <FlatList
                data={discover}
                renderItem={renderItem}
                style={{ paddingHorizontal: 15, paddingBottom: 10, }}
                keyExtractor={item => item.songID}
                initialNumToRender={10}
                ItemSeparatorComponent={seperator}
              />
            </View>
          </>

        ) : (

          <View style={styles.searchHeader}>
            <View style={styles.RowB}>
              <View style={styles.searchForm}>
                <View style={styles.Row}>
                  <IconM
                    name={'search-outline'}
                    size={RFValue(18)}
                    color={'#fff'}
                    style={{ marginTop: 10, marginRight: 5 }} />
                  <TextInput style={styles.text}
                    placeholder="Artists or Songs"
                    placeholderTextColor={'#fff'}
                    onChangeText={(text) => setSearchTerm(text)}
                    autoFocus={true}
                    onSubmitEditing={handleSearch}
                  />
                </View>
              </View>
              <TouchableOpacity
                onPress={() => setSearch(false)}
                style={{ width: '20%', }}
              >
                <MyText style={[styles.subLabel, { textAlign: 'center', paddingTop: 11 }]}>Cancel</MyText>
              </TouchableOpacity>
            </View>
          </View>


        )}

      </SafeAreaView>
      <NavBar
        navigation={navigation}
        activePage={'discover'}
        backgroundColor={undefined}
      />
    </View>

  );
};

export default Discover;

export const ItemFnct = React.memo(Item);