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

    header: {
      height:'auto',
      marginBottom:10,
      paddingTop:20,
      paddingHorizontal:15,
    },

  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  img: {
  width: 59,
  height: 56,
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

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },
});

export default styles;
