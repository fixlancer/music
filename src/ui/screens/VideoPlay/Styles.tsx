import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: width,
    height: height,
    flex:1,
    },

  artwork: {
  width: (width - 100) / 1,
  height: (width - 120) / 1,
  borderRadius: 20,
  marginTop:10,
  justifyContent:'center',
  alignSelf:'center'
  },

  img: {
    width: 25,
    height: 25,
    borderRadius: 20,
    marginRight:10,
    marginTop:2,
    },

    bgOverlay: {
        backgroundColor: '#343434', borderRadius:40,paddingLeft: 2, height:RFValue(60), width:RFValue(60), justifyContent:'center', alignItems:'center'
      },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  midBg: {

    paddingTop: 0,position:'absolute', bottom: Platform.OS === 'ios' ? 50 : RFValue(60),
    paddingHorizontal: 0, width: '100%', justifyContent: 'flex-end',
    backgroundColor: 'transparent',height:height,
  },

  modalHeader: {
    justifyContent:'center', alignItems:'center',  width:'100%', height:'auto', paddingBottom:10, marginBottom:10
  },

  
  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:15, alignSelf:'center'
  },

  titleLabel: {
    fontSize: RFValue(16),
    textAlign:'left',
    color:'#fff',
    marginTop:5,
    marginBottom:10,
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Nunito'
  },
});

export default styles;
