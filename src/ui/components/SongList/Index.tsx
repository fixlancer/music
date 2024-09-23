import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import styles from './Styles';
import { RFValue } from 'react-native-responsive-fontsize';
import AddDiscover from '../AddDiscover/Index';
import { Menu, MenuOptions, MenuOption, MenuTrigger, } from 'react-native-popup-menu';

interface Props {
    index: any;
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
    onDiscover: any;
    navigation: any;
    viewType: any;
}

const SongList: React.FC<Props> = props => {
    const { artwork, artist, artistID, title, index, songUrl, songID, likes, comments, stream, desc, onDiscover, navigation, viewType } = props;
    const [addDiscover, SetAddDiscover] = useState(false);
    const [addSubmit, setAddSubmit] = useState(false);
    const currentID = 1234;

    const [showTarget, setShowTarget] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const toggleShowTarget = () => {
        setShowTarget(!showTarget);
    }


    const openAdd = () => {
        SetAddDiscover(true);
    }

    const closeAdd = () => {
        SetAddDiscover(false);
    }

    const deleteSong = () => {
        SetAddDiscover(false);
    }

    const handleSubmit = () => {
        setAddSubmit(true)
    }

    const handlePlay = () => {
        navigation.navigate('Playlist', { title: title, songUrl: songUrl, comments: comments, artist: artist, artistID: artistID, artwork: artwork, songID: songID, likes: likes, stream: stream, desc: desc })

    }

    const removeDiscover = () => {
     
    }

    return (
        <>

            <TouchableOpacity
                activeOpacity={1}
                onPress={handlePlay}
                style={viewType === 'Normal' ? styles.normalView : styles.listView}
            >

                <View style={[styles.RowB, {}]}>

                    <View style={styles.Row}>
                        {viewType === 'Countdown' ? (
                            <View style={styles.pickCount}>
                                <MyText style={[styles.subLabel, { color: '#f27415' }]}>{index}</MyText>
                            </View>
                        ) : null}
                        <Image
                            source={artwork}
                            style={styles.img}
                            imageStyle={{ borderRadius: 10 }}
                        />
                        <View style={{ marginLeft: 5, paddingTop: 3 }}>
                            <Text style={styles.titleLabel}>{props.title}</Text>
                            <MyText style={[styles.subLabel, { color: '#fff' }]}>{props.artist}</MyText>
                        </View>

                    </View>

                    <View style={styles.Row}>
                        <IconM
                            name={'play-circle-outline'}
                            size={RFValue(20)}
                            color={'#f27415'}
                            style={{ marginTop: 9 }} />


                        {viewType === 'Profile' && currentID === artistID ? (
                            <Menu>
                                <MenuTrigger>
                                    <Icon
                                        name={"more-vert"}
                                        size={RFValue(22)}
                                        color={'#fff'}
                                        style={{ paddingLeft: 15, marginTop: 10 }}
                                    />
                                </MenuTrigger>
                                <MenuOptions customStyles={optionsStyles}>

                                    {onDiscover === 1 ? (
                                        <MenuOption onSelect={removeDiscover}>
                                            <View style={styles.RowB}>
                                                <View>
                                                    <MyText style={styles.buttonLabel}>Remove from Discover</MyText>
                                                </View>
                                                <View>
                                                    <IconM
                                                        name={'flame-outline'}
                                                        size={RFValue(20)}
                                                        color={'#fff'}
                                                        style={{ marginRight: 0 }} />

                                                </View>

                                            </View>
                                        </MenuOption>
                                    ) : (
                                        <MenuOption onSelect={openAdd}>
                                            <View style={styles.RowB}>
                                                <MyText style={styles.buttonLabel}>Add to Discover</MyText>
                                                <IconM
                                                    name={'flame-outline'}
                                                    size={RFValue(20)}
                                                    color={'#fff'}
                                                    style={{ marginRight: 0 }} />

                                            </View>
                                        </MenuOption>
                                    )}
                                    <MenuOption onSelect={deleteSong}>
                                        <View style={styles.RowB}>

                                            <MyText style={[styles.buttonLabel, { color: '#eb5545' }]}>Delete Song</MyText>
                                            <IconM
                                                name={'trash-outline'}
                                                size={RFValue(20)}
                                                color={'#eb5545'}
                                                style={{ marginRight: 0 }} />

                                        </View>
                                    </MenuOption>
                                </MenuOptions>
                            </Menu>
                        ) : null}

                    </View>

                </View>

            </TouchableOpacity>


            <AddDiscover
                isOpen={addDiscover}
                title={title}
                songID={songID}
                navigation={navigation}
                handleChange={closeAdd}
                handleSubmit={handleSubmit}
            />


        </>
    )
}

const optionsStyles = {
    optionsContainer: {
        backgroundColor: '#000',
        padding: 0,
        elevation: 2,
        borderRadius: 10,
    },

    optionWrapper: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderColor: '#20252B',
    }
}

export default SongList;
