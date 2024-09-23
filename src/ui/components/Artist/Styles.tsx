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

  artistImg2: {
    width: RFValue(60),
    height: RFValue(60),marginRight:10,
    marginVertical:10,
    borderRadius: 50
  },

  artistImg: {
    width: 78,
    height:78,marginRight:10,
    marginTop:10,
    borderRadius: 50
  },

});

export default styles;
