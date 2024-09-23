import { useToast } from 'native-base';
//import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import React, { useEffect, useState } from 'react';
import {
    Image,
    FlatList,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ScrollView,
    StyleSheet,
    StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconM from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './Styles';

const Premium = ({ route, navigation }) => {

    const premiumImg = require('../../../Assets/premiumBG.png');
    const [isLoading, setisLoading] = useState(false);
    const premiumAmount = 5000;

    const data = [
    {
        id: '1',
        title: 'Song',
        free: '1',
        premium: '20',
        icon: false,
    },

    {
        id: '2',
        title: 'Video',
        free: '0',
        premium: '5',
        icon: false,
    },
    {
        id: '3',
        title: 'Add songs to Discover, exposing your music talent',
        free: '',
        premium: '',
        icon: true,
    },
    {
        id: '4',
        title: 'Participate in challenges to win cash prizes',
        free: '',
        premium: '',
        icon: true,
    },
    {
        id: '5',
        title: 'Get Featured on Countdown',
        free: '',
        premium: '',
        icon: true,
    },
    {
        id: '6',
        title: 'Contact details visible on profile',
        free: '',
        premium: '',
        icon: true,
    },
    ]

    const renderItem = ({item, index}) => {
        return (
                            
            <View style={{ marginTop: 20 }}>
            <View style={[styles.RowB, {paddingBottom:10,}]}>
                <View style={{width:'60%'}}>
                <MyText style={styles.subLabel}>{item.title}</MyText>
                </View>

                {item.icon === true ? (
                <View style={styles.RowB}>
                <View style={{marginRight:20, width:50, alignItems:'center'}}>
                <IconM
                            name={'ios-close'}
                            size={RFValue(20)}
                            color={'#808080'}
                            style={{ alignSelf:'center' }} />
                    </View>
                    
                    <View style={{width:RFValue(55), alignItems:'center'}}>
                    <IconM
                            name={'checkmark'}
                            size={RFValue(20)}
                            color={'#1cc88a'}
                            style={{ alignSelf:'center' }} />
                    </View>
                </View>
                ) : (
                <View style={styles.RowB}>
                <View style={{marginRight:20, width:RFValue(55), alignItems:'center'}}>
                    <MyText style={styles.subLabel}>{item.free}</MyText>
                    </View>
                    
                    <View style={{width:RFValue(55), alignItems:'center'}}>
                    <MyText style={styles.subLabel}>{item.premium}</MyText>
                    </View>
                </View>
                )}
        </View>
    </View>
        )
    }


    const seperator = () => {
        return (
            <View style={{height: StyleSheet.hairlineWidth, width:'100%', backgroundColor:'#ddd'}}></View>
        )
    }

    return (

        <View style={styles.container}>

            <Image
                source={premiumImg}
                style={styles.premiumBG}
            />
            <SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />


                <View style={styles.header}>
                    <MyText></MyText>
                    <MyText></MyText>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <IconM
                            name={'close-circle'}
                            size={RFValue(26)}
                            color={'#808080'}
                            style={{ alignSelf: 'center', paddingRight:5 }} />
                    </TouchableOpacity>

                </View>
                <View style={styles.midBg}>
                    <MyText style={[styles.titleLabel, { textAlign: 'center' }]}>Upgrade to <Text style={[styles.titleLabel, { color: '#f27415', fontSize: RFValue(18) }]}>Premium</Text></MyText>
                    <MyText style={[styles.tinyLabel, { textAlign: 'center', marginTop: 10, }]}>Give your talent the attention it deserves {"\n"}
                        Go <Text style={[styles.tinyLabel, { color: '#343434', fontFamily: 'Hestina', fontSize: RFValue(13) }]}>Premium</Text> now</MyText>

                    <View style={{ marginTop: 20 }}>
                        <MyText style={styles.subLabel}>Billing</MyText>

                        <View style={[styles.RowB, styles.billingBG]}>
                            <View style={styles.Row}>
                            <Icon
                            name={'adjust'}
                            size={RFValue(20)}
                            color={'#f27415'}
                            style={{ marginRight:10 }} />
                            <MyText style={styles.subLabel}>Annually</MyText>
                            </View>

                            <View style={styles.Row}>
                                <MyText style={styles.subLabel}>NGN {premiumAmount}</MyText>
                            </View>
                    </View>
                </View>

                <View style={{ marginTop: 30 }}>
                        <View style={[styles.RowB, {}]}>
                            <View>
                            <MyText style={[styles.subLabel, {}]}>Benefits</MyText>
                            </View>

                            <View style={styles.RowB}>
                            <View style={{marginRight:20, width:RFValue(55), alignItems:'center'}}>
                                <MyText style={[styles.subLabel, {}]}>Free</MyText>
                                </View>
                                
                                <View style={{width:RFValue(55), alignItems:'center'}}>
                                <Text style={[styles.subLabel, {fontFamily: 'Hestina'}]}>Premium</Text>
                                </View>
                            </View>
                    </View>
                </View>

                <FlatList
                data={data}
                style={{paddingBottom:10}}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={seperator}

                />


            <TouchableOpacity 
            onPress={() => navigation.navigate('Payment')}
                style={styles.button}>
                    <MyText style={styles.buttonLabel}>Upgrade</MyText>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.goBack(null)}>
                <MyText style={[styles.subLabel, {marginTop:15, textAlign:'center'}]}>No, i don't want to upgrade</MyText>
                </TouchableOpacity>
                </View>

            </SafeAreaView>

        </View>

    )
}

export default Premium;