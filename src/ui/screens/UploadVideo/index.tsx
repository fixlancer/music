import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
  Image,
  TextInput,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
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
import ImagePicker from 'react-native-image-crop-picker';
import styles from './Styles';
import VideoPlayer from 'react-native-media-console';

const UploadVideo = ({ route, navigation }) => {

  const [video, setVideo] = useState(null);
  const [title, setTitle] = useState('');


  const openGallery = () => {
    /*     ImagePicker.openPicker({
             width: 252,
             height: 230,
             compressImageMaxWidth: 500,
             compressImageQuality: 0.8,
         }).then(image => {
             let newImage = {
                 uri: image.path,
                 type: `test/${image.mime.split('/')[1]}`,
                 name: `test.${image.mime.split('/')[1]}`
             }
             setVideo(newVideo);
       //      handleUpload(newVideo);
         });
         */
  };

  const handleUpload = (video) => { //uploading image on cloudinary
    const data = new FormData();
    data.append('file', video);
    data.append('upload_preset', 'fejoraApp');
    data.append('cloud_name', 'fejora');

    fetch("https://api.cloudinary.com/v1_1/fejora/image/upload", {
      method: "post",
      body: data
    }).then(res => res.json())
      .then(data => {
        //    console.log(data);
        setVideo(data.secure_url);

      })
  }

  const handleClear = () => {
    setVideo(null);
  };

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
          <Text style={styles.titleLabel}>Upload Video</Text>
          <MyText></MyText>
        </View>

        <ScrollView style={{ flex: 1, height: '100%', paddingHorizontal: 10, }}>
          <View style={styles.midBg}>

            <View style={styles.bgInner}>

              {video ? (
                <>
                <TouchableOpacity onPress={handleClear}>
                <View style={styles.closeIcon}>
                  <Icon
                    name={'close'}
                    size={18}
                    color={'#fff'}
                    style={{ marginTop: 0, }} />
                </View>

              </TouchableOpacity>
            
                  <VideoPlayer
                    source={{ uri: video }}
                    tapAnywhereToPause={true}
                    isFullscreen={false}
                    containerStyle={{borderRadius:20, }} />

                    </>
              ) : (
                <TouchableOpacity
                  onPress={() => openGallery()}
                  activeOpacity={0.9}
                  style={{justifyContent:'center', flex:1, alignItems:'center'}}>
                  <View>
                    <IconM
                      name={'logo-youtube'}
                      size={30}
                      color={'#E0C015'}
                      style={{ marginBottom: 10, }} />
                  </View>

                  <View>
                    <MyText style={[styles.subLabel, {textAlign:'center'}]}>Upload Video</MyText>
                    <MyText style={[styles.subLabel, { color: '#808080', textAlign:'center',marginTop:10, fontSize: 11, }]}>Format: mp4, mov {'\n'}40mb mx</MyText>
                  </View>
                </TouchableOpacity>
              )}

            </View>

            <View style={{ marginTop: 30 }}>
              <MyText style={styles.subLabel}>Video Information</MyText>

              <View style={styles.drop}>
                <TextInput
                  style={styles.text}
                  onChangeText={(text) => setTitle(text)}
                  placeholder="Title"
                  placeholderTextColor={'#808080'}
                />
              </View>

            </View>

          </View>

          <View style={styles.bottomButton}>
          <TouchableOpacity
            style={styles.button}>
            <MyText style={styles.buttonLabel}>Submit</MyText>
          </TouchableOpacity>
        </View>

        </ScrollView>



      </SafeAreaView>


    </View>

  )
}

export default UploadVideo;