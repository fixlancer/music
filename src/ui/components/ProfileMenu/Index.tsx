import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    Text,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Platform,
    StatusBar,
    StyleSheet,
    FlatList,
    ActivityIndicator
} from 'react-native';
import Modal from 'react-native-modalbox';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import MyText from '../DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import styles from './Styles';
import { ScrollView } from 'react-native-gesture-handler';

const { width, height } = Dimensions.get('screen');

interface Props {
    isOpen: boolean;
    userID: any;
    premium: any;
    userType: any;
    navigation: any;
    handleChange: () => void;
}

const ProfileMenu: React.FC<Props> = props => {
    const [isLoading, setIsLoading] = React.useState(false);


    return (
        <Modal isOpen={props.isOpen}
            style={{ backgroundColor: '#20252B', height: '90%' }}
            coverScreen={false}
            swipeArea={600}
            backdropOpacity={0.8}
            backdropColor="#000"
            onClosed={props.handleChange}
            keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
            position="bottom">

            <SafeAreaView
                style={{
                    height: height,
                    width: width,
                    flex: 1,
                    backgroundColor: '#20252B',
                }}
                edges={['left', 'right', 'top']}>

                <View style={{ justifyContent: 'center', alignSelf: 'center' }}>
                    <View style={styles.modalLine} />
                </View>

                <ScrollView>
                <View  style={styles.midBg}>

                    {props.premium === 0 && props.userType === 'Artist' ? (
                    <TouchableOpacity 
                    onPress={() => props.navigation.navigate('Premium')}
                    style={{  }}>

                        <View style={styles.buttonUp}>
                        <MyText style={[styles.titleLabel, { textAlign: 'center' }]}>Upgrade to <Text style={[styles.titleLabel, { color: '#f27415', fontSize: RFValue(14) }]}>Premium</Text></MyText>
                    
                        </View>

                    </TouchableOpacity>
                    ) : null }

                    <View style={{paddingHorizontal:15, paddingBottom:20}}>
                    <MyText style={[styles.subLabel, { fontSize: RFValue(11), color: '#808080', marginBottom: 10 }]}>Manage Account</MyText>
                    <View style={{ marginLeft: 10, marginBottom: 15 }}>
                        <TouchableOpacity 
                        onPress={() => props.navigation.navigate('EditProfile', {userID: '345'})}
                        style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'person-circle-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Edit Profile</MyText>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'notifications-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Notifications</MyText>
                            </View>

                        </TouchableOpacity>

                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <Icons
                                name={'shield-key-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Change Password</MyText>
                            </View>

                        </TouchableOpacity>


                    </View>



                    <MyText style={[styles.subLabel, { fontSize: RFValue(12), color: '#808080', marginBottom: 10 }]}>More</MyText>
                    <View style={{ marginLeft: 10, marginBottom: 15 }}>
                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'help-circle-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>FAQs</MyText>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'ios-lock-closed-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Privacy Policy</MyText>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'shield-checkmark-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Our Terms</MyText>
                            </View>

                        </TouchableOpacity>

                    </View>


                    <MyText style={[styles.subLabel, { fontSize: RFValue(12), color: '#808080', marginBottom: 10 }]}>Connect With Us</MyText>
                    <View style={{ marginLeft: 10, marginBottom: 15, }}>
                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'logo-instagram'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Instagram</MyText>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'logo-twitter'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Twitter</MyText>
                            </View>

                        </TouchableOpacity>


                        <TouchableOpacity style={[styles.Row, { marginBottom: 0 }]}>

                            <IconM
                                name={'heart-outline'}
                                size={RFValue(22)}
                                color={'#fff'}
                                style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                            <View style={{ paddingVertical: 10, }}>
                                <MyText style={[styles.titleLabel]}>Contact Us</MyText>
                            </View>

                        </TouchableOpacity>

                    </View>

                    <TouchableOpacity style={[styles.Row, { marginLeft: 10, marginBottom: Platform.OS === 'ios' ? 40 : 10 }]}>

                        <IconM
                            name={'power'}
                            size={RFValue(22)}
                            color={'#eb5545'}
                            style={{ alignSelf: 'center', marginTop: 0.5, marginRight: 10, }} />
                        <View style={{ paddingVertical: 10, }}>
                            <MyText style={[styles.titleLabel, { color: '#eb5545' }]}>Logout</MyText>
                        </View>

                    </TouchableOpacity>

                    </View>

                </View>

                </ScrollView>
            </SafeAreaView>
        </Modal>

    )
}

export default ProfileMenu;