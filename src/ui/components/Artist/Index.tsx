import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from './Styles';
import MyText from '../DefaultTextComponent/MyText'
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import { RFValue } from 'react-native-responsive-fontsize';

interface Props {
    userID: any;
    userImg: any;
    displayName: any;
    viewType: any;
    navigation: any;
}

const Artist: React.FC<Props> = props => {
    const { userID, userImg, displayName, viewType, navigation } = props;


    return (

        <View style={styles.RowB}>
            <TouchableOpacity
                onPress={() => navigation.navigate('Profile', { userID: userID })}
            >

                {viewType === 'FlatList' ? (
                    <View style={[styles.RowB, {}]}>
                        <View style={[styles.Row, {width:'90%'}]}>
                            <Image
                                source={userImg}
                                style={styles.artistImg2}
                                imageStyle={{ borderRadius: 50 }}
                            />
                            <MyText style={[styles.subLabel, { textAlign: 'center', marginTop: RFValue(28) }]}>{displayName}</MyText>
                        </View>

                        <View style={{width:'10%',justifyContent:'flex-end', alignSelf:'center', alignItems:'flex-end' }}>
                            <Icon
                                name={'arrow-forward-ios'}
                                size={RFValue(18)}
                                color={'#fff'}
                                style={{ marginTop: 1, }} />
                        </View>
                    </View>

                ) : (
                    <Image
                        source={userImg}
                        style={styles.artistImg}
                        imageStyle={{ borderRadius: 50 }}
                    />
                )}
            </TouchableOpacity>

        </View>
    )
}

export default Artist;