import React, { useState } from 'react';
import {
    View,
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    Platform,
    StatusBar,
    ScrollView,
    FlatList,
    Text,
} from 'react-native';
import Modal from 'react-native-modalbox';
import Icon from 'react-native-vector-icons/MaterialIcons';
import MyText from '../../components/DefaultTextComponent/MyText';
import { RFValue } from 'react-native-responsive-fontsize';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width, height } = Dimensions.get('screen');

interface Props {
    isOpen: boolean;
    handleChange: () => void;
    cat: any;

}

const CatValue: React.FC<Props> = props => {

const { cat } = props;

const data = [
  {
    id: '1',
    title: 'Afrobeat'
  },

  {
    id: '2',
    title: 'RnB'
  },
  {
    id: '3',
    title: 'Hip-Hop'
  },

  {
    id: '4',
    title: 'Highlife'
  },
  {
    id: '5',
    title: 'Reggae/Dancehall'
  },

  {
    id: '6',
    title: 'Pop'
  },
  {
    id: '7',
    title: 'Rock'
  },
  {
    id: '8',
    title: 'Amapiano'
  },

  {
    id: '9',
    title: 'Rap'
  },

  {
    id: '10',
    title: 'Freestyles'
  },
];

const renderCat = ({item, index}) => {

    return (
        <View key={index} style={{borderBottomWidth:StyleSheet.hairlineWidth, borderBottomColor:'#343434',}}>
        <TouchableOpacity 
        style={{width:'100%', height:'auto', paddingVertical:15, paddingHorizontal:20,}}
        onPress={() => {
            cat(item.title);
            props.handleChange();
        }}>
            <View style={styles.RowB}>
            <MyText style={styles.subLabel}>{item.title}</MyText>
            <Icon
          name={'arrow-forward-ios'}
          size={RFValue(10)}
          color={'#f27415'}
          style={{marginTop:3}}></Icon>
          </View>
       </TouchableOpacity>
       </View>
    )
}

    return (
        <Modal isOpen={props.isOpen}
        style={{backgroundColor:'#20252B', height:'90%'}}
        coverScreen={false}
        swipeArea={400}
        onClosed={props.handleChange}
      backdropOpacity={0.8}
      backdropColor="#000"
        keyboardTopOffset={Platform.OS == 'ios' ? 22 : 0}
        position="bottom">

<SafeAreaView
                style={{
                    // height: height + StatusBar.currentHeight,
                    // width: width,
                    flex: 1,
                    backgroundColor: 'transparent',
                }}
                edges={['left', 'right', 'top']}>
                    
                <StatusBar translucent barStyle="light-content" backgroundColor="transparent" />

<View style={styles.modalHeader}>
<View style={styles.modalLine} />
             
<Text style={[styles.titleLabel, {textAlign:'center'}]}>Select Category</Text>

</View>


<View style={styles.midBg}>

  <FlatList
  data={data}
  style={{ paddingBottom: 30, marginTop: 2,paddingHorizontal: 0, }}
  renderItem={renderCat}
  keyExtractor={item => item.id}

/>

</View>


</SafeAreaView>
        </Modal>
    );
};

const styles = StyleSheet.create({
  modalHeader: {
    justifyContent:'center', alignItems:'center', marginTop:-15,  width:'100%', height:'auto', backgroundColor:'#20252B', paddingBottom:10, marginBottom:10
  },
  
  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:20, alignSelf:'center'
  },
  midBg: {
    paddingTop: 0, flex: 1, width: '100%', height: '100%',
    backgroundColor: '#20252B',paddingBottom: Platform.OS === 'ios' ? 40 : 20,
  },
  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(13),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

})
export default CatValue;
