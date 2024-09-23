import {StyleSheet, Dimensions} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
const {width, height} = Dimensions.get('screen');

const styles = StyleSheet.create({
  Row: {
    flexDirection:'row',
  },
  
  RowB: {
    flexDirection:'row',
    justifyContent:'space-between',
  }, 

  titleLabel: {
    fontSize: RFValue(14),
    textAlign:'left',
    color:'#fff',
    fontFamily: 'Hestina',
  },

  subLabel: {
    fontSize: RFValue(12),
    textAlign:'left',
    color:'#fff',
    paddingLeft:0,
  },

  midBg: {
    paddingTop: 0, flex: 1,
    paddingHorizontal: 15, width: '100%', height: '100%',
    backgroundColor: '#20252B',
  },

  modalLine: {
    height:4, width: 30, borderRadius: 8, backgroundColor: '#4F5255', marginTop:10, marginBottom:20, alignSelf:'center'
  },

  button: {
    backgroundColor: '#f27415',
    borderRadius:30,
    marginTop:10,
    marginRight:10,
    paddingHorizontal:20,
    paddingVertical:5,
      },
    
      buttonLabel: {
        fontSize: RFValue(12),
        color:'#fff',
      },
});

export default styles;
