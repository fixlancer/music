import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  FlatList,
  RefreshControl,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import NavBar from '../../components/Navbars/Navbar';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import VideoGrid from '../../components/VideoGrid/Index';
import styles from './Styles';

const Item = ({item, index, navigation, challenge}) => {

  return (
    <VideoGrid
    index={item.id}
    data={challenge}
       videoImg={item.videoImg}
       videoUrl={item.videoUrl}
       navigation={navigation}
       viewType={''}

       />  
  )
}

const Challenge = ({ route, navigation }) => {
  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [category, setCategory] = useState('Afrobeats');

  const challengeID = 234;
  
  const title = 'Soso';
  const count = '2130';
  const status = 'Active';
  

  const challenge = [
    {
      id: 0,
      videoImg: require('../../../Assets/Images/11.jpg'),
      artistImg: require('../../../Assets/Images/11.jpg'),
      artistID: '456',
      artist: 'Big Wiz',
      videoUrl: 'https://download.samplelib.com/mp4/sample-5s.mp4',
      videoID: '2345096',
      likes: '300',
      desc: 'From nothing comes great things',
      comments: '50',
      views: '1800',
    },

    {
      id: 1,
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
      id: 2,
      videoImg: require('../../../Assets/Images/1.jpg'),
      artistImg: require('../../../Assets/Images/11.jpg'),
      artistID: '456',
      artist: 'Davido',
      videoUrl: 'https://download.samplelib.com/mp4/sample-20s.mp4',
      videoID: '234556',
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
      videoID: '23456756',
      likes: '100',
      comments: '50',
      views: '1900',
    },
    {
        id: 4,
        videoImg: require('../../../Assets/Images/65.jpeg'),
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
        id: 5,
        videoImg: require('../../../Assets/Images/3.jpg'),
        artistImg: require('../../../Assets/Images/11.jpg'),
        artistID: '456',
        artist: 'Rem United',
        videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
        videoID: '23453446756',
        likes: '100',
        comments: '50',
        views: '1900',
      },
      {
        id: 3950,
        videoImg: require('../../../Assets/Images/04.png'),
        artistImg: require('../../../Assets/Images/02.jpg'),
        artistID: '456',
        artist: 'Big Wiz',
        videoUrl: 'https://download.samplelib.com/mp4/sample-5s.mp4',
        videoID: '2345900096',
        likes: '300',
        desc: 'From nothing comes great things',
        comments: '50',
        views: '1800',
      },
  
      {
        id: 5671,
        videoImg: require('../../../Assets/Images/011.jpg'),
        artistImg: require('../../../Assets/Images/11.jpg'),
        artistID: '456',
        artist: 'Omah Lay',
        videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
        videoID: '23458766',
        likes: '500',
        desc: 'From nothing comes great things',
        comments: '50',
        views: '1200',
      },
  
      {
        id: 28978,
        videoImg: require('../../../Assets/Images/1.jpg'),
        artistImg: require('../../../Assets/Images/11.jpg'),
        artistID: '456',
        artist: 'Davido',
        videoUrl: 'https://download.samplelib.com/mp4/sample-20s.mp4',
        videoID: '234567856',
        likes: '250',
        desc: 'From nothing comes great things',
        comments: '50',
        views: '1400',
      },
      {
        id: 358,
        videoImg: require('../../../Assets/Images/03.jpg'),
        artistImg: require('../../../Assets/Images/3.jpg'),
        artistID: '456',
        artist: 'Victony',
        videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
        videoID: '23456234756',
        likes: '100',
        comments: '50',
        views: '1900',
      },
      {
          id: 984,
          videoImg: require('../../../Assets/Images/omah.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Davido',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '23412556',
          likes: '250',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1400',
        },
        {
          id: 875,
          videoImg: require('../../../Assets/Images/01.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Rem United',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '2345096756',
          likes: '100',
          comments: '50',
          views: '1900',
        },
        {
          id: 4450,
          videoImg: require('../../../Assets/Images/4.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Big Wiz',
          videoUrl: 'https://download.samplelib.com/mp4/sample-5s.mp4',
          videoID: '234985096',
          likes: '300',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1800',
        },
    
        {
          id: 231,
          videoImg: require('../../../Assets/Images/02.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Omah Lay',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '2387456',
          likes: '500',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1200',
        },
    
        {
          id: 872,
          videoImg: require('../../../Assets/Images/01.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Davido',
          videoUrl: 'https://download.samplelib.com/mp4/sample-20s.mp4',
          videoID: '23764556',
          likes: '250',
          desc: 'From nothing comes great things',
          comments: '50',
          views: '1400',
        },
        {
          id: 83,
          videoImg: require('../../../Assets/Images/03.jpg'),
          artistImg: require('../../../Assets/Images/11.jpg'),
          artistID: '456',
          artist: 'Victony',
          videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
          videoID: '234566756',
          likes: '100',
          comments: '50',
          views: '1900',
        },
        {
            id: 34,
            videoImg: require('../../../Assets/Images/1.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Davido',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '2344556',
            likes: '250',
            desc: 'From nothing comes great things',
            comments: '50',
            views: '1400',
          },
          {
            id: 8755,
            videoImg: require('../../../Assets/Images/02.jpg'),
            artistImg: require('../../../Assets/Images/11.jpg'),
            artistID: '456',
            artist: 'Rem United',
            videoUrl: 'http://techslides.com/demos/sample-videos/small.mp4',
            videoID: '234536756',
            likes: '100',
            comments: '50',
            views: '1900',
          },
  ];

  const fetchMore = () => {

  }

  const renderItem = ({item, index}) => {
    return (          
   
      <Item item={item} index={index} navigation={navigation} challenge={challenge} />
)
  }

  const seperator = () => {
    return (
      <View style={{ height: StyleSheet.hairlineWidth, width:'100%', backgroundColor:'#000'}} />
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

<View style={styles.header}>
    <View style={styles.RowB}>
    {status === 'Active' ? (
  <>
<Text style={styles.titleLabel}>{title} Challenge</Text>

<View style={styles.Row}>
<TouchableOpacity onPress={() => navigation.navigate('UploadVideo', {challengeID: challengeID })}
  style={[styles.Row, {borderRadius:20, marginBottom:0, }]}>
<IconM
                name={'add-circle-outline'}
                size={RFValue(20)}
                color={'#fff'}
                style={{ marginTop: 2,marginRight:15 }} />
                
</TouchableOpacity>

<TouchableOpacity
  style={{marginBottom:0,}}>
<IconM
                name={'filter-outline'}
                size={RFValue(20)}
                color={'#fff'}
                style={{ marginTop: 2 }} />
              
</TouchableOpacity>
</View>

</>
) : null}
</View>

<View style={styles.RowB}>
<MyText style={[styles.subLabel, {color:'#fff', marginTop:5}]}>{count} videos</MyText>

</View>

</View>

    

    <View style={{paddingHorizontal:0,marginBottom:0, flex:1}}>
        
      <FlatList
      data={challenge}
      renderItem={renderItem}
      keyExtractor={item => item.videoID}
      initialNumToRender={20}
      onEndReached={fetchMore}
      onEndReachedThreshold={0.01}
      numColumns={3}
      ItemSeparatorComponent={seperator}
      />
        </View>
        

</SafeAreaView>
<NavBar
    navigation={navigation}
    activePage={'challenge'}
    backgroundColor={undefined}
  />
</View>

);
};

export default Challenge;

export const ItemFnc = React.memo(Item);