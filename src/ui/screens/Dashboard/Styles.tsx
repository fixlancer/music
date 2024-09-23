import {StyleSheet, Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#20252B',
  width: width,
  height: height,
  flex:1,
  },
  
  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  imgChallenge: {
  width: 182,
  height: 224,
  borderWidth: StyleSheet.hairlineWidth,
  borderColor: '#191E23',
  borderRadius: 20,
  marginRight:10,
  shadowColor: 'rgba(0, 0, 0, 0.5)',
  },


  imgCountdown: {
    height: (width - 80) / 1,
    width: (width - 100) / 1,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#191E23',
    borderRadius: 20,
    marginRight:10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
    },

  imgVideo: {
    width: 182,
    height: 141,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#191E23',
    borderRadius: 20,
    marginRight:10,
    shadowColor: 'rgba(0, 0, 0, 0.5)',
  },
  opacityBg: {
    position: 'absolute',
    width: 171,
    height: 'auto',
    paddingVertical:10,
    left: 5,
    bottom: 5,
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
  },


  titleLabel: {
    fontSize: RFValue(15),
    textAlign:'left',
    paddingLeft:10,
    fontFamily: 'Hestina',
    color:'#fff'
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    paddingLeft:10,
    color:'#fff'
  },

  label: {
    fontSize:RFValue(13),
    textAlign:'left',
    color:'#C0B9B9',
    marginBottom:5
  },

  bgSaved: {
    width: 37,
    height: 37,
    marginTop: 9,justifyContent:'center',
    backgroundColor: 'transparent',
    borderRadius: 0,
    alignItems:'center',
  },

  cat: {
    backgroundColor: '#1B2025',
    borderRadius:30,
    marginTop:5,
    marginRight:7,
    width:'auto',
    paddingHorizontal:20,
    paddingVertical:10,
      },
    
      catLabel: {
        fontSize: RFValue(12),
        color:'#fff',
        textAlign:'center'
      },
  artistImg: {
    width: 78,
    height:78,marginRight:10,
    marginTop:10,
    borderRadius: 50
  },

  dot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#D5D6D9',
  },
  activeDot: {
    width: 8,
    height: 8,
    borderRadius: 100,
    backgroundColor: '#5377B1',
  },
  userHeading: {
    marginTop: 5,
    backgroundColor: '#D5D6D9',
    height:35,
    width:35,justifyContent:'center',
    textAlign: 'center',
    borderRadius: 6,
  },
  
  userHeading2: {
    color: '#fff',
    fontSize: 20,justifyContent:'center',
    textAlign: 'center',
    textTransform:'uppercase',
  },

  header: {
    width: width,
    height: 'auto',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  bgSlider: {
    marginVertical: 10,
    alignSelf:'center',
    width:'100%',
    justifyContent:'center',
    borderRadius: 10,
    elevation:0,
    overflow: 'hidden',
  },
  emptyCont: {
      height: 'auto',
      width:'100%',
      backgroundColor:'#fff',
      borderRadius:8,
      marginVertical:3,
      paddingHorizontal:9,
      paddingVertical:10,
      elevation:0,
  },
  cont: {
    height: 'auto',
    width:'100%',
    marginVertical:1.5,
    paddingHorizontal:6,
},

dropDown: {
  backgroundColor: '#fff',
  height: 'auto',
  width: '100%',
  paddingHorizontal: 0,
  marginBottom: 10,
  paddingVertical: 0,
  borderRadius: 10,
  borderColor: '#ddd',
  borderWidth: StyleSheet.hairlineWidth,
  alignSelf: 'center',
},
dropDownBtn: {
  width: '100%',
  height: 45, backgroundColor: 'transparent',
},
rowStyle: {
  backgroundColor: '#f9f9f9', borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#ddd', width: '100%'
},
btnText: {
  textAlign: 'left',
  fontSize: RFValue(13),
  color: '#343434',
  fontFamily: 'Nunito-Regular',
},
header2: {
  width: width,borderBottomWidth:StyleSheet.hairlineWidth,borderBottomColor:'#ddd',
  height: 'auto',flexDirection:'row', justifyContent:'space-between',
  paddingHorizontal: 20,paddingBottom:0,
  backgroundColor: '#fff',
},
roundClose: {
  backgroundColor:'#5f8692', width:25, height:24, marginTop:20, borderRadius:30,justifyContent:'center',alignItems:'center',
},

roundClose2: {
  backgroundColor:'#5f8692', width:30, height:30, borderRadius:30,justifyContent:'center',alignItems:'center',
},
});

export default styles;
