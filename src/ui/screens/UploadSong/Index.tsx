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
import CatValue from './CatValue';

const UploadSong = ({ route, navigation }) => {

    const [isImgLoading, setisImgLoading] = useState(false);
    const [img, setImage] = useState([]);
    const [imgAdded, setImgAdded] = useState('');
    const [song, setSong] = useState(null);
    const [catModal, setCatModal] = useState(false);
    const [cat, setCat] = useState('');
    const [title, setTitle] = useState('');
    const [songInfo, setSongInfo] = useState('');

    const openCat = () => {
        setCatModal(true);
    }

    const closeCat = () => {
        setCatModal(false);
    }

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
                    <Text style={styles.titleLabel}>Upload Song</Text>
                    <MyText></MyText>
                </View>

                <ScrollView style={{ flex: 1, height: '100%', paddingHorizontal: 10, }}>
                    <View style={styles.midBg}>

                        <View style={styles.bgInner}>

                            {song ? (
                                <View style={[styles.Row, styles.bgOrange]}>
                                    <IconM
                                        name={'musical-notes-outline'}
                                        size={RFValue(20)}
                                        color={'#fff'}
                                        style={{ marginRight: 10 }} />

                                    <MyText style={[styles.subLabel, { textAlign: 'center', }]}>songTitle.mp3</MyText>
                                </View>
                            ) : (
                                <TouchableOpacity

                                    activeOpacity={0.9}
                                    style={[styles.Row, styles.bgDark2, { paddingTop:15}]}>
                                    <View>
                                        <IconM
                                            name={'musical-notes-outline'}
                                            size={RFValue(60)}
                                            color={'#E0C015'}
                                            style={{
                                                alignSelf: 'center', marginRight: 20,
                                            }} />
                                    </View>

                                    <View>
                                        <MyText style={styles.subLabel}>Upload Song</MyText>
                                        <MyText style={[styles.subLabel, { color: '#808080', fontSize: RFValue(11), }]}>
                                            Format: mp3{'\n'}5mb max</MyText>
                                    </View></TouchableOpacity>
                            )}

                            {imgAdded ? (
                                img && img.map((i) => {
                                   return (
                                 
                                <View key={i.uri} style={styles.bgDark}>

                                    <Image
                                        source={{ uri: i.uri }}
                                        imageStyle={{ borderRadius: 12 }}
                                        style={styles.artWork} />

                                    <TouchableOpacity onPress={handleClearImage}>
                                        <View style={styles.closeIcon}>
                                            <Icon
                                                name={'close'}
                                                size={RFValue(18)}
                                                color={'#fff'}
                                                style={{ marginTop: 0, alignSelf: 'center' }} />
                                        </View>

                                    </TouchableOpacity>
                                </View>
                                   )
                                })
                                
                            ) : (
                                <TouchableOpacity
                                    onPress={() => openGallery()}
                                    activeOpacity={0.9}
                                    style={[styles.Row, styles.bgDark, {
                                        paddingTop:15,}]}>
                                    <View>
                                        <Icon
                                            name={'camera-alt'}
                                            size={RFValue(60)}
                                            color={'#E0C015'}
                                            style={{
                                                alignSelf: 'center', marginRight: 20,
                                            }} />
                                    </View>

                                    <View>
                                        <MyText style={styles.subLabel}>Upload Artwork</MyText>
                                        <MyText style={[styles.subLabel, { color: '#808080', fontSize: RFValue(11), }]}>
                                            Format: jpg, png, jpeg {'\n'}500kb max</MyText>
                                    </View>
                                </TouchableOpacity>
                            )}

                        </View>

                        <View style={{ marginTop: 30 }}>
                            <MyText style={[styles.subLabel, {marginBottom:5,}]}>Song Information</MyText>

                            <View style={styles.drop}>
                                <TextInput
                                    style={styles.text}
                                    onChangeText={(text) => setTitle(text)}
                                    placeholder="Title"
                                    placeholderTextColor={'#808080'}
                                />
                            </View>

                            <View style={styles.drop}>
                                <TouchableOpacity
                                    onPress={() => openCat()}
                                    style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <MyText style={[styles.text2, { paddingLeft: 15 }]}>
                                        {cat ? (
                                            <>
                                                {cat}
                                            </>
                                        ) : (
                                            <>
                                                Category
                                            </>
                                        )}
                                    </MyText>

                                    <Icon
                                        name={'expand-more'}
                                        size={RFValue(18)}
                                        color={'#808080'}
                                        style={{ marginRight: 10, paddingTop: 12 }} />

                                </TouchableOpacity>
                            </View>

                            <View style={styles.dropDown}>


                                <TextInput
                                    style={styles.textarea}
                                    underlineColorAndroid="transparent"
                                    placeholder='Inspiration behind this song...'
                                    placeholderTextColor={'#808080'}
                                    textAlign={'left'}
                                    numberOfLines={10}
                                    textAlignVertical='top'
                                    multiline={true}
                                    onChangeText={(text) => setSongInfo(text)}
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

            <CatValue
                isOpen={catModal}
                cat={(item) => setCat(item)}
                handleChange={closeCat}
            />
        </View>

    )
}

export default UploadSong;