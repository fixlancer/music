import {StyleSheet, Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({

  img: {
  width: 159,
  height: 141,
  borderRadius: 20,
  marginRight:10,
  marginBottom:10,
  },

  img2: {
    width: (width - 50) / 2,
    height: 141,
    borderRadius: 20,
    marginRight:10,
    justifyContent: 'flex-start',
    marginBottom:10,
    },


  opacityBg: {
    position: 'absolute',
    width: 147,
    height: 'auto',
    paddingVertical:5,
    left: 5,
    bottom: 13,
    zIndex:99,
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 20,
  },

  titleLabel: {
    fontSize: RFValue(14),
    textAlign:'center',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'center',
    color:'#fff',
    paddingLeft:10,
  },
});

export default styles;
