import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
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
import styles from './Styles';
import moment from 'moment';


const Notifications = ({ route, navigation }) => {
  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);

  const [unread, setUnread] = useState(false);
  const [today, setToday] = useState(false);
  const [week, setWeek] = useState(false);
  const [month, setMonth] = useState(false);
  const [earlier, setEarlier] = useState(false);
  

  const [notice, setNotice] = useState([
    {
        id: '0',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/11.jpg'),
        type: 'Song',
        desc: 'liked your song',
        dateCreated: '20-2-2023',
      },
    {
      id: '1',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/04.png'),
      type: 'Video',
      desc: 'commented on your video',
      dateCreated: '23-2-2023',
    },
    {
        id: '2',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/02.jpg'),
        type: 'Video',
        desc: 'liked your video',
        dateCreated: '1-3-2023',
      },
    {
      id: '3',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/04.png'),
      type: 'Video',
      desc: 'commented on your video',
      dateCreated: '4-3-2023',
    },
    {
        id: '4',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/04.png'),
        type: 'Song',
        desc: 'liked your song',
        dateCreated: '6-3-2023',
      },
    {
      id: '5',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/3.jpg'),
      type: 'Video',
      desc: 'commented on your video',
      dateCreated: '13-3-2023',
    },
    {
        id: '6',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/04.png'),
        type: 'Video',
        desc: 'liked your video',
        dateCreated: '14-3-2023',
      },
    {
      id: '7',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/04.png'),
      type: 'Song',
      desc: 'commented on your song',
      dateCreated: '14-2-2023',
    },
    {
        id: '8',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/donjazzyy.jpg'),
        type: 'Video',
        desc: 'liked your video',
        dateCreated: '15-3-2023',
      },
    {
      id: '9',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/04.png'),
      type: 'Song',
      desc: 'commented on your song',
      dateCreated: '15-3-2023',
    },
    {
        id: '10',
        userID: '3456',
        contentID: '3456',
        commenterID: '6456',
        contentImg: require('../../../Assets/Images/04.png'),
        type: 'Video',
        desc: 'liked your video',
        dateCreated: '15-3-2023',
      },
    {
      id: '11',
      userID: '3456',
      contentID: '3455',
      commenterID: '4596',
      contentImg: require('../../../Assets/Images/04.png'),
      type: 'Video',
      desc: 'commented on your video',
      unRead: true,
      dateCreated: '16-3-2023',
    },
  ]);


  
  useEffect(() => {
    let isUnread = false;
    notice.forEach((item) => {
      if(item.unRead == true)
      isUnread = true;

      else
      isUnread = false;
    })

    if(isUnread)
    setUnread(true);


    let isToday = false;
    notice.forEach((item) => {
      if(moment(item.dateCreated).isSame(new Date(), 'day')){
      isToday = true;
      console.log('TODAY>>>>>>>>', moment(item.dateCreated).isSame(new Date(), 'day'));  
    }
      else {
      isToday = false;
      console.log('NOT TODAY>>>>>>>>', moment(item.dateCreated).isSame(new Date(), 'day'));
      }
    })

    if(isToday)
    setToday(true);


    let isWeek = false;
    notice.forEach((item) => {
      if(moment(item.dateCreated).isSame(new Date(), 'week'))
      isWeek = true;

      else
      isWeek = false;
    })

    if(isWeek)
    setWeek(true);


    let isMonth = false;
    notice.forEach((item) => {
      if(moment(item.dateCreated).isSame(new Date(), 'month'))
      isMonth = true;

      else
      isMonth = false;
    })

    if(isMonth)
    setMonth(true);


    let isEarlier = false;
    notice.forEach((item) => {
      if(moment(item.dateCreated).isSame(new Date(), 'months'))
      isEarlier = true;

      else
      isEarlier = false;
    })

    if(isEarlier)
    setEarlier(true);

  }, [])

  const Unread = ({item, index, navigation}) => {

    return (
        item.unRead === true ? (
            <TouchableOpacity onPress={() => {
                item.type === 'Song' ? navigation.navigate('PlayNotification', {songID: item.contentID}) : 
                navigation.navigate('VideoNotification', {videoID: item.contentID})
            }}>
        <View style={styles.Row}>
        <Image
                source={item.contentImg}
                style={{width:RFValue(40), height: RFValue(40), borderRadius:5, marginRight:15,}}
                imageStyle={{borderRadius:5}}
                />        
        <View>
        <MyText style={styles.subLabel}>Don Jazzy {item.desc}</MyText>
        <MyText style={styles.tinyLabel}>{item.dateCreated}</MyText>
        </View>

        </View>

        </TouchableOpacity>
        ) : null
     )
     }
         
    const Today = ({item, index, navigation}) => {

            const today = moment(item.dateCreated).isSame(new Date(), 'day');
            const week = moment(item.dateCreated).isSame(new Date(), 'week');
            const month = moment(item.dateCreated).isSame(new Date(), 'month');
            const earlier = moment(item.dateCreated).isSame(new Date(), 'months');
        
            return (
        today ? (
            <TouchableOpacity onPress={() => {
                item.type === 'Song' ? navigation.navigate('PlayNotification', {songID: item.contentID}) : 
                navigation.navigate('VideoNotification', {videoID: item.contentID})
            }}>
            <MyText style={styles.titleLabel2}>Today</MyText>
            <View style={styles.RowB}>
                    <MyText style={styles.subLabel}> {item.desc}</MyText>
                    <Image
                    source={item.contentImg}
                    style={{width:30, height: 30, borderRadius:5}}
                    imageStyle={{borderRadius:5}}
                    />
            
            </View>
    
            </TouchableOpacity>
        ) : null
        )}
        
        const Week = ({item, index, navigation}) => {

            const today = moment(item.dateCreated).isSame(new Date(), 'day');
            const week = moment(item.dateCreated).isSame(new Date(), 'week');
            const month = moment(item.dateCreated).isSame(new Date(), 'month');
            const earlier = moment(item.dateCreated).isSame(new Date(), 'months');
        
            return (
            week === true && today === false ? (
            <TouchableOpacity onPress={() => {
                item.type === 'Song' ? navigation.navigate('PlayNotification', {songID: item.contentID}) : 
                navigation.navigate('VideoNotification', {videoID: item.contentID})
            }}>
            <MyText style={styles.titleLabel2}>This Week</MyText>
            <View style={styles.RowB}>
                    <MyText style={styles.subLabel}> {item.desc}</MyText>
                    <Image
                    source={item.contentImg}
                    style={{width:30, height: 30, borderRadius:5}}
                    imageStyle={{borderRadius:5}}
                    />
            
            </View>
    
            </TouchableOpacity>
        )  : null
        )
        }
        
        const Month = ({item, index, navigation}) => {

            const today = moment(item.dateCreated).isSame(new Date(), 'day');
            const week = moment(item.dateCreated).isSame(new Date(), 'week');
            const month = moment(item.dateCreated).isSame(new Date(), 'month');
            const earlier = moment(item.dateCreated).isSame(new Date(), 'months');
        
            return (
            month === true && today === false && week === false ? (
            <TouchableOpacity onPress={() => {
                item.type === 'Song' ? navigation.navigate('PlayNotification', {songID: item.contentID}) : 
                navigation.navigate('VideoNotification', {videoID: item.contentID})
            }}>
            <MyText style={styles.titleLabel2}>This Month</MyText>
            <View style={styles.RowB}>
                    <MyText style={styles.subLabel}> {item.desc}</MyText>
                    <Image
                    source={item.contentImg}
                    style={{width:30, height: 30, borderRadius:5}}
                    imageStyle={{borderRadius:5}}
                    />
            
            </View>
    
            </TouchableOpacity>
        ) : null
        )}
        
        const Earlier = ({item, index, navigation}) => {

            const today = moment(item.dateCreated).isSame(new Date(), 'day');
            const week = moment(item.dateCreated).isSame(new Date(), 'week');
            const month = moment(item.dateCreated).isSame(new Date(), 'month');
            const earlier = moment(item.dateCreated).isSame(new Date(), 'months');
        
            return (
            earlier === true && today === false && week === false && month === false ? (
            <TouchableOpacity onPress={() => {
                item.type === 'Song' ? navigation.navigate('PlayNotification', {songID: item.contentID}) : 
                navigation.navigate('VideoNotification', {videoID: item.contentID})
            }}>
            <MyText style={styles.titleLabel2}>Earlier</MyText>
            <View style={styles.RowB}>
                    <MyText style={styles.subLabel}> {item.desc}</MyText>
                    <Image
                    source={item.contentImg}
                    style={{width:30, height: 30, borderRadius:5}}
                    imageStyle={{borderRadius:5}}
                    />
            </View>
    
            </TouchableOpacity>
        ) : null 
    
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
<Text style={styles.titleLabel}>Notifications</Text>
</View>

    
    <View style={{paddingHorizontal:15,marginBottom:0, height:'100%', width:'100%'}}>
        <View style={styles.midBg}>

       {unread === true ? (
           <>
    <MyText style={styles.titleLabel2}>New</MyText>
    
        {notice && notice.map((item, index) => {
         return (
            <Unread item={item} index={index} navigation={navigation} />
         )   
        })}
        </>
       ) :
       today ? (
           <>
<MyText style={styles.titleLabel2}>Today</MyText>
    
    {notice && notice.map((item, index) => {
     return (
        <Today item={item} index={index} navigation={navigation} />
     )   
    })}

    </>
    ) : week === true ? (
        <>
        <MyText style={styles.titleLabel2}>This Week</MyText>
    
        {notice && notice.map((item, index) => {
         return (
            <Week item={item} index={index} navigation={navigation} />
         )   
        })}

        </>
    ) : month === true ? (
        <>
            <MyText style={styles.titleLabel2}>This Month</MyText>
    
        {notice && notice.map((item, index) => {
         return (
            <Month item={item} index={index} navigation={navigation} />
         )   
        })}

        </>
    ) : earlier === true ? (
        <>
            <MyText style={styles.titleLabel2}>Earlier</MyText>

        {notice && notice.map((item, index) => {
         return (
            <Earlier item={item} index={index} navigation={navigation} />
         )   
        })}   

        </>
    ) : (
        
        <View style={{flex:1, alignItems:'center',}}>
            <MyText style={styles.subLabel}>No notifications yet</MyText>
            </View>
    ) }
     
     </View>

  </View>
        

</SafeAreaView>
<NavBar
    navigation={navigation}
    activePage={'notifications'}
    backgroundColor={undefined}
  />
</View>

);
};

export default Notifications;