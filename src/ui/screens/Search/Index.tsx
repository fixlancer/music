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
import Artist from '../../components/Artist/Index';

const ItemTwo = ({ item, index, navigation }) => {
  return (
      <Artist
        userID={item.userID}
        userImg={item.userImg}
        displayName={item.displayName}
        viewType={'FlatList'}
        navigation={navigation}

      />
  )
}

const Item = ({ item, index, navigation }) => {
  return (
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
        onDiscover={item.onDiscover}
        desc={item.desc}
        viewType={'Normal'}
        navigation={navigation}

      />
  )
}
const Search = ({ route, navigation }) => {
  const { term } = route.params;

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [type, setType] = useState('Songs');
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    navigation.navigate('Search', { term: searchTerm });

  }

  useEffect(() => {
    setSearchTerm(term);
  }, [])

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
      stream: '1900',
      desc: 'A young boy alone with music ready to be the next big thing...',
      onDiscover: 1,
      cat: 'Afrobeats',
    },
  ];

  const artist = [
    {
      id: '1',
      userImg: require('../../../Assets/Images/03.jpg'),
      userID: '345096',
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
      userID:'3456',
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

  const renderArtist = ({ item, index }) => {

    return (

      <ItemTwo item={item} index={index} navigation={navigation} />

    )
  }


  const renderItem = ({ item, index }) => {

    return (

      <Item item={item} index={index} navigation={navigation} />

    )
  }


  const fetchMore = () => {

  }

  const seperator2 = () => {
    return (
      <View style={{ height: StyleSheet.hairlineWidth, width: '100%', backgroundColor: '#323A44' }}></View>
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

        <View style={styles.searchHeader}>
          <View style={styles.RowB}>
            <TouchableOpacity onPress={() => navigation.goBack(null)}>
              <Icon
                name={'arrow-back-ios'}
                size={RFValue(22)}
                color={'#808080'}
                style={{ alignSelf: 'center', marginTop: 10, paddingRight: 5 }} />
            </TouchableOpacity>

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
                  value={searchTerm}
                  onSubmitEditing={handleSearch}
                />
              </View>
            </View>
          </View>
        </View>


        <View style={{marginBottom:10, paddingLeft:15, }}>

               <View style={[styles.Row, {width:'100%'}]}>
                <TouchableOpacity 
                onPress={() => setType('Songs')}
                style={[styles.cat, {  borderBottomWidth: 1, borderColor: type === 'Songs' ? '#fff' : 'transparent', }]}>
                  <MyText style={styles.catLabel}>Songs</MyText>
                </TouchableOpacity>
            
                <TouchableOpacity 
                onPress={() => setType('Artist')}
                style={[styles.cat, {  borderBottomWidth: 1, borderColor: type === 'Artist' ? '#fff' : 'transparent', }]}>
                  <MyText style={styles.catLabel}>Artists</MyText>
                </TouchableOpacity>
            

            </View>
         
        </View>
   
    <View style={styles.midBg}>
        {type === 'Artist' ? (
          
      <FlatList
      data={artist}
      renderItem={renderArtist}
      style={{paddingHorizontal:15, paddingBottom:10,}}
      keyExtractor={item => item.id}
      initialNumToRender={10}
      ItemSeparatorComponent={seperator2}
      />

        ) : (
      <FlatList
      data={discover}
      renderItem={renderItem}
      style={{paddingHorizontal:15, paddingBottom:10,}}
      keyExtractor={item => item.songID}
      initialNumToRender={10}
      />
        )}
        </View>


      </SafeAreaView>
      <NavBar
        navigation={navigation}
        activePage={'discover'}
        backgroundColor={undefined}
      />
    </View>

  );
};

export default Search;

export const ItemFnctTwo = React.memo(ItemTwo);
export const ItemFnct = React.memo(Item);