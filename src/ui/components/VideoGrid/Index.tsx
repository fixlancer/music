import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';
import { Thumbnail } from 'react-native-thumbnail-video';

import styles from './Styles';

interface Props {
    index: any;
    data: any;
    videoUrl: any;
    videoImg: any;
    navigation: any;
    viewType: any;
}

const VideoGrid: React.FC<Props> = props => {
    const { index, data, videoUrl, videoImg, viewType, navigation } = props;
    const [playModal, setPlayModal] = useState(false);
    

    return (
<>
        <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.navigate('VideoPlay', {index: index, data: data, viewType: ''})}
        >

<>
            <Image
            source={videoImg}
            style={viewType === 'FlatList' ? styles.img2 : styles.img}
            />
            <View style={{position:'absolute', top:5, right: viewType === 'FlatList' ? 20 : 10}}>
            <IconM
                name={'logo-youtube'}
                size={RFValue(15)}
                color={'#fff'}
                style={{ }} />
                </View>
            </>

        </TouchableOpacity>

        </>
    )
}

export default VideoGrid;
