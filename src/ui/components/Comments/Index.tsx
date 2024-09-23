import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { Fragment, useContext, useEffect, useMemo, useState, useRef } from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  StatusBar,
  Platform,
  FlatList,
  RefreshControl,
  TextInput,
  Keyboard
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Modal from 'react-native-modalbox';
import MyText from '../DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const Comments = ({navigation, route}) => {
  const { itemID } = route.params;

  const [isLoading, setisLoading] = useState(true);
  const [isRefreshing, setisRefreshing] = useState(false);
  const [comm, setComment] = useState('');
  const [replyTo, setReplyTo] = useState('');

  const refInput = React.useRef(null);

  const userImg = require('../../../Assets/Images/6.jpg');

  const onSubmit = () => {
    commentData.push(
      {
        id: itemID + 1,
        userImg: require('../../../Assets/Images/4.jpg'),
        commenterID: '456',
        username: 'iamTems',
        displayName: 'Tems',
        contentID: itemID,
        commentText: comm,
        subComments: {},
        dateCreated: '1min',
      });
    setReplyTo('');
    setComment('');
  }

  const [commentData, setCommentData] = useState([
    {
      id: '1',
      userImg: require('../../../Assets/Images/11.jpg'),
      username: 'wizkid',
      commenterID: '456',
      displayName: 'Big Wiz',
      contentID: itemID,
      commentText: 'Nice song',
      subComments: {},
      dateCreated: '1wk'
    },

    {
      id: '2',
      userImg: require('../../../Assets/Images/6.jpg'),
      username: 'donJazz',
      commenterID: '456',
      displayName: 'Don Jazzy',
      contentID: itemID,
      commentText: 'I have arranged a meeting for us to meet. My manager will contact you as soon as possible',
      dateCreated: '1wk'
    },

    {
      id: '3',
      userImg: require('../../../Assets/Images/1.jpg'),
      username: 'bella',
      commenterID: '456',
      displayName: 'Bella Shmurd',
      itemID: itemID,
      commentText: 'This is so dope. Nice one',
      subComments: [
        {
          id: '1',
          userImg: require('../../../Assets/Images/11.jpg'),
          username: 'wizkid',
          commenterID: '456',
          displayName: 'Big Wiz',
          commentText: 'Nice song',
          dateCreated: '1wk'
        },

        {
          id: '2',
          userImg: require('../../../Assets/Images/6.jpg'),
          username: 'donJazz',
          commenterID: '456',
          displayName: 'Don Jazzy',
          commentText: 'I have arranged a meeting for us to meet. My manager will contact you as soon as possible',
          dateCreated: '1wk'
        },

        {
          id: '3',
          userImg: require('../../../Assets/Images/1.jpg'),
          username: 'bella',
          commenterID: '456',
          displayName: 'Bella Shmurd',
          commentText: 'This is so dope. Nice one',
          dateCreated: '1wk'
        },
      ],
      dateCreated: '1wk'
    },
  ])




  const renderSubItem = ({ item, index }) => {

    return (
      <View style={{ marginBottom: 20, }}>

        <View style={styles.Row}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', { userID: item.userID })}>
              <Image
                source={item.userImg}
                style={styles.img}
                imageStyle={{ borderRadius: 0 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.Row}>
              <MyText style={styles.subLabel}>{item.displayName}</MyText>
              <MyText style={[styles.subLabel, { color: '#808080', marginLeft: 10, marginTop: 0, fontSize: RFValue(12) }]}>@{item.username}</MyText>
            </View>

            <MyText style={styles.subLabel2}>{item.commentText}</MyText>

            <View style={styles.Row}>
              <MyText style={styles.tinyLabel}>{item.dateCreated}</MyText>
            </View>

          </View>
        </View>


      </View>

    )
  }

  const renderItem = ({ item, index }) => {

    return (
      <View style={{ marginBottom: 20, }}>

        <View style={styles.Row}>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('Profile', { userID: item.userID })}>
              <Image
                source={item.userImg}
                style={styles.img}
                imageStyle={{ borderRadius: 0 }}
              />
            </TouchableOpacity>
          </View>
          <View>
            <View style={styles.Row}>
              <MyText style={styles.subLabel}>{item.displayName}</MyText>
              <MyText style={[styles.subLabel, { color: '#808080', marginLeft: 10, marginTop: 0, fontSize: RFValue(12) }]}>@{item.username}</MyText>
            </View>

            <MyText style={styles.subLabel2}>{item.commentText}</MyText>

            <View style={styles.Row}>
              <MyText style={styles.tinyLabel}>{item.dateCreated}</MyText>
              <TouchableOpacity
                onPress={() => {
                  refInput.current.focus();
                  //  setComment(item.username);
                  setReplyTo(item.username);
                }}
              >
                <MyText style={styles.tinyLabel}>Reply</MyText>
              </TouchableOpacity>


            </View>

          </View>
        </View>

        <View style={{ paddingLeft: 45, paddingRight:5,  marginTop:20, marginBottom: 0 }}>

          <FlatList
            data={item.subComments}
            renderItem={renderSubItem}
            keyExtractor={item => item.id}
            initialNumToRender={10}
            onEndReached={fetchMoreSub}
            onEndReachedThreshold={0.01}
          />
        </View>


      </View>

    )
  }


  const fetchMore = () => {

  }


  const fetchMoreSub = () => {

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
        <Text style={styles.titleLabel}>Comments</Text>
        <MyText></MyText>
    </View>


    <View style={styles.midBg}>
          <FlatList
            data={commentData}
            renderItem={renderItem}
            contentContainerStyle={{width: '100%', paddingHorizontal:15, alignSelf:'center' }}
            keyExtractor={item => item.id}
            initialNumToRender={10}
            onEndReached={fetchMore}
            onEndReachedThreshold={0.01}
          />
</View>

      </SafeAreaView>

      {replyTo ? (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => {
            setReplyTo('');
          }}>
          <View style={[styles.RowB, { backgroundColor: '#343434', height: 'auto', paddingVertical: 5, width: '100%', paddingHorizontal: 15 }]}>
            <MyText style={styles.subLabel}>Replying to {replyTo}</MyText>

            <Icon
              name={'close'}
              size={RFValue(15)}
              color={'#808080'}
              style={{ alignSelf: 'center', }} />

          </View>
        </TouchableOpacity>

      ) : null}

      <View style={[styles.RowB, styles.commentBar]}>
        <Image
          source={userImg}
          style={styles.img}
          imageStyle={{ borderRadius: 0, marginRight: 10 }}
        />

        <View style={styles.drop}>
          <TextInput
            style={styles.text}
            onChangeText={(text) => setComment(text)}
            placeholder="Add a Comment"
            placeholderTextColor={'#808080'}
            ref={refInput}
            multiline={true}
            value={comm}

          />
        </View>

        {comm === '' ? (
          <TouchableOpacity
            style={{ paddingLeft: 10, width: 30, paddingTop: 7, }}>
            <Icon
              name={'send'}
              size={RFValue(20)}
              color={'#808080'}
              style={{ alignSelf: 'center', }} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => onSubmit()}
            style={{ paddingLeft: 10, width: 30, paddingTop: 7, }}>
            <Icon
              name={'send'}
              size={RFValue(20)}
              color={'#1cc88a'}
              style={{ alignSelf: 'center', }} />
          </TouchableOpacity>
        )}

      </View>

    </View>

  );
};

export default Comments;