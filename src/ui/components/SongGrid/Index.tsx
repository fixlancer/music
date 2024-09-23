import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';

interface Props {
    artwork: any;
    artist: any;
    artistID: any;
    title: any;
    songUrl: any;
    songID: any;
    likes: any;
    comments: any;
    stream: any;
    desc: any;
    viewType: any
    navigation: any;
}

const SongGrid: React.FC<Props> = props => {
    const { artwork, artist, artistID, title, songUrl, songID, likes, comments: comments, stream, desc, viewType, navigation } = props;

    const handlePlay = () => {
navigation.navigate('Playlist', {title: title, songUrl: songUrl, comments: comments, artist: artist, artistID: artistID, artwork: artwork, songID: songID, likes: likes, stream: stream, desc: desc})

}

    return (
<>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => handlePlay()}
        >

<>
            <Image
            source={artwork}
            style={viewType === 'FlatList' ? styles.img2 : styles.img}
            imageStyle={{borderRadius:20}}
            />
            <View style={{position:'absolute', top:5, right:15}}>
            <IconM
                name={'play-circle-outline'}
                size={RFValue(25)}
                color={'#f27415'}
                style={{  }} />
                </View>

            <View style={[styles.opacityBg, {width: viewType === 'FlatList' ? '89%' : 147, alignSelf:'center', left: '2%'}]}>
          <Text style={styles.titleLabel}>{title}</Text>
          <MyText style={styles.subLabel}>{artist}</MyText>
            </View>
            </>

        </TouchableOpacity>


        </>
    )
}

export default SongGrid;
