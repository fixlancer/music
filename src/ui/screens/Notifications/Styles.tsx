import {StyleSheet, Dimensions, Platform} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#20252B',
    width: width,
    height: height,
    flex:1,
    },

    header: {
      height:'auto',
      marginBottom:10,
      paddingTop:20,
      paddingHorizontal:15,
    },

    midBg: {
      paddingBottom: Platform.OS === 'ios' ? 40 : 20, height:'100%', flex: 1, width:'100%',
   },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  img: {
  width: RFValue(59),
  height: RFValue(56),
  borderRadius: 20,
  marginRight:10,
  },

  cat: {
    backgroundColor: '#1B2025',
    borderRadius:30,
    marginTop:10,
    marginRight:10,
    paddingHorizontal:15,
    paddingVertical:5,
      },
    
      catLabel: {
        fontSize: RFValue(13),
        color:'#fff',
      },

  opacityBg: {
    position: 'absolute',
    width: 147,
    height: 'auto',
    paddingVertical:5,
    left: 5,
    bottom: 5,
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
  },

  titleLabel: {
    fontSize: RFValue(20),
    textAlign:'left',
    marginBottom:5,
    color:'#fff',
    fontFamily: 'Hestina',
  },

  titleLabel2: {
    fontSize: RFValue(17),
    textAlign:'left',
    marginTop:10,
    marginBottom:15,
    color:'#fff',
  },

  subLabel: {
    fontSize: RFValue(13),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  tinyLabel: {
    fontSize: RFValue(11),
    textAlign:'left',
    color:'#808080',
    paddingLeft:0,
  },
});

export default styles;
