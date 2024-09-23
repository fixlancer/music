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

const EditProfile = ({ route, navigation }) => {
    const { userID } = route.params;

    const username = 'omahlaid';
    const [isImgLoading, setisImgLoading] = useState(false);
    const [img, setImage] = useState([]);
    const [imgAdded, setImgAdded] = useState('');
    const [displayName, setDisplayName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');



    const openGallery = () => {
             ImagePicker.openPicker({
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
                 setImage(newImage);
                 setImgAdded('1');

                 console.log('img', newImage);
           //      handleUpload(newImage);
             });
             
    };

    const handleUpload = (image) => { //uploading image on cloudinary
        const data = new FormData();
        data.append('file', image);
        data.append('upload_preset', 'fejoraApp');
        data.append('cloud_name', 'fejora');

        fetch("https://api.cloudinary.com/v1_1/fejora/image/upload", {
            method: "post",
            body: data
        }).then(res => res.json())
            .then(data => {
                //    console.log(data);
                setImage(data.secure_url);
                setisImgLoading(false);
            })
    }

    const handleClearImage = () => {
        setImage(null);
        setImgAdded('');
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
                    <Text style={styles.titleLabel2}>Edit Profile</Text>
                    <MyText></MyText>
                </View>

                <ScrollView style={{ flex: 1, height: '100%', paddingHorizontal: 15, }}>
                    <View style={styles.midBg}>

                        <View style={styles.bgInner}>

                                <TouchableOpacity
                                    onPress={() => openGallery()}
                                    activeOpacity={0.9}
                                    style={[styles.Row, styles.bgDark, {
                                        paddingTop:15,}]}>
                                    
                                {imgAdded ? (
                                img && img.map((i) => {
                                   return (
                                 
                                <View key={i.uri} style={styles.bgDark}>

                                    <Image
                                        source={{ uri: i.uri }}
                                        imageStyle={{ borderRadius: 50 }}
                                        style={styles.artWork} />
                                  </View> 
                                   )
                                })
                                ) : ( 
                                    <View>
                                        <Icon
                                            name={'camera-alt'}
                                            size={RFValue(60)}
                                            color={'#E0C015'}
                                            style={{
                                                alignSelf: 'center', marginRight: 20,
                                            }} />
                                    </View>
                                )}

                                    <View style={{paddingTop:5}}>
                                        <MyText style={styles.subLabel}>Upload Profile Pic</MyText>
                                        <MyText style={[styles.subLabel, { color: '#808080', fontSize: RFValue(11), }]}>
                                            Format: jpg, png, jpeg {'\n'}</MyText>
                                    </View>
                                </TouchableOpacity>
                                </View>
                                
                        

                        <View style={{ marginTop: 30 }}>
                            <MyText style={[styles.subLabel, {marginBottom:5,}]}>Personal Information</MyText>

                            <View style={styles.drop}>
                                <TextInput
                                    style={styles.text}
                                    value={username}
                                />
                            </View>

                            <View style={styles.drop}>
                            <TextInput
                                    style={styles.text}
                                    onChangeText={(text) => setDisplayName(text)}
                                    placeholder="Title"
                                    value={displayName}
                                    placeholderTextColor={'#808080'}
                                />
                            </View>

                            <View style={styles.drop}>
                            <TextInput
                                    style={styles.text}
                                    onChangeText={(text) => setEmail(text)}
                                    placeholder="Email Address"
                                    placeholderTextColor={'#808080'}
                                    value={email}
                                />
                            </View>


                            <View style={styles.drop}>
                            <TextInput
                                    style={styles.text}
                                    onChangeText={(text) => setCity(text)}
                                    placeholder="City"
                                    placeholderTextColor={'#808080'}
                                    value={city}
                                />
                            </View>

                            <View style={styles.dropDown}>

                                <TextInput
                                    style={styles.textarea}
                                    underlineColorAndroid="transparent"
                                    placeholder='Bio...'
                                    placeholderTextColor={'#808080'}
                                    textAlign={'left'}
                                    numberOfLines={10}
                                    textAlignVertical='top'
                                    multiline={true}
                                    onChangeText={(text) => setBio(text)}
                                />
                            </View>

                        </View>

                    </View>


                    <TouchableOpacity
                        style={styles.button}>
                        <MyText style={styles.buttonLabel}>Update</MyText>
                    </TouchableOpacity>
            

                </ScrollView>
            
            </SafeAreaView>

        </View>

    )
}

export default EditProfile;